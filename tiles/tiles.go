package main

import (
	"bytes"
	"context"
	_ "embed"
	"flag"
	"fmt"
	"image"
	"image/color"
	"image/draw"
	"image/gif"
	"image/png"
	"io/ioutil"
	"math"
	"net/http"
	"os"
	"sort"
	"strconv"
	"strings"
	"time"
	"unicode/utf8"

	pb "github.com/domino14/liwords/rpc/api/proto/game_service"
	macondopb "github.com/domino14/macondo/gen/api/proto/macondo"

	"github.com/domino14/macondo/alphabet"
	"github.com/domino14/macondo/game"
)

var boardConfig = [][]rune{
	[]rune("=  '   =   '  ="),
	[]rune(" -   \"   \"   - "),
	[]rune("  -   ' '   -  "),
	[]rune("'  -   '   -  '"),
	[]rune("    -     -    "),
	[]rune(" \"   \"   \"   \" "),
	[]rune("  '   ' '   '  "),
	[]rune("=  '   *   '  ="),
	[]rune("  '   ' '   '  "),
	[]rune(" \"   \"   \"   \" "),
	[]rune("    -     -    "),
	[]rune("'  -   '   -  '"),
	[]rune("  -   ' '   -  "),
	[]rune(" -   \"   \"   - "),
	[]rune("=  '   =   '  ="),
}

//go:embed tiles-english.png
var englishTilesBytes []byte

//go:embed tiles-french.png
var frenchTilesBytes []byte

//go:embed tiles-german.png
var germanTilesBytes []byte

//go:embed tiles-norwegian.png
var norwegianTilesBytes []byte

// Doubled because of retina screen.
const squareDim = 2 * 34

type TilePainterTilesMeta struct {
	TilesBytes []byte
	Tile0Src   map[rune][2]int
	Tile1Src   map[rune][2]int
	BoardSrc   map[rune][2]int
	NColRows   [2]int
}

