import * as React from 'react';
import PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxProps, BoxStyleProps} from '@twilio-paste/box';

type InlineCodeVariants = 'default' | 'minimal';

export interface InlineCodeProps extends Partial<Omit<HTMLDivElement, 'children'>> {
  children: string;
  element?: BoxProps['element'];
  variant?: InlineCodeVariants;
}

const variantStyles: Record<InlineCodeVariants, BoxStyleProps> = {
  default: {
    color: 'colorTextPrimaryStronger',
    backgroundColor: 'colorBackgroundPrimaryWeakest',
    borderColor: 'colorBorderPrimaryWeaker',
  },
  minimal: {
    color: 'colorTextWeak',
    backgroundColor: 'colorBackgroundWeak',
    borderColor: 'colorBorderWeak',
  },
};

const InlineCode = React.forwardRef<HTMLDivElement, InlineCodeProps>(
  ({children, element = 'INLINE_CODE', variant = 'default', ...props}, ref) => {
    return (
      <Box
        as="code"
        element={element}
        variant={variant}
        {...safelySpreadBoxProps(props)}
        borderWidth="borderWidth10"
        borderStyle="solid"
        borderRadius="borderRadius20"
        fontFamily="fontFamilyCode"
        fontSize="inherit"
        lineHeight="inherit"
        paddingX="space20"
        {...variantStyles[variant]}
        ref={ref}
      >
        {children}
      </Box>
    );
  }
);

InlineCode.displayName = 'InlineCode';

InlineCode.propTypes = {
  children: PropTypes.string.isRequired,
  element: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'minimal']),
};

export {InlineCode};
