"use client";

import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface UnarchiveIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const UnarchiveIcon = React.forwardRef<HTMLElement, UnarchiveIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `UnarchiveIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[UnarchiveIcon]: Missing a title for non-decorative icon.");
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
            d="M3.5 2.667a1.5 1.5 0 00-1.5 1.5v2a.5.5 0 00.5.5h15a.5.5 0 00.5-.5v-2a1.5 1.5 0 00-1.5-1.5h-13zm-.354 1.146a.5.5 0 01.354-.146h13a.5.5 0 01.5.5v1.5H3v-1.5a.5.5 0 01.146-.354z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M4 8.5a.5.5 0 00-1 0v6.333a2.5 2.5 0 002.5 2.5h9a2.5 2.5 0 002.5-2.5V8.5a.5.5 0 00-1 0v6.333a1.5 1.5 0 01-1.5 1.5h-9a1.5 1.5 0 01-1.5-1.5V8.5z"
          />
          <path
            fill="currentColor"
            d="M10.191 8.538c.06.024.115.06.163.108l2 2a.5.5 0 01-.708.708L10.5 10.207V14a.5.5 0 01-1 0v-3.793l-1.146 1.147a.5.5 0 01-.708-.708l2-2m.545-.108a.498.498 0 00-.188-.038h-.006a.498.498 0 00-.348.144"
          />
        </svg>
      </IconWrapper>
    );
  },
);

UnarchiveIcon.displayName = "UnarchiveIcon";
export { UnarchiveIcon };
