import * as theo from 'theo';
import {es6TokenFormat} from '../es6';

theo.registerFormat('es6.js', es6TokenFormat);

describe('es6Formatter', () => {
  test('should return es6 formatted tokens', () => {
    theo
      .convert({
        transform: {
          type: 'web',
          file: './packages/paste-design-tokens/formatters/__fixtures__/index.yml',
        },
        format: {
          // @ts-ignore Theo isn't typed for custom format types
          type: 'es6.js',
        },
      })
      .then((es6JS: string) => {
        expect(es6JS).toMatchSnapshot();
        return true;
      })
      .catch((error: string) => console.log(`Something went wrong: ${error}`));
  });
});
