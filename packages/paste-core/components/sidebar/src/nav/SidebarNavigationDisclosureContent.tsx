import * as React from 'react';
import PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {DisclosurePrimitiveContent} from '@twilio-paste/disclosure-primitive';
import type {BoxProps, BoxStyleProps} from '@twilio-paste/box';
import type {DisclosurePrimitiveContentProps} from '@twilio-paste/disclosure-primitive';

import {SidebarNavigationDisclosureContext} from './SidebarNavigationDisclosureContext';

const baseContainedStyles: BoxStyleProps = {
  borderWidth: 'borderWidth10',
  borderStyle: 'solid',
  borderBottomLeftRadius: 'borderRadius20',
  borderBottomRightRadius: 'borderRadius20',
  borderTop: 'none',
  transition: 'border-color 100ms ease-out',
};

const containedStyles: BoxStyleProps = {
  ...baseContainedStyles,
  borderColor: 'colorBorderWeaker',
};

export interface SidebarNavigationDisclosureContentProps
  extends Omit<DisclosurePrimitiveContentProps, keyof BoxStyleProps>,
    Pick<BoxProps, 'element'> {
  children: NonNullable<React.ReactNode>;
}

const SidebarNavigationDisclosureContent = React.forwardRef<HTMLDivElement, SidebarNavigationDisclosureContentProps>(
  ({children, element = 'DISCLOSURE_CONTENT', visible, ...props}, ref) => {
    const {disclosure, variant} = React.useContext(SidebarNavigationDisclosureContext);

    let variantStyles: BoxStyleProps = {};
    if (variant === 'inner') {
      variantStyles = containedStyles;
    }

    return (
      <DisclosurePrimitiveContent
        {...disclosure}
        {...safelySpreadBoxProps(props)}
        as={Box}
        element={element}
        paddingLeft="space60"
        color="colorTextInverseWeak"
        ref={ref}
        {...variantStyles}
      >
        {children}
      </DisclosurePrimitiveContent>
    );
  }
);

SidebarNavigationDisclosureContent.displayName = 'SidebarNavigationDisclosureContent';
SidebarNavigationDisclosureContent.propTypes = {
  children: PropTypes.node.isRequired,
  element: PropTypes.string,
};

export {SidebarNavigationDisclosureContent};
