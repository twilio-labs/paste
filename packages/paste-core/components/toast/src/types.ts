import * as PropTypes from 'prop-types';
import {ValueOf} from '@twilio-paste/types';
import {ToastVariantObject} from './constants';

export type ToastVariants = ValueOf<typeof ToastVariantObject>;

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  children: NonNullable<React.ReactNode>;
  onDismiss?: () => void;
  variant: ToastVariants;
}

export interface ToastContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: NonNullable<React.ReactNode>;
}

export const ToastPropTypes = {
  children: PropTypes.node.isRequired,
  onDismiss: PropTypes.func,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  variant: PropTypes.oneOf(['error', 'neutral', 'success', 'warning']) as any,
};

export const ToastContainerPropTypes = {
  children: PropTypes.node.isRequired,
};
