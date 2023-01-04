import * as React from 'react';
import PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {ErrorIcon} from '@twilio-paste/icons/esm/ErrorIcon';
import {NeutralIcon} from '@twilio-paste/icons/esm/NeutralIcon';
import {NewIcon} from '@twilio-paste/icons/esm/NewIcon';
import {ScreenReaderOnly} from '@twilio-paste/screen-reader-only';
import {SuccessIcon} from '@twilio-paste/icons/esm/SuccessIcon';
import {WarningIcon} from '@twilio-paste/icons/esm/WarningIcon';
import type {BoxStyleProps, BoxProps} from '@twilio-paste/box';
import type {GenericIconProps} from '@twilio-paste/icons/esm/types';
import {isMarginTokenProp} from '@twilio-paste/style-props';

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
  },
  error: {
    backgroundColor: 'colorBackgroundErrorWeakest',
    color: 'colorTextErrorStrong',
  },
  warning: {
    backgroundColor: 'colorBackgroundWarningWeakest',
    color: 'colorTextWarningStrong',
  },
  new: {
    backgroundColor: 'colorBackgroundNew',
    color: 'colorTextNew',
  },
  neutral: {
    backgroundColor: 'colorBackgroundNeutralWeakest',
    color: 'colorTextNeutral',
  },
};

const variantIcons: Record<CalloutVariants, React.FC<React.PropsWithChildren<GenericIconProps>>> = {
  success: SuccessIcon,
  error: ErrorIcon,
  warning: WarningIcon,
  new: NewIcon,
  neutral: NeutralIcon,
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
        padding="space70"
        borderRadius="borderRadius20"
        variant={variant}
        {...variantStyles[variant]}
      >
        <Box marginRight="space40" paddingTop="space10" element={`${element}_ICON`}>
          <IconComponent decorative />
          <ScreenReaderOnly>{iconLabel}</ScreenReaderOnly>
        </Box>
        <Box display="flex" flexDirection="column" rowGap="space30" flex="1">
          {children}
        </Box>
      </Box>
    );
  }
);

Callout.displayName = 'Callout';

Callout.propTypes = {
  children: PropTypes.node,
  element: PropTypes.string,
  variant: PropTypes.oneOf(['neutral', 'warning', 'error', 'success', 'new', 'default'] as CalloutVariants[])
    .isRequired,
  i18nLabel: PropTypes.string,
  marginY: isMarginTokenProp,
};
