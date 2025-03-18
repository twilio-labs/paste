"use client";

import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface StoreIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const StoreIcon = React.forwardRef<HTMLElement, StoreIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `StoreIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[StoreIcon]: Missing a title for non-decorative icon.");
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
            d="M3.5 10a.5.5 0 01.5.5v6a.5.5 0 00.5.5h11a.5.5 0 00.5-.5v-6a.5.5 0 011 0v6a1.5 1.5 0 01-1.5 1.5h-11A1.5 1.5 0 013 16.5v-6a.5.5 0 01.5-.5zm12.599-8a1 1 0 01.976.783l.913 4.109A.501.501 0 0118 7a2 2 0 01-3.5 1.323 2 2 0 01-3 0 2 2 0 01-3 0 2 2 0 01-3 0A2 2 0 012 7a.5.5 0 01.012-.108l.913-4.11A1.003 1.003 0 013.9 2M6 7a1 1 0 002 0 .5.5 0 011 0 1 1 0 002 0 .5.5 0 011 0 1 1 0 002 0 .5.5 0 011 0 1 1 0 001.999.05l-.9-4.05H3.9L3 7.05A1 1 0 005 7a.5.5 0 011 0zM3.901 2H16.1 3.9z"
            clipRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  },
);

StoreIcon.displayName = "StoreIcon";
export { StoreIcon };
