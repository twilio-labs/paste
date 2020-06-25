import * as React from 'react';
import * as PropTypes from 'prop-types';
import {styled, css} from '@twilio-paste/styling-library';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {Flex} from '@twilio-paste/flex';
import {Text} from '@twilio-paste/text';
import {ScreenReaderOnly} from '@twilio-paste/screen-reader-only';

export interface FormLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: NonNullable<React.ReactNode>;
  htmlFor: string | undefined;
  as?: 'label' | 'legend';
  disabled?: boolean;
  required?: boolean;
  marginBottom?: 'space0';
  className?: never;
  style?: never;
}

// eslint-disable-next-line emotion/syntax-preference
const StyledRequiredDot = styled(Text)(
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

const FormLabel: React.FC<FormLabelProps> = ({as, marginBottom, required, disabled, children, ...props}) => {
  return (
    <Box
      {...safelySpreadBoxProps(props)}
      as={as}
      display="block"
      marginBottom={marginBottom || 'space10'}
      paddingLeft="space0"
      paddingRight="space0"
      textTransform="none"
    >
      <Flex as="span" vAlignContent="center">
        {required ? (
          <StyledRequiredDot as="span" lineHeight="lineHeight30">
            <ScreenReaderOnly>Required: </ScreenReaderOnly>
          </StyledRequiredDot>
        ) : null}
        <Text
          as="span"
          fontSize="fontSize30"
          fontWeight="fontWeightSemibold"
          lineHeight="lineHeight30"
          color={disabled ? 'colorTextWeak' : 'colorText'}
          cursor={disabled ? 'not-allowed' : 'pointer'}
        >
          {children}
        </Text>
      </Flex>
    </Box>
  );
};

FormLabel.displayName = 'FormLabel';

FormLabel.defaultProps = {
  as: 'label',
};

if (process.env.NODE_ENV === 'development') {
  FormLabel.propTypes = {
    htmlFor: PropTypes.string,
    as: PropTypes.oneOf(['label', 'legend']),
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    marginBottom: PropTypes.oneOf(['space0']),
  };
}

export {FormLabel};
