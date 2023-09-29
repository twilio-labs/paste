import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps, BoxStyleProps } from "@twilio-paste/box";
import { DisclosurePrimitiveContent } from "@twilio-paste/disclosure-primitive";
import type { DisclosurePrimitiveContentProps } from "@twilio-paste/disclosure-primitive";
import * as React from "react";

import { SidebarNavigationDisclosureContext } from "./SidebarNavigationDisclosureContext";

export interface SidebarNavigationDisclosureContentProps
  extends Omit<DisclosurePrimitiveContentProps, keyof BoxStyleProps> {
  children: NonNullable<React.ReactNode>;
  element?: BoxProps["element"];
}

const SidebarNavigationDisclosureContent = React.forwardRef<HTMLDivElement, SidebarNavigationDisclosureContentProps>(
  ({ children, element = "SIDEBAR_NAVIGATION_DISCLOSURE_CONTENT", ...props }, ref) => {
    const { disclosure } = React.useContext(SidebarNavigationDisclosureContext);

    return (
      <DisclosurePrimitiveContent
        {...disclosure}
        {...safelySpreadBoxProps(props)}
        as={Box}
        element={element}
        paddingLeft="space70"
        color="colorTextInverseWeak"
        marginTop="space20"
        ref={ref}
      >
        {children}
      </DisclosurePrimitiveContent>
    );
  },
);

SidebarNavigationDisclosureContent.displayName = "SidebarNavigationDisclosureContent";

export { SidebarNavigationDisclosureContent };
