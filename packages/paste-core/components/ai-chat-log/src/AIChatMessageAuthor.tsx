import { Avatar } from "@twilio-paste/avatar";
import type { BoxElementProps } from "@twilio-paste/box";
import { ArtificialIntelligenceIcon } from "@twilio-paste/icons/esm/ArtificialIntelligenceIcon";
import type { ThemeShape } from "@twilio-paste/theme";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";
import { AIChatMessageMeta } from "./AIChatMessageMeta";

export interface AIChatMessageAuthorProps extends HTMLPasteProps<"div"> {
  /**
   * The name of the author of the chat message
   *
   * @type {string}
   * @memberof AIChatMessageAuthorProps
   */
  children: string;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default "AI_CHAT_MESSAGE_AUTHOR"
   * @type {BoxProps["element"]}
   * @memberof AIChatMessageAuthorProps
   */
  element?: BoxElementProps["element"];
  /**
   * Screen reader label for the author
   *
   * @type {string}
   * @memberof AIChatMessageAuthorProps
   */
  "aria-label": string;
  /**
   * Whether the author is a bot or not
   *
   * @default false
   * @type {boolean}
   * @memberof AIChatMessageAuthorProps
   */
  bot?: boolean;
}

export const AIChatMessageAuthor = React.forwardRef<HTMLDivElement, AIChatMessageAuthorProps>(
  ({ children, bot = false, element = "AI_CHAT_MESSAGE_AUTHOR", ...props }, ref) => {
    return (
      <AIChatMessageMeta {...props} ref={ref} aria-label={props["aria-label"]} element={element}>
        {bot ? (
          <Avatar name={children} size="sizeIcon50" icon={ArtificialIntelligenceIcon} element={`${element}_AVATAR}`} />
        ) : (
          <Avatar name={children} size="sizeIcon50" color="decorative30" element={`${element}_AVATAR}`} />
        )}
        {children}
      </AIChatMessageMeta>
    );
  },
);

AIChatMessageAuthor.displayName = "AIChatMessageAuthor";
