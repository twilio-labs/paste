import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box, BoxProps, safelySpreadBoxProps} from '@twilio-paste/box';

export interface ModalBodyProps extends React.HTMLAttributes<HTMLDivElement>, Pick<BoxProps, 'element'> {
  children: NonNullable<React.ReactNode>;
}
const ModalBody: React.FC<ModalBodyProps> = ({children, element = 'MODAL_BODY', ...props}) => {
  return (
    <Box
      {...safelySpreadBoxProps(props)}
      as="div"
      element={element}
      overflowY="auto"
      padding="space50"
      paddingBottom="space60"
    >
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
