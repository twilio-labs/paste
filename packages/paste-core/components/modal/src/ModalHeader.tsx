import * as React from 'react';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxElementProps} from '@twilio-paste/box';
import {Button} from '@twilio-paste/button';
import {Flex} from '@twilio-paste/flex';
import {ScreenReaderOnly} from '@twilio-paste/screen-reader-only';
import {CloseIcon} from '@twilio-paste/icons/esm/CloseIcon';
import type {HTMLPasteProps} from '@twilio-paste/types';

import {useModalContext} from './ModalContext';

export interface ModalHeaderProps extends HTMLPasteProps<'head'> {
  children: NonNullable<React.ReactNode>;
  element?: BoxElementProps['element'];
  i18nDismissLabel?: string;
}

const ModalHeader = React.forwardRef<HTMLHeadElement, ModalHeaderProps>(
  ({children, element = 'MODAL_HEADER', i18nDismissLabel = 'Close modal', ...props}, ref) => {
    const {onDismiss} = useModalContext();
    return (
      <Box {...safelySpreadBoxProps(props)} as="div" element={element} ref={ref} padding="space90" flexShrink={0}>
        <Flex hAlignContent="between">
          <Flex vAlignContent="center" grow={1} marginRight="space70">
            {children}
          </Flex>
          <Button element={`${element}_CLOSE_BUTTON`} variant="secondary_icon" size="reset" onClick={() => onDismiss()}>
            <CloseIcon element={`${element}_CLOSE_ICON`} decorative size="sizeIcon60" />
            <ScreenReaderOnly>{i18nDismissLabel}</ScreenReaderOnly>
          </Button>
        </Flex>
      </Box>
    );
  }
);
ModalHeader.displayName = 'ModalHeader';

export {ModalHeader};
