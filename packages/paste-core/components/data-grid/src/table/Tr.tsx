import * as React from 'react';
import PropTypes from 'prop-types';
import {styled, css} from '@twilio-paste/styling-library';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxElementProps} from '@twilio-paste/box';

export interface TrProps {
  role: string;
  striped: boolean;
  selected?: boolean;
  element?: BoxElementProps['element'];
}

const StyledTr = styled.tr<TrProps>(
  css({
    '&[aria-selected=true] > td': {
      borderColor: 'colorBorderPrimaryWeaker',
    },
    '&[aria-selected=true] > th': {
      borderColor: 'colorBorderPrimaryWeaker',
    },
  })
);

export const Tr = React.forwardRef<HTMLTableRowElement, TrProps>(
  ({element = 'DATA_GRID_TR', striped, ...props}, ref) => {
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        ref={ref}
        element={element}
        // @ts-expect-error: we don't have polymorphic box typings yet
        as={StyledTr}
        aria-selected={props.selected}
        _even={{backgroundColor: striped ? 'colorBackgroundRowStriped' : 'transparent'}}
        _selected={{
          backgroundColor: 'colorBackgroundPrimaryWeakest',
        }}
      />
    );
  }
);

Tr.displayName = 'Tr';
Tr.propTypes = {
  role: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  element: PropTypes.string,
};
