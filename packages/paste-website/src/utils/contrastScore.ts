import Color from 'color';
import type { Properties } from 'csstype';

enum ContrastRatingScores {
  Fail = 'Fail',
  AAConditional = 'AA Conditional',
  AA = 'AA',
  AAA = 'AAA',
}

export function contrastScore(
  color1: Properties['backgroundColor'],
  color2: Properties['backgroundColor'],
): ContrastRatingScores | null {
  const color = Color(color1);
  const compareColor = Color(color2);
  const score = color.contrast(compareColor);
  let rating: ContrastRatingScores | null = null;

  if (score < 3) {
    rating = ContrastRatingScores.Fail;
  } else if (score >= 3 && score < 4.5) {
    rating = ContrastRatingScores.AAConditional;
  } else if (score >= 4.5 && score < 7) {
    rating = ContrastRatingScores.AA;
  } else {
    rating = ContrastRatingScores.AAA;
  }

  return rating;
}
