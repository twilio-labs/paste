import * as React from 'react';
import PropTypes from 'prop-types';
import {Heading} from '@twilio-paste/heading';
import type {HeadingProps} from '@twilio-paste/heading';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';

export interface FormSectionHeadingProps extends Omit<React.ComponentPropsWithRef<'legend'>, 'children'> {
  element?: BoxProps['element'];
  children: React.ReactNode;
  variant?: HeadingProps['variant'];
}

export const FormSectionHeading = React.forwardRef<HTMLLegendElement, FormSectionHeadingProps>(
  ({children, element = 'FORM_SECTION_HEADING', variant = 'heading40', ...props}, ref) => (
    <Box as="legend" ref={ref} {...safelySpreadBoxProps(props)} element={element} padding="space0">
      <Heading as="span" variant={variant}>
        {children}
      </Heading>
    </Box>
  )
);

FormSectionHeading.displayName = 'FormSectionHeading';

FormSectionHeading.propTypes = {
  children: PropTypes.node,
  element: PropTypes.string,
  variant: PropTypes.oneOf(['heading10', 'heading20', 'heading30', 'heading40', 'heading50', 'heading60']),
};
