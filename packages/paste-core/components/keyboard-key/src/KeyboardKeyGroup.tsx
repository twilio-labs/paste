import { Box } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

import { KeyboardCombinationState, KeyboardKeyCombinationContext } from "./KeyboardKeyContext";

export type KeyboardKeyVariants = "default" | "inverse";

export interface KeyboardKeyGroupProps extends HTMLPasteProps<"div">, KeyboardCombinationState {
  children?: React.ReactNode;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   * @default 'KEYBOARD_KEY_GROUP'
   * @type {BoxProps['element']}
   * @memberof KeyboardKeyGroupProps
   */
  element?: BoxProps["element"];
}

const KeyboardKeyGroup = React.forwardRef<HTMLDivElement, KeyboardKeyGroupProps>(
  ({ element = "KEYBOARD_KEY_GROUP", activeKeys, disabled, enablePressStyles, variant = "default", ...props }, ref) => {
    return (
      <KeyboardKeyCombinationContext.Provider value={{ activeKeys, disabled, enablePressStyles, variant }}>
        <Box element={element} ref={ref} display="inline-flex" columnGap="space20">
          {props.children}
        </Box>
      </KeyboardKeyCombinationContext.Provider>
    );
  },
);

KeyboardKeyGroup.displayName = "KeyboardKeyGroup";

export { KeyboardKeyGroup };
