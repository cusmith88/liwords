import { ChallengeRule } from '../gen/macondo/api/proto/macondo/macondo_pb';

export type PlayerOrder = 'p0' | 'p1';

// See cutoffs in variants.go. XXX: Try to tie these together better.
export const timeCtrlToDisplayName = (secs: number) => {
  if (secs <= 2 * 60) {
    return ['Ultra-Blitz!', 'magenta'];
  }
  if (secs <= 6 * 60) {
    return ['Blitz', 'volcano'];
  }
  if (secs <= 14 * 60) {
    return ['Rapid', 'gold'];
  }
  return ['Regular', 'blue'];
};

export const ratingToColor = (rating: string): [number, string] => {
  let ratNum;
  if (rating.endsWith('?')) {
    ratNum = parseInt(rating.substring(0, rating.length - 1));
  } else {
    ratNum = parseInt(rating);
  }
  let ratingCutoffs: Array<[number, string]> = [
    [2100, 'pink'],
    [1900, 'volcano'],
    [1700, 'yellow'],
    [1500, 'orange'],
    [1300, 'cyan'],
    [1100, 'green'],
    [900, 'blue'],
    [700, 'purple'],
    [500, 'gold'],
    [300, 'lime'],
    [100, 'geekblue'],
  ];
  for (let r = 0; r < ratingCutoffs.length; r++) {
    if (ratNum >= ratingCutoffs[r][0]) {
      return [ratNum, ratingCutoffs[r][1]];
    }
  }
  // If you're rated under 100 you're a geek.
  return [ratNum, 'geekblue'];
};

export const challRuleToStr = (n: number): string => {
  switch (n) {
    case ChallengeRule.DOUBLE:
      return 'Double';
    case ChallengeRule.SINGLE:
      return 'Single';
    case ChallengeRule.FIVE_POINT:
      return '5-pt';
    case ChallengeRule.TEN_POINT:
      return '10-pt';
    case ChallengeRule.VOID:
      return 'Void';
  }
  return 'Unsupported';
};
