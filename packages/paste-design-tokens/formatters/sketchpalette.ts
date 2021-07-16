import * as color from 'color';
import * as Immutable from 'immutable';
import type {ImmutableStyleMap} from 'theo';

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
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore FIXME
  const convertedColor: ColorRGB = color.rgb(input);

  return {
    red: Number.parseInt(convertedColor.color[0], 10) / 255,
    green: Number.parseInt(convertedColor.color[1], 10) / 255,
    blue: Number.parseInt(convertedColor.color[2], 10) / 255,
    alpha: Number.parseInt(convertedColor.valpha, 10),
  };
};

const convertColorArray = (result: ImmutableStyleMap): SketchPaletteColor[] =>
  (result
    .get('props')
    // eslint-disable-next-line consistent-return
    .sortBy((prop) => {
      if (prop !== undefined) {
        return prop.get('name');
      }
    })
    .map((prop) => {
      if (prop === undefined) return Immutable.Map();
      const value = prop.get('value');
      const name = prop.get('name');
      if (typeof value !== 'string') {
        throw new TypeError(`[SketchPallete.ts] Value must be of type "string".`);
      }
      return Immutable.Map({name}).merge(convertToSketchPaletteColor(value));
    })
    .toJS() as unknown) as SketchPaletteColor[];

export const sketchpaletteTokenFormat = (result: ImmutableStyleMap): string => {
  return JSON.stringify({
    compatibleVersion: '2.0',
    pluginVersion: '2.21',
    colors: convertColorArray(result),
    gradients: [],
    images: [],
  });
};
