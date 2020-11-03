package entity

import (
	"sync"
	"time"

	"gorm.io/datatypes"

	realtime "github.com/domino14/liwords/rpc/api/proto/realtime"
)

type DivisionManager interface {
	GetPlayerRoundInfo(string, int) (*PlayerRoundInfo, error)
	SubmitResult(int, string, string, int, int, realtime.TournamentGameResult,
		realtime.TournamentGameResult, realtime.GameEndReason, bool, int) error
	GetStandings(int) ([]*Standing, error)
	SetPairing(string, string, int) error
	IsRoundReady(int) (bool, error)
	IsRoundComplete(int) (bool, error)
	IsFinished() (bool, error)
	Serialize() (datatypes.JSON, error)
}

type FirstMethod int

const (
	// Firsts and seconds are set by the director
	// when submitting pairings. The player listed
	// first goes first.
	ManualFirst FirstMethod = iota

	// Random pairings do not use any previous first/second
	// data from the tournament and random assigns first and second
	// for the round
	RandomFirst

	// Automatic uses previous first/second records to decide
	// which player goes first.
	AutomaticFirst
)

const Unpaired = -1

type TournamentGame struct {
	Scores        []int                           `json:"scores"`
	Results       []realtime.TournamentGameResult `json:"results"`
	GameEndReason realtime.GameEndReason          `json:"endReason"`
}

type Pairing struct {
	Players  []string                        `json:"players"`
	Games    []*TournamentGame               `json:"games"`
	Outcomes []realtime.TournamentGameResult `json:"outcomes"`
}

type PlayerRoundInfo struct {
	Pairing *Pairing `json:"pairing"`
}

type Standing struct {
	Player string
	Wins   int
	Losses int
	Draws  int
	Spread int
}

type PairingMethod int

const (
	Random PairingMethod = iota
	RoundRobin
	KingOfTheHill
	Elimination
	// Need to implement eventually
	// Swiss
	// Performance

	// Manual simply does not make any
	// pairings at all. The director
	// has to make all the pairings themselves.
	Manual
)

type TournamentType int

const (
	ClassicTournamentType TournamentType = iota
	// It's gonna be lit:
	ArenaTournamentType
)

type TournamentPersons struct {
	Persons map[string]int `json:"p"`
}

type TournamentControls struct {
	GameRequest    *realtime.GameRequest `json:"req"`
	PairingMethods []PairingMethod       `json:"pairingMethods"`
	FirstMethods   []FirstMethod         `json:"firstMethods"`
	NumberOfRounds int                   `json:"rounds"`
	GamesPerRound  []int                 `json:"gamesPerRound"`
	Type           TournamentType        `json:"type"`
	StartTime      time.Time             `json:"startTime"`
}

type TournamentDivision struct {
	Players         *TournamentPersons  `json:"players"`
	Controls        *TournamentControls `json:"controls"`
	DivisionManager DivisionManager     `json:"manager"`
}

type Tournament struct {
	sync.RWMutex
	UUID              string                         `json:"uuid"`
	Name              string                         `json:"name"`
	Description       string                         `json:"desc"`
	ExecutiveDirector string                         `json:"execDirector"`
	Directors         *TournamentPersons             `json:"directors"`
	IsStarted         bool                           `json:"started"`
	Divisions         map[string]*TournamentDivision `json:"divs"`
}
