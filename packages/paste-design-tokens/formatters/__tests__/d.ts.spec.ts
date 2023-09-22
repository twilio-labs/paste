import { resolve } from 'path';

import * as theo from 'theo';

import { dTSTokenFormat } from '../d.ts';

theo.registerFormat('d.ts', dTSTokenFormat);

describe('dTSFormatter', () => {
  it('should return typescript definitions formatted tokens', async () => {
    return theo
      .convert({
        transform: {
          type: 'web',
          file: resolve(__dirname, '../__fixtures__/index.yml'),
        },
        format: {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore Theo isn't typed for custom format types
          type: 'd.ts',
        },
      })
      .then((dTS: string) => {
        return expect(dTS).toMatchSnapshot();
      })
      .catch((error: string) => {
        // eslint-disable-next-line no-console
        console.log(`Something  went wrong: ${error}`);
        throw new Error('[dTSFormatter test]: should return typescript definitions formatted tokens threw');
      });
  });
});
