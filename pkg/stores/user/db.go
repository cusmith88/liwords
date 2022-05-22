package user

import (
	"context"
	"errors"
	"strings"
	"time"

	"github.com/jackc/pgx/v4"
	"github.com/jackc/pgx/v4/pgxpool"
	"github.com/jinzhu/gorm"
	"github.com/jinzhu/gorm/dialects/postgres"
	"github.com/lithammer/shortuuid"
	"github.com/rs/zerolog/log"

	"github.com/domino14/liwords/pkg/entity"
	"github.com/domino14/liwords/pkg/stores/common"

	cpb "github.com/domino14/liwords/rpc/api/proto/config_service"
	pb "github.com/domino14/liwords/rpc/api/proto/user_service"
	macondopb "github.com/domino14/macondo/gen/api/proto/macondo"
)

var botNames = map[macondopb.BotRequest_BotCode]string{
	macondopb.BotRequest_HASTY_BOT: "HastyBot",
	// These are temporary names!
	macondopb.BotRequest_LEVEL1_PROBABILISTIC: "BeginnerBot",
	macondopb.BotRequest_LEVEL2_PROBABILISTIC: "BasicBot",
	macondopb.BotRequest_LEVEL3_PROBABILISTIC: "BetterBot",
	macondopb.BotRequest_LEVEL4_PROBABILISTIC: "STEEBot",

	// For english. Reuse level1-3 names from above.
	macondopb.BotRequest_LEVEL1_CEL_BOT: "BeginnerBot",
	macondopb.BotRequest_LEVEL2_CEL_BOT: "BasicBot",
	macondopb.BotRequest_LEVEL4_CEL_BOT: "BetterBot",
}

// DBStore is a postgres-backed store for users.
type DBStore struct {
	dbPool *pgxpool.Pool
}

// User should be a minimal object. All information such as user profile,
// awards, ratings, records, etc should be in a profile object that
// joins 1-1 with this User object.
// User is exported as a Game has Foreign Keys to it.
type User struct {
	gorm.Model

	UUID     string `gorm:"type:varchar(24);index"`
	Username string `gorm:"type:varchar(32)"`
	Email    string `gorm:"type:varchar(100)"`
	// Password will be hashed.
	Password    string `gorm:"type:varchar(128)"`
	InternalBot bool   `gorm:"default:false;index"`
	IsAdmin     bool   `gorm:"default:false;index"`
	IsDirector  bool   `gorm:"default:false"`
	IsMod       bool   `gorm:"default:false;index"`
	ApiKey      string

	Notoriety int
	Actions   postgres.Jsonb
}

func NewDBStore(p *pgxpool.Pool) (*DBStore, error) {
	return &DBStore{dbPool: p}, nil
}

func (s *DBStore) Disconnect() {
	s.dbPool.Close()
}

// Get gets a user by username.
func (s *DBStore) Get(ctx context.Context, username string) (*entity.User, error) {
	tx, err := s.dbPool.BeginTx(ctx, common.DefaultTxOptions)
	if err != nil {
		return nil, err
	}
	defer tx.Rollback(ctx)

	entu, err := common.GetUserBy(ctx, tx, &common.CommonDBConfig{TableType: common.UsersTable, SelectByType: common.SelectByUsername, Value: username, IncludeProfile: true})
	if err != nil {
		return nil, err
	}

	if err := tx.Commit(ctx); err != nil {
		return nil, err
	}

	return entu, nil
}

func (s *DBStore) SetNotoriety(ctx context.Context, uuid string, notoriety int) error {
	tx, err := s.dbPool.BeginTx(ctx, common.DefaultTxOptions)
	if err != nil {
		return err
	}
	defer tx.Rollback(ctx)

	err = common.Update(ctx, tx, []string{"notoriety"}, []interface{}{notoriety}, &common.CommonDBConfig{TableType: common.UsersTable, SelectByType: common.SelectByUUID, Value: uuid})
	if err != nil {
		return err
	}

	if err := tx.Commit(ctx); err != nil {
		return err
	}

	return nil
}

