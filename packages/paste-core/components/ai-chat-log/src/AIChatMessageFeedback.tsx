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
   * @default "AI_CHAT_MESSAGE_FEEDBACK"
   * @type {BoxProps["element"]}
   * @memberof AIChatMessageFeedbackProps
   */
  element?: BoxElementProps["element"];
  /**
   * Custom label text for the message feedback component
   *
   * @default "Is this helpful?"
   * @type {string}
   * @memberof AIChatMessageFeedbackProps
   */
  label?: string;
  /**
   * Custom accessible label for the "Like result" button for non-English languages
   *
   * @default "Like result"
   * @type {string}
   * @memberof AIChatMessageFeedbackProps
   */
  i18nLikeLabel?: string;
  /**
   * Custom accessible label for the "Dislike result" button for non-English languages
   *
   * @default "Dislike result"
   * @type {string}
   * @memberof AIChatMessageFeedbackProps
   */
  i18nDislikeLabel?: string;
  /**
   * Function to call on click of "Like result" button
   *
   * @type {() => void}
   * @memberof AIChatMessageFeedbackProps
   */
  onLike: () => void;
  /**
   * Function to call on click of "Disike result" button
   *
   * @type {() => void}
   * @memberof AIChatMessageFeedbackProps
   */
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
      color="colorTextIcon"
      lineHeight="lineHeight20"
      fontSize="fontSize20"
      backgroundColor="colorBackgroundBody"
      boxShadow="shadowBorderWeaker"
      borderRadius="borderRadius30"
      paddingX="space30"
      paddingY="space20"
    >
      <Box as="span">{label}</Box>
      <Button variant="reset" size="reset" onClick={onLike} element={`${element}_LIKE_BUTTON`}>
        <ThumbsUpIcon decorative={false} title={i18nLikeLabel} />
      </Button>
      <Button variant="reset" size="reset" onClick={onDislike} element={`${element}_DISLIKE_BUTTON`}>
        <ThumbsDownIcon decorative={false} title={i18nDislikeLabel} />
      </Button>
    </Box>
  ),
);

AIChatMessageFeedback.displayName = "AIChatMessageFeedback";
