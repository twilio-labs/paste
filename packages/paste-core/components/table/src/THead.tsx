import * as React from 'react';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {THeadProps} from './types';
import {THeadPropTypes} from './proptypes';

const THead = React.forwardRef<HTMLTableSectionElement, THeadProps>(
  ({element = 'THEAD', stickyHeader = false, ...props}, ref) => {
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        ref={ref}
        as="thead"
        backgroundColor="colorBackground"
        borderBottomColor="colorBorderWeaker"
        borderBottomStyle="solid"
        borderBottomWidth="borderWidth20"
        element={element}
        position={stickyHeader ? 'sticky' : null}
        top={stickyHeader ? '-1px' : null}
        zIndex={stickyHeader ? 'zIndex10' : null}
      />
    );
  }
);

THead.displayName = 'THead';

if (process.env.NODE_ENV === 'development') {
  THead.propTypes = THeadPropTypes;
}

export {THead};