func (s *DBStore) SetPermissions(ctx context.Context, req *cpb.PermissionsRequest) error {
	columns := []string{}
	values := []bool{}
	if req.Bot != nil {
		columns = append(columns, "internal_bot")
		values = append(values, req.Bot.Value)
	}
	if req.Admin != nil {
		columns = append(columns, "is_admin")
		values = append(values, req.Admin.Value)
	}
	if req.Director != nil {
		columns = append(columns, "is_director")
		values = append(values, req.Director.Value)
	}
	if req.Mod != nil {
		columns = append(columns, "is_mod")
		values = append(values, req.Mod.Value)
	}

	tx, err := s.dbPool.BeginTx(ctx, common.DefaultTxOptions)
	if err != nil {
		return err
	}
	defer tx.Rollback(ctx)

	err = common.Update(ctx, tx, columns, values, &common.CommonDBConfig{TableType: common.UsersTable, SelectByType: common.SelectByUsername, Value: strings.ToLower(req.Username)})
	if err != nil {
		return err
	}

	if err := tx.Commit(ctx); err != nil {
		return err
	}

	return nil
}

// GetByEmail gets the user by email. It does not try to get the profile.
// We don't get the profile here because GetByEmail is only used for things
// like password resets and there is no need.
func (s *DBStore) GetByEmail(ctx context.Context, email string) (*entity.User, error) {
	tx, err := s.dbPool.BeginTx(ctx, common.DefaultTxOptions)
	if err != nil {
		return nil, err
	}
	defer tx.Rollback(ctx)

	entu, err := common.GetUserBy(ctx, tx, &common.CommonDBConfig{TableType: common.UsersTable, SelectByType: common.SelectByEmail, Value: strings.ToLower(email)})
	if err != nil {
		return nil, err
	}

	if err := tx.Commit(ctx); err != nil {
		return nil, err
	}

	return entu, nil
}

// GetByUUID gets user by UUID
func (s *DBStore) GetByUUID(ctx context.Context, uuid string) (*entity.User, error) {
	tx, err := s.dbPool.BeginTx(ctx, common.DefaultTxOptions)
	if err != nil {
		return nil, err
	}
	defer tx.Rollback(ctx)

	entu, err := common.GetUserBy(ctx, tx, &common.CommonDBConfig{TableType: common.UsersTable, SelectByType: common.SelectByUUID, Value: uuid, IncludeProfile: true})
	if err != nil {
		return nil, err
	}

	if err := tx.Commit(ctx); err != nil {
		return nil, err
	}

	return entu, nil
}

// GetByAPIKey gets a user by api key. It does not try to fetch the profile. We only
// call this for API functions where we care about access levels, etc.
func (s *DBStore) GetByAPIKey(ctx context.Context, apikey string) (*entity.User, error) {
	if apikey == "" {
		return nil, errors.New("api-key is blank")
	}
	tx, err := s.dbPool.BeginTx(ctx, common.DefaultTxOptions)
	if err != nil {
		return nil, err
	}
	defer tx.Rollback(ctx)

	entu, err := common.GetUserBy(ctx, tx, &common.CommonDBConfig{TableType: common.UsersTable, SelectByType: common.SelectByAPIKey, Value: apikey})
	if err != nil {
		return nil, err
	}

	if err := tx.Commit(ctx); err != nil {
		return nil, err
	}

	return entu, nil
}

// New creates a new user in the DB.
func (s *DBStore) New(ctx context.Context, u *entity.User) error {
	tx, err := s.dbPool.BeginTx(ctx, common.DefaultTxOptions)
	if err != nil {
		return err
	}
	defer tx.Rollback(ctx)

	if u.UUID == "" {
		u.UUID = shortuuid.New()
	}

	var userId uint
	err = tx.QueryRow(ctx, `INSERT INTO users (username, uuid, email, password, internal_bot, is_admin, is_director, is_mod, notoriety, actions, created_at, updated_at) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, NOW(), NOW()) RETURNING id`,
		u.Username, u.UUID, u.Email, u.Password, u.IsBot, u.IsAdmin, u.IsDirector, u.IsMod, u.Notoriety, u.Actions).Scan(&userId)
	if err != nil {
		return err
	}

	prof := u.Profile
	if prof == nil {
		prof = &entity.Profile{}
	}

	_, err = tx.Exec(ctx, `INSERT INTO profiles (user_id, first_name, last_name, country_code, title, about, ratings, stats, avatar_url, birth_date, created_at, updated_at) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, NOW(), NOW())`,
		userId, prof.FirstName, prof.LastName, prof.CountryCode, prof.Title, prof.About, entity.Ratings{}, entity.ProfileStats{}, prof.AvatarUrl, prof.BirthDate)
	if err != nil {
		return err
	}

	if err := tx.Commit(ctx); err != nil {
		return err
	}

	return nil
}

