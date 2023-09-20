import * as React from 'react';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';

export interface FileUploaderItemsListProps extends Omit<React.ComponentPropsWithRef<'ul'>, 'children'> {
  children?: React.ReactNode;
  element?: BoxProps['element'];
}

export const FileUploaderItemsList = React.forwardRef<HTMLUListElement, FileUploaderItemsListProps>(
  ({children, element = 'FILE_UPLOADER_ITEMS_LIST', ...props}, ref) => {
    return (
      <Box
        ref={ref}
        element={element}
        as="ul"
        margin="space0"
        padding="space0"
        rowGap="space30"
        display="flex"
        flexDirection="column"
        marginTop="space40"
        {...safelySpreadBoxProps(props)}
      >
        {children}
      </Box>
    );
  }
);

FileUploaderItemsList.displayName = 'FileUploaderItemsList';
