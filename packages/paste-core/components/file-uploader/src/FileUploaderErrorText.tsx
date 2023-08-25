import * as React from 'react';

import {HelpText} from '@twilio-paste/help-text';
import type {HelpTextProps} from '@twilio-paste/help-text';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';

import {FileUploaderContext} from './FileUploaderContext';

export interface FileUploaderErrorTextProps extends Omit<React.ComponentPropsWithRef<'div'>, 'children'> {
  children?: HelpTextProps['children'];
  element?: HelpTextProps['element'];
}

export const FileUploaderErrorText = React.forwardRef<HTMLDivElement, FileUploaderErrorTextProps>(
  ({children, element = 'FILE_UPLOADER_ERROR_TEXT', ...props}, ref) => {
    const {id} = React.useContext(FileUploaderContext);

    return (
      <Box marginTop="space50" ref={ref} element={element} {...safelySpreadBoxProps(props)} id={`${id}-error-text`}>
        <HelpText variant="error" marginTop="space0">
          {children}
        </HelpText>
      </Box>
    );
  }
);

FileUploaderErrorText.displayName = 'FileUploaderErrorText';