// SetPassword sets the password for the user. The password is already hashed.
func (s *DBStore) SetPassword(ctx context.Context, uuid string, hashpass string) error {
	tx, err := s.dbPool.BeginTx(ctx, common.DefaultTxOptions)
	if err != nil {
		return err
	}
	defer tx.Rollback(ctx)

	err = common.Update(ctx, tx, []string{"password"}, []string{hashpass}, &common.CommonDBConfig{TableType: common.UsersTable, SelectByType: common.SelectByUUID, Value: uuid})
	if err != nil {
		return err
	}

	if err := tx.Commit(ctx); err != nil {
		return err
	}

	return nil
}

// SetAvatarUrl sets the avatar_url (profile field) for the user.
func (s *DBStore) SetAvatarUrl(ctx context.Context, uuid string, avatarUrl string) error {
	tx, err := s.dbPool.BeginTx(ctx, common.DefaultTxOptions)
	if err != nil {
		return err
	}
	defer tx.Rollback(ctx)

	id, err := common.GetUserDBIDFromUUID(ctx, tx, uuid)
	if err != nil {
		return err
	}

	err = common.Update(ctx, tx, []string{"avatar_url"}, []string{avatarUrl}, &common.CommonDBConfig{TableType: common.ProfilesTable, SelectByType: common.SelectByID, Value: id})
	if err != nil {
		return err
	}

	if err := tx.Commit(ctx); err != nil {
		return err
	}

	return nil
}

func (s *DBStore) GetBriefProfiles(ctx context.Context, uuids []string) (map[string]*pb.BriefProfile, error) {
	tx, err := s.dbPool.BeginTx(ctx, common.DefaultTxOptions)
	if err != nil {
		return nil, err
	}
	defer tx.Rollback(ctx)

	rows, err := tx.Query(ctx,
		`SELECT uuid, username, internal_bot, country_code, avatar_url, first_name, last_name, birth_date
		FROM LEFT JOIN profiles ON users.id = profiles.user_id
		WHERE uuid IN ($1)`, uuids)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	response := make(map[string]*pb.BriefProfile)
	now := time.Now()

	for rows.Next() {
		var UUID string
		var username string
		var internalBot bool
		var countryCode string
		var avatarUrl string
		var firstName string
		var lastName string
		var birthDate string
		if err := rows.Scan(&UUID, &username, &internalBot, &countryCode, &avatarUrl, &firstName, &lastName, &birthDate); err != nil {
			return nil, err
		}

		if avatarUrl == "" && internalBot {
			// see entity/user.go
			avatarUrl = "https://woogles-prod-assets.s3.amazonaws.com/macondog.png"
		}
		subjectIsAdult := entity.IsAdult(birthDate, now)
		censoredAvatarUrl := ""
		censoredFullName := ""
		if subjectIsAdult {
			censoredAvatarUrl = avatarUrl
			// see entity/user.go RealName()
			if firstName != "" {
				if lastName != "" {
					censoredFullName = firstName + " " + lastName
				} else {
					censoredFullName = firstName
				}
			} else {
				censoredFullName = lastName
			}
		}
		response[UUID] = &pb.BriefProfile{
			Username:    username,
			CountryCode: countryCode,
			AvatarUrl:   censoredAvatarUrl,
			FullName:    censoredFullName,
		}
	}

	if err := tx.Commit(ctx); err != nil {
		return nil, err
	}

	return response, nil
}

