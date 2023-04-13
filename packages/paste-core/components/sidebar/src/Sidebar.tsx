import * as React from 'react';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';
import {useSpring, animated} from '@twilio-paste/animation-library';
import {useTheme} from '@twilio-paste/theme';
import type {Variants} from './types';

interface StyledSidebarProps extends BoxProps {
  isInverse: boolean;
  style?: any;
}
const StyledSidebar = React.forwardRef<HTMLDivElement, StyledSidebarProps>(({style, isInverse, ...props}, ref) => (
  <Box
    aria-label="Main Navigation"
    {...props}
    as="nav"
    role="navigation"
    display="block"
    ref={ref}
    style={style}
    boxShadow={isInverse ? 'shadowBorderInverse' : 'shadowBorderWeaker'}
    backgroundColor={isInverse ? 'colorBackgroundInverse' : 'colorBackgroundWeak'}
    zIndex="zIndex40"
    position="fixed"
    top={0}
    left={0}
    bottom={0}
  />
));
StyledSidebar.displayName = 'StyledSidebar';

const AnimatedStyledSidebar = animated(StyledSidebar);

const getCompactSpringConfig = (collapsed: boolean, sizeSidebar: string, sizeSidebarCompact: string): any => ({
  width: collapsed ? sizeSidebarCompact : sizeSidebar,
  config: {
    mass: 0.3,
    tension: 288,
    friction: 20,
  },
});
const getHiddenSpringConfig = (collapsed: boolean): any => ({
  opacity: collapsed ? 0 : 1,
  transform: collapsed ? `translateX(-100%)` : `translateX(0%)`,
  config: {
    mass: 0.3,
    tension: 288,
    friction: 20,
  },
});

export interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  'aria-label'?: string;
  element?: BoxProps['element'];
  collapsed?: boolean;
  variant: Variants;
}

export const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(
  ({collapsed = false, variant = 'default', element = 'SIDEBAR', children, ...props}, ref) => {
    const theme = useTheme();
    const isCompact = variant === 'compact' || variant === 'compact_inverse';
    const styles = useSpring(
      isCompact
        ? getCompactSpringConfig(collapsed, theme.sizes.sizeSidebar, theme.sizes.sizeSidebarCompact)
        : getHiddenSpringConfig(collapsed)
    );

    return (
      <AnimatedStyledSidebar
        {...safelySpreadBoxProps(props)}
        ref={ref}
        element={element}
        width={isCompact && collapsed ? 'sizeSidebarCompact' : 'sizeSidebar'}
        style={styles}
        isInverse={variant === 'inverse' || variant === 'compact_inverse'}
        aria-label={props['aria-label']}
        aria-expanded={!collapsed}
      >
        {children}
      </AnimatedStyledSidebar>
    );
  }
);
Sidebar.displayName = 'Sidebar';
