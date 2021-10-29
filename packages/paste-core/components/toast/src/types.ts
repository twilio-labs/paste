import type {BoxProps} from '@twilio-paste/box';
import type {ValueOf} from '@twilio-paste/types';
import type {ToastVariantObject} from './constants';

export type ToastVariants = ValueOf<typeof ToastVariantObject>;

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement>, Pick<BoxProps, 'element'> {
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

export interface ToastPortalProps extends React.HTMLAttributes<HTMLDivElement> {
  children: NonNullable<React.ReactNode>;
  ref?: any;
  // FIXME: Overrides token zIndex to fix bug with Console product.
  __console_patch?: boolean;
}

export interface ToastContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: NonNullable<React.ReactNode>;
  ref?: any;
  // FIXME: Overrides token zIndex to fix bug with Console product.
  __console_patch?: boolean;
}

export interface ToasterToast extends Pick<ToastProps, 'variant' | 'setFocus' | 'onDismiss'> {
  id: string;
  message: React.ReactElement | string;
  /**
   * Time in milliseconds
   */
  dismissAfter?: number;
  timeOutId?: number;
}

export interface ToasterPush extends Omit<ToasterToast, 'id'>, Pick<ToastProps, 'onDismiss'> {
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
