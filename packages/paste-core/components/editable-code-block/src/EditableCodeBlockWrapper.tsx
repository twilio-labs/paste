import * as React from 'react';
import PropTypes from 'prop-types';
import {Box} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';

export interface EditableCodeBlockWrapperProps {
  children?: React.ReactNode;
  element?: BoxProps['element'];
}

export const EditableCodeBlockWrapper = React.forwardRef<HTMLDivElement, EditableCodeBlockWrapperProps>(
  ({children, element = 'EDITABLE_CODE_BLOCK_WRAPPER'}, ref) => {
    return (
      <Box
        backgroundColor="colorBackgroundInverseStrong"
        borderRadius="borderRadius20"
        overflow="hidden"
        element={element}
        ref={ref}
      >
        {children}
      </Box>
    );
  }
);

EditableCodeBlockWrapper.displayName = 'EditableCodeBlockWrapper';

EditableCodeBlockWrapper.propTypes = {
  children: PropTypes.node,
  element: PropTypes.string,
};
