import type { BoxProps } from "@twilio-paste/box";
import { Button, type ButtonProps } from "@twilio-paste/button";
import { ChevronDownIcon } from "@twilio-paste/icons/esm/ChevronDownIcon";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

import { InputVariants } from "./Input";

export interface DecrementButtonProps extends HTMLPasteProps<"button"> {
  i18nStepDownLabel?: string;
  element?: BoxProps["element"];
  // Button component restricts tabIndex values
  tabIndex?: ButtonProps["tabIndex"];
  variant?: InputVariants;
}

export const DecrementButton = React.forwardRef<HTMLButtonElement, DecrementButtonProps>(
  ({ i18nStepDownLabel = "step value down", element, variant, ...props }, ref) => {
    return (
      <Button
        {...props}
        ref={ref}
        element={`${element}_DECREMENT_BUTTON`}
        variant="reset"
        size="reset"
        type="button"
        borderRadius="borderRadius20"
        backgroundColor={variant === "inverse" ? "colorBackgroundInverseElevation" : "colorBackgroundElevation"}
        marginRight="space30"
        _focus={{
          boxShadow: variant === "inverse" ? "shadowBorderInverseStrong" : "shadowBorderPrimary",
        }}
      >
        <ChevronDownIcon
          decorative={false}
          title={i18nStepDownLabel}
          size="sizeIcon05"
          element={`${element}_DECREMENT_ICON`}
        />
      </Button>
    );
  },
);
DecrementButton.displayName = "Decrement";
