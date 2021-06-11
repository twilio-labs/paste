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

const renderToastIcon = (variant: ToastVariants): React.ReactElement => {
  switch (variant) {
    case ToastVariantObject.ERROR:
      return <ErrorIcon color="colorTextError" decorative={false} title="error: " size="sizeIcon20" />;
    case ToastVariantObject.SUCCESS:
      return <SuccessIcon color="colorTextSuccess" decorative={false} title="success: " size="sizeIcon20" />;
    case ToastVariantObject.WARNING:
      return <WarningIcon color="colorTextWarning" decorative={false} title="warning: " size="sizeIcon20" />;
    case ToastVariantObject.NEUTRAL:
    default:
      return <NeutralIcon color="colorTextNeutral" decorative={false} title="information: " size="sizeIcon20" />;
  }
};

const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
  ({children, onDismiss, variant = 'neutral', setFocus, ...props}, ref) => {
    const ToastComponent = ToastComponentVariants[variant];
    const buttonRef: React.RefObject<HTMLButtonElement> = React.useRef(null);

    React.useEffect(() => {
      if (setFocus && buttonRef.current) {
        buttonRef.current.focus({preventScroll: true});
      }
    }, [setFocus]);

    return (
      <ToastComponent role="status" variant={variant} ref={ref} {...props}>
        <MediaObject as="div">
          <MediaFigure as="div" spacing="space60">
            {renderToastIcon(variant)}
          </MediaFigure>
          <MediaBody as="div">{children}</MediaBody>
          {onDismiss && typeof onDismiss === 'function' && (
            <MediaFigure align="end" spacing="space40">
              <Button onClick={onDismiss} variant="link" ref={buttonRef} size="reset">
                <CloseIcon color="colorTextIcon" decorative={false} title="dismiss this toast" size="sizeIcon20" />
              </Button>
            </MediaFigure>
          )}
        </MediaObject>
      </ToastComponent>
    );
  }
);

Toast.displayName = 'Toast';

if (process.env.NODE_ENV === 'development') {
  Toast.propTypes = ToastPropTypes;
}

export {Toast};
