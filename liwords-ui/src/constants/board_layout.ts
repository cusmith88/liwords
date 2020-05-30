export enum BonusType {
  DoubleWord = '-',
  TripleWord = '=',
  QuadrupleWord = '~',
  DoubleLetter = "'",
  TripleLetter = '"',
  QuadrupleLetter = '^',
  StartingSquare = '*',
  NoBonus = ' ',
}

// XXX: This should come from the backend.
export const CrosswordGameGridLayout = [
  "=  '   =   '  =",
  ' -   "   "   - ',
  "  -   ' '   -  ",
  "'  -   '   -  '",
  '    -     -    ',
  ' "   "   "   " ',
  "  '   ' '   '  ",
  "=  '   -   '  =",
  "  '   ' '   '  ",
  ' "   "   "   " ',
  '    -     -    ',
  "'  -   '   -  '",
  "  -   ' '   -  ",
  ' -   "   "   - ',
  "=  '   =   '  =",
];

export const WorldWildlifeFundGridLayout = [
  `   =  " "  =   `,
  `  '  -   -  '  `,
  ` '  '     '  ' `,
  `=  "   -   "  =`,
  `  '   ' '   '  `,
  ` -   "   "   - `,
  `"   '     '   "`,
  `   -       -   `,
  `"   '     '   "`,
  ` -   "   "   - `,
  `  '   ' '   '  `,
  `=  "   -   "  =`,
  ` '  '     '  ' `,
  `  '  -   -  '  `,
  `   =  " "  =   `,
];
