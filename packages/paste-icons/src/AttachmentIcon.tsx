"use client";

import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface AttachmentIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const AttachmentIcon = React.forwardRef<HTMLElement, AttachmentIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `AttachmentIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[AttachmentIcon]: Missing a title for non-decorative icon.");
    }

    return (
      <IconWrapper as={as} display={display} element={element} size={size} color={color} ref={ref}>
        <svg
          role="img"
          aria-hidden={decorative}
          width="100%"
          height="100%"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-labelledby={titleId}
        >
          {title ? <title id={titleId}>{title}</title> : null}
          <path
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.5 3h-13a.5.5 0 00-.5.5v13a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-13a.5.5 0 00-.5-.5zm-13-1A1.5 1.5 0 002 3.5v13A1.5 1.5 0 003.5 18h13a1.5 1.5 0 001.5-1.5v-13A1.5 1.5 0 0016.5 2h-13z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.099 10.109a1.968 1.968 0 002.782 2.783l4-4.001a.5.5 0 11.708.707l-4 4A2.968 2.968 0 116.39 9.401l3.281-3.28a2.145 2.145 0 113.034 3.033l-3.3 3.301a1.323 1.323 0 01-1.87-1.87l.006-.006 3.296-3.297a.5.5 0 11.708.707l-3.293 3.294a.323.323 0 00.456.456l3.298-3.3a1.145 1.145 0 10-1.619-1.62l-.006.006L7.1 10.11z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

AttachmentIcon.displayName = "AttachmentIcon";
export { AttachmentIcon };
