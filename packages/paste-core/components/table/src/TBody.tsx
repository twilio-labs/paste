import * as React from 'react';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {TBodyProps} from './types';
import {TBodyPropTypes} from './proptypes';

const TBody = React.forwardRef<HTMLTableSectionElement, TBodyProps>(({element = 'TBODY', children, ...props}, ref) => {
  const [childrenCount, validChildren] = React.useMemo(
    () => [
      React.Children.count(children),
      React.Children.toArray(children).filter((child) => React.isValidElement(child)),
    ],
    [children]
  );
  return (
    <Box {...safelySpreadBoxProps(props)} ref={ref} as="tbody" backgroundColor="colorBackgroundBody" element={element}>
      {validChildren.map((child, index) =>
        childrenCount - 1 === index
          ? React.cloneElement(child as React.ReactElement, {
              isLastRow: true,
            })
          : child
      )}
    </Box>
  );
});

TBody.displayName = 'TBody';
TBody.propTypes = TBodyPropTypes;

export {TBody};
