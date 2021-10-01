import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {modalFooterStyles} from './styles';

export interface ModalFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: NonNullable<React.ReactNode>;
}
const ModalFooter = React.forwardRef<HTMLDivElement, ModalFooterProps>(
  ({children, element = 'MODAL_FOOTER', ...props}, ref) => {
    return (
      <Box {...safelySpreadBoxProps(props)} {...modalFooterStyles} as="footer" element={element} ref={ref}>
        {children}
      </Box>
    );
  }
);
ModalFooter.displayName = 'ModalFooter';

if (process.env.NODE_ENV === 'development') {
  ModalFooter.propTypes = {
    children: PropTypes.node.isRequired,
  };
}
export {ModalFooter};
