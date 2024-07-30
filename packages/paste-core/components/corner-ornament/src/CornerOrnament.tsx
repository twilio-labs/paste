import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import * as React from "react";

import { useCornerOrnamentContext } from "./CornerOrnamentContext";
import { OrnamentPositionStyleMappings } from "./mappings";
import { CornerOrnamentProps } from "./types";

export const CornerOrnament = React.forwardRef<HTMLDivElement, CornerOrnamentProps>(
  ({ element = "CORNER_ORNAMENT", ...props }, ref) => {
    const { cornerOrnamentType, size, position } = useCornerOrnamentContext();

    if (!OrnamentPositionStyleMappings[cornerOrnamentType][position][size]) {
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
        {...OrnamentPositionStyleMappings[cornerOrnamentType][position][size]}
      >
        {props.children}
      </Box>
    );
  },
);

CornerOrnament.displayName = "CornerOrnament";
