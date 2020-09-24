import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {Flex} from '@twilio-paste/flex';
import {Text} from '@twilio-paste/text';
import {ScreenReaderOnly} from '@twilio-paste/screen-reader-only';
import {TextColor} from '@twilio-paste/style-props';

export type LabelVariants = 'default' | 'inverse';
export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  as?: 'label' | 'legend';
  children: NonNullable<React.ReactNode>;
  disabled?: boolean;
  htmlFor: string | undefined;
  marginBottom?: 'space0';
  required?: boolean;
  variant?: LabelVariants;
}

export const RequiredDot: React.FC = props => {
  return (
    <Box
      {...props}
      as="span"
      backgroundColor="colorBackgroundRequired"
      borderRadius="borderRadiusCircle"
      cursor="pointer"
      display="block"
      height="4px"
      lineHeight="lineHeight30"
      marginRight="space20"
      width="4px"
    >
      <ScreenReaderOnly>Required: </ScreenReaderOnly>
    </Box>
  );
};

const Label: React.FC<LabelProps> = ({as, marginBottom, required, disabled, children, variant, ...props}) => {
  let textColor = 'colorText' as TextColor;
  if (disabled && variant === 'inverse') {
    textColor = 'colorTextInverseWeak';
  } else if (disabled) {
    textColor = 'colorTextWeak';
  } else if (variant === 'inverse') {
    textColor = 'colorTextInverse';
  }
  return (
    <Box
      {...safelySpreadBoxProps(props)}
      as={as}
      // Setting a bottom border here to prevent Bootstrap's bottom border
      // on legend in Console.
      borderBottomWidth="borderWidth0"
      display="block"
      marginBottom={marginBottom || 'space20'}
      paddingLeft="space0"
      paddingRight="space0"
      textTransform="none"
    >
      <Flex as="span" vAlignContent="center">
        {required ? <RequiredDot /> : null}
        <Text
          as="span"
          fontSize="fontSize30"
          fontWeight="fontWeightSemibold"
          lineHeight="lineHeight30"
          color={textColor}
          cursor={disabled ? 'not-allowed' : 'pointer'}
        >
          {children}
        </Text>
      </Flex>
    </Box>
  );
};

Label.displayName = 'Label';

Label.defaultProps = {
  as: 'label',
};

if (process.env.NODE_ENV === 'development') {
  Label.propTypes = {
    as: PropTypes.oneOf(['label', 'legend']),
    disabled: PropTypes.bool,
    htmlFor: PropTypes.string,
    marginBottom: PropTypes.oneOf(['space0']),
    required: PropTypes.bool,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    variant: PropTypes.oneOf(['default', 'inverse']) as any,
  };
}

export {Label};
