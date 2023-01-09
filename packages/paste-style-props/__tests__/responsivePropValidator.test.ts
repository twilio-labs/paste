import PropTypes from 'prop-types';

import {ResponsiveProp} from '../src/proptypes/utils/responsivePropValidator';

const isDimensionProp = ResponsiveProp(PropTypes.oneOfType([PropTypes.string, PropTypes.number]));

const mockPropTypes = {width: isDimensionProp};
const mockComponentName = 'TestComponent';

/*
 * prop-types recommends testing with checkPropTypes and not by running the validator directly
 * https://github.com/facebook/prop-types/blob/main/README.md#proptypescheckproptypes
 */
const run = (props: Record<string, unknown>): void =>
  PropTypes.checkPropTypes(mockPropTypes, props, 'prop', mockComponentName);

describe('responsivePropValidator', () => {
  it('should return correctly based on the passed props', () => {
    const spy = jest.spyOn(console, 'error').mockImplementation(() => {});

    run({width: '100%'});
    // eslint-disable-next-line no-console
    expect(console.error).toHaveBeenCalledTimes(0);

    run({width: 50});
    // eslint-disable-next-line no-console
    expect(console.error).toHaveBeenCalledTimes(0);

    run({width: ['100%', 50]});
    // eslint-disable-next-line no-console
    expect(console.error).toHaveBeenCalledTimes(0);

    run({width: true});
    // eslint-disable-next-line no-console
    expect(console.error).toHaveBeenCalledTimes(1);
    // PropTypes.checkPropTypes only errors a message once, so need to clear it after each invalid proptype
    PropTypes.resetWarningCache();

    run({width: [true, false]});
    // eslint-disable-next-line no-console
    expect(console.error).toHaveBeenCalledTimes(2);
    // PropTypes.checkPropTypes only errors a message once, so need to clear it after each invalid proptype
    PropTypes.resetWarningCache();

    run({width: {foo: 'inherit'}});
    // eslint-disable-next-line no-console
    expect(console.error).toHaveBeenCalledTimes(3);
    // PropTypes.checkPropTypes only errors a message once, so need to clear it after each invalid proptype
    PropTypes.resetWarningCache();

    run({width: [['foo'], []]});
    // eslint-disable-next-line no-console
    expect(console.error).toHaveBeenCalledTimes(4);
    // PropTypes.checkPropTypes only errors a message once, so need to clear it after each invalid proptype
    PropTypes.resetWarningCache();

    spy.mockRestore();
  });
});
