import * as theo from 'theo';
import {resolve} from 'path';
import {gatsbyDTSTemplate} from '../gatsby.d.ts';

theo.registerFormat('gatsby.d.ts', gatsbyDTSTemplate);

describe('gatsby declaration file formatter', () => {
  it('should return typescript definitions formatted tokens', () => {
    return theo
      .convert({
        transform: {
          type: 'web',
          file: resolve(__dirname, '../__fixtures__/index.yml'),
        },
        format: {
          // @ts-ignore Theo isn't typed for custom format types
          type: 'gatsby.d.ts',
        },
      })
      .then((dTS: string) => {
        return expect(dTS).toMatchSnapshot();
      })
      .catch((error: string) => {
        console.log(`Something  went wrong: ${error}`);
        throw new Error('[dTSFormatter test]: should return typescript definitions formatted tokens threw');
      });
  });
});
