import * as React from 'react';
import * as PropTypes from 'prop-types';
import {ValueOf} from '@twilio-paste/types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {MediaObject, MediaFigure, MediaBody} from '@twilio-paste/media-object';
import {Button} from '@twilio-paste/button';
import {CloseIcon} from '@twilio-paste/icons/esm/CloseIcon';
import {ErrorIcon} from '@twilio-paste/icons/esm/ErrorIcon';
import {NeutralIcon} from '@twilio-paste/icons/esm/NeutralIcon';
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
  NEUTRAL: 'colorBackgroundPrimaryLightest',
  WARNING: 'colorBackgroundWarningLightest',
} as const;
export const AlertBorderColors = {
  ERROR: 'colorBorderErrorLight',
  NEUTRAL: 'colorBorderNeutral',
  WARNING: 'colorBorderWarningLight',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type AlertVariants = ValueOf<typeof AlertVariants>;
// eslint-disable-next-line @typescript-eslint/no-redeclare
export type AlertBackgroundColors = ValueOf<typeof AlertBackgroundColors>;
// eslint-disable-next-line @typescript-eslint/no-redeclare
export type AlertBorderColors = ValueOf<typeof AlertBorderColors>;
// eslint-disable-next-line @typescript-eslint/no-redeclare
export type AlertRoles = ValueOf<typeof AlertRoles>;

export interface AlertProps {
  id?: never;
  className?: never;
  children: NonNullable<React.ReactNode>;
  onDismiss?: () => void;
  role?: string;
  variant: AlertVariants;
}

const renderAlertIcon = (variant: AlertVariants): React.ReactElement => {
  switch (variant) {
    case AlertVariants.ERROR:
      return <ErrorIcon color="colorTextError" decorative={false} title="error: " size="sizeIcon20" />;
    case AlertVariants.WARNING:
      return <WarningIcon color="colorTextWarning" decorative={false} title="warning: " size="sizeIcon20" />;
    case AlertVariants.NEUTRAL:
    default:
      return <NeutralIcon color="colorTextNeutral" decorative={false} title="information: " size="sizeIcon20" />;
  }
};

const Alert: React.FC<AlertProps> = ({children, onDismiss, variant, role, ...props}) => {
  return (
    <Box
      {...safelySpreadBoxProps(props)}
      backgroundColor={AlertBackgroundColors[variant.toUpperCase()]}
      borderColor={AlertBorderColors[variant.toUpperCase()]}
      borderBottomWidth="borderWidth20"
      borderBottomStyle="solid"
      paddingLeft="space60"
      paddingRight="space60"
      paddingTop="space50"
      paddingBottom="space50"
      role={role != null ? role : AlertRoles[variant.toUpperCase()]}
    >
      <MediaObject as="div">
        <MediaFigure as="div" spacing="space30">
          {renderAlertIcon(variant)}
        </MediaFigure>
        <MediaBody as="div">{children}</MediaBody>
        {onDismiss && typeof onDismiss === 'function' && (
          <MediaFigure align="end" spacing="space60">
            <Button onClick={onDismiss} variant="link" size="reset">
              <CloseIcon color="colorTextIcon" decorative={false} title="dismiss this alert" size="sizeIcon20" />
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
