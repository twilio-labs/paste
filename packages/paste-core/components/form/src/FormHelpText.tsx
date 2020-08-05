import * as React from 'react';
import * as PropTypes from 'prop-types';
import {ValueOf} from '@twilio-paste/types';
import {Flex} from '@twilio-paste/flex';
import {Text, safelySpreadTextProps} from '@twilio-paste/text';
import {ErrorIcon} from '@twilio-paste/icons/esm/ErrorIcon';

export const FormHelpTextVariants = {
  ERROR: 'error',
} as const;

export type FormHelpTextVariants = ValueOf<typeof FormHelpTextVariants>;

export interface FormHelperTextProps extends React.HTMLAttributes<HTMLDivElement> {
  marginTop?: 'space0';
  className?: never;
  style?: never;
  variant?: FormHelpTextVariants;
}

const FormHelpText: React.FC<FormHelperTextProps> = ({marginTop, children, variant, ...props}) => {
  let icon = null;
  switch (variant) {
    case FormHelpTextVariants.ERROR:
      icon = <ErrorIcon color="colorTextError" decorative />;
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
        color={variant === 'error' ? 'colorTextError' : 'colorTextWeak'}
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
