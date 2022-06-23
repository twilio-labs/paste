import {DefaultTheme} from '@twilio-paste/theme';
import {propValidator} from '../src/proptypes/utils/propValidator';

const SpaceOptions = Object.keys(DefaultTheme.space);
const isSpaceTokenProp = propValidator(SpaceOptions);

const mockComponentName = 'TestComponent';

describe('propValidator', () => {
  it('should return correctly based on passed props', (): void => {
    const mockProps = {
      marginTop: '2px', // bad
      marginRight: 'space20', // good
      marginBottom: ['space20', '0px'], // bad
      marginLeft: ['space20', 'space30'], // good
    };
    // Shorthand call function
    const run = (prop: string): Error | null => isSpaceTokenProp(mockProps, prop, mockComponentName);

    expect(run('marginTop') instanceof Error).toBe(true);
    expect(run('marginRight') == null).toBe(true);
    expect(run('marginBottom') instanceof Error).toBe(true);
    expect(run('marginLeft') == null).toBe(true);
  });
});
