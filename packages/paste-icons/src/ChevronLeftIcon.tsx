"use client";

import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface ChevronLeftIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ChevronLeftIcon = React.forwardRef<HTMLElement, ChevronLeftIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `ChevronLeftIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[ChevronLeftIcon]: Missing a title for non-decorative icon.");
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
            d="M10.293 6.293a1 1 0 011.497 1.32l-.083.094L9.415 10l2.292 2.293a1 1 0 01.083 1.32l-.083.094a1 1 0 01-1.32.083l-.094-.083-3-3a1 1 0 01-.083-1.32l.083-.094 3-3z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

ChevronLeftIcon.displayName = "ChevronLeftIcon";
export { ChevronLeftIcon };
