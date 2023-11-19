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
        backgroundColor="colorBackgroundBody"
      >
        {children}
      </Box>
    );
  },
);

Card.displayName = "Card";

export { Card };
