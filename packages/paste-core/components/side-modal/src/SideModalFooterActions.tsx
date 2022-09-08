import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxElementProps, BoxStyleProps} from '@twilio-paste/box';

export interface SideModalFooterActionsProps extends React.HTMLAttributes<HTMLDivElement> {
  children: NonNullable<React.ReactNode>;
  element?: BoxElementProps['element'];
  justify?: BoxStyleProps['justifyContent'];
}

const SideModalFooterActions = React.forwardRef<HTMLDivElement, SideModalFooterActionsProps>(
  ({children, element = 'SIDE_MODAL_FOOTER_ACTIONS', justify = 'flex-end', ...props}, ref) => {
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        display="flex"
        justifyContent={justify}
        flexWrap="wrap"
        flexGrow={1}
        element={element}
        columnGap="space50"
        alignItems="center"
        ref={ref}
      >
        {children}
      </Box>
    );
  }
);

SideModalFooterActions.displayName = 'SideModalFooterActions';

SideModalFooterActions.propTypes = {
  children: PropTypes.node.isRequired,
  element: PropTypes.string,
  justify: PropTypes.oneOf([
    'start',
    'end',
    'flex-start',
    'flex-end',
    'center',
    'left',
    'right',
    'normal',
    'space-around',
    'space-between',
    'space-evenly',
    'stretch',
    'inherit',
    'initial',
    'revert',
    'unset',
  ] as BoxStyleProps['justifyContent'][]),
};

export {SideModalFooterActions};
