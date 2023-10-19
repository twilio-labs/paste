import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

/**
 * Inline Code style variants.
 * Minimal is a deprecated vairant that we now hide, but we can't remove as it's a breaking change
 */
type InlineCodeVariants = "default" | "minimal";

export interface InlineCodeProps extends Partial<Omit<HTMLPasteProps<"div">, "children">> {
  children: string;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider.
   *
   * @type {BoxProps["element"]}
   * @memberof InlineCodeProps
   * @default "INLINE_CODE"
   */
  element?: BoxProps["element"];
  /**
   * Only the "default" variant should be used as the "minimal" variant is deprecated.
   *
   * @type {InlineCodeVariants}
   * @memberof InlineCodeProps
   */
  variant?: InlineCodeVariants;
}

const InlineCode = React.forwardRef<HTMLDivElement, InlineCodeProps>(
  ({ children, element = "INLINE_CODE", variant = "default", ...props }, ref) => {
    return (
      <Box
        as="code"
        element={element}
        // even though we deprecated the minimal variant we can't remove setting variant because a consumer maybe targeting it for customization
        variant={variant}
        {...safelySpreadBoxProps(props)}
        borderWidth="borderWidth10"
        borderStyle="solid"
        borderRadius="borderRadius20"
        fontFamily="fontFamilyCode"
        fontSize="inherit"
        lineHeight="inherit"
        paddingX="space20"
        color="inherit"
        backgroundColor="colorBackgroundWeak"
        borderColor="colorBorderWeak"
        ref={ref}
      >
        {children}
      </Box>
    );
  },
);

InlineCode.displayName = "InlineCode";

export { InlineCode };