var tilesMeta = map[string]*TilePainterTilesMeta{
	"english": {
		TilesBytes: englishTilesBytes,
		Tile0Src: map[rune][2]int{
			'A': {0, 0}, 'B': {0, 1}, 'C': {0, 2}, 'D': {0, 3}, 'E': {0, 4},
			'F': {0, 5}, 'G': {0, 6}, 'H': {0, 7}, 'I': {0, 8}, 'J': {0, 9},
			'K': {0, 10}, 'L': {0, 11}, 'M': {0, 12}, 'N': {0, 13}, 'O': {0, 14},
			'P': {1, 0}, 'Q': {1, 1}, 'R': {1, 2}, 'S': {1, 3}, 'T': {1, 4},
			'U': {1, 5}, 'V': {1, 6}, 'W': {1, 7}, 'X': {1, 8}, 'Y': {1, 9},
			'Z': {1, 10}, 'a': {1, 11}, 'b': {1, 12}, 'c': {1, 13}, 'd': {1, 14},
			'e': {2, 0}, 'f': {2, 1}, 'g': {2, 2}, 'h': {2, 3}, 'i': {2, 4},
			'j': {2, 5}, 'k': {2, 6}, 'l': {2, 7}, 'm': {2, 8}, 'n': {2, 9},
			'o': {2, 10}, 'p': {2, 11}, 'q': {2, 12}, 'r': {2, 13}, 's': {2, 14},
			't': {3, 0}, 'u': {3, 1}, 'v': {3, 2}, 'w': {3, 3}, 'x': {3, 4},
			'y': {3, 5}, 'z': {3, 6}, '?': {3, 7},
		},
		Tile1Src: map[rune][2]int{
			'A': {3, 8}, 'B': {3, 9},
			'C': {3, 10}, 'D': {3, 11}, 'E': {3, 12}, 'F': {3, 13}, 'G': {3, 14},
			'H': {4, 0}, 'I': {4, 1}, 'J': {4, 2}, 'K': {4, 3}, 'L': {4, 4},
			'M': {4, 5}, 'N': {4, 6}, 'O': {4, 7}, 'P': {4, 8}, 'Q': {4, 9},
			'R': {4, 10}, 'S': {4, 11}, 'T': {4, 12}, 'U': {4, 13}, 'V': {4, 14},
			'W': {5, 0}, 'X': {5, 1}, 'Y': {5, 2}, 'Z': {5, 3}, 'a': {5, 4},
			'b': {5, 5}, 'c': {5, 6}, 'd': {5, 7}, 'e': {5, 8}, 'f': {5, 9},
			'g': {5, 10}, 'h': {5, 11}, 'i': {5, 12}, 'j': {5, 13}, 'k': {5, 14},
			'l': {6, 0}, 'm': {6, 1}, 'n': {6, 2}, 'o': {6, 3}, 'p': {6, 4},
			'q': {6, 5}, 'r': {6, 6}, 's': {6, 7}, 't': {6, 8}, 'u': {6, 9},
			'v': {6, 10}, 'w': {6, 11}, 'x': {6, 12}, 'y': {6, 13}, 'z': {6, 14},
			'?': {7, 0},
		},
		BoardSrc: map[rune][2]int{
			'-': {7, 1}, '=': {7, 2}, '\'': {7, 3}, '"': {7, 4},
			'*': {7, 5}, ' ': {7, 6},
		},
		NColRows: [2]int{15, 8},
	},
	"french": {
		TilesBytes: frenchTilesBytes,
		Tile0Src: map[rune][2]int{
			'A': {0, 0}, 'B': {0, 1}, 'C': {0, 2}, 'D': {0, 3}, 'E': {0, 4},
			'F': {0, 5}, 'G': {0, 6}, 'H': {0, 7}, 'I': {0, 8}, 'J': {0, 9},
			'K': {0, 10}, 'L': {0, 11}, 'M': {0, 12}, 'N': {0, 13}, 'O': {0, 14},
			'P': {1, 0}, 'Q': {1, 1}, 'R': {1, 2}, 'S': {1, 3}, 'T': {1, 4},
			'U': {1, 5}, 'V': {1, 6}, 'W': {1, 7}, 'X': {1, 8}, 'Y': {1, 9},
			'Z': {1, 10}, 'a': {1, 11}, 'b': {1, 12}, 'c': {1, 13}, 'd': {1, 14},
			'e': {2, 0}, 'f': {2, 1}, 'g': {2, 2}, 'h': {2, 3}, 'i': {2, 4},
			'j': {2, 5}, 'k': {2, 6}, 'l': {2, 7}, 'm': {2, 8}, 'n': {2, 9},
			'o': {2, 10}, 'p': {2, 11}, 'q': {2, 12}, 'r': {2, 13}, 's': {2, 14},
			't': {3, 0}, 'u': {3, 1}, 'v': {3, 2}, 'w': {3, 3}, 'x': {3, 4},
			'y': {3, 5}, 'z': {3, 6}, '?': {3, 7},
		},
		Tile1Src: map[rune][2]int{
			'A': {3, 8}, 'B': {3, 9},
			'C': {3, 10}, 'D': {3, 11}, 'E': {3, 12}, 'F': {3, 13}, 'G': {3, 14},
			'H': {4, 0}, 'I': {4, 1}, 'J': {4, 2}, 'K': {4, 3}, 'L': {4, 4},
			'M': {4, 5}, 'N': {4, 6}, 'O': {4, 7}, 'P': {4, 8}, 'Q': {4, 9},
			'R': {4, 10}, 'S': {4, 11}, 'T': {4, 12}, 'U': {4, 13}, 'V': {4, 14},
			'W': {5, 0}, 'X': {5, 1}, 'Y': {5, 2}, 'Z': {5, 3}, 'a': {5, 4},
			'b': {5, 5}, 'c': {5, 6}, 'd': {5, 7}, 'e': {5, 8}, 'f': {5, 9},
			'g': {5, 10}, 'h': {5, 11}, 'i': {5, 12}, 'j': {5, 13}, 'k': {5, 14},
			'l': {6, 0}, 'm': {6, 1}, 'n': {6, 2}, 'o': {6, 3}, 'p': {6, 4},
			'q': {6, 5}, 'r': {6, 6}, 's': {6, 7}, 't': {6, 8}, 'u': {6, 9},
			'v': {6, 10}, 'w': {6, 11}, 'x': {6, 12}, 'y': {6, 13}, 'z': {6, 14},
			'?': {7, 0},
		},
		BoardSrc: map[rune][2]int{
			'-': {7, 1}, '=': {7, 2}, '\'': {7, 3}, '"': {7, 4},
			'*': {7, 5}, ' ': {7, 6},
		},
		NColRows: [2]int{15, 8},
	},
	"german": {
		TilesBytes: germanTilesBytes,
		Tile0Src: map[rune][2]int{
			'A': {0, 0}, 'Ä': {0, 1}, 'B': {0, 2}, 'C': {0, 3}, 'D': {0, 4},
			'E': {0, 5}, 'F': {0, 6}, 'G': {0, 7}, 'H': {0, 8}, 'I': {0, 9},
			'J': {0, 10}, 'K': {0, 11}, 'L': {0, 12}, 'M': {0, 13}, 'N': {0, 14},
			'O': {1, 0}, 'Ö': {1, 1}, 'P': {1, 2}, 'Q': {1, 3}, 'R': {1, 4},
			'S': {1, 5}, 'T': {1, 6}, 'U': {1, 7}, 'Ü': {1, 8}, 'V': {1, 9},
			'W': {1, 10}, 'X': {1, 11}, 'Y': {1, 12}, 'Z': {1, 13}, 'a': {1, 14},
			'ä': {2, 0}, 'b': {2, 1}, 'c': {2, 2}, 'd': {2, 3}, 'e': {2, 4},
			'f': {2, 5}, 'g': {2, 6}, 'h': {2, 7}, 'i': {2, 8}, 'j': {2, 9},
			'k': {2, 10}, 'l': {2, 11}, 'm': {2, 12}, 'n': {2, 13}, 'o': {2, 14},
			'ö': {3, 0}, 'p': {3, 1}, 'q': {3, 2}, 'r': {3, 3}, 's': {3, 4},
			't': {3, 5}, 'u': {3, 6}, 'ü': {3, 7}, 'v': {3, 8}, 'w': {3, 9},
			'x': {3, 10}, 'y': {3, 11}, 'z': {3, 12}, '?': {3, 13},
		},
		Tile1Src: map[rune][2]int{
			'A': {3, 14},
			'Ä': {4, 0}, 'B': {4, 1}, 'C': {4, 2}, 'D': {4, 3}, 'E': {4, 4},
			'F': {4, 5}, 'G': {4, 6}, 'H': {4, 7}, 'I': {4, 8}, 'J': {4, 9},
			'K': {4, 10}, 'L': {4, 11}, 'M': {4, 12}, 'N': {4, 13}, 'O': {4, 14},
			'Ö': {5, 0}, 'P': {5, 1}, 'Q': {5, 2}, 'R': {5, 3}, 'S': {5, 4},
			'T': {5, 5}, 'U': {5, 6}, 'Ü': {5, 7}, 'V': {5, 8}, 'W': {5, 9},
			'X': {5, 10}, 'Y': {5, 11}, 'Z': {5, 12}, 'a': {5, 13}, 'ä': {5, 14},
			'b': {6, 0}, 'c': {6, 1}, 'd': {6, 2}, 'e': {6, 3}, 'f': {6, 4},
			'g': {6, 5}, 'h': {6, 6}, 'i': {6, 7}, 'j': {6, 8}, 'k': {6, 9},
			'l': {6, 10}, 'm': {6, 11}, 'n': {6, 12}, 'o': {6, 13}, 'ö': {6, 14},
			'p': {7, 0}, 'q': {7, 1}, 'r': {7, 2}, 's': {7, 3}, 't': {7, 4},
			'u': {7, 5}, 'ü': {7, 6}, 'v': {7, 7}, 'w': {7, 8}, 'x': {7, 9},
			'y': {7, 10}, 'z': {7, 11}, '?': {7, 12},
		},
		BoardSrc: map[rune][2]int{
			'-': {7, 13}, '=': {7, 14},
			'\'': {8, 0}, '"': {8, 1}, '*': {8, 2}, ' ': {8, 3},
		},
		NColRows: [2]int{15, 9},
	},
	"norwegian": {
		TilesBytes: norwegianTilesBytes,
		Tile0Src: map[rune][2]int{
			'A': {0, 0}, 'Ä': {0, 1}, 'B': {0, 2}, 'C': {0, 3}, 'D': {0, 4},
			'E': {0, 5}, 'F': {0, 6}, 'G': {0, 7}, 'H': {0, 8}, 'I': {0, 9},
			'J': {0, 10}, 'K': {0, 11}, 'L': {0, 12}, 'M': {0, 13}, 'N': {0, 14},
			'O': {1, 0}, 'Ö': {1, 1}, 'P': {1, 2}, 'Q': {1, 3}, 'R': {1, 4},
			'S': {1, 5}, 'T': {1, 6}, 'U': {1, 7}, 'Ü': {1, 8}, 'V': {1, 9},
			'W': {1, 10}, 'X': {1, 11}, 'Y': {1, 12}, 'Z': {1, 13}, 'Æ': {1, 14},
			'Ø': {2, 0}, 'Å': {2, 1}, 'a': {2, 2}, 'ä': {2, 3}, 'b': {2, 4},
			'c': {2, 5}, 'd': {2, 6}, 'e': {2, 7}, 'f': {2, 8}, 'g': {2, 9},
			'h': {2, 10}, 'i': {2, 11}, 'j': {2, 12}, 'k': {2, 13}, 'l': {2, 14},
			'm': {3, 0}, 'n': {3, 1}, 'o': {3, 2}, 'ö': {3, 3}, 'p': {3, 4},
			'q': {3, 5}, 'r': {3, 6}, 's': {3, 7}, 't': {3, 8}, 'u': {3, 9},
			'ü': {3, 10}, 'v': {3, 11}, 'w': {3, 12}, 'x': {3, 13}, 'y': {3, 14},
			'z': {4, 0}, 'æ': {4, 1}, 'ø': {4, 2}, 'å': {4, 3}, '?': {4, 4},
		},
		Tile1Src: map[rune][2]int{
			'A': {4, 5}, 'Ä': {4, 6}, 'B': {4, 7}, 'C': {4, 8}, 'D': {4, 9},
			'E': {4, 10}, 'F': {4, 11}, 'G': {4, 12}, 'H': {4, 13}, 'I': {4, 14},
			'J': {5, 0}, 'K': {5, 1}, 'L': {5, 2}, 'M': {5, 3}, 'N': {5, 4},
			'O': {5, 5}, 'Ö': {5, 6}, 'P': {5, 7}, 'Q': {5, 8}, 'R': {5, 9},
			'S': {5, 10}, 'T': {5, 11}, 'U': {5, 12}, 'Ü': {5, 13}, 'V': {5, 14},
			'W': {6, 0}, 'X': {6, 1}, 'Y': {6, 2}, 'Z': {6, 3}, 'Æ': {6, 4},
			'Ø': {6, 5}, 'Å': {6, 6}, 'a': {6, 7}, 'ä': {6, 8}, 'b': {6, 9},
			'c': {6, 10}, 'd': {6, 11}, 'e': {6, 12}, 'f': {6, 13}, 'g': {6, 14},
			'h': {7, 0}, 'i': {7, 1}, 'j': {7, 2}, 'k': {7, 3}, 'l': {7, 4},
			'm': {7, 5}, 'n': {7, 6}, 'o': {7, 7}, 'ö': {7, 8}, 'p': {7, 9},
			'q': {7, 10}, 'r': {7, 11}, 's': {7, 12}, 't': {7, 13}, 'u': {7, 14},
			'ü': {8, 0}, 'v': {8, 1}, 'w': {8, 2}, 'x': {8, 3}, 'y': {8, 4},
			'z': {8, 5}, 'æ': {8, 6}, 'ø': {8, 7}, 'å': {8, 8}, '?': {8, 9},
		},
		BoardSrc: map[rune][2]int{
			'-': {8, 10}, '=': {8, 11}, '\'': {8, 12}, '"': {8, 13}, '*': {8, 14},
			' ': {9, 0},
		},
		NColRows: [2]int{15, 10},
	},
}

