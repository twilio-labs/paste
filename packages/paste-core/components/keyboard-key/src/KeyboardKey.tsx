import { Box } from "@twilio-paste/box";
import type { BoxProps, BoxStyleProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

import { KeyboardKeyCombinationContext } from "./KeyboardKeyContext";
import { KeyboardKeyVariants } from "./KeyboardKeyGroup";

const BaseStyles: Record<KeyboardKeyVariants, BoxStyleProps> = {
  default: { borderColor: "colorBorderWeak", backgroundColor: "colorBackgroundWeak" },
  inverse: {
    borderColor: "colorBorderInverseWeaker",
    backgroundColor: "colorBackgroundInverse",
    color: "colorTextInverse",
  },
};

const DisabledStyles: Record<KeyboardKeyVariants, BoxStyleProps> = {
  default: {
    color: "colorTextWeak",
    borderColor: "colorBorderWeakest",
  },
  inverse: {
    color: "colorTextInverseWeaker",
    borderColor: "colorBorderInverseWeakest",
  },
};

const PressedStyles: Record<KeyboardKeyVariants, BoxStyleProps> = {
  default: {
    backgroundColor: "colorBackgroundStrong",
  },
  inverse: {
    backgroundColor: "colorBackgroundInverseStronger",
  },
};

const BoxShadows: Record<KeyboardKeyVariants, BoxStyleProps["boxShadow"]> = {
  default: {
    boxShadow: "shadowBorderBottomWeak",
  },
  inverse: {
    boxShadow: "shadowBorderBottomInverseWeaker",
  },
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
    const {
      disabled,
      activeKeys,
      enablePressStyles,
      variant = "default",
    } = React.useContext(KeyboardKeyCombinationContext);

    const isKeyActive =
      !disabled && activeKeys && keyText && activeKeys.map((k) => k.toLowerCase()).includes(keyText.toLowerCase());

    return (
      <Box element={`${element}_WRAPPER`} borderRadius="borderRadius20">
        <Box
          element={element}
          ref={ref}
          borderWidth="borderWidth10"
          borderRadius="borderRadius20"
          borderStyle="solid"
          width="fit-content"
          minWidth="sizeBase60"
          display="inline-flex"
          justifyContent="center"
          paddingX="space20"
          as="kbd"
          fontFamily="fontFamilyText"
          boxShadow={isKeyActive || disabled ? undefined : BoxShadows[variant]}
          {...BaseStyles[variant]}
          {...(disabled ? DisabledStyles[variant] : {})}
          {...(isKeyActive && enablePressStyles ? PressedStyles[variant] : {})}
        >
          {props.children}
        </Box>
      </Box>
    );
  },
);

KeyboardKey.displayName = "KeyboardKey";

export { KeyboardKey };
