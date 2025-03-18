"use client";

import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface StrikethroughIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const StrikethroughIcon = React.forwardRef<HTMLElement, StrikethroughIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `StrikethroughIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[StrikethroughIcon]: Missing a title for non-decorative icon.");
    }

    return (
      <IconWrapper as={as} display={display} element={element} size={size} color={color} ref={ref}>
        <svg
          role="img"
          aria-hidden={decorative}
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          fill="none"
          viewBox="0 0 20 20"
          aria-labelledby={titleId}
        >
          {title ? <title id={titleId}>{title}</title> : null}
          <path
            fill="currentColor"
            d="M9.514 4c1.49 0 2.561.722 3.1 2.094a.625.625 0 01-1.164.457c-.35-.891-.957-1.301-1.936-1.301-.997 0-1.865.587-1.865 1.679 0 .684.292 1.066 1.214 1.517l.331.154.184.08.558.227c.976.39 1.597.693 2.052 1.088l2.387.001a.625.625 0 01.092 1.243l-.092.007h-1.518c.223.568.3 1.205.214 1.809A3.43 3.43 0 019.674 16a3.896 3.896 0 01-3.722-2.744.625.625 0 111.194-.37 2.646 2.646 0 002.528 1.864 2.181 2.181 0 002.16-1.872 2.33 2.33 0 00-.327-1.544l-.062-.089-5.82.001a.625.625 0 01-.092-1.243l.092-.007 3.667-.001-.208-.084c-1.935-.798-2.685-1.456-2.685-2.982C6.399 5.019 7.907 4 9.514 4z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

StrikethroughIcon.displayName = "StrikethroughIcon";
export { StrikethroughIcon };
