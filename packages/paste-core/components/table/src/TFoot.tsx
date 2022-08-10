import * as React from 'react';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {styled, css} from '@twilio-paste/styling-library';
import type {TFootProps} from './types';
import {TFootPropTypes} from './proptypes';

const StyledTFoot = styled.tfoot<TFootProps>(
  css({
    '& > tr > td': {
      borderBottomWidth: 'borderWidth0',
      borderTopWidth: 'borderWidth20',
    },
    '& > tr > th': {
      borderBottomWidth: 'borderWidth0',
    },
  })
);

const TFoot = React.forwardRef<HTMLTableSectionElement, TFootProps>(({element = 'TFOOT', ...props}, ref) => {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  return (
    <Box
      {...safelySpreadBoxProps(props)}
      ref={ref}
      as={StyledTFoot as any}
      backgroundColor="colorBackground"
      borderTopStyle="solid"
      borderTopWidth="borderWidth20"
      borderTopColor="colorBorderWeaker"
      element={element}
    />
  );
  /* eslint-enable @typescript-eslint/no-explicit-any */
});

TFoot.displayName = 'TFoot';
TFoot.propTypes = TFootPropTypes;

export {TFoot};
