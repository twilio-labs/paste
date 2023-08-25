import * as React from 'react';

import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {ErrorIcon} from '@twilio-paste/icons/esm/ErrorIcon';
import {NeutralIcon} from '@twilio-paste/icons/esm/NeutralIcon';
import {NewIcon} from '@twilio-paste/icons/esm/NewIcon';
import {ScreenReaderOnly} from '@twilio-paste/screen-reader-only';
import {SuccessIcon} from '@twilio-paste/icons/esm/SuccessIcon';
import {WarningIcon} from '@twilio-paste/icons/esm/WarningIcon';
import type {BoxStyleProps, BoxProps} from '@twilio-paste/box';

type CalloutVariants = 'neutral' | 'warning' | 'error' | 'success' | 'new';

export interface CalloutProps extends Partial<Omit<HTMLDivElement, 'children'>> {
  children?: React.ReactNode;
  variant: CalloutVariants;
  i18nLabel?: string;
  element?: BoxProps['element'];
  marginY?: BoxStyleProps['marginY'];
}

const variantStyles: Record<CalloutVariants, BoxStyleProps> = {
  success: {
    backgroundColor: 'colorBackgroundSuccessWeakest',
    color: 'colorTextSuccess',
    borderColor: 'colorBorderSuccessWeaker',
  },
  error: {
    backgroundColor: 'colorBackgroundErrorWeakest',
    color: 'colorTextError',
    borderColor: 'colorBorderErrorWeaker',
  },
  warning: {
    backgroundColor: 'colorBackgroundWarningWeakest',
    color: 'colorTextWarningStrong',
    borderColor: 'colorBorderWarningWeaker',
  },
  new: {
    backgroundColor: 'colorBackgroundNewWeakest',
    color: 'colorTextNew',
    borderColor: 'colorBorderNewWeaker',
  },
  neutral: {
    backgroundColor: 'colorBackgroundNeutralWeakest',
    color: 'colorTextNeutral',
    borderColor: 'colorBorderNeutralWeaker',
  },
};

const variantIcons: Record<CalloutVariants, React.ReactElement> = {
  success: <SuccessIcon decorative color="colorTextIconSuccess" />,
  error: <ErrorIcon decorative color="colorTextIconError" />,
  warning: <WarningIcon decorative color="colorTextIconWarning" />,
  new: <NewIcon decorative color="colorTextIconNew" />,
  neutral: <NeutralIcon decorative color="colorTextIconNeutral" />,
};

const defaultIconLabels: Record<CalloutVariants, string> = {
  success: '(success)',
  error: '(error)',
  warning: '(warning)',
  new: '(new)',
  neutral: '(information)',
};

export const Callout = React.forwardRef<HTMLDivElement, CalloutProps>(
  ({children, variant, element = 'CALLOUT', i18nLabel, marginY, ...props}, ref) => {
    const IconComponent = variantIcons[variant];
    const iconLabel = i18nLabel ? i18nLabel : defaultIconLabels[variant];

    return (
      <Box
        {...safelySpreadBoxProps(props)}
        ref={ref}
        element={element}
        display="flex"
        marginY={marginY}
        padding="space60"
        borderStyle="solid"
        borderWidth="borderWidth10"
        borderRadius="borderRadius30"
        variant={variant}
        {...variantStyles[variant]}
      >
        <Box marginRight="space60" paddingTop="space10" element={`${element}_ICON`}>
          {IconComponent}
          <ScreenReaderOnly>{iconLabel}</ScreenReaderOnly>
        </Box>
        <Box display="flex" flexDirection="column" rowGap="space50" flex="1">
          {children}
        </Box>
      </Box>
    );
  }
);

Callout.displayName = 'Callout';
