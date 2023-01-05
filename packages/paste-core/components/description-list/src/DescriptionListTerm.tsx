import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';

export interface DescriptionListTermProps extends Omit<React.ComponentPropsWithRef<'div'>, 'children'> {
  children?: React.ReactNode;
  element?: BoxProps['element'];
}

const DescriptionListTerm = React.forwardRef<HTMLElement, DescriptionListTermProps>(
  ({element = 'DESCRIPTION_LIST_TERM', ...props}, ref) => {
    return (
      <Box as="dt" ref={ref} element={element} fontWeight="fontWeightSemibold">
        {props.children}
      </Box>
    );
  }
);

DescriptionListTerm.displayName = 'DescriptionListTerm';

DescriptionListTerm.propTypes = {
  children: PropTypes.node,
  element: PropTypes.string,
};

export {DescriptionListTerm};
