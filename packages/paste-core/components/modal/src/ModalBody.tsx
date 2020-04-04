import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';

export interface ModalBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  children: NonNullable<React.ReactNode>;
}
const ModalBody: React.FC<ModalBodyProps> = ({children, ...props}) => {
  return (
    <Box {...safelySpreadBoxProps(props)} as="div" overflowY="auto" padding="space50" paddingBottom="space60">
      {children}
    </Box>
  );
};
ModalBody.displayName = 'ModalBody';

if (process.env.NODE_ENV === 'development') {
  ModalBody.propTypes = {
    children: PropTypes.node.isRequired,
  };
}
export {ModalBody};
