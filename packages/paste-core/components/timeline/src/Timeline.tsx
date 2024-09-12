import { Box } from "@twilio-paste/box";
import { css, styled } from "@twilio-paste/styling-library";
import React from "react";

import type { TimelineProps } from "./types";

const Timeline = React.forwardRef<HTMLOListElement, TimelineProps>(
  ({ children, element = "TIMELINE", ...props }, ref) => {
    const ContainerStyled = styled.ol(
      css({
        listStyleType: "none",
        margin: "0",
        padding: "0",
        "li>div:first-child::after": {
          content: "''",
          borderLeftWidth: "borderWidth10",
          borderLeftStyle: "solid",
          borderLeftColor: "colorBorderWeaker",
          minHeight: "sizeBase80",
          flexGrow: "1",
        },
      }),
    );

    return (
      <Box
        ref={ref}
        /* @ts-expect-error we don't have polymorphic box typings yet */
        as={ContainerStyled}
        element={element}
        {...props}
      >
        {children}
      </Box>
    );
  },
);

Timeline.displayName = "Timeline";

export { Timeline };
