import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps, BoxStyleProps } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { ClearIcon } from "@twilio-paste/icons/esm/ClearIcon";
import { ScreenReaderOnly } from "@twilio-paste/screen-reader-only";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

/*
 *These style props are specific to our ClearIcon use case in ComposerAttachmentCard.
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

export interface ComposerAttachmentCardProps extends HTMLPasteProps<"div"> {
  children: NonNullable<React.ReactNode>;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default "COMPOSER_ATTACHMENT_CARD"
   * @type {BoxProps["element"]}
   * @memberof ComposerAttachmentCardProps
   */
  element?: BoxProps["element"];
  /**
   * Accessible label for the dismiss button if dismissable
   *
   * @default "Remove attachment"
   * @type {string}
   * @memberof ComposerAttachmentCardProps
   */
  i18nDismissLabel?: string;
  /**
   * Function to run when ComposerAttachmentCard is dismissed. Adds a close button
   *
   * @default null
   * @memberof ComposerAttachmentCardProps
   */
  onDismiss?: () => void;
}

const ComposerAttachmentCard = React.forwardRef<HTMLDivElement, ComposerAttachmentCardProps>(
  (
    { children, onDismiss, i18nDismissLabel = "Remove attachment", element = "COMPOSER_ATTACHMENT_CARD", ...props },
    ref,
  ) => {
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        ref={ref}
        paddingY="space30"
        paddingX="space40"
        borderRadius="borderRadius30"
        boxShadow="shadowLow"
        backgroundColor="colorBackgroundBodyElevation"
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
            <Button element={`${element}_REMOVE_BUTTON`} variant="secondary_icon" size="icon" onClick={onDismiss}>
              <ClearIcon decorative />
              <ScreenReaderOnly>{i18nDismissLabel}</ScreenReaderOnly>
            </Button>
          </Box>
        )}
      </Box>
    );
  },
);

ComposerAttachmentCard.displayName = "ComposerAttachmentCard";

export { ComposerAttachmentCard };
