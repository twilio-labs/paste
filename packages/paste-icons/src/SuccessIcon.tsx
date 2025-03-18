"use client";

import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface SuccessIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const SuccessIcon = React.forwardRef<HTMLElement, SuccessIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `SuccessIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[SuccessIcon]: Missing a title for non-decorative icon.");
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
            d="M10 2a8 8 0 110 16 8 8 0 010-16zm2.997 5c-.266 0-.521.106-.71.294l-3.286 3.294L7.712 9.29a1.003 1.003 0 00-1.418 1.418l1.998 1.997a1 1 0 001.418 0l3.996-3.994A1.002 1.002 0 0012.996 7z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

SuccessIcon.displayName = "SuccessIcon";
export { SuccessIcon };
