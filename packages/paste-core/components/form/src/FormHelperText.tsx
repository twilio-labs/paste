import * as React from 'react';
import * as PropTypes from 'prop-types';
import {ValueOf} from '@twilio-paste/types';
import {Flex} from '@twilio-paste/flex';
import {Text, safelySpreadTextProps} from '@twilio-paste/text';
import {ErrorIcon} from '@twilio-paste/icons/esm/ErrorIcon';

export const FormHelperTextVariants = {
  ERROR: 'error',
} as const;

export type FormHelperTextVariants = ValueOf<typeof FormHelperTextVariants>;

export interface FormHelperTextProps extends React.HTMLAttributes<''> {
  marginTop?: 'space0';
  className?: never;
  style?: never;
  variant?: FormHelperTextVariants;
}

const FormHelperText: React.FC<FormHelperTextProps> = ({marginTop, children, variant, ...props}) => {
  let icon = null;
  switch (variant) {
    case FormHelperTextVariants.ERROR:
      icon = <ErrorIcon iconColor="colorTextError" decorative />;
      break;
    default:
      break;
  }

  return (
    <Flex vAlignContent="center" marginTop={marginTop || 'space20'}>
      {icon}
      <Text
        {...safelySpreadTextProps(props)}
        as="div"
        fontSize="fontSize30"
        lineHeight="lineHeight30"
        textColor={variant === 'error' ? 'colorTextError' : 'colorTextWeak'}
        marginLeft={icon ? 'space10' : undefined}
      >
        {children}
      </Text>
    </Flex>
  );
};

FormHelperText.displayName = 'FormHelperText';

FormHelperText.propTypes = {
  marginTop: PropTypes.oneOf(['space0']),
};

export {FormHelperText};
