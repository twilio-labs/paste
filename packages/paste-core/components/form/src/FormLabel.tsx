import * as React from 'react';
import * as PropTypes from 'prop-types';
import styled from '@emotion/styled';
import css from '@styled-system/css';
import {safelySpreadBoxProps} from '@twilio-paste/box';
import {Flex} from '@twilio-paste/flex';
import {Text} from '@twilio-paste/text';

export interface FormLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  htmlFor: string;
  disabled?: boolean;
  required?: boolean;
  marginBottom?: 'space0';
  className?: never;
  style?: never;
}

// eslint-disable-next-line emotion/syntax-preference
const StyledRequiredDot = styled(Text)(() =>
  css({
    display: 'block',
    width: '4px',
    height: '4px',
    marginRight: 'space20',
    backgroundColor: 'colorBackgroundRequired',
    borderRadius: '50%',
    cursor: 'pointer',
  })
);

const FormLabel: React.FC<FormLabelProps> = ({marginBottom, required, disabled, children, ...props}) => {
  return (
    <Flex {...safelySpreadBoxProps(props)} as="label" vAlignContent="center" marginBottom={marginBottom || 'space10'}>
      {required ? <StyledRequiredDot as="span" lineHeight="lineHeight30" /> : null}
      <Text
        as="span"
        fontSize="fontSize30"
        fontWeight="fontWeightSemibold"
        lineHeight="lineHeight30"
        textColor={disabled ? 'colorTextWeak' : 'colorText'}
        cursor="pointer"
      >
        {children}
      </Text>
    </Flex>
  );
};

FormLabel.displayName = 'FormLabel';

if (process.env.NODE_ENV === 'development') {
  FormLabel.propTypes = {
    htmlFor: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    marginBottom: PropTypes.oneOf(['space0']),
  };
}

export {FormLabel};
