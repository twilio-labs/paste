import { Box } from "@twilio-paste/box";
import * as React from "react";
import { CornerOrnamentContext } from "./CornerOrnamentContext";
import { CornerOrnamentContainerProps } from "./types";

export const CornerOrnamentContainer = React.forwardRef<HTMLDivElement, CornerOrnamentContainerProps>(
  ({ size, cornerOrnamentType, position = "bottom_end", element = "CORNER_ORNAMENT_CONTAINER", ...props }, ref) => {
    return (
      <CornerOrnamentContext.Provider value={{ size, cornerOrnamentType, position }}>
        <Box position="relative" element={element} ref={ref}>
          {props.children}
        </Box>
      </CornerOrnamentContext.Provider>
    );
  },
);

CornerOrnamentContainer.displayName = "CornerOrnamentContainer";
