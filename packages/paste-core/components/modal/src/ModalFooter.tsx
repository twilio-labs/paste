import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';

export interface ModalFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: NonNullable<React.ReactNode>;
}
const ModalFooter: React.FC<ModalFooterProps> = ({children, ...props}) => {
  return (
    <Box
      {...safelySpreadBoxProps(props)}
      as="footer"
      borderTopStyle="solid"
      borderTopWidth="borderWidth10"
      borderTopColor="colorBorderLighter"
      padding="space50"
      display="flex"
      flexShrink={0}
    >
      {children}
    </Box>
  );
};
ModalFooter.displayName = 'ModalFooter';

if (process.env.NODE_ENV === 'development') {
  ModalFooter.propTypes = {
    children: PropTypes.node.isRequired,
  };
}
export {ModalFooter};
