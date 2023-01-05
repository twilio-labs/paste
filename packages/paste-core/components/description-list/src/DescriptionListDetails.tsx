import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';

export interface DescriptionListDetailsProps extends Omit<React.ComponentPropsWithRef<'div'>, 'children'> {
  children?: React.ReactNode;
  element?: BoxProps['element'];
}

const DescriptionListDetails = React.forwardRef<HTMLElement, DescriptionListDetailsProps>(
  ({element = 'DESCRIPTION_LIST_DETAILS', ...props}, ref) => {
    return (
      <Box as="dd" ref={ref} element={element} marginLeft="space0">
        {props.children}
      </Box>
    );
  }
);

DescriptionListDetails.displayName = 'DescriptionListDetails';

DescriptionListDetails.propTypes = {
  children: PropTypes.node,
  element: PropTypes.string,
};

export {DescriptionListDetails};
