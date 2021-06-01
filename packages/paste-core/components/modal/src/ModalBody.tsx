import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {modalBodyStyles} from './styles';

export interface ModalBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  children: NonNullable<React.ReactNode>;
}
const ModalBody = React.forwardRef<HTMLDivElement, ModalBodyProps>(({children, ...props}, ref) => {
  return (
    <Box {...safelySpreadBoxProps(props)} {...modalBodyStyles} as="div" ref={ref}>
      {children}
    </Box>
  );
});
ModalBody.displayName = 'ModalBody';

if (process.env.NODE_ENV === 'development') {
  ModalBody.propTypes = {
    children: PropTypes.node.isRequired,
  };
}
export {ModalBody};
