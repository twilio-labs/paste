import { safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxElementProps } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { RefreshIcon } from "@twilio-paste/icons/esm/RefreshIcon";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

import { AIMessageContext } from "./AIMessageContext";

export interface AIChatMessageRewriteProps extends HTMLPasteProps<"button"> {
  children?: never;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default "AI_CHAT_MESSAGE_REWRITE"
   * @type {BoxProps["element"]}
   * @memberof AIChatMessageRewriteProps
   */
  element?: BoxElementProps["element"];
  /**
   * Custom label text for the message rewrite component
   *
   * @default "Rewrite"
   * @type {string}
   * @memberof AIChatMessageRewriteProps
   */
  label?: string;
  /**
   * Function to call on click of message rewrite button
   *
   * @type {() => void}
   * @memberof AIChatMessageRewriteProps
   */
  onRewrite: () => void;
}

export const AIChatMessageRewrite = React.forwardRef<HTMLButtonElement, AIChatMessageRewriteProps>(
  ({ label = "Rewrite", onRewrite, element = "AI_CHAT_MESSAGE_REWRITE", ...props }, ref) => {
    const { id: messageBodyId } = React.useContext(AIMessageContext);

    return (
      <Button
        {...safelySpreadBoxProps(props)}
        variant="reset"
        size="reset"
        ref={ref}
        element={element}
        display="inline-flex"
        alignItems="flex-start"
        columnGap="space30"
        color="colorTextIcon"
        lineHeight="lineHeight30"
        fontSize="fontSize30"
        fontWeight="fontWeightSemibold"
        backgroundColor="colorBackgroundBody"
        boxShadow="shadowBorderWeaker"
        borderRadius="borderRadius30"
        paddingX="space30"
        paddingY="space20"
        onClick={onRewrite}
        aria-controls={messageBodyId}
      >
        <RefreshIcon decorative />
        {label}
      </Button>
    );
  },
);

AIChatMessageRewrite.displayName = "AIChatMessageRewrite";
