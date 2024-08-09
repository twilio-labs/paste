import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import { useUID } from "@twilio-paste/uid-library";
import * as React from "react";

import { useCornerOrnamentContext } from "./CornerOrnamentContext";
import { ClipPathMappings } from "./mappings";
import { CornerOrnamentBaseProps } from "./types";

export const CornerOrnamentBase = React.forwardRef<HTMLDivElement, CornerOrnamentBaseProps>(
  ({ padding, element = "CORNER_ORNAMENT_BASE", ...props }, ref) => {
    const id = useUID();
    const { cornerOrnamentType, position, size } = useCornerOrnamentContext();

    return (
      <Box
        {...safelySpreadBoxProps(props)}
        style={{
          clipPath: `url("#${id}")`,
        }}
        element={element}
        ref={ref}
        size={size}
      >
        <Box padding={padding || "space0"}>{props.children}</Box>
        <Box as="svg" size={0} position="absolute" top={0} left={0}>
          <defs>
            <clipPath id={id} clipPathUnits="objectBoundingBox">
              {<path d={ClipPathMappings[cornerOrnamentType][position]} />}
            </clipPath>
          </defs>
        </Box>
      </Box>
    );
  },
);

CornerOrnamentBase.displayName = "CornerOrnamentBase";
