import * as React from 'react';
import * as PropTypes from 'prop-types';
import {ValueOf} from '@twilio-paste/types';
import {Box, BoxProps, safelySpreadBoxProps} from '@twilio-paste/box';
import {MediaObject, MediaFigure, MediaBody} from '@twilio-paste/media-object';
import {Button} from '@twilio-paste/button';
import {CloseIcon} from '@twilio-paste/icons/esm/CloseIcon';
import {ErrorIcon} from '@twilio-paste/icons/esm/ErrorIcon';
import {InformationIcon} from '@twilio-paste/icons/esm/InformationIcon';
import {WarningIcon} from '@twilio-paste/icons/esm/WarningIcon';

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
  ERROR: 'colorBackgroundErrorLightest',
  NEUTRAL: 'colorBackgroundNeutralLightest',
  WARNING: 'colorBackgroundWarningLightest',
} as const;
export const AlertBorderColors = {
  ERROR: 'colorBorderErrorLight',
  NEUTRAL: 'colorBorderNeutralLight',
  WARNING: 'colorBorderWarningLight',
} as const;

export type AlertVariants = ValueOf<typeof AlertVariants>;
export type AlertBackgroundColors = ValueOf<typeof AlertBackgroundColors>;
export type AlertBorderColors = ValueOf<typeof AlertBorderColors>;
export type AlertRoles = ValueOf<typeof AlertRoles>;

export interface AlertProps extends Pick<BoxProps, 'element'> {
  id?: never;
  className?: never;
  children: NonNullable<React.ReactNode>;
  onDismiss?: () => void;
  role?: string;
  variant: AlertVariants;
}

const renderAlertIcon = (variant: AlertVariants, element: AlertProps['element']): React.ReactElement => {
  switch (variant) {
    case AlertVariants.ERROR:
      return (
        <ErrorIcon
          element={`${element}_ICON`}
          iconColor="colorTextError"
          decorative={false}
          title="error: "
          size="sizeIcon30"
          variant={variant}
        />
      );
    case AlertVariants.WARNING:
      return (
        <WarningIcon
          element={`${element}_ICON`}
          iconColor="colorTextWarning"
          decorative={false}
          title="warning: "
          size="sizeIcon30"
          variant={variant}
        />
      );
    case AlertVariants.NEUTRAL:
    default:
      return (
        <InformationIcon
          element={`${element}_ICON`}
          iconColor="colorTextIcon"
          decorative={false}
          title="information: "
          size="sizeIcon30"
          variant={variant}
        />
      );
  }
};

const Alert: React.FC<AlertProps> = ({children, element = 'ALERT', onDismiss, variant, role, ...props}) => {
  return (
    <Box
      element={element}
      {...safelySpreadBoxProps(props)}
      backgroundColor={AlertBackgroundColors[variant.toUpperCase()]}
      borderColor={AlertBorderColors[variant.toUpperCase()]}
      borderBottomWidth="borderWidth20"
      borderBottomStyle="solid"
      paddingLeft="space70"
      paddingRight="space70"
      paddingTop="space40"
      paddingBottom="space30"
      role={role != null ? role : AlertRoles[variant.toUpperCase()]}
      variant={variant}
    >
      <MediaObject as="div">
        <MediaFigure as="div" element={`${element}_FIGURE`} spacing="space40" variant={variant}>
          {renderAlertIcon(variant, element)}
        </MediaFigure>
        <MediaBody as="div" element={`${element}_BODY`} variant={variant}>
          {children}
        </MediaBody>
        {onDismiss && typeof onDismiss === 'function' && (
          <MediaFigure align="end" element={`${element}_DISMISS`} spacing="space70" variant={variant}>
            <Button onClick={onDismiss} variant="link" size="reset">
              <CloseIcon iconColor="colorTextIcon" decorative={false} title="dismiss this alert" size="sizeIcon30" />
            </Button>
          </MediaFigure>
        )}
      </MediaObject>
    </Box>
  );
};
Alert.displayName = 'Alert';

if (process.env.NODE_ENV === 'development') {
  Alert.propTypes = {
    children: PropTypes.node.isRequired,
    onDismiss: PropTypes.func,
    role: PropTypes.string,
    variant: PropTypes.oneOf(Object.keys(AlertVariants).map(variant => AlertVariants[variant])).isRequired,
  };
}
export {Alert};
