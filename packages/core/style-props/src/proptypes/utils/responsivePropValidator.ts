import * as PropTypes from 'prop-types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ResponsiveProp = (type: PropTypes.Validator<any>): PropTypes.Requireable<any> => {
  return PropTypes.oneOfType([type, PropTypes.arrayOf(type)]);
};
