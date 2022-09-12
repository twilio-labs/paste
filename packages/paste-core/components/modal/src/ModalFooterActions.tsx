import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxElementProps} from '@twilio-paste/box';

type Justify = 'start' | 'end';
export interface ModalFooterActionsProps {
  children: NonNullable<React.ReactNode>;
  element?: BoxElementProps['element'];
  justify?: Justify;
}
const ModalFooterActions = React.forwardRef<HTMLDivElement, ModalFooterActionsProps>(
  ({children, element = 'MODAL_FOOTER_ACTIONS', justify, ...props}, ref) => (
    <Box
      {...safelySpreadBoxProps(props)}
      display="flex"
      justifyContent={justify === 'start' ? 'flex-start' : 'flex-end'}
      flexShrink={justify === 'start' ? null : 0}
      flexWrap="wrap"
      flexGrow={1}
      element={element}
      alignItems="center"
      columnGap="space50"
      ref={ref}
    >
      {children}
    </Box>
  )
);
ModalFooterActions.displayName = 'ModalFooterActions';

ModalFooterActions.propTypes = {
  children: PropTypes.node.isRequired,
  element: PropTypes.string,
  justify: PropTypes.oneOf(['start', 'end'] as Justify[]),
};

export {ModalFooterActions};
