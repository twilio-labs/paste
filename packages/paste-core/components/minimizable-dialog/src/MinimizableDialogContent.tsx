import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';

import {MinimizableDialogContext} from './MinimizableDialogContext';

interface MinimizableDialogContentProps extends Partial<Omit<HTMLDivElement, 'children'>> {
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
        margin={minimized ? 'space0' : 'space70'}
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
