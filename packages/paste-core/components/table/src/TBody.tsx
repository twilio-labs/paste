import * as React from 'react';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {styled, css} from '@twilio-paste/styling-library';

import type {TBodyProps} from './types';
import {TBodyPropTypes} from './proptypes';

const StyledTBody = styled.tbody<TBodyProps>(
  css({
    backgroundColor: 'colorBackgroundBody',
    '& > tr:last-of-type > td': {
      borderBottomWidth: 'borderWidth0',
    },
  })
);

const TBody = React.forwardRef<HTMLTableSectionElement, TBodyProps>(({element = 'TBODY', children, ...props}, ref) => {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  return (
    <Box as={StyledTBody as any} {...safelySpreadBoxProps(props)} ref={ref} element={element}>
      {children}
    </Box>
  );
  /* eslint-enable @typescript-eslint/no-explicit-any */
});

TBody.displayName = 'TBody';
TBody.propTypes = TBodyPropTypes;

export {TBody};