func loadTilesImg(tptm *TilePainterTilesMeta) (image.Image, []color.Color, error) {
	img, err := png.Decode(bytes.NewReader(tptm.TilesBytes))
	if err != nil {
		return nil, nil, err
	}
	bounds := img.Bounds()
	expectedX := tptm.NColRows[0] * squareDim
	expectedY := tptm.NColRows[1] * squareDim
	if bounds.Min.X != 0 || bounds.Min.Y != 0 || bounds.Dx() != expectedX || bounds.Dy() != expectedY {
		return nil, nil, fmt.Errorf("unexpected size: %s vs %s", bounds.String(), image.Pt(expectedX, expectedY))
	}

	// Build an up to 256 colors palette where index 0 is Transparent.
	inPal := make(map[color.Color]struct{})
	for y := bounds.Min.Y; y < bounds.Max.Y; y++ {
		for x := bounds.Min.X; x < bounds.Max.X; x++ {
			inPal[img.At(x, y)] = struct{}{}
		}
	}
	pal := make([]color.Color, 0, len(inPal)+1)
	// Always put image.Transparent even if there is another color with zero alpha.
	pal = append(pal, image.Transparent)
	for k := range inPal {
		pal = append(pal, k)
	}
	if len(pal) > 256 {
		return nil, nil, fmt.Errorf("gif cannot support %d colors", len(pal))
	}
	// Sort deterministically, exclude the image.Transparent.
	sort.Slice(pal[1:], func(i, j int) bool {
		ri, gi, bi, ai := pal[i+1].RGBA()
		rj, gj, bj, aj := pal[j+1].RGBA()
		if ai != aj {
			return ai < aj
		}
		if ri != rj {
			return ri < rj
		}
		if gi != gj {
			return gi < gj
		}
		return bi < bj
	})

	return img, pal, nil
}

