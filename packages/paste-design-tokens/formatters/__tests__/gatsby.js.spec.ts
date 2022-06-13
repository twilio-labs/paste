import * as theo from 'theo';
import {resolve} from 'path';
import {newGatsbyJsonTokenFormat} from '../gatsby';

theo.registerFormat('gatsby.js', newGatsbyJsonTokenFormat);

describe('gatsby JS formatter', () => {
  it('should return commonjs formatted tokens for gatsby', () => {
    return theo
      .convert({
        transform: {
          type: 'web',
          file: resolve(__dirname, '../__fixtures__/index.yml'),
        },
        format: {
          // @ts-ignore Theo isn't typed for custom format types
          type: 'gatsby.js',
        },
      })
      .then((gatsbyJs: string) => {
        return expect(gatsbyJs).toMatchSnapshot();
      })
      .catch((error: string) => {
        console.log(`Something  went wrong: ${error}`);
        throw new Error('[es6Formatter test]: should return es6 formatted tokens');
      });
  });
});
