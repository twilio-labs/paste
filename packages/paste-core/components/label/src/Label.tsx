import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {MediaObject, MediaFigure, MediaBody} from '@twilio-paste/media-object';
import {Text} from '@twilio-paste/text';
import {ScreenReaderOnly} from '@twilio-paste/screen-reader-only';
import type {TextColor} from '@twilio-paste/style-props';

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

export const RequiredDot: React.FC = (props) => {
  return (
    <Box
      {...props}
      alignItems="center"
      justifyContent="center"
      as="span"
      cursor="pointer"
      display="flex"
      height="sizeIcon30"
    >
      <Box
        as="span"
        backgroundColor="colorBackgroundRequired"
        borderRadius="borderRadiusCircle"
        display="block"
        height="4px"
        width="4px"
      >
        <ScreenReaderOnly>Required: </ScreenReaderOnly>
      </Box>
    </Box>
  );
};

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({as, marginBottom, required, disabled, children, variant, ...props}, ref) => {
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
        ref={ref}
      >
        <MediaObject verticalAlign="top">
          {required && (
            <MediaFigure spacing="space20">
              <RequiredDot />
            </MediaFigure>
          )}
          <MediaBody>
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
          </MediaBody>
        </MediaObject>
      </Box>
    );
  }
);

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