func drawEmptySquare(tptm *TilePainterTilesMeta, tilesImg image.Image, img *image.NRGBA, r, c int, b rune) {
	y := r * squareDim
	x := c * squareDim
	srcPt, ok := tptm.BoardSrc[rune(b)]
	if !ok {
		srcPt = tptm.BoardSrc[' ']
	}
	draw.Draw(img, image.Rect(x, y, x+squareDim, y+squareDim), tilesImg,
		image.Pt(srcPt[1]*squareDim, srcPt[0]*squareDim), draw.Src)
}

func realWhose(whichColor int, actualWhose byte) byte {
	switch whichColor {
	case 0:
		return 0
	case 1:
		return 1
	default:
		return actualWhose
	}
}

func drawTileOnBoard(tptm *TilePainterTilesMeta, tilesImg image.Image, img *image.NRGBA, r, c int, b rune, p byte) {
	y := r * squareDim
	x := c * squareDim
	if b != ' ' {
		tSrc := tptm.Tile0Src
		if p&1 != 0 {
			tSrc = tptm.Tile1Src
		}
		srcPt, ok := tSrc[b]
		if !ok {
			srcPt = tSrc['?']
		}
		draw.Draw(img, image.Rect(x, y, x+squareDim, y+squareDim), tilesImg,
			image.Pt(srcPt[1]*squareDim, srcPt[0]*squareDim), draw.Over)
	}
}

