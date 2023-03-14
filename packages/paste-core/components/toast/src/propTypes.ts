import PropTypes from 'prop-types';

import {ToastVariantObject} from './constants';

export const ToastPropTypes = {
  children: PropTypes.node.isRequired,
  onDismiss: PropTypes.func,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  variant: PropTypes.oneOf(['error', 'neutral', 'success', 'warning']) as any,
  i18nDismissLabel: PropTypes.string,
  i18nErrorLabel: PropTypes.string,
  i18nNeutralLabel: PropTypes.string,
  i18nSuccessLabel: PropTypes.string,
  i18nWarningLabel: PropTypes.string,
};

export const ToastPortalPropTypes = {
  children: PropTypes.node.isRequired,
};

export const ToastContainerPropTypes = {
  children: PropTypes.node.isRequired,
};

export const ToasterPropTypes = {
  toasts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      message: PropTypes.node.isRequired,
      setFocus: PropTypes.bool,
      variant: PropTypes.oneOf(Object.values(ToastVariantObject)).isRequired,
    })
  ).isRequired as any,
  pop: PropTypes.func.isRequired,
};
