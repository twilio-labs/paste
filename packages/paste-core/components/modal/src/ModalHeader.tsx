import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {Button} from '@twilio-paste/button';
import {Flex} from '@twilio-paste/flex';
import {CloseIcon} from '@twilio-paste/icons/esm/CloseIcon';
import {useModalContext} from './ModalContext';
import {modalHeaderStyles} from './styles';

export interface ModalHeaderProps extends React.HTMLAttributes<HTMLHeadElement> {
  children: NonNullable<React.ReactNode>;
}
const ModalHeader = React.forwardRef<HTMLHeadElement, ModalHeaderProps>(({children, ...props}, ref) => {
  const {onDismiss} = useModalContext();
  return (
    <Box {...safelySpreadBoxProps(props)} as="header" {...modalHeaderStyles} ref={ref}>
      <Flex hAlignContent="between">
        <Flex vAlignContent="center" grow={1} marginRight="space70">
          {children}
        </Flex>
        <Button variant="reset" size="reset" onClick={() => onDismiss()}>
          <CloseIcon decorative={false} color="colorTextWeak" size="sizeIcon60" title="Close modal" />
        </Button>
      </Flex>
    </Box>
  );
});
ModalHeader.displayName = 'ModalHeader';

if (process.env.NODE_ENV === 'development') {
  ModalHeader.propTypes = {
    children: PropTypes.node.isRequired,
  };
}
export {ModalHeader};
