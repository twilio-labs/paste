import * as theo from 'theo';
import {sketchpaletteTokenFormat} from '../sketchpalette';

theo.registerFormat('sketchpalette', sketchpaletteTokenFormat);

describe('sketchPaletteTokenFormatter', () => {
  test('should return sketch palette color formatted tokens', () => {
    theo
      .convert({
        transform: {
          type: 'web',
          file: './packages/paste-design-tokens/formatters/__fixtures__/colors.yml',
        },
        format: {
          // @ts-ignore Theo isn't typed for custom format types
          type: 'sketchpalette',
        },
      })
      .then((sketchPalette: string) => {
        expect(sketchPalette).toMatchSnapshot();
        return true;
      })
      .catch((error: string) => console.log(`Something went wrong: ${error}`));
  });
});
