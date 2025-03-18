"use client";

import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface ArrowUpIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ArrowUpIcon = React.forwardRef<HTMLElement, ArrowUpIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `ArrowUpIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[ArrowUpIcon]: Missing a title for non-decorative icon.");
    }

    return (
      <IconWrapper as={as} display={display} element={element} size={size} color={color} ref={ref}>
        <svg
          role="img"
          aria-hidden={decorative}
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 20 20"
          aria-labelledby={titleId}
        >
          {title ? <title id={titleId}>{title}</title> : null}
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M10 5h.011a.45.45 0 01.059.005L10 5c.038 0 .075.004.11.013l.029.009a.489.489 0 01.272.205l3.444 3.832a.596.596 0 010 .78.459.459 0 01-.632.063l-.069-.063-2.659-2.957v7.605A.504.504 0 0110 15a.5.5 0 01-.488-.42l-.008-.093V6.883L6.846 9.839a.459.459 0 01-.632.063l-.069-.063a.598.598 0 01-.057-.704l.057-.076L9.59 5.227a.498.498 0 01.272-.206l.028-.007A.533.533 0 0110 5z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

ArrowUpIcon.displayName = "ArrowUpIcon";
export { ArrowUpIcon };
