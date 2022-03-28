import * as PropTypes from 'prop-types';

export const AnchorPropTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  rel: PropTypes.string,
  showExternal: PropTypes.bool,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tabIndex: PropTypes.oneOf([0, -1]) as any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  target: PropTypes.oneOf(['_self', '_blank', '_parent', '_top']) as any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  variant: PropTypes.oneOf(['default', 'inverse']) as any,
  /** element identifier for customization */
  element: PropTypes.string,
  i18nExternalLinkLabel: PropTypes.string,
};
