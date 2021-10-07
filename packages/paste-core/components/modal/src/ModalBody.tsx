import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxElementProps} from '@twilio-paste/box';
import {modalBodyStyles} from './styles';

export interface ModalBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  children: NonNullable<React.ReactNode>;
  element?: BoxElementProps['element'];
}
const ModalBody = React.forwardRef<HTMLDivElement, ModalBodyProps>(
  ({children, element = 'MODAL_BODY', ...props}, ref) => {
    return (
      <Box {...safelySpreadBoxProps(props)} {...modalBodyStyles} as="div" element={element} ref={ref}>
        {children}
      </Box>
    );
  }
);
ModalBody.displayName = 'ModalBody';

ModalBody.propTypes = {
  children: PropTypes.node.isRequired,
  element: PropTypes.string,
};

export {ModalBody};