func newEmptyBoardImage(tptm *TilePainterTilesMeta, tilesImg image.Image, boardConfig [][]rune) *image.NRGBA {
	// drawBoard (for png) already validated stuffs.

	nRows := len(boardConfig)
	nCols := len(boardConfig[0])
	img := image.NewNRGBA(image.Rect(0, 0, nRows*squareDim, nCols*squareDim))
	for r := 0; r < nRows; r++ {
		for c := 0; c < nCols; c++ {
			drawEmptySquare(tptm, tilesImg, img, r, c, boardConfig[r][c])
		}
	}
	return img
}

func drawBoard(tptm *TilePainterTilesMeta, tilesImg image.Image, boardConfig [][]rune, board [][]rune, whose [][]byte, whichColor int) (image.Image, error) {

	nRows := len(boardConfig)
	if nRows < 1 {
		return nil, fmt.Errorf("invalid boardConfig: expecting at least 1 row")
	}

	nCols := len(boardConfig[0])
	for i, row := range boardConfig {
		if i > 0 && len(row) != nCols {
			return nil, fmt.Errorf("invalid boardConfig: expecting row %d to have length %d", i+1, nCols)
		}
	}

	if nRows != len(board) {
		return nil, fmt.Errorf("invalid board: expecting %d rows", nRows)
	}

	for i, row := range board {
		if len(row) != nCols {
			return nil, fmt.Errorf("invalid board: expecting row %d to have length %d", i+1, nCols)
		}
	}

	// OK! They have the same dimensions.
	img := newEmptyBoardImage(tptm, tilesImg, boardConfig)

	// Draw the tiles.
	for r := 0; r < nRows; r++ {
		for c := 0; c < nCols; c++ {
			drawTileOnBoard(tptm, tilesImg, img, r, c, board[r][c], realWhose(whichColor, whose[r][c]))
		}
	}

	return img, nil
}

func imgToPngBytes(img image.Image) ([]byte, error) {
	var buf bytes.Buffer
	err := png.Encode(&buf, img)
	if err != nil {
		return nil, err
	}
	return buf.Bytes(), nil
}

func GetGameHistory(id string) (*macondopb.GameHistory, error) {

	client := pb.NewGameMetadataServiceProtobufClient("https://woogles.io", &http.Client{})
	history, err := client.GetGameHistory(context.Background(), &pb.GameHistoryRequest{GameId: id})

	if err != nil {
		return &macondopb.GameHistory{}, err
	}
	return history.History, nil
}

type TilePainterBoardSnapshot struct {
	lang  string
	board [][]rune
	whose [][]byte
}

