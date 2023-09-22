import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import { useDisclosurePrimitiveState } from "@twilio-paste/disclosure-primitive";
import type { DisclosurePrimitiveInitialState } from "@twilio-paste/disclosure-primitive";
import * as React from "react";

import { SidebarContext } from "../SidebarContext";
import { SidebarNavigationDisclosureContext } from "./SidebarNavigationDisclosureContext";
import type { SidebarNavigationDisclosureInitialState, SidebarNavigationDisclosureStateReturn } from "./types";

export interface DisclosureProps extends DisclosurePrimitiveInitialState {
  children: NonNullable<React.ReactNode>;
  state?: SidebarNavigationDisclosureStateReturn;
  element?: BoxProps["element"];
}

const SidebarNavigationDisclosure = React.forwardRef<HTMLDivElement, DisclosureProps>(
  ({ children, element = "SIDEBAR_NAVIGATION_DISCLOSURE", state, ...props }, ref) => {
    const { collapsed } = React.useContext(SidebarContext);
    // We check context to see if this disclosure is nested
    const { disclosure: parentDisclosure } = React.useContext(SidebarNavigationDisclosureContext);
    // Set the disclosure state to provide into this component's context
    const disclosure = state || useDisclosurePrimitiveState({ animated: false, ...props });

    const disclosureContext = {
      disclosure,
      nested: parentDisclosure != null,
    };

    return (
      <SidebarNavigationDisclosureContext.Provider value={disclosureContext}>
        <Box
          {...safelySpreadBoxProps(props)}
          element={element}
          ref={ref}
          display={collapsed ? "none" : "block"}
          marginBottom="space30"
        >
          {children}
        </Box>
      </SidebarNavigationDisclosureContext.Provider>
    );
  },
);
SidebarNavigationDisclosure.displayName = "SidebarNavigationDisclosure";

export { SidebarNavigationDisclosure };

export { useDisclosurePrimitiveState as useSidebarNavigationDisclosureState };
export type { SidebarNavigationDisclosureInitialState, SidebarNavigationDisclosureStateReturn };
