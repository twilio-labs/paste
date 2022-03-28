import * as theo from 'theo';
import {resolve} from 'path';
import {sketchpaletteTokenFormat} from '../sketchpalette';

theo.registerFormat('sketchpalette', sketchpaletteTokenFormat);

describe('sketchPaletteTokenFormatter', () => {
  it('should return sketch palette color formatted tokens', () => {
    return theo
      .convert({
        transform: {
          type: 'web',
          file: resolve(__dirname, '../__fixtures__/colors.yml'),
        },
        format: {
          // @ts-ignore Theo isn't typed for custom format types
          type: 'sketchpalette',
        },
      })
      .then((sketchPalette: string) => {
        return expect(sketchPalette).toMatchSnapshot();
      })
      .catch((error: string) => {
        console.log(`Something  went wrong: ${error}`);
        throw new Error('[sketchpalette test]: should return sketch palette color formatted tokens threw');
      });
  });
});
