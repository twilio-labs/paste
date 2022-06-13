import * as theo from 'theo';
import {resolve} from 'path';
import {gatsbyJsonTokenFormat} from '../gatsby.json';

theo.registerFormat('gatsby.json', gatsbyJsonTokenFormat);

describe('gatsbyJsonTokenFormat', () => {
  it('should return json formatted tokens for gatsby', () => {
    return theo
      .convert({
        transform: {
          type: 'web',
          file: resolve(__dirname, '../__fixtures__/index.yml'),
        },
        format: {
          // @ts-ignore Theo isn't typed for custom format types
          type: 'gatsby.json',
        },
      })
      .then((gatsbyJson: string) => {
        return expect(gatsbyJson).toMatchSnapshot();
      })
      .catch((error: string) => {
        console.log(`Something  went wrong: ${error}`);
        throw new Error('[es6Formatter test]: should return es6 formatted tokens');
      });
  });
});
