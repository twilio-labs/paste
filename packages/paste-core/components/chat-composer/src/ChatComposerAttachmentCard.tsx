import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps, BoxStyleProps } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { ClearIcon } from "@twilio-paste/icons/esm/ClearIcon";
import { ScreenReaderOnly } from "@twilio-paste/screen-reader-only";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";
import { ChatComposerContext } from "./ChatComposerContext";

/*
 *These style props are specific to our ClearIcon use case in ChatComposerAttachmentCard.
 *
 *The close button uses ClearIcon and needs the Box behind it to have these styles
 *because the inner part of the glyph is transparent (variant="secondary_icon").
 *When more button variants become available, closeButtonBackgroundStyles should
 *be reconsidered (and possibly removed).
 */
const closeButtonBackgroundStyles: BoxStyleProps = {
  backgroundColor: "colorBackgroundBody",
  borderRadius: "borderRadiusCircle",
  width: "12px",
  height: "12px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export interface ChatComposerAttachmentCardProps extends HTMLPasteProps<"div"> {
  children: NonNullable<React.ReactNode>;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default "CHAT_COMPOSER_ATTACHMENT_CARD"
   * @type {BoxProps["element"]}
   * @memberof ChatComposerAttachmentCardProps
   */
  element?: BoxProps["element"];
  /**
   * Accessible label for the dismiss button if dismissable
   *
   * @default "Remove attachment"
   * @type {string}
   * @memberof ChatComposerAttachmentCardProps
   */
  i18nDismissLabel?: string;
  /**
   * Function to run when ChatComposerAttachmentCard is dismissed. Adds a close button
   *
   * @default null
   * @memberof ChatComposerAttachmentCardProps
   */
  onDismiss?: () => void;
}

const ChatComposerAttachmentCard = React.forwardRef<HTMLDivElement, ChatComposerAttachmentCardProps>(
  (
    {
      children,
      onDismiss,
      i18nDismissLabel = "Remove attachment",
      element = "CHAT_COMPOSER_ATTACHMENT_CARD",
      ...props
    },
    ref,
  ) => {
    const { isDisabled } = React.useContext(ChatComposerContext);

    return (
      <Box
        {...safelySpreadBoxProps(props)}
        ref={ref}
        paddingY="space30"
        paddingX="space40"
        borderStyle="solid"
        borderColor="colorBorderWeaker"
        borderRadius="borderRadius30"
        borderWidth="borderWidth10"
        boxShadow="shadowLow"
        position="relative"
        display="inline-block"
        width="100%"
        element={element}
      >
        {children}
        {onDismiss && (
          <Box
            position="absolute"
            top="space0"
            right="space0"
            transform="translate(50%, -50%)"
            {...closeButtonBackgroundStyles}
          >
            <Button
              aria-disabled={isDisabled}
              disabled={isDisabled}
              element={`${element}_REMOVE_BUTTON`}
              variant="secondary_icon"
              size="reset"
              onClick={onDismiss}
            >
              <ClearIcon decorative />
              <ScreenReaderOnly>{i18nDismissLabel}</ScreenReaderOnly>
            </Button>
          </Box>
        )}
      </Box>
    );
  },
);

ChatComposerAttachmentCard.displayName = "ChatComposerAttachmentCard";

export { ChatComposerAttachmentCard };
