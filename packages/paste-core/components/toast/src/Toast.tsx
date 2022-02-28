import * as React from 'react';
import {Button} from '@twilio-paste/button';
import {CloseIcon} from '@twilio-paste/icons/esm/CloseIcon';
import {ErrorIcon} from '@twilio-paste/icons/esm/ErrorIcon';
import {NeutralIcon} from '@twilio-paste/icons/esm/NeutralIcon';
import {SuccessIcon} from '@twilio-paste/icons/esm/SuccessIcon';
import {WarningIcon} from '@twilio-paste/icons/esm/WarningIcon';
import {MediaObject, MediaFigure, MediaBody} from '@twilio-paste/media-object';
import {ScreenReaderOnly} from '@twilio-paste/screen-reader-only';
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
      return <ErrorIcon color="colorTextIconError" decorative element={`${element}_ICON`} size="sizeIcon20" />;
    case ToastVariantObject.SUCCESS:
      return <SuccessIcon color="colorTextIconSuccess" decorative element={`${element}_ICON`} size="sizeIcon20" />;
    case ToastVariantObject.WARNING:
      return <WarningIcon color="colorTextIconWarning" decorative element={`${element}_ICON`} size="sizeIcon20" />;
    case ToastVariantObject.NEUTRAL:
    default:
      return <NeutralIcon color="colorTextIconNeutral" decorative element={`${element}_ICON`} size="sizeIcon20" />;
  }
};

const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
  (
    {
      children,
      onDismiss,
      variant = 'neutral',
      element = 'TOAST',
      setFocus,
      i18nDismissLabel = 'Dismiss toast',
      i18nErrorLabel = '(error)',
      i18nNeutralLabel = '(information)',
      i18nSuccessLabel = '(success)',
      i18nWarningLabel = '(warning)',
      ...props
    },
    ref
  ) => {
    const ToastComponent = ToastComponentVariants[variant];
    const buttonRef: React.RefObject<HTMLButtonElement> = React.useRef(null);

    React.useEffect(() => {
      if (setFocus && buttonRef.current) {
        buttonRef.current.focus({preventScroll: true});
      }
    }, [setFocus]);

    // uses variant to return the correct i18n label prop for that variant
    const i18nVariants = {
      error: i18nErrorLabel,
      neutral: i18nNeutralLabel,
      success: i18nSuccessLabel,
      warning: i18nWarningLabel,
    };

    return (
      <ToastComponent role="status" variant={variant} element={element} ref={ref} {...props}>
        <MediaObject as="div">
          <MediaFigure as="div" spacing="space60">
            {renderToastIcon(variant, element)}
            <ScreenReaderOnly>{i18nVariants[variant]}</ScreenReaderOnly>
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
                <CloseIcon color="colorTextIcon" decorative size="sizeIcon20" element={`${element}_CLOSE_ICON`} />
                <ScreenReaderOnly>{i18nDismissLabel}</ScreenReaderOnly>
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
