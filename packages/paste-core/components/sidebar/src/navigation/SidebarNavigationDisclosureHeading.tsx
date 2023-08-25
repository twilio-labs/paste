import * as React from 'react';

import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {ChevronDisclosureIcon} from '@twilio-paste/icons/esm/ChevronDisclosureIcon';
import {DisclosurePrimitive} from '@twilio-paste/disclosure-primitive';
import type {BoxProps} from '@twilio-paste/box';
import {useTheme} from '@twilio-paste/theme';

import {SidebarContext} from '../SidebarContext';
import {SidebarNavigationDisclosureContext} from './SidebarNavigationDisclosureContext';
import {
  sidebarNavigationLabelStyles,
  sidebarNavigationLabelNestedStyles,
  sidebarNavigationLabelSelectedStyles,
} from './styles';

export interface SidebarNavigationDisclosureHeadingProps extends React.ComponentPropsWithRef<'div'> {
  children: NonNullable<React.ReactNode>;
  element?: BoxProps['element'];
  selected?: boolean;
  icon?: React.ReactNode;
}

const StyledDisclosureHeading = React.forwardRef<HTMLDivElement, SidebarNavigationDisclosureHeadingProps>(
  ({children, element = 'SIDEBAR_NAVIGATION_DISCLOSURE_HEADING', selected, icon, ...props}, ref) => {
    const {collapsed, variant} = React.useContext(SidebarContext);
    const [shouldIconMove, setShouldIconMove] = React.useState(false);
    const {nested} = React.useContext(SidebarNavigationDisclosureContext);
    const isExpanded = props['aria-expanded'];
    const theme = useTheme();
    const isCompact = variant === 'compact';
    const [visible, setVisible] = React.useState(!isCompact ? true : !isExpanded);
    const timeout = React.useRef(0);

    React.useEffect(() => {
      clearTimeout(timeout.current);
      // If not compact mode, we don't show/hide item titles
      if (!isCompact) {
        return;
      }
      // @ts-expect-error timeout is a number
      timeout.current = setTimeout(() => {
        setVisible(!collapsed);
      }, 120);
    }, [collapsed, isCompact]);

    return (
      <Box
        {...safelySpreadBoxProps(props)}
        ref={ref}
        element={element}
        onMouseEnter={() => setShouldIconMove(true)}
        onMouseLeave={() => setShouldIconMove(false)}
        {...(nested ? sidebarNavigationLabelNestedStyles : sidebarNavigationLabelStyles)}
        {...(selected && sidebarNavigationLabelSelectedStyles)}
      >
        <Box
          as="span"
          element={`${element}_EXPAND_ICON`}
          display="flex"
          color="colorTextIconInverse"
          height="sizeIcon20"
          width="sizeIcon20"
          transition="transform 150ms ease"
          transform={`
          ${shouldIconMove ? `translateX(${theme.space.space10})` : 'translateX(0)'}
          ${isExpanded ? `rotate(90deg)` : 'rotate(0deg)'}`}
        >
          <ChevronDisclosureIcon color="inherit" decorative size="sizeIcon20" />
        </Box>
        {icon ? icon : null}
        <Box
          as="span"
          display="block"
          marginLeft="space20"
          transition="all 120ms ease"
          float={visible ? 'none' : 'left'}
          opacity={visible ? 1 : 0}
          whiteSpace={visible ? 'normal' : 'nowrap'}
        >
          {collapsed ? null : children}
        </Box>
      </Box>
    );
  }
);
StyledDisclosureHeading.displayName = 'StyledDisclosureHeading';

const SidebarNavigationDisclosureHeading = React.forwardRef<HTMLDivElement, SidebarNavigationDisclosureHeadingProps>(
  (props, ref) => {
    const {disclosure} = React.useContext(SidebarNavigationDisclosureContext);
    return <DisclosurePrimitive {...disclosure} ref={ref} {...props} as={StyledDisclosureHeading} />;
  }
);
SidebarNavigationDisclosureHeading.displayName = 'SidebarNavigationDisclosureHeading';

export {SidebarNavigationDisclosureHeading};
