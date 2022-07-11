import * as theo from 'theo';
import {resolve} from 'path';
import {commonTokenFormat} from '../common';

theo.registerFormat('common.js', commonTokenFormat);

describe('commonJSFormatter', () => {
  it('should return common.js formatted tokens', () => {
    return theo
      .convert({
        transform: {
          type: 'web',
          file: resolve(__dirname, '../__fixtures__/index.yml'),
        },
        format: {
          // @ts-ignore Theo isn't typed for custom format types
          type: 'common.js',
        },
      })
      .then((commonJS: string) => {
        return expect(commonJS).toMatchSnapshot();
      })
      .catch((error: string) => {
        console.log(`Something  went wrong: ${error}`);
        throw new Error('[commonJSFormatter test]: should return common.js formatted tokens');
      });
  });
});
