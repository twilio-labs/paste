import type { BoxProps, BoxStyleProps } from "@twilio-paste/box";
import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { Tooltip } from "@twilio-paste/tooltip";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

export interface FootnoteProps extends HTMLPasteProps<"sup"> {
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default 'FOOTNOTE'
   * @type {BoxProps['element']}
   * @memberof FootnoteProps
   */
  element?: BoxProps["element"];
  /**
   * The text to display in the tooltip.
   *
   * @default undefined
   * @type {string | undefined}
   * @memberof FootnoteProps
   */
  tooltipText?: string;
  /**
   * The content of the footnote, which must be a string.
   *
   * @default undefined
   * @type {string}
   * @memberof FootnoteProps
   */
  children: string;
}

const footnoteStyles: BoxStyleProps = {
  display: "inline-block",
  backgroundColor: "colorBackgroundBodyElevation",
  paddingY: "space20",
  paddingX: "space30",
  borderRadius: "borderRadiusCircle",
  height: "sizeIcon40",
  minWidth: "sizeIcon40",
  textAlign: "center",
  verticalAlign: "middle",
  flexShrink: 0,
  color: "colorTextWeak",
  fontSize: "fontSize20",
  lineHeight: "lineHeight10",
  fontWeight: "fontWeightMedium",
  fontVariantNumeric: "normal",
};

const Footnote = React.forwardRef<HTMLDivElement, FootnoteProps>(
  ({ children, element = "FOOTNOTE", tooltipText, ...props }, ref) => {
    if (tooltipText) {
      return (
        <Box {...safelySpreadBoxProps(props)} ref={ref} element={element} as="sup">
          <Tooltip element={`${element}_TOOLTIP`} text={tooltipText}>
            <Button
              element={`${element}_TOOLTIP_BUTTON`}
              variant="reset"
              {...footnoteStyles}
              size="reset"
              boxShadow="shadowBorderBottom"
              _hover={{
                boxShadow: "shadowBorderWeaker",
              }}
              _focus={{
                boxShadow: "shadowFocus",
              }}
            >
              {children}
            </Button>
          </Tooltip>
        </Box>
      );
    }

    return (
      <Box {...safelySpreadBoxProps(props)} ref={ref} element={element} as="sup" {...footnoteStyles}>
        {children}
      </Box>
    );
  },
);

Footnote.displayName = "Footnote";

export { Footnote };
