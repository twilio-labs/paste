import { Box } from "@twilio-paste/box";
import { useUID } from "@twilio-paste/uid-library";

import * as React from "react";
import { useCornerOrnamentContext } from "./CornerOrnamentContext";
import { BadgePath, BadgeSVG, DotPath } from "./Masks";
import { CornerOrnamentElementProps, CornerOrnamentType } from "./types";

// import MaskBadge from "./assets/mask-badge.svg";
// import MaskCircle from "./assets/mask-circle.svg";
// import MaskDot from "./assets/mask-dot.svg";

export const CornerOrnamentElement = React.forwardRef<HTMLDivElement, CornerOrnamentElementProps>(
  ({ padding, element = "CORNER_ORNAMENT_ELEMENT", ...props }, ref) => {
    const id = useUID();
    const { cornerOrnamentType, size } = useCornerOrnamentContext();

    const getSVGAsset = (type: CornerOrnamentType) => {
      switch (cornerOrnamentType) {
        // case "badge":
        //   return MaskBadge;
        // case "dot":
        //   return MaskDot;
        default:
          return ""; //MaskCircle; // replace with icon [lg circle]
      }
    };

    return (
      <Box>
        <Box
          style={{
            clipPath: `url("#${id}")`,
            // maskImage: `url(${getSVGAsset(cornerOrnamentType)})`,
            // WebkitMaskImage: `url(${getSVGAsset(cornerOrnamentType)})`,
            // maskSize: "100%",
          }}
          element={element}
          ref={ref}
          height={size}
          width={size}
        >
          <Box padding={padding || "space10"}>{props.children}</Box>
          <svg>
            <defs>
              <clipPath id={id} clipPathUnits="objectBoundingBox">
                {
                  // eslint-disable-next-line @typescript-eslint/no-unused-vars
                  cornerOrnamentType === "badge" ? <BadgePath /> : <DotPath />
                }
              </clipPath>
            </defs>
          </svg>
        </Box>
      </Box>
    );
  },
);

CornerOrnamentElement.displayName = "CornerOrnamentElement";
