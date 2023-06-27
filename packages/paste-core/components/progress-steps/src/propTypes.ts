import PropTypes from 'prop-types';

export const ProgressStepPropTypes = {
  as: PropTypes.oneOf(['div', 'button', 'a']).isRequired,
  children: PropTypes.node.isRequired,
  element: PropTypes.string,
  href: PropTypes.string,
  disabled: PropTypes.bool,
};
