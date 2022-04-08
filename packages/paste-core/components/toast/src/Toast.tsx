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

const renderToastIcon = (variant: ToastVariants, title: string, element?: string): React.ReactElement => {
  switch (variant) {
    case ToastVariantObject.ERROR:
      return (
        <ErrorIcon
          // eslint-disable-next-line react/jsx-no-literals
          color="colorTextIconError"
          decorative={false}
          title={title}
          // eslint-disable-next-line react/jsx-no-literals
          element={`${element}_ICON`}
          // eslint-disable-next-line react/jsx-no-literals
          size="sizeIcon20"
        />
      );
    case ToastVariantObject.SUCCESS:
      return (
        <SuccessIcon
          // eslint-disable-next-line react/jsx-no-literals
          color="colorTextIconSuccess"
          decorative={false}
          title={title}
          // eslint-disable-next-line react/jsx-no-literals
          element={`${element}_ICON`}
          // eslint-disable-next-line react/jsx-no-literals
          size="sizeIcon20"
        />
      );
    case ToastVariantObject.WARNING:
      return (
        <WarningIcon
          // eslint-disable-next-line react/jsx-no-literals
          color="colorTextIconWarning"
          decorative={false}
          title={title}
          // eslint-disable-next-line react/jsx-no-literals
          element={`${element}_ICON`}
          // eslint-disable-next-line react/jsx-no-literals
          size="sizeIcon20"
        />
      );
    case ToastVariantObject.NEUTRAL:
    default:
      return (
        <NeutralIcon
          // eslint-disable-next-line react/jsx-no-literals
          color="colorTextIconNeutral"
          decorative={false}
          title={title}
          // eslint-disable-next-line react/jsx-no-literals
          element={`${element}_ICON`}
          // eslint-disable-next-line react/jsx-no-literals
          size="sizeIcon20"
        />
      );
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
      <ToastComponent
        // eslint-disable-next-line react/jsx-no-literals
        role="status"
        variant={variant}
        element={element}
        ref={ref}
        {...props}
      >
        {/* eslint-disable-next-line react/jsx-no-literals */}
        <MediaObject as="div">
          {/* eslint-disable-next-line react/jsx-no-literals */}
          <MediaFigure as="div" spacing="space60">
            {renderToastIcon(variant, i18nVariants[variant], element)}
          </MediaFigure>
          {/* eslint-disable-next-line react/jsx-no-literals */}
          <MediaBody as="div">{children}</MediaBody>
          {onDismiss && typeof onDismiss === 'function' && (
            // eslint-disable-next-line react/jsx-no-literals
            <MediaFigure align="end" spacing="space40">
              <Button
                onClick={onDismiss}
                // eslint-disable-next-line react/jsx-no-literals
                variant="secondary_icon"
                ref={buttonRef}
                // eslint-disable-next-line react/jsx-no-literals
                size="reset"
                // eslint-disable-next-line react/jsx-no-literals
                element={`${element}_CLOSE_BUTTON`}
              >
                <CloseIcon
                  decorative
                  // eslint-disable-next-line react/jsx-no-literals
                  size="sizeIcon20"
                  // eslint-disable-next-line react/jsx-no-literals
                  element={`${element}_CLOSE_ICON`}
                />
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
