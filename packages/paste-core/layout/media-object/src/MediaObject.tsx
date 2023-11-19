import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

export interface MediaObjectProps extends HTMLPasteProps<"div">, Pick<BoxProps, "as" | "marginTop" | "marginBottom"> {
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default 'MEDIA_OBJECT'
   * @type {BoxProps['element']}
   * @memberof MediaObjectProps
   */
  element?: BoxProps["element"];
  children: NonNullable<React.ReactNode>;
  /**
   * Aligns the figure and body
   *
   * @type {('center' | 'top')}
   * @memberof MediaObjectProps
   */
  verticalAlign?: "center" | "top";
}

const MediaObject = React.forwardRef<HTMLElement, MediaObjectProps>(
  (
    { as = "span", children, element = "MEDIA_OBJECT", marginBottom, marginTop, verticalAlign = "top", ...props },
    ref,
  ) => {
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        alignItems={verticalAlign === "top" ? "flex-start" : "center"}
        as={as}
        display="flex"
        element={element}
        marginBottom={marginBottom}
        marginTop={marginTop}
        ref={ref}
      >
        {children}
      </Box>
    );
  },
);

MediaObject.displayName = "MediaObject";

export { MediaObject };
