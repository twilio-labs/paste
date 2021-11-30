import * as React from 'react';
import {Button} from '@twilio-paste/button';
import {CloseIcon} from '@twilio-paste/icons/esm/CloseIcon';
import {ErrorIcon} from '@twilio-paste/icons/esm/ErrorIcon';
import {NeutralIcon} from '@twilio-paste/icons/esm/NeutralIcon';
import {SuccessIcon} from '@twilio-paste/icons/esm/SuccessIcon';
import {WarningIcon} from '@twilio-paste/icons/esm/WarningIcon';
import {MediaObject, MediaFigure, MediaBody} from '@twilio-paste/media-object';
import {ErrorToast} from './ErrorToast';
import {NeutralToast} from './NeutralToast';
import {SuccessToast} from './SuccessToast';
import {WarningToast} from './WarningToast';
import {ToastPropTypes} from './propTypes';
import type {ToastProps, ToastVariants} from './types';
import {ToastVariantObject} from './constants';

const ToastComponentVariants = {
  error: ErrorToast,
  neutral: NeutralToast,
  success: SuccessToast,
  warning: WarningToast,
};

const renderToastIcon = (variant: ToastVariants, element?: string): React.ReactElement => {
  switch (variant) {
    case ToastVariantObject.ERROR:
      return (
        <ErrorIcon
          color="colorTextIconError"
          decorative={false}
          element={`${element}_ICON`}
          title="error: "
          size="sizeIcon20"
        />
      );
    case ToastVariantObject.SUCCESS:
      return (
        <SuccessIcon
          color="colorTextIconSuccess"
          decorative={false}
          element={`${element}_ICON`}
          title="success: "
          size="sizeIcon20"
        />
      );
    case ToastVariantObject.WARNING:
      return (
        <WarningIcon
          color="colorTextIconWarning"
          decorative={false}
          element={`${element}_ICON`}
          title="warning: "
          size="sizeIcon20"
        />
      );
    case ToastVariantObject.NEUTRAL:
    default:
      return (
        <NeutralIcon
          color="colorTextIconNeutral"
          decorative={false}
          element={`${element}_ICON`}
          title="information: "
          size="sizeIcon20"
        />
      );
  }
};

const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
  ({children, onDismiss, variant = 'neutral', element = 'TOAST', setFocus, ...props}, ref) => {
    const ToastComponent = ToastComponentVariants[variant];
    const buttonRef: React.RefObject<HTMLButtonElement> = React.useRef(null);

    React.useEffect(() => {
      if (setFocus && buttonRef.current) {
        buttonRef.current.focus({preventScroll: true});
      }
    }, [setFocus]);

    return (
      <ToastComponent role="status" variant={variant} element={element} ref={ref} {...props}>
        <MediaObject as="div">
          <MediaFigure as="div" spacing="space60">
            {renderToastIcon(variant, element)}
          </MediaFigure>
          <MediaBody as="div">{children}</MediaBody>
          {onDismiss && typeof onDismiss === 'function' && (
            <MediaFigure align="end" spacing="space40">
              <Button
                onClick={onDismiss}
                variant="secondary_icon"
                ref={buttonRef}
                size="reset"
                element={`${element}_CLOSE_BUTTON`}
              >
                <CloseIcon
                  color="colorTextIcon"
                  decorative={false}
                  title="Dismiss toast"
                  size="sizeIcon20"
                  element={`${element}_CLOSE_ICON`}
                />
              </Button>
            </MediaFigure>
          )}
        </MediaObject>
      </ToastComponent>
    );
  }
);

Toast.displayName = 'Toast';

Toast.propTypes = ToastPropTypes;

export {Toast};
