import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box} from '@twilio-paste/box';
import {BackgroundColor, BorderColor} from '@twilio-paste/style-props';
import {FieldVariants} from './types';

export interface SuffixProps {
  children: NonNullable<React.ReactNode>;
  disabled?: boolean;
  variant?: FieldVariants;
}

const Suffix: React.FC<SuffixProps> = ({children, disabled, variant}) => {
  let backgroundColor = 'colorBackground' as BackgroundColor;
  let borderColor = 'colorBorderLighter' as BorderColor;
  if (disabled && variant === 'inverse') {
    backgroundColor = 'none';
    borderColor = 'colorBorderInverseDarker';
  } else if (variant === 'inverse') {
    backgroundColor = 'colorBackgroundInverseLight';
    borderColor = 'colorBorderInverse';
  }

  if (children == null) return null;
  return (
    <Box
      alignItems="flex-start"
      backgroundColor={backgroundColor}
      borderBottomRightRadius="borderRadius20"
      borderLeftColor={borderColor}
      borderLeftStyle="solid"
      borderLeftWidth="borderWidth10"
      borderTopRightRadius="borderRadius20"
      display="flex"
      lineHeight="lineHeight20"
      padding="space30"
    >
      {children}
    </Box>
  );
};

Suffix.displayName = 'Suffix';

if (process.env.NODE_ENV === 'development') {
  Suffix.propTypes = {
    children: PropTypes.node.isRequired,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    variant: PropTypes.oneOf(['default', 'inverse']) as any,
  };
}

export {Suffix};
