import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';

export interface ModalFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: NonNullable<React.ReactNode>;
}
const ModalFooter = React.forwardRef<HTMLDivElement, ModalFooterProps>(({children, ...props}, ref) => {
  return (
    <Box
      {...safelySpreadBoxProps(props)}
      as="footer"
      borderTopStyle="solid"
      borderTopWidth="borderWidth10"
      borderTopColor="colorBorderWeaker"
      padding="space50"
      display="flex"
      flexShrink={0}
      ref={ref}
    >
      {children}
    </Box>
  );
});
ModalFooter.displayName = 'ModalFooter';

if (process.env.NODE_ENV === 'development') {
  ModalFooter.propTypes = {
    children: PropTypes.node.isRequired,
  };
}
export {ModalFooter};
