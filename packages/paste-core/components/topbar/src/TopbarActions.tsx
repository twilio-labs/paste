import * as React from 'react';
import PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxElementProps} from '@twilio-paste/box';

type Justify = 'start' | 'end';
export interface TopbarActionsProps {
  children: NonNullable<React.ReactNode>;
  element?: BoxElementProps['element'];
  justify?: Justify;
}
const TopbarActions = React.forwardRef<HTMLDivElement, TopbarActionsProps>(
  ({children, element = 'TOPBAR_ACTIONS', justify, ...props}, ref) => {
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        display="flex"
        justifyContent={justify === 'start' ? 'flex-start' : 'flex-end'}
        flexShrink={justify === 'start' ? null : 0}
        flexWrap="wrap"
        flexGrow={1}
        columnGap={justify === 'start' ? 'space30' : 'space50'}
        element={element}
        alignItems="center"
        ref={ref}
      >
        {children}
      </Box>
    );
  }
);
TopbarActions.displayName = 'TopbarActions';

TopbarActions.propTypes = {
  children: PropTypes.node.isRequired,
  element: PropTypes.string,
  justify: PropTypes.oneOf(['start', 'end'] as Justify[]),
};

export {TopbarActions};