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
          sizeIcon80: { top: "space70", left: "space70" },
          sizeIcon50: { top: "space80", left: "space80" },
        },
        top_end: {
          sizeIcon80: { left: "space70" },
          sizeIcon50: { left: "space70" },
        },
      },
      icon: {
        bottom_end: {
          sizeIcon80: { top: "24px", left: "24px" },
          sizeIcon50: { top: "space80", left: "space80" },
        },
        top_end: {
          sizeIcon80: { top: "space80", left: "space80" },
          sizeIcon50: { top: "space80", left: "space80" },
        },
      },
      dot: {
        bottom_end: {
          sizeIcon80: { top: "space80", left: "space80" },
          sizeIcon50: { top: "space80", left: "space80" },
        },
        top_end: {
          sizeIcon80: { top: "space80", left: "space80" },
          sizeIcon50: { top: "space80", left: "space80" },
        },
      },
    };

    if (!Positions[cornerOrnamentType][position][size]) {
      throw new Error(
        "[Paste: CornerOrnament] the size and/or position you have chosen is not currently supported. Please raise a new disucssion to get this supported at https://github.com/twilio-labs/paste/discussions.",
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
