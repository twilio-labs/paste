import * as color from 'color';
import * as Immutable from 'immutable';
import {ImmutableStyleMap} from 'theo';

interface SketchPaletteColor {
  name: string;
  red: number;
  green: number;
  blue: number;
  alpha: number;
}

interface ColorRGB {
  model: string;
  color: string[];
  valpha: string;
}

const convertToSketchPaletteColor = (input: string): {[key: string]: number} => {
  // @ts-ignore FIXME
  const convertedColor: ColorRGB = color.rgb(input);

  return {
    red: parseInt(convertedColor.color[0], 10) / 255,
    green: parseInt(convertedColor.color[1], 10) / 255,
    blue: parseInt(convertedColor.color[2], 10) / 255,
    alpha: parseInt(convertedColor.valpha, 10),
  };
};

const convertColorArray = (result: ImmutableStyleMap): SketchPaletteColor[] =>
  result
    .get('props')
    .sortBy(prop => {
      if (prop !== undefined) {
        return prop.get('name');
      }
    })
    .map(prop => {
      if (prop === undefined) return Immutable.Map();
      const value = prop.get('value');
      const name = prop.get('name');
      if (typeof value !== 'string') {
        throw new TypeError(`[SketchPallete.ts] Value must be of type "string".`);
      }
      return Immutable.Map({name}).merge(convertToSketchPaletteColor(value));
    })
    .toJS();

export const sketchpaletteTokenFormat = (result: ImmutableStyleMap): string => {
  return JSON.stringify({
    compatibleVersion: '2.0',
    pluginVersion: '2.21',
    colors: convertColorArray(result),
    gradients: [],
    images: [],
  });
};
