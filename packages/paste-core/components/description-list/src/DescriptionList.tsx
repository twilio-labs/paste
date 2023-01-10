import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';

export interface DescriptionListProps extends Omit<React.ComponentPropsWithRef<'div'>, 'children'> {
  children?: React.ReactNode;
  element?: BoxProps['element'];
}

const DescriptionList = React.forwardRef<HTMLDListElement, DescriptionListProps>(
  ({element = 'DESCRIPTION_LIST', children, ...props}, ref) => {
    return (
      <Box {...safelySpreadBoxProps(props)} as="dl" ref={ref} element={element}>
        {children}
      </Box>
    );
  }
);

DescriptionList.displayName = 'DescriptionList';

DescriptionList.propTypes = {
  children: PropTypes.node,
  element: PropTypes.string,
};

export {DescriptionList};
