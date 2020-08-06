import * as React from 'react';
import * as PropTypes from 'prop-types';
import {ValueOf} from '@twilio-paste/types';
import {Flex} from '@twilio-paste/flex';
import {Text, safelySpreadTextProps} from '@twilio-paste/text';
import {TextColor} from '@twilio-paste/style-props';
import {ErrorIcon} from '@twilio-paste/icons/esm/ErrorIcon';

export const FormHelpTextVariants = {
  DEFAULT: 'default',
  ERROR: 'error',
  ERROR_INVERSE: 'error_inverse',
  INVERSE: 'inverse',
} as const;

export type FormHelpTextVariants = ValueOf<typeof FormHelpTextVariants>;

export interface FormHelperTextProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: never;
  marginTop?: 'space0';
  style?: never;
  variant?: FormHelpTextVariants;
}

const FormHelpText: React.FC<FormHelperTextProps> = ({marginTop, children, variant, ...props}) => {
  let icon = null;
  switch (variant) {
    case FormHelpTextVariants.ERROR:
      icon = <ErrorIcon color="colorTextError" decorative size="sizeIcon20" />;
      break;
    case FormHelpTextVariants.ERROR_INVERSE:
      icon = <ErrorIcon color="colorTextErrorLight" decorative size="sizeIcon20" />;
      break;
    default:
      break;
  }

  let textColor = 'colorTextWeak' as TextColor;
  if (variant === 'error') {
    textColor = 'colorTextError';
  } else if (variant === 'error_inverse') {
    textColor = 'colorTextErrorLight';
  } else if (variant === 'inverse') {
    textColor = 'colorTextInverseWeak';
  }

  return (
    <Flex vAlignContent="center" marginTop={marginTop || 'space30'}>
      {icon}
      <Text
        {...safelySpreadTextProps(props)}
        as="div"
        color={textColor}
        fontSize="fontSize30"
        lineHeight="lineHeight30"
        marginLeft={icon ? 'space20' : undefined}
      >
        {children}
      </Text>
    </Flex>
  );
};

FormHelpText.displayName = 'FormHelpText';

if (process.env.NODE_ENV === 'development') {
  FormHelpText.propTypes = {
    marginTop: PropTypes.oneOf(['space0']),
  };
}

export {FormHelpText};
