import type { BoxProps } from "@twilio-paste/box";
import { Tab } from "@twilio-paste/tabs";
import type { TabProps } from "@twilio-paste/tabs";
import * as React from "react";

export interface CodeBlockTabProps extends TabProps {
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default "CODE_BLOCK_TAB"
   * @type {BoxElementProps["element"]}
   * @memberof CodeBlockTabProps
   */
  element?: BoxProps["element"];
}

export const CodeBlockTab = React.forwardRef<HTMLDivElement, CodeBlockTabProps>(
  ({ children, element = "CODE_BLOCK_TAB", ...props }, ref) => {
    return (
      <Tab element={element} ref={ref} {...props}>
        {children}
      </Tab>
    );
  },
);

CodeBlockTab.displayName = "CodeBlockTab";
