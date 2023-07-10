import * as React from 'react';
import PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';

export interface TopbarProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  element?: BoxProps['element'];
  topbarSkipLinkID: string;
}

export const Topbar = React.forwardRef<HTMLDivElement, TopbarProps>(
  ({element = 'TOPBAR', topbarSkipLinkID, children, ...props}, ref) => {
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        id={topbarSkipLinkID}
        ref={ref}
        element={element}
        width="100%"
        minHeight="sizeTopbar"
        backgroundColor="colorBackgroundWeak"
        borderBottomWidth="borderWidth10"
        borderBottomStyle="solid"
        borderBottomColor="colorBorderWeaker"
        paddingX="space70"
        paddingY="space60"
        position="sticky"
        top="0"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        zIndex="zIndex10"
      >
        {children}
      </Box>
    );
  }
);
Topbar.displayName = 'Topbar';

Topbar.propTypes = {
  children: PropTypes.node.isRequired,
  element: PropTypes.string,
  topbarSkipLinkID: PropTypes.string.isRequired,
};