func boardSnapshotHardcoded() *TilePainterBoardSnapshot {
	const p_ = 0
	const p0 = 0
	const p1 = 1
	return &TilePainterBoardSnapshot{
		lang: "english",
		// https://woogles.io/game/hBQhT94n
		board: [][]rune{
			[]rune(" J DROGUE     C"),
			[]rune(" ARE WENT    GO"),
			[]rune(" GOX  r      LO"),
			[]rune("  U   OM     AN"),
			[]rune("  IVY NEB    I "),
			[]rune("PAl   T   B  R "),
			[]rune("EEL   IF  IT EL"),
			[]rune("D EW  CENTS  SI"),
			[]rune("   A   D  T   R"),
			[]rune("  MI      AL QI"),
			[]rune(" FORK     TO O "),
			[]rune(" AA I     EN P "),
			[]rune(" Z  SHUN   E H "),
			[]rune("YE       VIRUS "),
			[]rune("AD             "),
		},
		whose: [][]byte{
			{p_, p1, p_, p1, p0, p0, p1, p0, p0, p_, p_, p_, p_, p_, p0},
			{p_, p1, p0, p1, p_, p1, p1, p1, p1, p_, p_, p_, p_, p1, p0},
			{p_, p1, p0, p1, p_, p_, p1, p_, p_, p_, p_, p_, p_, p1, p0},
			{p_, p_, p0, p_, p_, p_, p1, p1, p_, p_, p_, p_, p_, p1, p0},
			{p_, p_, p0, p1, p1, p_, p1, p1, p0, p_, p_, p_, p_, p1, p_},
			{p0, p1, p0, p_, p_, p_, p1, p_, p_, p_, p1, p_, p_, p1, p_},
			{p0, p1, p0, p_, p_, p_, p1, p0, p_, p_, p1, p0, p_, p1, p1},
			{p0, p_, p0, p0, p_, p_, p0, p0, p0, p0, p1, p_, p_, p1, p1},
			{p_, p_, p_, p0, p_, p_, p_, p0, p_, p_, p1, p_, p_, p_, p1},
			{p_, p_, p0, p0, p_, p_, p_, p_, p_, p_, p1, p0, p_, p1, p1},
			{p_, p1, p0, p0, p0, p_, p_, p_, p_, p_, p1, p0, p_, p1, p_},
			{p_, p1, p0, p_, p0, p_, p_, p_, p_, p_, p1, p0, p_, p1, p_},
			{p_, p1, p_, p_, p1, p1, p1, p1, p_, p_, p_, p0, p_, p1, p_},
			{p0, p1, p_, p_, p_, p_, p_, p_, p_, p0, p0, p0, p0, p0, p_},
			{p0, p1, p_, p_, p_, p_, p_, p_, p_, p_, p_, p_, p_, p_, p_},
		},
	}
}

func whichFromEvent(history *macondopb.GameHistory, evt *macondopb.GameEvent) byte {
	which := byte(0)
	if evt.Nickname != history.Players[0].Nickname {
		which = 1
	}
	if history.SecondWentFirst {
		which ^= 1 // Fix coloring. WHY.
	}
	return which
}

func boardSnapshotFromMacondoHistory(boardConfig [][]rune, history *macondopb.GameHistory, numEvents int) (*TilePainterBoardSnapshot, error) {
	boardLayoutName, letterDistributionName, variant := game.HistoryToVariant(history)
	_ = boardLayoutName
	_ = variant
	lang := strings.TrimSuffix(letterDistributionName, "_super")

	// TODO: boardConfig should vary according to boardLayoutName
	nRows := len(boardConfig)
	nCols := len(boardConfig[0])
	board := make([][]rune, nRows)
	boardBacking := make([]rune, nRows*nCols)
	for i := range boardBacking {
		boardBacking[i] = ' '
	}
	whose := make([][]byte, nRows)
	whoseBacking := make([]byte, nRows*nCols)
	sqp := 0
	for r := 0; r < nRows; r++ {
		sqp += nCols
		board[r] = boardBacking[sqp-nCols : sqp : sqp]
		whose[r] = whoseBacking[sqp-nCols : sqp : sqp]
	}

	// Assume that the input is valid:
	// - does not go out of bounds
	// - has no invalid tiles
	// - PHONY_TILES_RETURNED only immediately after TILE_PLACEMENT_MOVE
	// - nicknames belong to either player
	// - two-player games only
	lastPlaceIndex := -1
	setLastPlaceIndex := func(newLastPlaceIndex int) {
		if lastPlaceIndex >= 0 {
			evt := history.Events[lastPlaceIndex]
			which := whichFromEvent(history, evt)
			r, c := int(evt.Row), int(evt.Column)
			dr, dc := 0, 1
			if evt.Direction == macondopb.GameEvent_VERTICAL {
				dr, dc = 1, 0
			}
			for _, ch := range evt.PlayedTiles {
				if ch != alphabet.ASCIIPlayedThrough {
					board[r][c] = ch
					whose[r][c] = which
				}
				r, c = r+dr, c+dc
			}
		}
		lastPlaceIndex = newLastPlaceIndex
	}
	for i, evt := range history.Events {
		if i >= numEvents {
			break
		}
		switch evt.GetType() {
		case macondopb.GameEvent_TILE_PLACEMENT_MOVE:
			setLastPlaceIndex(i)
		case macondopb.GameEvent_PHONY_TILES_RETURNED:
			lastPlaceIndex = -1
		}
	}
	setLastPlaceIndex(-1)

	return &TilePainterBoardSnapshot{
		lang:  lang,
		board: board,
		whose: whose,
	}, nil
}

