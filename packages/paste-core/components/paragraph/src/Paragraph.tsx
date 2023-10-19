import { Text, safelySpreadTextProps } from "@twilio-paste/text";
import type { TextProps } from "@twilio-paste/text";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

export interface ParagraphProps extends HTMLPasteProps<"p"> {
  id?: never;
  /**
   * Overrides the default marginBottom of space70 to space0.
   *
   * @default 'space70'
   * @type {"space0"}
   * @memberof ParagraphProps
   */
  marginBottom?: "space0";
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider.
   *
   * @default 'PARAGRAPH'
   * @type {TextProps['element']}
   * @memberof ParagraphProps
   */
  element?: TextProps["element"];
}

const Paragraph = React.forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ children, element = "PARAGRAPH", marginBottom, ...props }, ref) => {
    return (
      <Text
        {...safelySpreadTextProps(props)}
        as="p"
        color="colorText"
        element={element}
        fontSize="fontSize30"
        fontWeight="fontWeightNormal"
        lineHeight="lineHeight40"
        marginBottom={marginBottom || "space70"}
        ref={ref}
      >
        {children}
      </Text>
    );
  },
);

Paragraph.displayName = "Paragraph";

export { Paragraph };
