import * as React from 'react';
import type {BoxProps} from '@twilio-paste/box';
import type {HTMLPasteProps, ValueOf} from '@twilio-paste/types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {MediaObject, MediaFigure, MediaBody} from '@twilio-paste/media-object';
import {Button} from '@twilio-paste/button';
import {ScreenReaderOnly} from '@twilio-paste/screen-reader-only';
import {CloseIcon} from '@twilio-paste/icons/esm/CloseIcon';
import {ErrorIcon} from '@twilio-paste/icons/esm/ErrorIcon';
import {NeutralIcon} from '@twilio-paste/icons/esm/NeutralIcon';
import {WarningIcon} from '@twilio-paste/icons/esm/WarningIcon';

type AlertVariantKeys = 'ERROR' | 'NEUTRAL' | 'WARNING';

export const AlertRoles = {
  ERROR: 'alert',
  NEUTRAL: 'status',
  WARNING: 'alert',
} as const;
export const AlertVariants = {
  ERROR: 'error',
  NEUTRAL: 'neutral',
  WARNING: 'warning',
} as const;
export const AlertBackgroundColors = {
  ERROR: 'colorBackgroundErrorWeakest',
  NEUTRAL: 'colorBackgroundNeutralWeakest',
  WARNING: 'colorBackgroundWarningWeakest',
} as const;
export const AlertTextColors = {
  ERROR: 'colorTextError',
  NEUTRAL: 'colorTextNeutral',
  WARNING: 'colorTextWarningStrong',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type AlertVariants = ValueOf<typeof AlertVariants>;
// eslint-disable-next-line @typescript-eslint/no-redeclare
export type AlertBackgroundColors = ValueOf<typeof AlertBackgroundColors>;
// eslint-disable-next-line @typescript-eslint/no-redeclare
export type AlertRoles = ValueOf<typeof AlertRoles>;
// eslint-disable-next-line @typescript-eslint/no-redeclare
export type AlertTextColors = ValueOf<typeof AlertTextColors>;

export interface AlertProps extends HTMLPasteProps<'div'>, Pick<BoxProps, 'element'> {
  children: NonNullable<React.ReactNode>;
  onDismiss?: () => void;
  role?: string;
  variant: AlertVariants;
  i18nDismissLabel?: string;
  i18nErrorLabel?: string;
  i18nNeutralLabel?: string;
  i18nWarningLabel?: string;
}

const renderAlertIcon = (variant: AlertVariants, element: string, title: string): React.ReactElement => {
  switch (variant) {
    case AlertVariants.ERROR:
      return (
        <ErrorIcon
          element={`${element}_ICON`}
          color="colorTextIconError"
          decorative={false}
          title={title}
          size="sizeIcon20"
        />
      );
    case AlertVariants.WARNING:
      return (
        <WarningIcon
          element={`${element}_ICON`}
          color="colorTextIconWarning"
          decorative={false}
          title={title}
          size="sizeIcon20"
        />
      );
    case AlertVariants.NEUTRAL:
    default:
      return (
        <NeutralIcon
          element={`${element}_ICON`}
          color="colorTextIconNeutral"
          decorative={false}
          title={title}
          size="sizeIcon20"
        />
      );
  }
};

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      children,
      onDismiss,
      variant,
      role,
      element = 'ALERT',
      i18nDismissLabel = 'Dismiss alert',
      i18nErrorLabel = '(error)',
      i18nNeutralLabel = '(information)',
      i18nWarningLabel = '(warning)',
      ...props
    },
    ref
  ) => {
    const i18nLabelVariantMap = {
      error: i18nErrorLabel,
      neutral: i18nNeutralLabel,
      warning: i18nWarningLabel,
    };

    return (
      <Box
        {...safelySpreadBoxProps(props)}
        backgroundColor={AlertBackgroundColors[variant.toUpperCase() as AlertVariantKeys]}
        paddingLeft="space60"
        paddingRight="space60"
        paddingTop="space60"
        paddingBottom="space60"
        element={element}
        variant={variant}
        ref={ref}
        role={role != null ? role : AlertRoles[variant.toUpperCase() as AlertVariantKeys]}
      >
        <MediaObject as="div">
          <MediaFigure as="div" spacing="space30">
            {renderAlertIcon(variant, element, i18nLabelVariantMap[variant])}
          </MediaFigure>
          <MediaBody as="div">
            <Box color={AlertTextColors[variant.toUpperCase() as AlertVariantKeys]}>{children}</Box>
          </MediaBody>
          {onDismiss && typeof onDismiss === 'function' && (
            <MediaFigure align="end" spacing="space60">
              <Button onClick={onDismiss} variant="secondary_icon" size="reset" element={`${element}_DISMISS_BUTTON`}>
                <CloseIcon element={`${element}_DISMISS_ICON`} decorative size="sizeIcon20" />
                <ScreenReaderOnly>{i18nDismissLabel}</ScreenReaderOnly>
              </Button>
            </MediaFigure>
          )}
        </MediaObject>
      </Box>
    );
  }
);
Alert.displayName = 'Alert';

export {Alert};
