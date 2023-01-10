import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';
import {styled, css} from '@twilio-paste/styling-library';

export const StyledDescriptionListSet = styled.div(
  css({
    '& > dd:last-of-type': {
      marginBottom: 'space50',
    },
    '& > dt:last-of-type': {
      marginBottom: 'space20',
    },
  })
);

export interface DescriptionSetListProps extends Omit<React.ComponentPropsWithRef<'div'>, 'children'> {
  children?: React.ReactNode;
  element?: BoxProps['element'];
}

const DescriptionListSet = React.forwardRef<HTMLDivElement, DescriptionSetListProps>(
  ({element = 'DESCRIPTION_LIST_SET', ...props}, ref) => {
    return (
      // @ts-expect-error Use a styled component to modify the div's styles
      <Box {...safelySpreadBoxProps(props)} as={StyledDescriptionListSet} ref={ref} element={element}>
        {props.children}
      </Box>
    );
  }
);

DescriptionListSet.displayName = 'DescriptionListSet';

DescriptionListSet.propTypes = {
  children: PropTypes.node,
  element: PropTypes.string,
};

export {DescriptionListSet};
