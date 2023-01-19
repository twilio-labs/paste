import * as React from 'react';
import PropTypes from 'prop-types';
import {Label} from '@twilio-paste/label';
import type {LabelProps} from '@twilio-paste/label';

import {FileUploaderContext} from './FileUploaderContext';

export interface FileUploaderLabelProps extends Omit<React.ComponentPropsWithRef<'label'>, 'children'> {
  children: LabelProps['children'];
  element?: LabelProps['element'];
}

export const FileUploaderLabel = React.forwardRef<HTMLLabelElement, FileUploaderLabelProps>(
  ({children, element = 'FILE_UPLOADER_LABEL', ...props}, ref) => {
    const {id, disabled, required} = React.useContext(FileUploaderContext);

    return (
      <Label disabled={disabled} htmlFor={id} element={element} required={required} ref={ref} {...props}>
        {children}
      </Label>
    );
  }
);

FileUploaderLabel.displayName = 'FileUploaderLabel';

FileUploaderLabel.propTypes = {
  children: PropTypes.string.isRequired,
  element: PropTypes.string,
};
