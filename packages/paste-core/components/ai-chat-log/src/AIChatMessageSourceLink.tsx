import { Anchor } from "@twilio-paste/anchor";
import type { BoxElementProps } from "@twilio-paste/box";
import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

export interface AIChatMessageSourceLinkProps extends HTMLPasteProps<"div"> {
  children: React.ReactNode;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default "AI_CHAT_MESSAGE"
   * @type {BoxProps["element"]}
   * @memberof AIChatMessageSourceLinkProps
   */
  element?: BoxElementProps["element"];
  /**
   * The item number of the source link in the AI chat message.
   *
   * @type {string}
   * @memberof AIChatMessageSourceLinkProps
   * @example "1"
   */
  number: string;
  /**
   * The source link URL in the AI chat message.
   *
   * @type {string}
   * @memberof AIChatMessageSourceLinkProps
   * @example "https://example.com"
   */
  url: string;
}

export const AIChatMessageSourceLink = React.forwardRef<HTMLDivElement, AIChatMessageSourceLinkProps>(
  ({ children, number, url, element = "AI_CHAT_MESSAGE_SOURCE_LINK", ...props }, ref) => {
    return (
      <Box
        ref={ref}
        element={element}
        verticalAlign="inherit"
        fontSize="inherit"
        color="colorTextWeak"
        {...safelySpreadBoxProps(props)}
      >
        [{number}]{" "}
        <Box as="span" marginLeft="space10">
          {children}
        </Box>
        <Anchor href={url} showExternal marginLeft="space10">
          Source with url
        </Anchor>
      </Box>
    );
  },
);

AIChatMessageSourceLink.displayName = "AIChatMessageSourceLink";
