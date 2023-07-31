import * as React from 'react';
import PropTypes from 'prop-types';
import {Box} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';
import {styled, css} from '@twilio-paste/styling-library';

const StyledEditableCodeBlockWrapper = styled(Box)(
  css({
    backgroundColor: 'rgb(1, 22, 39)', // Matches the Night Owl background theme
    borderRadius: 'borderRadius20',
    overflow: 'hidden',
    borderTopWidth: 'borderWidth30',
    borderTopColor: 'colorBorderInverseWeakest',
    borderTopStyle: 'solid',
  })
);

export interface EditableCodeBlockWrapperProps {
  children?: React.ReactNode;
  element?: BoxProps['element'];
}

export const EditableCodeBlockWrapper = React.forwardRef<HTMLDivElement, EditableCodeBlockWrapperProps>(
  ({children, element = 'EDITABLE_CODE_BLOCK_WRAPPER'}, ref) => {
    return (
      <StyledEditableCodeBlockWrapper element={element} ref={ref}>
        {children}
      </StyledEditableCodeBlockWrapper>
    );
  }
);

EditableCodeBlockWrapper.displayName = 'EditableCodeBlockWrapper';

EditableCodeBlockWrapper.propTypes = {
  children: PropTypes.node,
  element: PropTypes.string,
};
