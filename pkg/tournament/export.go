package tournament

import (
	"context"
	"errors"
	"fmt"
	"sort"
	"strings"

	"github.com/domino14/liwords/pkg/entity"
	"github.com/domino14/liwords/pkg/user"
	ipc "github.com/domino14/liwords/rpc/api/proto/ipc"
	"github.com/rs/zerolog/log"
)

func ExportTournament(ctx context.Context, t *entity.Tournament, us user.Store, format string) (string, error) {
	switch format {
	case "tsh":
		return exportToTSH(ctx, t, us)
	case "standingsonly":
		return exportStandings(ctx, t)
	default:
		return "", fmt.Errorf("the format %s is not supported", format)
	}
}

func sortedDivNames(t *entity.Tournament) []string {
	sortedKeys := make([]string, len(t.Divisions))
	idx := 0
	for dname := range t.Divisions {
		sortedKeys[idx] = dname
		idx += 1
	}
	sort.Strings(sortedKeys)
	return sortedKeys
}

func exportToTSH(ctx context.Context, t *entity.Tournament, us user.Store) (string, error) {
	// https://scrabbleplayers.org/tourneys/2022/tsh/04/202204301.tsh
	var sb strings.Builder
	sb.WriteString("# tsh archive file\n# automatically generated by Woogles\n")
	normalize := func(div string) string {
		return strings.ReplaceAll(div, " ", "")
	}
	divNames := sortedDivNames(t)
	for _, dname := range divNames {
		fmt.Fprintf(&sb, "division %s %s.t\n", normalize(dname), normalize(dname))
	}
	sb.WriteString("# tsh archive file\n")
	sb.WriteString("# config naspa_tournament_id = 1\n")
	sb.WriteString("# config naspa_director_id = \"AA000000\"\n")
	sb.WriteString("config rating_system = \"nsa2008\"\n")
	sb.WriteString("config archive_source_type = 'tsh'\n")
	sb.WriteString("# config event_name = \"Woogles, MI\"\n")
	sb.WriteString("# config event_date = \"April 30, 2022\"\n")

	for _, dname := range divNames {
		division := t.Divisions[dname]
		fmt.Fprintf(&sb, "#begin_file name=%s.t\n", normalize(dname))

		if division.DivisionManager == nil {
			return "", errors.New("nil division manager")
		}
		xhr, err := division.DivisionManager.GetXHRResponse()
		if err != nil {
			return "", err
		}

		// pre-parse pairing map to allow for faster lookup
		// create a map of user indexes to pairings with potential duplicates
		biggerMap := map[string]*ipc.Pairing{}
		for _, pairing := range xhr.PairingMap {
			for _, p := range pairing.Players {
				key := fmt.Sprintf("%d-%d", p, pairing.Round)
				biggerMap[key] = pairing
			}
		}

		for pidx, p := range xhr.Players.Persons {
			split := strings.Split(p.Id, ":")
			if len(split) != 2 {
				return "", fmt.Errorf("unexpected badly formatted player id %s", p.Id)
			}
			var realName string
			u, err := us.GetByUUID(ctx, split[0])
			if err == nil {
				realName = u.RealName()
			}
			// Otherwise, ignore the error. This will allow some flexibility
			// for users not actually registered in our system (i.e. IRL users)
			if realName == "" {
				realName = split[1]
			}
			// try to split
			split = strings.SplitN(realName, " ", 2)
			if len(split) == 2 {
				realName = split[1] + ", " + split[0]
			}
			fmt.Fprintf(&sb, "%v\t%d", realName, p.Rating)
			scores := make([]int, xhr.CurrentRound+1)
			// Write all pairings and then scores.
			for rd := int32(0); rd <= xhr.CurrentRound; rd++ {
				var score int
				key := fmt.Sprintf("%d-%d", pidx, rd)
				pairing := biggerMap[key]
				if pairing == nil {
					log.Info().Int32("rd", rd).Int("p", pidx).Msg("nil-pairing")
					continue
				}
				if pairing.Players[0] == pairing.Players[1] {
					// It's a bye; write a 0.
					sb.WriteString(" 0")
					switch pairing.Outcomes[0] {
					case ipc.TournamentGameResult_BYE, ipc.TournamentGameResult_FORFEIT_WIN:
						score = 50
					case ipc.TournamentGameResult_FORFEIT_LOSS:
						score = -50
					case ipc.TournamentGameResult_VOID:
						score = 0
					default:
						return "", fmt.Errorf("unexpected tournament game result; rd %v outcome %v pidx %v", rd, pairing.Outcomes[0], pidx)
					}
				} else {
					for idx, opp := range pairing.Players {
						if int(opp) != pidx {
							// This is the opponent.
							// Player-indexes are 1-indexed:
							fmt.Fprintf(&sb, " %d", opp+1)
							// This assumes 2 players per game but we've already made our bed:
							score = int(pairing.Games[0].Scores[1-idx])
						}
					}
				}
				scores[rd] = score
			}
			sb.WriteString(";")
			for _, score := range scores {
				fmt.Fprintf(&sb, " %d", score)
			}
			sb.WriteString("\n")
		}
		fmt.Fprintf(&sb, "#end_file name=%s.t\n", normalize(dname))
	}
	return sb.String(), nil
}

func exportStandings(ctx context.Context, t *entity.Tournament) (string, error) {
	var sb strings.Builder
	sb.WriteString("division,rank,username,wins,losses,draws,winpts,spread\n")
	divNames := sortedDivNames(t)
	for _, dname := range divNames {
		division := t.Divisions[dname]
		if division.DivisionManager == nil {
			return "", errors.New("nil division manager")
		}
		xhr, err := division.DivisionManager.GetXHRResponse()
		if err != nil {
			return "", err
		}
		rdStandings := xhr.Standings[xhr.CurrentRound]
		if rdStandings == nil {
			return "", errors.New("round standings are nil?")
		}
		for idx, std := range rdStandings.Standings {
			p := std.PlayerId
			split := strings.Split(p, ":")
			if len(split) != 2 {
				return "", fmt.Errorf("unexpected badly formatted player id %s", p)
			}
			username := split[1]
			fmt.Fprintf(&sb, "%s,%d,%s,%d,%d,%d,%0.1f,%d\n", dname, idx+1, username, std.Wins,
				std.Losses, std.Draws, float32(std.Wins)+0.5*float32(std.Draws),
				std.Spread)
		}
	}
	return sb.String(), nil
}
