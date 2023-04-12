import * as React from 'react';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';
import {useSpring, animated} from '@twilio-paste/animation-library';
import {useTheme} from '@twilio-paste/theme';
import type {Variants} from './types';

interface StyledContentWrapperProps extends BoxProps {
  style?: any;
}

const StyledContentWrapper = React.forwardRef<HTMLDivElement, StyledContentWrapperProps>(({style, ...props}, ref) => (
  <Box {...safelySpreadBoxProps(props)} as="div" position="relative" ref={ref} style={style} />
));
StyledContentWrapper.displayName = 'StyledContentWrapper';

const AnimatedStyledContentWrapper = animated(StyledContentWrapper);

export interface PushSidebarContentWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  element?: BoxProps['element'];
  collapsed?: boolean;
  variant?: Variants;
}

export const PushSidebarContentWrapper = React.forwardRef<HTMLDivElement, PushSidebarContentWrapperProps>(
  ({collapsed = false, variant = 'default', element = 'PUSH_SIDEBAR_CONTENT_WRAPPER', children}, ref) => {
    const theme = useTheme();
    const isCompact = variant === 'compact' || variant === 'compact_inverse';

    const styles = useSpring({
      // eslint-disable-next-line unicorn/no-nested-ternary
      marginLeft: !collapsed ? theme.sizes.sizeSidebar : isCompact ? theme.sizes.sizeSidebarCompact : `0rem`,
      config: {
        mass: 0.3,
        tension: 288,
        friction: 20,
      },
    });

    return (
      <AnimatedStyledContentWrapper ref={ref} element={element} style={styles}>
        {children}
      </AnimatedStyledContentWrapper>
    );
  }
);
PushSidebarContentWrapper.displayName = 'PushSidebarContentWrapper';
