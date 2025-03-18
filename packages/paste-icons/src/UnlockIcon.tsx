"use client";

import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface UnlockIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const UnlockIcon = React.forwardRef<HTMLElement, UnlockIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `UnlockIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[UnlockIcon]: Missing a title for non-decorative icon.");
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
          <path fill="currentColor" d="M10.5 12a.5.5 0 00-1 0v2a.5.5 0 001 0v-2z" />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M4 3a3 3 0 00-3 3v2.5a.5.5 0 01-1 0V6a4 4 0 018 0v2h6.5A1.5 1.5 0 0116 9.5v7a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 014 16.5v-7A1.5 1.5 0 015.5 8H7V6a3 3 0 00-3-3zm1.5 6h9a.5.5 0 01.5.5v7a.5.5 0 01-.5.5h-9a.5.5 0 01-.5-.5v-7a.5.5 0 01.5-.5z"
            clipRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  },
);

UnlockIcon.displayName = "UnlockIcon";
export { UnlockIcon };
