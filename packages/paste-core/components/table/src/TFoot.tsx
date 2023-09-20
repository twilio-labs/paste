import * as React from 'react';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxStyleProps} from '@twilio-paste/box';
import {styled, css} from '@twilio-paste/styling-library';

import type {TFootProps} from './types';

const footerCellStyles: BoxStyleProps = {
  borderBottomWidth: 'borderWidth0',
  borderTopWidth: 'borderWidth10',
  fontWeight: 'fontWeightSemibold',
  paddingY: 'space40',
};

const StyledTFoot = styled.tfoot<TFootProps>(
  css({
    '& > tr > td': footerCellStyles,
    '& > tr > th': footerCellStyles,
  })
);

const TFoot = React.forwardRef<HTMLTableSectionElement, TFootProps>(({element = 'TFOOT', ...props}, ref) => {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  return (
    <Box
      {...safelySpreadBoxProps(props)}
      ref={ref}
      as={StyledTFoot as any}
      backgroundColor="colorBackgroundWeak"
      color="colorTextWeak"
      element={element}
    />
  );
  /* eslint-enable @typescript-eslint/no-explicit-any */
});

TFoot.displayName = 'TFoot';

export {TFoot};
