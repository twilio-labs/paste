import { Avatar } from "@twilio-paste/avatar";
import type { BoxElementProps } from "@twilio-paste/box";
import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import { ArtificialIntelligenceIcon } from "@twilio-paste/icons/esm/ArtificialIntelligenceIcon";
import type { GenericIconProps } from "@twilio-paste/icons/esm/types";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

import { AIMessageContext } from "./AIMessageContext";

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
   * Custom name for the user Avatar's initials to override the default Avatar content. See Avatar API documentation for more information.
   *
   * @type {string}
   * @memberof AIChatMessageAuthorProps
   */
  avatarName?: string;
  /**
   * Custom src path for the user Avatar's image to override the default Avatar content. See Avatar API documentation for more information.
   *
   * @type {string}
   * @memberof AIChatMessageAuthorProps
   */
  avatarSrc?: string;
  /**
   * Custom svg for the user Avatar's icon to override the default Avatar content. See Avatar API documentation for more information.
   *
   * @type {React.FC<React.PropsWithChildren<GenericIconProps>>}
   * @memberof AIChatMessageAuthorProps
   */
  avatarIcon?: React.FC<React.PropsWithChildren<GenericIconProps>>;
}

export const AIChatMessageAuthor = React.forwardRef<HTMLDivElement, AIChatMessageAuthorProps>(
  ({ children, element = "AI_CHAT_MESSAGE_AUTHOR", avatarName, avatarIcon, avatarSrc, ...props }, ref) => {
    const { variant } = React.useContext(AIMessageContext);

    return (
      <Box
        {...safelySpreadBoxProps(props)}
        ref={ref}
        aria-label={props["aria-label"]}
        element={element}
        display="flex"
        alignItems="center"
        columnGap="space40"
        fontWeight="fontWeightSemibold"
        fontSize="fontSize20"
        color="colorTextWeak"
      >
        {variant === "bot" ? (
          <Avatar
            name={children}
            size="sizeIcon30"
            color="decorative20"
            icon={ArtificialIntelligenceIcon}
            element={`${element}_BOT_AVATAR`}
          />
        ) : (
          <Avatar
            size="sizeIcon30"
            color="decorative30"
            element={`${element}_USER_AVATAR`}
            name={avatarName || children}
            icon={avatarIcon}
            src={avatarSrc}
          />
        )}
        {children}
      </Box>
    );
  },
);

AIChatMessageAuthor.displayName = "AIChatMessageAuthor";
