import { Box, BoxStyleProps } from "@twilio-paste/box";
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
          sizeIcon70: { top: "space50", left: "space50" },
          sizeIcon80: { top: "space70", left: "space70" },
        },
        top_end: {
          sizeIcon70: { left: "space50" },
          sizeIcon80: { left: "space70" },
        },
      },
      icon: {
        bottom_end: {
          sizeIcon70: { top: "space50", left: "space50" },
          sizeIcon80: { top: "space70", left: "space70" },
        },
        top_end: {
          sizeIcon70: { left: "space50" },
          sizeIcon80: { left: "space70" },
        },
      },
      dot: {
        bottom_end: {
          sizeIcon30: { top: "space30", left: "space30" },
          sizeIcon40: { top: "space40", left: "space40" },
          sizeIcon50: { top: "space50", left: "space50" },
          sizeIcon70: { top: "space50", left: "space50" },
        },
        top_end: {
          sizeIcon30: { left: "space30" },
          sizeIcon40: { left: "space40" },
          sizeIcon50: { left: "space50" },
          sizeIcon70: { left: "space50" },
        },
      },
    };

    if (!Positions[cornerOrnamentType][position][size]) {
      throw new Error(
        "[Paste: CornerOrnament] the size/position/type combination you have chosen is not currently supported. Please refer to our guildinges in our docs or raise a new disucssion to get this supported at https://github.com/twilio-labs/paste/discussions.",
      );
    }

    return (
      <Box position="absolute" element={element} ref={ref} {...Positions[cornerOrnamentType][position][size]}>
        {props.children}
      </Box>
    );
  },
);

CornerOrnament.displayName = "CornerOrnament";
