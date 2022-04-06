import uniq from 'lodash.uniq';

// Traditional import as the color package isn't exported and typed correctly
const Color = require('color');

interface ColorObject {
  color: number[];
  model: string;
  valpha: number;
  hex: () => string;
  contrast: (color: ColorObject) => number;
}

export interface ColorCombinationAccessibility {
  aa: boolean;
  aaLarge: boolean;
  aaa: boolean;
  aaaLarge: boolean;
}

export interface ColorCombinationTypes {
  accessibility: ColorCombinationAccessibility;
  color?: number[];
  contrast: number;
  hex: string;
  model?: string;
  valpha?: number;
}

export interface ColorCombosTypes {
  color?: number[];
  combinations: ColorCombinationTypes[];
  hex: string;
  model?: string;
  valpha?: number;
  [key: number]: ColorCombosTypes;
}

interface Options {
  threshold?: number;
  compact?: boolean;
  uniq?: boolean;
}

const ColorCombos = (
  colors: string[] | {[name: string]: string},
  options: Options = {}
): ColorCombosTypes[] | false => {
  let arr: ColorObject[] = [];
  let results: ColorCombosTypes[] = [];

  const MINIMUMS: {aa: number; aaLarge: number; aaa: number; aaaLarge: number} = {
    aa: 4.5,
    aaLarge: 3,
    aaa: 7,
    aaaLarge: 4.5,
  };

  const DEFAULT_OPTIONS: Options = {
    threshold: 0,
    compact: false,
    uniq: true,
  };

  const combinedOptions = Object.assign<Options, Options>(DEFAULT_OPTIONS, options);

  if (!Array.isArray(colors)) {
    if (typeof colors === 'object') {
      arr = Object.keys(colors).map((key) => {
        if (Object.prototype.hasOwnProperty.call(colors, key)) {
          return Color(colors[key]);
        }
        return null;
      });

      if (combinedOptions.uniq) {
        arr = uniq(arr);
      }
    } else {
      console.error('Must provide an array or object');
      return false;
    }
  } else {
    let uniqueColors = colors;
    if (combinedOptions.uniq) {
      uniqueColors = uniq(colors);
    }

    if (uniqueColors != null) {
      arr = uniqueColors.map((color) => Color(color));
    }
  }

  results = arr.map((color): ColorCombosTypes => {
    const result: ColorCombosTypes = combinedOptions.compact
      ? {
          hex: '',
          combinations: [],
        }
      : {
          color: color.color,
          model: color.model,
          valpha: color.valpha,
          hex: '',
          combinations: [],
        };

    result.hex = color.hex();

    result.combinations = arr
      .filter((bg): boolean => color !== bg)
      .filter((bg): boolean => {
        if (combinedOptions.threshold != null) {
          return color.contrast(bg) > combinedOptions.threshold;
        }
        return true;
      })
      .map((bg): ColorCombinationTypes => {
        let combination: ColorCombinationTypes = combinedOptions.compact
          ? {
              accessibility: {aa: false, aaLarge: false, aaa: false, aaaLarge: false},
              hex: '',
              contrast: 0,
            }
          : {
              accessibility: {aa: false, aaLarge: false, aaa: false, aaaLarge: false},
              hex: '',
              contrast: 0,
              color: bg.color,
              model: bg.model,
              valpha: bg.valpha,
            };

        combination = Object.assign(combination, {
          hex: bg.hex(),
          contrast: color.contrast(bg),
        });

        combination.accessibility = {
          aa: combination.contrast >= MINIMUMS.aa,
          aaLarge: combination.contrast >= MINIMUMS.aaLarge,
          aaa: combination.contrast >= MINIMUMS.aaa,
          aaaLarge: combination.contrast >= MINIMUMS.aaaLarge,
        };

        return combination;
      });

    return result;
  });

  return results;
};

export default ColorCombos;
