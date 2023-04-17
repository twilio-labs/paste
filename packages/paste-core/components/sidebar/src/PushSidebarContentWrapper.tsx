import * as React from 'react';
import {Box} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';
import {useSpring, animated} from '@twilio-paste/animation-library';
import {useTheme} from '@twilio-paste/theme';
import {useWindowSize} from '@twilio-paste/utils';
import type {Variants} from './types';

const StyledContentWrapper = React.forwardRef<HTMLDivElement, BoxProps>((props, ref) => (
  <Box {...props} as="div" position="relative" ref={ref} />
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
    const isCompact = variant === 'compact';
    const {breakpointIndex} = useWindowSize();

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
      <AnimatedStyledContentWrapper ref={ref} element={element} style={breakpointIndex === 0 ? undefined : styles}>
        {children}
      </AnimatedStyledContentWrapper>
    );
  }
);
PushSidebarContentWrapper.displayName = 'PushSidebarContentWrapper';
