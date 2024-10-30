import { Box } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from 'react';

export interface KeyboardKeyProps extends HTMLPasteProps<"div"> {
  children?: React.ReactNode;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   * @default '{constantCase component-name}'
   * @type {BoxProps['element']}
   * @memberof KeyboardKeyProps
   */
  element?: BoxProps['element'];
}

const KeyboardKey = React.forwardRef<HTMLDivElement, KeyboardKeyProps>(({element = "KEYBOARD_KEY", ...props}, ref) => {
  return (
    <Box ref={ref}>
      {props.children}
    </Box>
  );
});

KeyboardKey.displayName = 'KeyboardKey';

export {KeyboardKey};
