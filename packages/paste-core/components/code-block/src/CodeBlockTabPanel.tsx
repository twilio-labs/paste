import type { BoxProps } from "@twilio-paste/box";
import { TabPanel } from "@twilio-paste/tabs";
import * as React from "react";

export interface CodeBlockTabPanelProps extends Partial<Omit<HTMLDivElement, "children">> {
  children?: React.ReactNode;
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
