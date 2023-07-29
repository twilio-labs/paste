import * as React from 'react';
import PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';
import type {HTMLPasteProps} from '@twilio-paste/types';

interface SideModalBodyProps extends HTMLPasteProps<'div'> {
  children?: React.ReactNode;
  element?: BoxProps['element'];
}

const SideModalBody = React.forwardRef<HTMLDivElement, SideModalBodyProps>(
  ({children, element = 'SIDE_MODAL_BODY', ...props}, ref) => {
    return (
      <Box {...safelySpreadBoxProps(props)} element={element} ref={ref} overflowY="auto" padding="space90">
        {children}
      </Box>
    );
  }
);

SideModalBody.propTypes = {
  children: PropTypes.node,
  element: PropTypes.string,
};

SideModalBody.displayName = 'SideModalBody';
export {SideModalBody};