func main() {
	flag.Usage = func() {
		fmt.Fprintf(flag.CommandLine.Output(), `usage of %s:

  params: gameId [n]
    fetch game from woogles.io
    example: hBQhT94n
    example: XgTRffsq 7
      n = number of events to process (one less than ?turn= examiner param)

  params: hardcoded
    use a hardcoded board

params can be prefixed with these flags:
`, os.Args[0])
		flag.PrintDefaults()
	}

	badUsage := func(err error) {
		flag.Usage()
		panic(err)
	}

	var colorFlag = flag.String("color", "", "0 = use player 0's colors, 1 = use player 1's colors")
	var gifFlag = flag.Bool("gif", false, "generate animated gif")
	flag.Parse()
	args := flag.Args()

	var whichColor int
	switch *colorFlag {
	case "0":
		whichColor = 0
	case "1":
		whichColor = 1
	case "":
		whichColor = -1
	default:
		badUsage(fmt.Errorf("-color can only be 0 or 1 or \"\""))
	}

	if len(args) < 1 {
		badUsage(fmt.Errorf("not enough params"))
	}

	var outputFile string
	var boardSnapshot *TilePainterBoardSnapshot
	var history *macondopb.GameHistory
	var err error
	numEvents := math.MaxInt
	if args[0] == "hardcoded" {
		outputFile = "board"
		boardSnapshot = boardSnapshotHardcoded()
	} else {
		gameId := args[0]
		outputFile = gameId

		if len(args) > 1 {
			if numEvents, err = strconv.Atoi(args[1]); err != nil {
				panic(err)
			}
		}

		history, err = GetGameHistory(gameId)
		if err != nil {
			panic(err)
		}

		// Assume standard board for now.
		boardSnapshot, err = boardSnapshotFromMacondoHistory(boardConfig, history, numEvents)
		if err != nil {
			panic(err)
		}
	}

	// Cache this.
	lang := boardSnapshot.lang

	tptm, ok := tilesMeta[lang]
	if !ok {
		panic("missing tilesMeta: " + lang)
	}

	t0 := time.Now()
	tilesImg, pal, err := loadTilesImg(tptm)
	if err != nil {
		panic(err)
	}

	t1 := time.Now()
	boardImg, err := drawBoard(tptm, tilesImg, boardConfig, boardSnapshot.board, boardSnapshot.whose, whichColor)
	if err != nil {
		panic(err)
	}

	t2 := time.Now()
	boardPngBytes, err := imgToPngBytes(boardImg)
	if err != nil {
		panic(err)
	}

	t3 := time.Now()
	fmt.Printf("writing %d bytes\n", len(boardPngBytes))
	fmt.Println("loading tiles img", t1.Sub(t0))
	fmt.Println("drawing board", t2.Sub(t1))
	fmt.Println("img to png", t3.Sub(t2))

	err = ioutil.WriteFile(outputFile+".png", boardPngBytes, 0644)
	if err != nil {
		panic(err)
	}

	if *gifFlag && history != nil {
		t4 := time.Now()
		agif := &gif.GIF{}
		addFrame := func(img *image.NRGBA, delay int, op draw.Op) {
			imgPal := image.NewPaletted(img.Bounds(), pal)
			draw.Draw(imgPal, imgPal.Bounds(), img, img.Bounds().Min, op)
			agif.Image = append(agif.Image, imgPal)
			agif.Delay = append(agif.Delay, delay)
		}
		addFrame(newEmptyBoardImage(tptm, tilesImg, boardConfig), 50, draw.Src)

		patchImage := func(evt *macondopb.GameEvent, callback func(img *image.NRGBA, r, c int, ch rune)) {
			r, c := int(evt.Row), int(evt.Column)
			dr, dc := 0, 1
			if evt.Direction == macondopb.GameEvent_VERTICAL {
				dr, dc = 1, 0
			}
			str := evt.PlayedTiles
			for {
				ru, size := utf8.DecodeRuneInString(str)
				if ru != alphabet.ASCIIPlayedThrough {
					break
				}
				r, c = r+dr, c+dc
				str = str[size:]
			}
			if len(str) == 0 {
				return
			}
			for {
				ru, size := utf8.DecodeLastRuneInString(str)
				if ru != alphabet.ASCIIPlayedThrough {
					break
				}
				str = str[:len(str)-size]
			}
			numPlayedTiles := utf8.RuneCountInString(str)
			img := image.NewNRGBA(image.Rect(c*squareDim, r*squareDim, (c+1+(numPlayedTiles-1)*dc)*squareDim, (r+1+(numPlayedTiles-1)*dr)*squareDim))
			for _, ch := range str {
				if ch != alphabet.ASCIIPlayedThrough {
					callback(img, r, c, ch)
				}
				r, c = r+dr, c+dc
			}
			addFrame(img, 50, draw.Over)
		}
		lastPlaceIndex := -1
		for i, evt := range history.Events {
			if i >= numEvents {
				break
			}
			switch evt.GetType() {
			case macondopb.GameEvent_TILE_PLACEMENT_MOVE:
				lastPlaceIndex = i
				which := whichFromEvent(history, evt)
				patchImage(evt, func(img *image.NRGBA, r, c int, ch rune) {
					drawTileOnBoard(tptm, tilesImg, img, r, c, ch, realWhose(whichColor, which))
				})
			case macondopb.GameEvent_PHONY_TILES_RETURNED:
				patchImage(history.Events[lastPlaceIndex], func(img *image.NRGBA, r, c int, ch rune) {
					drawEmptySquare(tptm, tilesImg, img, r, c, boardConfig[r][c])
				})
				lastPlaceIndex = -1
			}
		}

		// We want the final frame to stay for 2 sec.
		// Chrome interprets Delay as the delay after the frame.
		// Mac Quick Look interprets Delay as the delay before the frame.
		// So if we set the last frame's delay to 200cs (for Chrome),
		// Mac Quick Look delays the next-to-last frame instead.
		// If we set the first frame's delay to 200cs (for Mac Quick Look),
		// Chrome delays the first frame instead.
		// Solution: we add a transparent 1x1 frame and run it for 150cs.
		// This adds about 215 bytes to the file, but works for both.
		addFrame(image.NewNRGBA(image.Rect(0, 0, 1, 1)), 150, draw.Over)

		var buf bytes.Buffer
		err = gif.EncodeAll(&buf, agif)
		if err != nil {
			panic(err)
		}
		boardGifBytes := buf.Bytes()
		t5 := time.Now()

		fmt.Printf("writing %d bytes\n", len(boardGifBytes))
		fmt.Println("img to anim gif", t5.Sub(t4))
		fmt.Println("num frames", len(agif.Image))

		err = ioutil.WriteFile(outputFile+".gif", boardGifBytes, 0644)
		if err != nil {
			panic(err)
		}
	}

	if *gifFlag {
		t4 := time.Now()
		img := boardImg
		imgPal := image.NewPaletted(img.Bounds(), pal)
		draw.Draw(imgPal, imgPal.Bounds(), img, img.Bounds().Min, draw.Src)
		t5 := time.Now()

		{
			var buf bytes.Buffer
			err = gif.EncodeAll(&buf, &gif.GIF{
				Image: []*image.Paletted{imgPal},
				Delay: []int{100},
			})
			if err != nil {
				panic(err)
			}
			boardGifBytes := buf.Bytes()
			t6 := time.Now()

			fmt.Printf("writing %d bytes\n", len(boardGifBytes))
			fmt.Println("img to pal", t5.Sub(t4))
			fmt.Println("pal to single anim", t6.Sub(t5))

			err = ioutil.WriteFile(outputFile+"-single.gif", boardGifBytes, 0644)
			if err != nil {
				panic(err)
			}
		}

		t7 := time.Now()
		{
			var buf bytes.Buffer
			err = gif.Encode(&buf, imgPal, nil)
			if err != nil {
				panic(err)
			}
			boardGifBytes := buf.Bytes()
			t8 := time.Now()

			fmt.Printf("writing %d bytes\n", len(boardGifBytes))
			fmt.Println("pal to static gif", t8.Sub(t7))

			err = ioutil.WriteFile(outputFile+"-static.gif", boardGifBytes, 0644)
			if err != nil {
				panic(err)
			}
		}
	}
}