func (s *DBStore) SetPersonalInfo(ctx context.Context, uuid string, email string, firstName string, lastName string, birthDate string, countryCode string, about string) error {
	tx, err := s.dbPool.BeginTx(ctx, common.DefaultTxOptions)
	if err != nil {
		return err
	}
	defer tx.Rollback(ctx)

	err = common.Update(ctx, tx, []string{"email", "first_name", "last_name", "birth_date", "country_code", "about"}, []string{email, firstName, lastName, birthDate, countryCode, about}, &common.CommonDBConfig{TableType: common.ProfilesTable, SelectByType: common.SelectByUUID, Value: uuid})
	if err != nil {
		return err
	}

	if err := tx.Commit(ctx); err != nil {
		return err
	}

	return nil
}

// SetRatings set the specific ratings for the given variant in a transaction.
func (s *DBStore) SetRatings(ctx context.Context, p0uuid string, p1uuid string, variant entity.VariantKey,
	p0Rating *entity.SingleRating, p1Rating *entity.SingleRating) error {
	tx, err := s.dbPool.BeginTx(ctx, common.DefaultTxOptions)
	if err != nil {
		return err
	}
	defer tx.Rollback(ctx)

	p0id, err := common.GetUserDBIDFromUUID(ctx, tx, p0uuid)
	if err != nil {
		return err
	}

	p1id, err := common.GetUserDBIDFromUUID(ctx, tx, p1uuid)
	if err != nil {
		return err
	}

	err = common.UpdateUserRating(ctx, tx, p0id, variant, p0Rating)
	if err != nil {
		return err
	}

	err = common.UpdateUserRating(ctx, tx, p1id, variant, p1Rating)
	if err != nil {
		return err
	}

	if err := tx.Commit(ctx); err != nil {
		return err
	}

	return nil
}

func (s *DBStore) SetStats(ctx context.Context, p0uuid string, p1uuid string, variant entity.VariantKey,
	p0Stats *entity.Stats, p1Stats *entity.Stats) error {
	tx, err := s.dbPool.BeginTx(ctx, common.DefaultTxOptions)
	if err != nil {
		return err
	}
	defer tx.Rollback(ctx)

	p0id, err := common.GetUserDBIDFromUUID(ctx, tx, p0uuid)
	if err != nil {
		return err
	}

	p1id, err := common.GetUserDBIDFromUUID(ctx, tx, p1uuid)
	if err != nil {
		return err
	}

	err = common.UpdateUserStats(ctx, tx, p0id, variant, p0Stats)
	if err != nil {
		return err
	}

	err = common.UpdateUserStats(ctx, tx, p1id, variant, p1Stats)
	if err != nil {
		return err
	}

	if err := tx.Commit(ctx); err != nil {
		return err
	}

	return nil
}

func (s *DBStore) GetBot(ctx context.Context, botType macondopb.BotRequest_BotCode) (*entity.User, error) {
	tx, err := s.dbPool.BeginTx(ctx, common.DefaultTxOptions)
	if err != nil {
		return nil, err
	}
	defer tx.Rollback(ctx)

	username := botNames[botType]

	var botUsername string
	err = tx.QueryRow(ctx, `SELECT username FROM users WHERE internal_bot IS TRUE AND username = $1`, username).Scan(&botUsername)
	if err == pgx.ErrNoRows {
		// Just pick any random bot. This should not be done on prod.
		log.Warn().Msg("picking-random-bot")
		err = tx.QueryRow(ctx, `SELECT username FROM users WHERE internal_bot IS TRUE ORDER BY RANDOM`).Scan(&botUsername)
		if err == pgx.ErrNoRows {
			return nil, errors.New("no bots found")
		}
	}

	entu, err := common.GetUserBy(ctx, tx, &common.CommonDBConfig{TableType: common.UsersTable, SelectByType: common.SelectByUsername, Value: strings.ToLower(botUsername), IncludeProfile: true})
	if err != nil {
		return nil, err
	}

	if err := tx.Commit(ctx); err != nil {
		return nil, err
	}

	return entu, nil
}

// AddFollower creates a follower -> target follow.
func (s *DBStore) AddFollower(ctx context.Context, targetUser, follower uint) error {
	tx, err := s.dbPool.BeginTx(ctx, common.DefaultTxOptions)
	if err != nil {
		return err
	}
	defer tx.Rollback(ctx)

	_, err = tx.Exec(ctx, `INSERT INTO followings (user_id, follower_id) VALUES ($1, $2)`, targetUser, follower)
	if err != nil {
		return err
	}
	if err := tx.Commit(ctx); err != nil {
		return err
	}

	return nil
}

