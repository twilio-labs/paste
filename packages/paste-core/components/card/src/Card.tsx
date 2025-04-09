import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import type { PaddingProps } from "@twilio-paste/style-props";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

/** element identifier from BoxProps for customization */
export interface CardProps extends HTMLPasteProps<"article">, PaddingProps {
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default 'CARD'
   * @type {BoxProps['element']}
   * @memberof CardProps
   */
  element?: BoxProps["element"];
  /**
   * Force the height to take up the full height of the parent element
   *
   * @default false
   * @type {boolean}
   * @memberof CardProps
   */
  fillHeight?: boolean;
  /**
   * Force the width to take up the full width of the parent element
   *
   * @default false
   * @type {boolean}
   * @memberof CardProps
   */
  fillWidth?: boolean;
}

const Card = React.forwardRef<HTMLElement, CardProps>(
  (
    {
      children,
      element = "CARD",
      padding = "space100",
      paddingBottom,
      paddingLeft,
      paddingRight,
      paddingTop,
      fillHeight,
      fillWidth,
      ...props
    },
    ref,
  ) => {
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        ref={ref}
        as="article"
        borderWidth="borderWidth10"
        borderColor="colorBorderWeaker"
        borderStyle="solid"
        borderRadius="borderRadius30"
        element={element}
        padding={padding}
        paddingBottom={paddingBottom}
        paddingLeft={paddingLeft}
        paddingRight={paddingRight}
        paddingTop={paddingTop}
        backgroundColor="colorBackgroundWeakest"
        height={fillHeight ? "100%" : undefined}
        width={fillWidth ? "100%" : undefined}
      >
        {children}
      </Box>
    );
  },
);

Card.displayName = "Card";

export { Card };
