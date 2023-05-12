import * as React from 'react';
import PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {ChevronDisclosureIcon} from '@twilio-paste/icons/esm/ChevronDisclosureIcon';
import {DisclosurePrimitive} from '@twilio-paste/disclosure-primitive';
import type {BoxProps} from '@twilio-paste/box';
import {useTheme} from '@twilio-paste/theme';

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
}

const StyledDisclosureHeading = React.forwardRef<HTMLDivElement, SidebarNavigationDisclosureHeadingProps>(
  ({children, element = 'SIDEBAR_NAVIGATION_DISCLOSURE_HEADING', selected, ...props}, ref) => {
    const {nested} = React.useContext(SidebarNavigationDisclosureContext);
    const isExpanded = props['aria-expanded'];
    const theme = useTheme();

    return (
      <Box
        {...safelySpreadBoxProps(props)}
        ref={ref}
        element={element}
        {...(nested ? sidebarNavigationLabelNestedStyles(theme) : sidebarNavigationLabelStyles)}
        {...(selected && sidebarNavigationLabelSelectedStyles)}
      >
        <Box
          as="span"
          element={`${element}_ICON`}
          display="flex"
          color="colorTextInverseWeak"
          height="sizeIcon20"
          width="sizeIcon20"
          transition="transform 150ms ease"
          transform={isExpanded ? `rotate(90deg)` : 'rotate(0deg)'}
        >
          <ChevronDisclosureIcon color="inherit" decorative size="sizeIcon20" />
        </Box>
        {children}
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
SidebarNavigationDisclosureHeading.propTypes = {
  children: PropTypes.node,
  element: PropTypes.string,
  selected: PropTypes.bool,
};

export {SidebarNavigationDisclosureHeading};
