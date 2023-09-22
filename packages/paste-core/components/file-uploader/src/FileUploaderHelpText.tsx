import * as React from 'react';
import { HelpText } from '@twilio-paste/help-text';
import type { HelpTextProps } from '@twilio-paste/help-text';
import { Box, safelySpreadBoxProps } from '@twilio-paste/box';

import { FileUploaderContext } from './FileUploaderContext';

export interface FileUploaderHelpTextProps extends Omit<React.ComponentPropsWithRef<'div'>, 'children'> {
  children?: HelpTextProps['children'];
  element?: HelpTextProps['element'];
}

export const FileUploaderHelpText = React.forwardRef<HTMLDivElement, FileUploaderHelpTextProps>(
  ({ children, element = 'FILE_UPLOADER_HELP_TEXT', ...props }, ref) => {
    const { id } = React.useContext(FileUploaderContext);

    return (
      <Box ref={ref} element={element} {...safelySpreadBoxProps(props)} id={`${id}-help-text`}>
        <HelpText marginTop="space0">{children}</HelpText>
      </Box>
    );
  },
);

FileUploaderHelpText.displayName = 'FileUploaderHelpText';
