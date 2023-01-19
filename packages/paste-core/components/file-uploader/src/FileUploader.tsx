import * as React from 'react';
import PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';
import {useUID} from '@twilio-paste/uid-library';

import {FileUploaderContext} from './FileUploaderContext';

export interface FileUploaderProps extends Omit<React.ComponentPropsWithRef<'div'>, 'children' | 'onChange'> {
  children?: React.ReactNode;
  element?: BoxProps['element'];
  disabled?: boolean;
  id?: string;
  name: string;
  required?: boolean;
}

export const FileUploader = React.forwardRef<HTMLDivElement, FileUploaderProps>(
  ({element = 'FILE_UPLOADER', disabled, id: idProp, name, required = false, ...props}, ref) => {
    const id = idProp ? idProp : useUID();

    return (
      <FileUploaderContext.Provider value={{disabled, id, name, required}}>
        <Box ref={ref} element={element} {...safelySpreadBoxProps(props)} maxWidth="size60">
          {props.children}
        </Box>
      </FileUploaderContext.Provider>
    );
  }
);

FileUploader.displayName = 'FileUploader';

FileUploader.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  element: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
};
