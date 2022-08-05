import * as React from 'react';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BorderWidth} from '@twilio-paste/style-props';
import type {ThProps} from './types';
import {ThPropTypes} from './proptypes';
import {THeadContext} from './THead';
import {TFootContext} from './TFoot';
import {TrContext} from './Tr';

const Th = React.forwardRef<HTMLTableCellElement, ThProps>(
  ({element = 'TH', textAlign = 'left', width, ...props}, ref) => {
    const {isTHead} = React.useContext(THeadContext);
    const {isTFoot} = React.useContext(TFootContext);
    const {isLastRow} = React.useContext(TrContext);

    let bottomBorder: BorderWidth = 'borderWidth10';
    if (isLastRow || isTFoot) {
      bottomBorder = 'borderWidth0';
    } else if (isTHead) {
      bottomBorder = 'borderWidth20';
    }

    return (
      <Box
        {...safelySpreadBoxProps(props)}
        ref={ref}
        as="th"
        borderBottomStyle="solid"
        borderBottomColor="colorBorderWeaker"
        borderBottomWidth={bottomBorder}
        element={element}
        fontSize="fontSize30"
        lineHeight="lineHeight30"
        fontWeight="fontWeightSemibold"
        paddingBottom="space40"
        paddingLeft="space50"
        paddingRight="space50"
        paddingTop="space40"
        position="relative"
        textAlign={textAlign}
        verticalAlign="inherit"
        width={width}
        wordWrap="break-word"
      />
    );
  }
);

Th.displayName = 'Th';
Th.propTypes = ThPropTypes;

export {Th};