// RemoveFollower removes a follower -> target follow.
func (s *DBStore) RemoveFollower(ctx context.Context, targetUser, follower uint) error {
	tx, err := s.dbPool.BeginTx(ctx, common.DefaultTxOptions)
	if err != nil {
		return err
	}
	defer tx.Rollback(ctx)

	_, err = tx.Exec(ctx, `DELETE FROM followings WHERE user_id = $1 AND follower_id = $2`, targetUser, follower)
	if err != nil {
		return err
	}
	if err := tx.Commit(ctx); err != nil {
		return err
	}

	return nil
}

// GetFollows gets all the users that the passed-in user DB ID is following.
func (s *DBStore) GetFollows(ctx context.Context, uid uint) ([]*entity.User, error) {
	tx, err := s.dbPool.BeginTx(ctx, common.DefaultTxOptions)
	if err != nil {
		return nil, err
	}
	defer tx.Rollback(ctx)

	rows, err := tx.Query(ctx, `SELECT u0.uuid, u0.username FROM JOIN followings, users AS u0 ON u0.id = user_id WHERE follower_id = $1`, uid)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var UUID string
	var username string
	entUsers := []*entity.User{}
	for rows.Next() {
		if err := rows.Scan(&UUID, &username); err != nil {
			return nil, err
		}
		entUsers = append(entUsers, &entity.User{UUID: UUID, Username: username})
	}
	return entUsers, nil
}

// GetFollowedBy gets all the users that are following the passed-in user DB ID.
func (s *DBStore) GetFollowedBy(ctx context.Context, uid uint) ([]*entity.User, error) {
	tx, err := s.dbPool.BeginTx(ctx, common.DefaultTxOptions)
	if err != nil {
		return nil, err
	}
	defer tx.Rollback(ctx)

	rows, err := tx.Query(ctx, `SELECT u0.uuid, u0.username FROM JOIN followings, users AS u0 ON u0.id = follower_id WHERE user_id = $1`, uid)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var UUID string
	var username string
	entUsers := []*entity.User{}
	for rows.Next() {
		if err := rows.Scan(&UUID, &username); err != nil {
			return nil, err
		}
		entUsers = append(entUsers, &entity.User{UUID: UUID, Username: username})
	}
	return entUsers, nil
}

func (s *DBStore) AddBlock(ctx context.Context, targetUser, blocker uint) error {
	tx, err := s.dbPool.BeginTx(ctx, common.DefaultTxOptions)
	if err != nil {
		return err
	}
	defer tx.Rollback(ctx)

	_, err = tx.Exec(ctx, `INSERT INTO blockings (user_id, blocker_id) VALUES ($1, $2)`, targetUser, blocker)
	if err != nil {
		return err
	}
	if err := tx.Commit(ctx); err != nil {
		return err
	}

	return nil
}

func (s *DBStore) RemoveBlock(ctx context.Context, targetUser, blocker uint) error {
	tx, err := s.dbPool.BeginTx(ctx, common.DefaultTxOptions)
	if err != nil {
		return err
	}
	defer tx.Rollback(ctx)

	_, err = tx.Exec(ctx, `DELETE FROM blockings WHERE user_id = $1 AND blocker_id = $2`, targetUser, blocker)
	if err != nil {
		return err
	}
	if err := tx.Commit(ctx); err != nil {
		return err
	}

	return nil
}

// GetBlocks gets all the users that the passed-in user DB ID is blocking.
func (s *DBStore) GetBlocks(ctx context.Context, uid uint) ([]*entity.User, error) {
	tx, err := s.dbPool.BeginTx(ctx, common.DefaultTxOptions)
	if err != nil {
		return nil, err
	}
	defer tx.Rollback(ctx)

	rows, err := tx.Query(ctx, `SELECT u0.uuid, u0.username FROM JOIN blockings, users AS u0 ON u0.id = user_id WHERE blocker_id = $1`, uid)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var UUID string
	var username string
	entUsers := []*entity.User{}
	for rows.Next() {
		if err := rows.Scan(&UUID, &username); err != nil {
			return nil, err
		}
		entUsers = append(entUsers, &entity.User{UUID: UUID, Username: username})
	}
	return entUsers, nil
}

