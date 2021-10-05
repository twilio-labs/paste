import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxElementProps} from '@twilio-paste/box';

export interface TrProps {
  role: string;
  selected?: boolean;
  element?: BoxElementProps['element'];
}

export const Tr = React.forwardRef<HTMLTableRowElement, TrProps>(({element = 'DATA_GRID_TR', ...props}, ref) => {
  return (
    <Box
      {...safelySpreadBoxProps(props)}
      ref={ref}
      element={element}
      as="tr"
      aria-selected={props.selected}
      borderStyle="solid"
      borderColor="colorBorderWeaker"
      borderWidth="borderWidth0"
      borderBottomWidth="borderWidth10"
      _even={{backgroundColor: 'colorBackgroundRowStriped'}}
      _last={{borderWidth: 'borderWidth0'}}
      _selected={{
        backgroundColor: 'colorBackgroundPrimaryWeakest',
        borderColor: 'colorBorderWeak',
      }}
    />
  );
});

Tr.displayName = 'Tr';
Tr.propTypes = {
  role: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  element: PropTypes.string,
};
