import { Text, safelySpreadTextProps } from "@twilio-paste/text";
import type { TextProps } from "@twilio-paste/text";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

export interface ParagraphProps extends HTMLPasteProps<"p">, Pick<TextProps, "element"> {
  id?: never;
  marginBottom?: "space0";
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
