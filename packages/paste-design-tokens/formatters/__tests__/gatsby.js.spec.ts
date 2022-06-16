import * as theo from 'theo';
import {resolve} from 'path';
import {genericCommonJsTokenFormat} from '../generic';

theo.registerFormat('generic.js', genericCommonJsTokenFormat);

describe('generic JS formatter', () => {
  it('should return commonjs formatted tokens', () => {
    return theo
      .convert({
        transform: {
          type: 'web',
          file: resolve(__dirname, '../__fixtures__/index.yml'),
        },
        format: {
          // @ts-ignore Theo isn't typed for custom format types
          type: 'generic.js',
        },
      })
      .then((genericJS: string) => {
        return expect(genericJS).toMatchSnapshot();
      })
      .catch((error: string) => {
        console.log(`Something  went wrong: ${error}`);
        throw new Error('[es6Formatter test]: should return es6 formatted tokens');
      });
  });
});
