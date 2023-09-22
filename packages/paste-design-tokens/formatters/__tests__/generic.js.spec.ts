import { resolve } from 'path';

import * as theo from 'theo';

import { genericJsTokenFormat } from '../generic';

theo.registerFormat('generic.js', genericJsTokenFormat);

describe('generic JS formatter', () => {
  it('should return js formatted tokens', async () => {
    return theo
      .convert({
        transform: {
          type: 'web',
          file: resolve(__dirname, '../__fixtures__/index.yml'),
        },
        format: {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore Theo isn't typed for custom format types
          type: 'generic.js',
        },
      })
      .then((genericJS: string) => {
        return expect(genericJS).toMatchSnapshot();
      })
      .catch((error: string) => {
        // eslint-disable-next-line no-console
        console.log(`Something  went wrong: ${error}`);
        throw new Error('[es6Formatter test]: should return es6 formatted tokens');
      });
  });
});
