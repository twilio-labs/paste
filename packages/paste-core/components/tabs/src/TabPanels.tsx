import * as React from 'react';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {isPaddingTokenProp, PaddingProps} from '@twilio-paste/style-props';

export interface TabPanelsProps extends PaddingProps {
  children: React.ReactNode;
}

const TabPanels = React.forwardRef<HTMLDivElement, TabPanelsProps>(
  ({children, padding, paddingTop, paddingBottom, paddingRight, paddingLeft, ...props}, ref) => {
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        width="100%"
        padding={padding}
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
        paddingRight={paddingRight}
        paddingLeft={paddingLeft}
        ref={ref}
      >
        {children}
      </Box>
    );
  }
);

if (process.env.NODE_ENV === 'development') {
  TabPanels.propTypes = {
    padding: isPaddingTokenProp,
    paddingTop: isPaddingTokenProp,
    paddingRight: isPaddingTokenProp,
    paddingBottom: isPaddingTokenProp,
    paddingLeft: isPaddingTokenProp,
  };
}

TabPanels.displayName = 'TabPanels';
export {TabPanels};
