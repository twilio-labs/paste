import * as React from 'react';
import { Box, safelySpreadBoxProps } from '@twilio-paste/box';
import type { BoxStyleProps } from '@twilio-paste/box';
import { styled, css } from '@twilio-paste/styling-library';

import type { TBodyProps } from './types';

const bodyCellStyles: BoxStyleProps = {
  borderBottomWidth: 'borderWidth0',
};

const StyledTBody = styled.tbody<TBodyProps>(
  css({
    backgroundColor: 'colorBackgroundBody',
    '& > tr:last-of-type > td': bodyCellStyles,
    '& > tr:last-of-type > th': bodyCellStyles,
  }),
);

const TBody = React.forwardRef<HTMLTableSectionElement, TBodyProps>(
  ({ element = 'TBODY', children, ...props }, ref) => {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    return (
      <Box as={StyledTBody as any} {...safelySpreadBoxProps(props)} ref={ref} element={element} color="colorText">
        {children}
      </Box>
    );
    /* eslint-enable @typescript-eslint/no-explicit-any */
  },
);

TBody.displayName = 'TBody';

export { TBody };
