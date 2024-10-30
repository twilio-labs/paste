import { Box } from "@twilio-paste/box";
import type { BoxProps, BoxStyleProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";
import { KeyboardKeyCombinationContext } from "./KeyboardKeyContext";

const DisabledStyles: BoxStyleProps = {
  color: "colorTextWeak",
  borderBottomWidth: "borderWidth10",
  borderColor: "colorBorderWeakest",
};

const PressedStyles: BoxStyleProps = {
  borderBottomWidth: "borderWidth10",
  backgroundColor: "colorBackgroundStrong",
};

export interface KeyboardKeyProps extends HTMLPasteProps<"div"> {
  children?: React.ReactNode;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   * @default 'KEYBOARD_KEY'
   * @type {BoxProps['element']}
   * @memberof KeyboardKeyProps
   */
  element?: BoxProps["element"];
  /**
   * Sets the key text that will be used to determine if the key has press stylings
   * @default 'KEYBOARD_KEY'
   * @type string
   * @memberof KeyboardKeyProps
   */
  keyText?: string;
}

const KeyboardKey = React.forwardRef<HTMLDivElement, KeyboardKeyProps>(
  ({ element = "KEYBOARD_KEY", keyText, ...props }, ref) => {
    const { disabled, activeKeys, enablePressStyles } = React.useContext(KeyboardKeyCombinationContext);

    const isKeyActive = !disabled && activeKeys && keyText && activeKeys.indexOf(keyText) >= 0;

    return (
      <Box
        element={element}
        ref={ref}
        backgroundColor="colorBackgroundWeak"
        borderRadius="borderRadius20"
        borderWidth="borderWidth10"
        borderStyle="solid"
        borderColor="colorBorderWeak"
        borderBottomWidth="borderWidth20"
        width="fit-content"
        paddingX="space20"
        as="kbd"
        fontFamily="fontFamilyText"
        {...(disabled ? DisabledStyles : {})}
        {...(isKeyActive && enablePressStyles ? PressedStyles : {})}
      >
        {props.children}
      </Box>
    );
  },
);

KeyboardKey.displayName = "KeyboardKey";

export { KeyboardKey };
