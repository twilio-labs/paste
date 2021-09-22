import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';
import {MediaObject, MediaFigure, MediaBody} from '@twilio-paste/media-object';
import {ScreenReaderOnly} from '@twilio-paste/screen-reader-only';
import type {TextColor} from '@twilio-paste/style-props';

export type LabelVariants = 'default' | 'inverse';
export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement>, Pick<BoxProps, 'element'> {
  as?: 'label' | 'legend';
  children: NonNullable<React.ReactNode>;
  disabled?: boolean;
  htmlFor: string | undefined;
  marginBottom?: 'space0';
  required?: boolean;
  variant?: LabelVariants;
}

export interface RequiredDotProps {
  element?: BoxProps['element'];
}

export const RequiredDot: React.FC<RequiredDotProps> = ({element = 'REQUIRED_DOT', ...props}) => {
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
        element={element}
        height="4px"
        width="4px"
      >
        <ScreenReaderOnly>Required: </ScreenReaderOnly>
      </Box>
    </Box>
  );
};

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({as, marginBottom, required, disabled, children, variant, element = 'LABEL', ...props}, ref) => {
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
        element={element}
        fontSize="fontSize30"
        fontWeight="fontWeightBold"
        lineHeight="lineHeight30"
        color={textColor}
        cursor={disabled ? 'not-allowed' : 'pointer'}
        ref={ref}
      >
        <MediaObject verticalAlign="top">
          {required && (
            <MediaFigure spacing="space20">
              <RequiredDot element={`${element}_REQUIRED_DOT`} />
            </MediaFigure>
          )}
          <MediaBody>{children}</MediaBody>
        </MediaObject>
      </Box>
    );
  }
);

Label.displayName = 'Label';

Label.defaultProps = {
  as: 'label',
};

Label.propTypes = {
  as: PropTypes.oneOf(['label', 'legend']),
  disabled: PropTypes.bool,
  element: PropTypes.string,
  htmlFor: PropTypes.string,
  marginBottom: PropTypes.oneOf(['space0']),
  required: PropTypes.bool,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  variant: PropTypes.oneOf(['default', 'inverse']) as any,
};

export {Label};
