import { resolve } from 'path';

import * as theo from 'theo';

import { es6TokenFormat } from '../es6';

theo.registerFormat('es6.js', es6TokenFormat);

describe('es6Formatter', () => {
  it('should return es6 formatted tokens', async () => {
    return theo
      .convert({
        transform: {
          type: 'web',
          file: resolve(__dirname, '../__fixtures__/index.yml'),
        },
        format: {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore Theo isn't typed for custom format types
          type: 'es6.js',
        },
      })
      .then((es6JS: string) => {
        return expect(es6JS).toMatchSnapshot();
      })
      .catch((error: string) => {
        // eslint-disable-next-line no-console
        console.log(`Something  went wrong: ${error}`);
        throw new Error('[es6Formatter test]: should return es6 formatted tokens');
      });
  });
});
