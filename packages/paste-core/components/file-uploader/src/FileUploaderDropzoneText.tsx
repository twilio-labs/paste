import { Box, safelySpreadBoxProps } from '@twilio-paste/box';
import type { BoxProps } from '@twilio-paste/box';
import * as React from 'react';

import { FileUploaderContext } from './FileUploaderContext';

export interface FileUploaderDropzoneTextProps extends Omit<React.ComponentPropsWithRef<'div'>, 'children'> {
  children?: React.ReactNode;
  element?: BoxProps['element'];
}

export const FileUploaderDropzoneText = React.forwardRef<HTMLDivElement, FileUploaderDropzoneTextProps>(
  ({ children, element = 'FILE_UPLOADER_DROPZONE_TEXT', ...props }, ref) => {
    const { id } = React.useContext(FileUploaderContext);

    return (
      <Box
        ref={ref}
        element={element}
        {...safelySpreadBoxProps(props)}
        lineHeight="lineHeight20"
        id={`${id}-dropzone-text`}
        pointerEvents="none"
      >
        {children}
      </Box>
    );
  },
);

FileUploaderDropzoneText.displayName = 'FileUploaderDropzoneText';
