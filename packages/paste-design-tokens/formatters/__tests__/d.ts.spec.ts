import * as theo from 'theo';
import {resolve} from 'path';
import {dTSTokenFormat} from '../d.ts';

theo.registerFormat('d.ts', dTSTokenFormat);

describe('dTSFormatter', () => {
  it('should return typescript definitions formatted tokens', () => {
    return theo
      .convert({
        transform: {
          type: 'web',
          file: resolve(__dirname, '../__fixtures__/index.yml'),
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
