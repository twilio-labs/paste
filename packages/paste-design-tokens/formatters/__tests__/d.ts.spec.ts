import * as theo from 'theo';
import {dTSTokenFormat} from '../d.ts';

theo.registerFormat('d.ts', dTSTokenFormat);

describe('dTSFormatter', () => {
  test('should return typescript definitions formatted tokens', () => {
    theo
      .convert({
        transform: {
          type: 'web',
          file: './packages/paste-design-tokens/formatters/__fixtures__/index.yml',
        },
        format: {
          // @ts-ignore Theo isn't typed for custom format types
          type: 'd.ts',
        },
      })
      .then((dTS: string) => {
        expect(dTS).toMatchSnapshot();
        return true;
      })
      .catch((error: string) => console.log(`Something went wrong: ${error}`));
  });
});
