import * as React from 'react';
import PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';
import {MediaObject, MediaFigure, MediaBody} from '@twilio-paste/media-object';
import type {TextColor} from '@twilio-paste/style-props';

import {RequiredDot} from './RequiredDot';

export type LabelVariants = 'default' | 'inverse';
export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement>, Pick<BoxProps, 'element'> {
  as?: 'label' | 'legend' | 'div';
  children: NonNullable<React.ReactNode>;
  disabled?: boolean;
  htmlFor: string | undefined;
  marginBottom?: 'space0';
  required?: boolean;
  variant?: LabelVariants;
  i18nRequiredLabel?: string;
}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  (
    {
      as = 'label',
      marginBottom,
      required,
      disabled,
      children,
      variant,
      element = 'LABEL',
      i18nRequiredLabel = '',
      ...props
    },
    ref
  ) => {
    let textColor = 'colorText' as TextColor;
    if (disabled && variant === 'inverse') {
      textColor = 'colorTextInverseWeaker';
    } else if (disabled) {
      textColor = 'colorTextWeak';
    } else if (variant === 'inverse') {
      textColor = 'colorTextInverse';
    }

    let cursor = 'pointer';
    if (disabled) {
      cursor = 'not-allowed';
    } else if (as === 'legend' || as === 'div') {
      cursor = 'default';
    }

    return (
      <Box
        {...safelySpreadBoxProps(props)}
        as={as}
        /*
         * Setting a bottom border here to prevent Bootstrap's bottom border
         * on legend in Console.
         */
        borderBottomWidth="borderWidth0"
        display="block"
        marginBottom={marginBottom || 'space20'}
        paddingLeft="space0"
        paddingRight="space0"
        textTransform="none"
        element={element}
        fontSize="fontSize30"
        fontWeight="fontWeightSemibold"
        lineHeight="lineHeight30"
        color={textColor}
        cursor={cursor}
        ref={ref}
      >
        <MediaObject verticalAlign="top">
          {required && (
            <MediaFigure spacing="space20">
              <RequiredDot element={`${element}_REQUIRED_DOT`} i18nLabel={i18nRequiredLabel} />
            </MediaFigure>
          )}
          <MediaBody>{children}</MediaBody>
        </MediaObject>
      </Box>
    );
  }
);

Label.displayName = 'Label';

Label.propTypes = {
  as: PropTypes.oneOf(['label', 'legend', 'div']),
  disabled: PropTypes.bool,
  element: PropTypes.string,
  htmlFor: PropTypes.string,
  marginBottom: PropTypes.oneOf(['space0']),
  required: PropTypes.bool,
  i18nRequiredLabel: PropTypes.string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  variant: PropTypes.oneOf(['default', 'inverse']) as any,
};

export {Label};
