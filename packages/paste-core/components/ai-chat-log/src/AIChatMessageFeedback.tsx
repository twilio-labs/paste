import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxElementProps } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { ThumbsDownIcon } from "@twilio-paste/icons/esm/ThumbsDownIcon";
import { ThumbsUpIcon } from "@twilio-paste/icons/esm/ThumbsUpIcon";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

export interface AIChatMessageFeedbackProps extends HTMLPasteProps<"div"> {
  children?: never;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default "CHAT_MESSAGE_META_ITEM"
   * @type {BoxProps["element"]}
   * @memberof AIChatMessageMetaItemProps
   */
  element?: BoxElementProps["element"];
  label?: string;
  i18nLikeLabel?: string;
  i18nDislikeLabel?: string;
  onLike: () => void;
  onDislike: () => void;
}

export const AIChatMessageFeedback = React.forwardRef<HTMLDivElement, AIChatMessageFeedbackProps>(
  (
    {
      label = "Is this helpful?",
      i18nLikeLabel = "Like result",
      i18nDislikeLabel = "Dislike result",
      onLike,
      onDislike,
      element = "AI_CHAT_MESSAGE_FEEDBACK",
      ...props
    },
    ref,
  ) => (
    <Box
      {...safelySpreadBoxProps(props)}
      ref={ref}
      element={element}
      display="inline-flex"
      alignItems="flex-start"
      columnGap="space30"
      marginTop="space40"
      color="colorTextIcon"
      lineHeight="lineHeight20"
      fontSize="fontSize20"
      backgroundColor="colorBackgroundBody"
      boxShadow="shadowBorderWeaker"
      borderRadius="borderRadius30"
      paddingX="space30"
      paddingY="space20"
    >
      <span>{label}</span>
      <Button variant="reset" size="reset" onClick={onLike}>
        <ThumbsUpIcon decorative={false} title={i18nLikeLabel} />
      </Button>
      <Button variant="reset" size="reset" onClick={onDislike}>
        <ThumbsDownIcon decorative={false} title={i18nDislikeLabel} />
      </Button>
    </Box>
  ),
);

AIChatMessageFeedback.displayName = "AIChatMessageFeedback";
