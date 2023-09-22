import { resolve } from 'path';

import * as theo from 'theo';

import { commonTokenFormat } from '../common';

theo.registerFormat('common.js', commonTokenFormat);

describe('commonJSFormatter', () => {
  it('should return common.js formatted tokens', async () => {
    return theo
      .convert({
        transform: {
          type: 'web',
          file: resolve(__dirname, '../__fixtures__/index.yml'),
        },
        format: {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore Theo isn't typed for custom format types
          type: 'common.js',
        },
      })
      .then((commonJS: string) => {
        return expect(commonJS).toMatchSnapshot();
      })
      .catch((error: string) => {
        // eslint-disable-next-line no-console
        console.log(`Something  went wrong: ${error}`);
        throw new Error('[commonJSFormatter test]: should return common.js formatted tokens');
      });
  });
});
