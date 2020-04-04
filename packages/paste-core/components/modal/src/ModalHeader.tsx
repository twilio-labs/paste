import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {Button} from '@twilio-paste/button';
import {Flex} from '@twilio-paste/flex';
import {CloseIcon} from '@twilio-paste/icons/esm/CloseIcon';
import {useModalContext} from './ModalContext';

export interface ModalHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: NonNullable<React.ReactNode>;
}
const ModalHeader: React.FC<ModalHeaderProps> = ({children, ...props}) => {
  const {onDismiss} = useModalContext();
  return (
    <Box
      {...safelySpreadBoxProps(props)}
      as="header"
      borderBottomStyle="solid"
      borderBottomWidth="borderWidth10"
      borderBottomColor="colorBorderLight"
      padding="space50"
      flexShrink={0}
    >
      <Flex hAlignContent="between">
        <Flex vAlignContent="center" grow={1} marginRight="space70">
          {children}
        </Flex>
        <Button variant="reset" size="reset" onClick={() => onDismiss()}>
          <CloseIcon decorative={false} iconColor="colorTextWeak" size="sizeIcon60" title="Close modal" />
        </Button>
      </Flex>
    </Box>
  );
};
ModalHeader.displayName = 'ModalHeader';

if (process.env.NODE_ENV === 'development') {
  ModalHeader.propTypes = {
    children: PropTypes.node.isRequired,
  };
}
export {ModalHeader};
