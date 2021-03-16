import * as PropTypes from 'prop-types';
import {ValueOf} from '@twilio-paste/types';
import {ToastVariantObject} from './constants';

export type ToastVariants = ValueOf<typeof ToastVariantObject>;

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  children: NonNullable<React.ReactNode>;
  /**
   * callback when user clicks the dismiss button
   */
  onDismiss?: () => void;
  /**
   * The style of toast you would like the user to see
   */
  variant: ToastVariants;
  /**
   * Use this to set focus within the toast when it is rendered
   */
  setFocus?: boolean;
}
export const ToastPropTypes = {
  children: PropTypes.node.isRequired,
  onDismiss: PropTypes.func,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  variant: PropTypes.oneOf(['error', 'neutral', 'success', 'warning']) as any,
};

export interface ToastPortalProps extends React.HTMLAttributes<HTMLDivElement> {
  children: NonNullable<React.ReactNode>;
  ref?: any;
  // FIXME: Overrides token zIndex to fix bug with Console product.
  __console_patch?: boolean;
}
export const ToastPortalPropTypes = {
  children: PropTypes.node.isRequired,
  // FIXME: Overrides token zIndex to fix bug with Console product.
  __console_patch: PropTypes.bool,
};

export interface ToastContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: NonNullable<React.ReactNode>;
  ref?: any;
  // FIXME: Overrides token zIndex to fix bug with Console product.
  __console_patch?: boolean;
}
export const ToastContainerPropTypes = {
  children: PropTypes.node.isRequired,
  // FIXME: Overrides token zIndex to fix bug with Console product.
  __console_patch: PropTypes.bool,
};

export interface ToasterToast extends Pick<ToastProps, 'variant' | 'setFocus'> {
  id: string;
  message: React.ReactElement | string;
  /**
   * Time in milliseconds
   */
  dismissAfter?: number;
  timeOutId?: number;
}

export interface ToasterPush extends Omit<ToasterToast, 'id'> {
  id?: string;
}

export interface UseToasterReturnedProps {
  /**
   * Collection of toasts to show in the toaster
   */
  toasts: ToasterToast[];
  /**
   * method used to push a toast to the toast stack
   */
  push: (toast: ToasterPush) => void;
  /**
   * method used to pop a toast from the toast stack based on it's id
   */
  pop: (id: ToasterToast['id']) => void;
}

export interface ToasterProps extends Pick<UseToasterReturnedProps, 'toasts' | 'pop'> {
  // FIXME: Overrides token zIndex to fix bug with Console product.
  __console_patch?: boolean;
}

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
