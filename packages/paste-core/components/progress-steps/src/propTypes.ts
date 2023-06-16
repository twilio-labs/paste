import PropTypes from 'prop-types';

export const ProgressStepPropTypes = {
  children: PropTypes.node,
  element: PropTypes.string,
  href: PropTypes.string,
  as: PropTypes.oneOf(['div', 'button', 'a']),
  disabled: PropTypes.bool,
};
