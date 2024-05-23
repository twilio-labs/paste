import type { BoxProps } from "@twilio-paste/box";
import { Button, type ButtonProps } from "@twilio-paste/button";
import { ChevronUpIcon } from "@twilio-paste/icons/esm/ChevronUpIcon";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

import { InputVariants } from "./Input";

export interface IncrementButtonProps extends HTMLPasteProps<"button"> {
  i18nStepUpLabel?: string;
  element?: BoxProps["element"];
  // Button component restricts tabIndex values
  tabIndex?: ButtonProps["tabIndex"];
  variant?: InputVariants;
}

export const IncrementButton = React.forwardRef<HTMLButtonElement, IncrementButtonProps>(
  ({ i18nStepUpLabel = "step value up", element, variant, ...props }, ref) => {
    return (
      <Button
        {...props}
        ref={ref}
        element={`${element}_INCREMENT_BUTTON`}
        variant="reset"
        size="reset"
        type="button"
        borderRadius="borderRadius20"
        backgroundColor={variant === "inverse" ? "colorBackgroundInverseStrong" : "colorBackground"}
        marginRight="space30"
        _focus={{
          borderRadius: "borderRadius20",
          borderWidth: "borderWidth10",
          borderStyle: "solid",
          borderColor: variant === "inverse" ? "colorBorderInverseStrong" : "colorBorderPrimary",
        }}
        borderWidth="borderWidth10"
        borderStyle="solid"
        borderColor="transparent"
      >
        <ChevronUpIcon
          decorative={false}
          title={i18nStepUpLabel}
          size="sizeIcon05"
          element={`${element}_INCREMENT_ICON`}
        />
      </Button>
    );
  },
);
IncrementButton.displayName = "Increment";