// GetBlockedBy gets all the users that are blocking the passed-in user DB ID.
func (s *DBStore) GetBlockedBy(ctx context.Context, uid uint) ([]*entity.User, error) {
	tx, err := s.dbPool.BeginTx(ctx, common.DefaultTxOptions)
	if err != nil {
		return nil, err
	}
	defer tx.Rollback(ctx)

	rows, err := tx.Query(ctx, `SELECT u0.uuid, u0.username FROM JOIN blockings, users AS u0 ON u0.id = blocker_id WHERE user_id = $1`, uid)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var UUID string
	var username string
	entUsers := []*entity.User{}
	for rows.Next() {
		if err := rows.Scan(&UUID, &username); err != nil {
			return nil, err
		}
		entUsers = append(entUsers, &entity.User{UUID: UUID, Username: username})
	}
	return entUsers, nil
}

// GetFullBlocks gets users uid is blocking AND users blocking uid
func (s *DBStore) GetFullBlocks(ctx context.Context, uid uint) ([]*entity.User, error) {
	// There's probably a way to do this with one db query but eh.
	players := map[string]*entity.User{}

	blocks, err := s.GetBlocks(ctx, uid)
	if err != nil {
		return nil, err
	}
	blockedby, err := s.GetBlockedBy(ctx, uid)
	if err != nil {
		return nil, err
	}

	for _, u := range blocks {
		players[u.UUID] = u
	}
	for _, u := range blockedby {
		players[u.UUID] = u
	}

	plist := make([]*entity.User, len(players))
	idx := 0
	for _, v := range players {
		plist[idx] = v
		idx++
	}
	return plist, nil
}

func (s *DBStore) UsersByPrefix(ctx context.Context, prefix string) ([]*pb.BasicUser, error) {
	tx, err := s.dbPool.BeginTx(ctx, common.DefaultTxOptions)
	if err != nil {
		return nil, err
	}
	defer tx.Rollback(ctx)

	// XXX: Fix this once user actions are migrated to the db
	rows, err := tx.Query(ctx, `SELECT username, uuid FROM users WHERE "substr(lower(username), 1, length($1)) = $1 AND internal_bot IS FALSE AND (actions IS NULL OR actions->'Current' IS NULL OR actions->'Current'->'SUSPEND_ACCOUNT' IS NULL OR actions->'Current'->'SUSPEND_ACCOUNT'->'end_time' IS NOT NULL)"`, strings.ToLower(prefix))
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var UUID string
	var username string
	users := []*pb.BasicUser{}
	for rows.Next() {
		if err := rows.Scan(&UUID, &username); err != nil {
			return nil, err
		}
		users = append(users, &pb.BasicUser{Uuid: UUID, Username: username})
	}
	return users, nil
}

// List all user IDs.
func (s *DBStore) ListAllIDs(ctx context.Context) ([]string, error) {
	tx, err := s.dbPool.BeginTx(ctx, common.DefaultTxOptions)
	if err != nil {
		return nil, err
	}
	defer tx.Rollback(ctx)

	rows, err := tx.Query(ctx, `SELECT uuid FROM users`)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	users := []string{}
	var UUID string
	for rows.Next() {
		if err := rows.Scan(&UUID); err != nil {
			return nil, err
		}
		users = append(users, UUID)
	}
	return users, nil
}

func (s *DBStore) ResetStats(ctx context.Context, uid string) error {
	tx, err := s.dbPool.BeginTx(ctx, common.DefaultTxOptions)
	if err != nil {
		return err
	}
	defer tx.Rollback(ctx)

	err = common.Update(ctx, tx, []string{"stats"}, []interface{}{&entity.Stats{}}, &common.CommonDBConfig{TableType: common.ProfilesTable, SelectByType: common.SelectByID, Value: uid})
	if err != nil {
		return err
	}

	if err := tx.Commit(ctx); err != nil {
		return err
	}

	return nil
}

