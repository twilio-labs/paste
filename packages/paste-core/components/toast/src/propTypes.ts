import * as PropTypes from 'prop-types';
import {ToastVariantObject} from './constants';

export const ToastPropTypes = {
  children: PropTypes.node.isRequired,
  onDismiss: PropTypes.func,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  variant: PropTypes.oneOf(['error', 'neutral', 'success', 'warning']) as any,
};

export const ToastPortalPropTypes = {
  children: PropTypes.node.isRequired,
  // FIXME: Overrides token zIndex to fix bug with Console product.
  __console_patch: PropTypes.bool,
};

export const ToastContainerPropTypes = {
  children: PropTypes.node.isRequired,
  // FIXME: Overrides token zIndex to fix bug with Console product.
  __console_patch: PropTypes.bool,
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
  // FIXME: Overrides token zIndex to fix bug with Console product.
  __console_patch: PropTypes.bool,
};
