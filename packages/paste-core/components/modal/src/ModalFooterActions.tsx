import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box} from '@twilio-paste/box';
import type {BoxElementProps} from '@twilio-paste/box';

type Justify = 'start' | 'end';
export interface ModalFooterActionsProps {
  children: NonNullable<React.ReactNode>;
  element?: BoxElementProps['element'];
  justify?: Justify;
}
const ModalFooterActions = React.forwardRef<HTMLDivElement, ModalFooterActionsProps>(
  ({children, element = 'MODAL_FOOTER_ACTIONS', justify}, ref) => {
    const count = React.Children.count(children);
    return (
      <Box
        display="flex"
        justifyContent={justify === 'start' ? 'flex-start' : 'flex-end'}
        flexShrink={justify === 'start' ? null : 0}
        flexWrap="wrap"
        flexGrow={1}
        element={element}
        alignItems="center"
        ref={ref}
      >
        {React.Children.map(children, (child, index) => {
          return (
            <Box marginRight={count !== index + 1 ? 'space50' : null} element={`${element}_CHILD`}>
              {child}
            </Box>
          );
        })}
      </Box>
    );
  }
);
ModalFooterActions.displayName = 'ModalFooterActions';

if (process.env.NODE_ENV === 'development') {
  ModalFooterActions.propTypes = {
    children: PropTypes.node.isRequired,
    justify: PropTypes.oneOf(['start', 'end'] as Justify[]),
  };
}
export {ModalFooterActions};
