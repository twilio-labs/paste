"use client";

import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface TrendDownIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const TrendDownIcon = React.forwardRef<HTMLElement, TrendDownIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `TrendDownIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[TrendDownIcon]: Missing a title for non-decorative icon.");
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
            fillRule="evenodd"
            d="M10.387 14.837l5.505-7.132c.17-.187.136-.46-.078-.61a.54.54 0 00-.31-.095H4.496C4.222 7 4 7.194 4 7.434c0 .098.038.194.108.27l5.505 7.133a.544.544 0 00.774 0z"
            clipRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  },
);

TrendDownIcon.displayName = "TrendDownIcon";
export { TrendDownIcon };
