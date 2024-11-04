import { Box } from "@twilio-paste/box";
import type { BoxProps, BoxStyleProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

import { KeyboardKeyCombinationContext } from "./KeyboardKeyContext";
import { KeyboardKeyVariants } from "./KeyboardKeyGroup";

const BaseStyles: Record<KeyboardKeyVariants, BoxStyleProps> = {
  default: {
    borderColor: "colorBorderWeak",
    backgroundColor: "colorBackgroundWeak",
    boxShadow: "shadowBorderBottomWeak",
  },
  inverse: {
    borderColor: "colorBorderInverseWeaker",
    backgroundColor: "colorBackgroundInverse",
    color: "colorTextInverse",
    boxShadow: "shadowBorderBottomInverseWeaker",
  },
};

const DisabledStyles: Record<KeyboardKeyVariants, BoxStyleProps> = {
  default: {
    color: "colorTextWeak",
    borderColor: "colorBorderWeakest",
    boxShadow: undefined,
  },
  inverse: {
    color: "colorTextInverseWeaker",
    borderColor: "colorBorderInverseWeakest",
    boxShadow: undefined,
  },
};

const PressedStyles: Record<KeyboardKeyVariants, BoxStyleProps> = {
  default: {
    backgroundColor: "colorBackgroundStrong",
    boxShadow: undefined,
  },
  inverse: {
    backgroundColor: "colorBackgroundInverseStronger",
    boxShadow: undefined,
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
      <Box
        // aria-keyshortcuts should be defined on the elemnts triggered by combination. It is unnecessary to have it visible to screen readers again.
        aria-hidden="true"
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
        {...BaseStyles[variant]}
        {...(disabled ? DisabledStyles[variant] : {})}
        {...(isKeyActive && enablePressStyles ? PressedStyles[variant] : {})}
      >
        {props.children}
      </Box>
    );
  },
);

KeyboardKey.displayName = "KeyboardKey";

export { KeyboardKey };
