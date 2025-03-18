"use client";

import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface SelectedIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const SelectedIcon = React.forwardRef<HTMLElement, SelectedIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `SelectedIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[SelectedIcon]: Missing a title for non-decorative icon.");
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
            d="M14.659 6.597a1.155 1.155 0 00-1.65 0l-4.2 4.281L6.99 9.026a1.15 1.15 0 00-1.65 0 1.207 1.207 0 000 1.682l2.643 2.694a1.151 1.151 0 001.65 0l5.024-5.123a1.206 1.206 0 000-1.682z"
            clipRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  },
);

SelectedIcon.displayName = "SelectedIcon";
export { SelectedIcon };
