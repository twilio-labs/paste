import type { BoxProps } from "@twilio-paste/box";
import { TabPanel } from "@twilio-paste/tabs";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

export interface CodeBlockTabPanelProps extends HTMLPasteProps<"div"> {
  children?: React.ReactNode;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default "CODE_BLOCK_TAB_PANEL"
   * @type {BoxElementProps["element"]}
   * @memberof CodeBlockTabPanelProps
   */
  element?: BoxProps["element"];
}

export const CodeBlockTabPanel = React.forwardRef<HTMLDivElement, CodeBlockTabPanelProps>(
  ({ children, element = "CODE_BLOCK_TAB_PANEL", ...props }, ref) => {
    return (
      <TabPanel {...props} paddingTop="space0" element={element} ref={ref}>
        {children}
      </TabPanel>
    );
  },
);

CodeBlockTabPanel.displayName = "CodeBlockTabPanel";
