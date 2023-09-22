import type { ColorCombinationAccessibility } from "../color-combos";

interface ColorRating {
  small: string;
  bold: string;
  large: string;
}

const colorRating = (accessibility: ColorCombinationAccessibility): ColorRating => {
  let small: string;
  let bold: string;
  let large: string;

  if (accessibility.aaa) {
    small = "AAA";
  } else {
    small = accessibility.aa ? "AA" : "Fail";
  }

  if (accessibility.aaaLarge) {
    bold = "AAA";
    large = "AAA";
  } else {
    bold = accessibility.aaLarge ? "AA" : "Fail";
    large = bold;
  }

  return {
    small,
    bold,
    large,
  };
};

export default colorRating;
