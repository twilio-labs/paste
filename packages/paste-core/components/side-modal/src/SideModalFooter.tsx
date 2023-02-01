import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxElementProps} from '@twilio-paste/box';

export interface SideModalFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: NonNullable<React.ReactNode>;
  element?: BoxElementProps['element'];
}
const SideModalFooter = React.forwardRef<HTMLDivElement, SideModalFooterProps>(
  ({children, element = 'SIDE_MODAL_FOOTER', ...props}, ref) => {
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        as="div"
        element={element}
        ref={ref}
        borderTopStyle="solid"
        borderTopWidth="borderWidth10"
        borderTopColor="colorBorderWeak"
        padding="space50"
        display="flex"
      >
        {children}
      </Box>
    );
  }
);
SideModalFooter.displayName = 'SideModalFooter';

SideModalFooter.propTypes = {
  children: PropTypes.node.isRequired,
  element: PropTypes.string,
};

export {SideModalFooter};
