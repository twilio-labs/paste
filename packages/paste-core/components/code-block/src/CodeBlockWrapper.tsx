import { Box } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import { Tabs } from "@twilio-paste/tabs";
import type { TabStateReturn } from "@twilio-paste/tabs";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

export interface CodeBlockTabStateReturn extends TabStateReturn {
  [key: string]: any;
}

export interface CodeBlockWrapperProps extends HTMLPasteProps<"div"> {
  children?: React.ReactNode;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default "CODE_BLOCK_WRAPPER"
   * @type {BoxElementProps["element"]}
   * @memberof CodeBlockWrapperProps
   */
  element?: BoxProps["element"];
  /**
   *
   * @memberof CodeBlockWrapperProps
   */
  state?: CodeBlockTabStateReturn;
}

export const CodeBlockWrapper = React.forwardRef<HTMLDivElement, CodeBlockWrapperProps>(
  ({ children, state, element = "CODE_BLOCK_WRAPPER" }, ref) => {
    return (
      <Tabs variant="inverse" state={state}>
        <Box
          backgroundColor="colorBackgroundInverseStrong"
          borderRadius="borderRadius70"
          overflow="hidden"
          element={element}
          ref={ref}
        >
          {children}
        </Box>
      </Tabs>
    );
  },
);

CodeBlockWrapper.displayName = "CodeBlockWrapper";
