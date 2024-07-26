import { Box, BoxStyleProps, safelySpreadBoxProps } from "@twilio-paste/box";
import { IconSizeOptions } from "@twilio-paste/style-props";
import * as React from "react";

import { useCornerOrnamentContext } from "./CornerOrnamentContext";
import { CornerOrnamentPosition, CornerOrnamentProps, CornerOrnamentType } from "./types";

type OrnamentSpacingMapping = Record<
  CornerOrnamentType,
  Record<CornerOrnamentPosition, Partial<Record<IconSizeOptions, BoxStyleProps>>>
>;

export const CornerOrnament = React.forwardRef<HTMLDivElement, CornerOrnamentProps>(
  ({ element = "CORNER_ORNAMENT", ...props }, ref) => {
    const { cornerOrnamentType, size, position } = useCornerOrnamentContext();

    const Positions: OrnamentSpacingMapping = {
      badge: {
        bottom_end: {
          sizeIcon80: { top: "space70", left: "space70" },
        },
        top_end: {
          sizeIcon80: { left: "space70", top: "space0" },
        },
      },
      avatar: {
        bottom_end: {
          sizeIcon70: { top: "space60", left: "space60" },
          sizeIcon80: { top: "space70", left: "space70" },
        },
        top_end: {
          sizeIcon70: { left: "space50", top: "space0" },
          sizeIcon80: { left: "space70", top: "space0" },
        },
      },
      icon: {
        bottom_end: {
          sizeIcon30: { top: "space40", left: "space40" },
          sizeIcon40: { top: "0.91rem", left: "0.91rem" },
          sizeIcon50: { top: "1.05rem", left: "1.05rem" },
          sizeIcon70: { top: "space60", left: "space60" },
          sizeIcon80: { top: "space70", left: "space70" },
        },
        top_end: {
          sizeIcon30: { left: "space40", top: "space0" },
          sizeIcon40: { left: "space50", top: "space0" },
          sizeIcon50: { left: "space60", top: "space0" },
          sizeIcon70: { left: "space60", top: "space0" },
          sizeIcon80: { left: "space70", top: "space0" },
        },
      },
      dot: {
        bottom_end: {
          sizeIcon30: { top: "space40", left: "space40" },
          sizeIcon40: { top: "space50", left: "space50" },
          sizeIcon50: { top: "space60", left: "space60" },
        },
        top_end: {
          sizeIcon30: { left: "space40", top: "space0" },
          sizeIcon40: { left: "space50", top: "space0" },
          sizeIcon50: { left: "space60", top: "space0" },
        },
      },
    };

    if (!Positions[cornerOrnamentType][position][size]) {
      throw new Error(
        "[Paste: CornerOrnament] the size/position/type combination you have chosen is not currently supported. Please refer to our guildinges in our docs or raise a new disucssion to get this supported at https://github.com/twilio-labs/paste/discussions.",
      );
    }

    return (
      <Box
        {...safelySpreadBoxProps(props)}
        position="absolute"
        element={element}
        ref={ref}
        {...Positions[cornerOrnamentType][position][size]}
      >
        {props.children}
      </Box>
    );
  },
);

CornerOrnament.displayName = "CornerOrnament";
