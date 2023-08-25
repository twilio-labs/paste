import * as React from 'react';

import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';
import {MediaObject, MediaFigure, MediaBody} from '@twilio-paste/media-object';
import type {TextColor} from '@twilio-paste/style-props';
import type {HTMLPasteProps} from '@twilio-paste/types';

import {RequiredDot} from './RequiredDot';

export type LabelVariants = 'default' | 'inverse';
type LabelBaseProps = Pick<BoxProps, 'element'> & {
  children: NonNullable<React.ReactNode>;
  disabled?: boolean;
  marginBottom?: 'space0';
  required?: boolean;
  variant?: LabelVariants;
  i18nRequiredLabel?: string;
};
type LabelElementProps = HTMLPasteProps<'label'> & {
  as?: 'label';
  /**
   * You must specify the 'htmlFor' prop to associate the label with an input.
   */
  htmlFor: string | undefined;
};
type LabelLegendElementProps = HTMLPasteProps<'legend'> & {
  as?: 'legend';
  /**
   * You cannot apply htmlFor to a legend element.
   */
  htmlFor?: never;
};
type LabelDivElementProps = HTMLPasteProps<'div'> & {
  as?: 'div';
  /**
   * You cannot apply htmlFor to a div element.
   */
  htmlFor?: never;
};

export type LabelProps = LabelBaseProps & (LabelElementProps | LabelLegendElementProps | LabelDivElementProps);

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

export {Label};
