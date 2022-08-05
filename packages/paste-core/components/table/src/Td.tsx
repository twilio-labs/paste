import * as React from 'react';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {TdProps} from './types';
import {TdPropTypes} from './proptypes';
import {TFootContext} from './TFoot';
import {TrContext} from './Tr';

const Td = React.forwardRef<HTMLTableCellElement, TdProps>(({element = 'TD', textAlign = 'left', ...props}, ref) => {
  const {isTFoot} = React.useContext(TFootContext);
  const {isLastRow} = React.useContext(TrContext);

  return (
    <Box
      {...safelySpreadBoxProps(props)}
      ref={ref}
      as="td"
      borderStyle="solid"
      borderColor="colorBorderWeaker"
      borderWidth="borderWidth0"
      borderBottomWidth={isLastRow || isTFoot ? null : 'borderWidth10'}
      borderTopWidth={isTFoot ? 'borderWidth20' : null}
      element={element}
      fontSize="fontSize30"
      lineHeight="lineHeight30"
      paddingBottom="space40"
      paddingLeft="space50"
      paddingRight="space50"
      paddingTop="space40"
      position="relative"
      textAlign={textAlign}
      verticalAlign="inherit"
      wordWrap="break-word"
    />
  );
});

Td.displayName = 'Td';
Td.propTypes = TdPropTypes;

export {Td};
