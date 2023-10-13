import type { BoxProps } from "@twilio-paste/box";
import type { Left } from "@twilio-paste/style-props";
import type { HTMLPasteProps, ValueOf } from "@twilio-paste/types";

import type { ToastVariantObject } from "./constants";

export type ToastVariants = ValueOf<typeof ToastVariantObject>;

export interface ToastProps extends HTMLPasteProps<"div">, Pick<BoxProps, "element"> {
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
  /**
   * Label for the dismiss button in a dismissable toast
   */
  i18nDismissLabel?: string;
  /**
   * Icon label text for the error variant
   */
  i18nErrorLabel?: string;
  /**
   * Icon label text for the neutral variant
   */
  i18nNeutralLabel?: string;
  /**
   * Icon label text for the success variant
   */
  i18nSuccessLabel?: string;
  /**
   * Icon label text for the warning variant
   */
  i18nWarningLabel?: string;
}

export interface ToastPortalProps extends HTMLPasteProps<"div"> {
  children: NonNullable<React.ReactNode>;
  left?: Left;
}

export interface ToastContainerProps extends HTMLPasteProps<"div"> {
  children: NonNullable<React.ReactNode>;
  left?: Left;
}

export interface ToasterToast extends Pick<ToastProps, "variant" | "setFocus" | "onDismiss"> {
  id: string;
  message: React.ReactElement | string;
  /**
   * Time in milliseconds
   */
  dismissAfter?: number;
  timeOutId?: number;
}

export interface ToasterPush extends Omit<ToasterToast, "id">, Pick<ToastProps, "onDismiss"> {
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
  pop: (id: ToasterToast["id"]) => void;
}

export interface ToasterProps extends Pick<UseToasterReturnedProps, "toasts" | "pop"> {
  left?: Left;
}