func (s *DBStore) ResetRatings(ctx context.Context, uid string) error {
	tx, err := s.dbPool.BeginTx(ctx, common.DefaultTxOptions)
	if err != nil {
		return err
	}
	defer tx.Rollback(ctx)

	err = common.Update(ctx, tx, []string{"ratings"}, []interface{}{&entity.Ratings{}}, &common.CommonDBConfig{TableType: common.ProfilesTable, SelectByType: common.SelectByID, Value: uid})
	if err != nil {
		return err
	}

	if err := tx.Commit(ctx); err != nil {
		return err
	}

	return nil
}

func (s *DBStore) ResetStatsAndRatings(ctx context.Context, uid string) error {
	tx, err := s.dbPool.BeginTx(ctx, common.DefaultTxOptions)
	if err != nil {
		return err
	}
	defer tx.Rollback(ctx)

	err = common.Update(ctx, tx, []string{"stats", "ratings"}, []interface{}{&entity.Stats{}, &entity.Ratings{}}, &common.CommonDBConfig{TableType: common.ProfilesTable, SelectByType: common.SelectByUUID, Value: uid})
	if err != nil {
		return err
	}

	if err := tx.Commit(ctx); err != nil {
		return err
	}

	return nil
}

func (s *DBStore) ResetPersonalInfo(ctx context.Context, uuid string) error {
	tx, err := s.dbPool.BeginTx(ctx, common.DefaultTxOptions)
	if err != nil {
		return err
	}
	defer tx.Rollback(ctx)

	err = common.Update(ctx, tx, []string{"first_name", "last_name", "about", "title", "avatar_url", "country_code"}, []string{"", "", "", "", "", ""}, &common.CommonDBConfig{TableType: common.ProfilesTable, SelectByType: common.SelectByUUID, Value: uuid})
	if err != nil {
		return err
	}

	if err := tx.Commit(ctx); err != nil {
		return err
	}

	return nil
}

func (s *DBStore) ResetProfile(ctx context.Context, uid string) error {
	err := s.ResetStatsAndRatings(ctx, uid)
	if err != nil {
		return err
	}
	return s.ResetPersonalInfo(ctx, uid)
}

func (s *DBStore) Count(ctx context.Context) (int64, error) {
	tx, err := s.dbPool.BeginTx(ctx, common.DefaultTxOptions)
	if err != nil {
		return 0, err
	}
	defer tx.Rollback(ctx)

	var count int64
	err = tx.QueryRow(ctx, `SELECT COUNT(*) FROM users`).Scan(&count)
	if err != nil {
		return 0, err
	}

	if err := tx.Commit(ctx); err != nil {
		return 0, err
	}

	return count, nil
}

func (s *DBStore) CachedCount(ctx context.Context) int {
	return 0
}

func (s *DBStore) GetModList(ctx context.Context) (*pb.GetModListResponse, error) {
	tx, err := s.dbPool.BeginTx(ctx, common.DefaultTxOptions)
	if err != nil {
		return nil, err
	}
	defer tx.Rollback(ctx)

	rows, err := tx.Query(ctx, `SELECT uuid, is_admin, is_mod FROM users WHERE is_admin IS TRUE OR is_mod IS TRUE`)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var adminUserIds []string
	var modUserIds []string
	var uuid string
	var isAdmin bool
	var isMod bool
	for rows.Next() {
		if err := rows.Scan(&uuid, isAdmin, isMod); err != nil {
			return nil, err
		}
		if isAdmin {
			adminUserIds = append(adminUserIds, uuid)
		}
		if isMod {
			modUserIds = append(modUserIds, uuid)
		}
	}

	if err := tx.Commit(ctx); err != nil {
		return nil, err
	}

	return &pb.GetModListResponse{
		AdminUserIds: adminUserIds,
		ModUserIds:   modUserIds,
	}, nil
}

func (s *DBStore) Username(ctx context.Context, uuid string) (string, error) {
	tx, err := s.dbPool.BeginTx(ctx, common.DefaultTxOptions)
	if err != nil {
		return "", err
	}
	defer tx.Rollback(ctx)

	var username string
	err = tx.QueryRow(ctx, "SELECT username FROM users WHERE uuid = $1", uuid).Scan(&username)
	if err != nil {
		return "", err
	}

	if err := tx.Commit(ctx); err != nil {
		return "", err
	}

	return username, nil
}
