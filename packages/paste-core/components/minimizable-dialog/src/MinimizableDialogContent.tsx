import * as React from 'react';
import PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';

import {MinimizableDialogContext} from './MinimizableDialogContext';

export interface MinimizableDialogContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  element?: BoxProps['element'];
}

const MinimizableDialogContent = React.forwardRef<HTMLDivElement, MinimizableDialogContentProps>(
  ({children, element = 'MINIMIZABLE_DIALOG_CONTENT', ...props}, ref) => {
    const {minimized} = React.useContext(MinimizableDialogContext);

    return (
      <Box
        {...safelySpreadBoxProps(props)}
        element={element}
        ref={ref}
        display={minimized ? 'none' : 'block'}
        borderBottomLeftRadius="borderRadius20"
        borderBottomRightRadius="borderRadius20"
      >
        {children}
      </Box>
    );
  }
);

MinimizableDialogContent.propTypes = {
  children: PropTypes.node,
  element: PropTypes.string,
};

MinimizableDialogContent.displayName = 'MinimizableDialogContent';
export {MinimizableDialogContent};
