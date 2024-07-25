import { Box } from "@twilio-paste/box";
import { useUID } from "@twilio-paste/uid-library";

import * as React from "react";
import { useCornerOrnamentContext } from "./CornerOrnamentContext";
import { BadgeBottomEndPath, DotBottomEndPath } from "./Masks";
import { CornerOrnamentElementProps, CornerOrnamentPosition, CornerOrnamentType } from "./types";

export const CornerOrnamentElement = React.forwardRef<HTMLDivElement, CornerOrnamentElementProps>(
  ({ padding, element = "CORNER_ORNAMENT_ELEMENT", ...props }, ref) => {
    const id = useUID();
    const { cornerOrnamentType, position, size } = useCornerOrnamentContext();

    const MasksMapping: Record<CornerOrnamentType, Record<CornerOrnamentPosition, React.ReactElement>> = {
      badge: {
        bottom_end: <BadgeBottomEndPath />,
        top_end: <BadgeBottomEndPath />,
      },
      dot: {
        bottom_end: <DotBottomEndPath />,
        top_end: <DotBottomEndPath />,
      },
      icon: {
        bottom_end: <BadgeBottomEndPath />,
        top_end: <BadgeBottomEndPath />,
      },
    };

    return (
      <Box>
        <Box
          style={{
            clipPath: `url("#${id}")`,
          }}
          element={element}
          ref={ref}
          size={size}
        >
          <Box padding={padding || "space0"}>{props.children}</Box>
          <Box as="svg" height={0} width={0} position="absolute" top={0} left={0}>
            <defs>
              <clipPath id={id} clipPathUnits="objectBoundingBox">
                {MasksMapping[cornerOrnamentType][position]}
              </clipPath>
            </defs>
          </Box>
        </Box>
      </Box>
    );
  },
);

CornerOrnamentElement.displayName = "CornerOrnamentElement";
