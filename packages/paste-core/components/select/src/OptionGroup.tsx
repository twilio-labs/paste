import * as React from 'react';
import PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {HTMLPasteProps} from '@twilio-paste/types';

import type {Element} from './types';

export interface OptionGroupProps extends HTMLPasteProps<'optgroup'> {
  label: string;
  children: NonNullable<React.ReactNode>;
  element?: Element;
}

const OptionGroup = React.forwardRef<HTMLOptGroupElement, OptionGroupProps>(
  ({label, children, element = 'OPTION_GROUP', ...props}, ref) => (
    <Box
      ref={ref}
      label={label}
      {...safelySpreadBoxProps(props)}
      element={element}
      as="optgroup"
      backgroundColor="inherit"
      color="inherit"
      fontFamily="inherit"
      fontWeight="fontWeightMedium"
      fontStyle="normal"
      margin="space20"
    >
      {children}
    </Box>
  )
);

OptionGroup.displayName = 'OptionGroup';

if (process.env.NODE_ENV === 'development') {
  OptionGroup.propTypes = {
    label: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    element: PropTypes.string,
  };
}

export {OptionGroup};
