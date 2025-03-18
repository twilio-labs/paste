"use client";

import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface ButtonIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ButtonIcon = React.forwardRef<HTMLElement, ButtonIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `ButtonIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[ButtonIcon]: Missing a title for non-decorative icon.");
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
            d="M5.667 2.833a1.5 1.5 0 00-1.5 1.5v4a1.5 1.5 0 001.5 1.5h1a.5.5 0 110 1h-1a2.5 2.5 0 01-2.5-2.5v-4a2.5 2.5 0 012.5-2.5h8.666a2.5 2.5 0 012.5 2.5v4a2.5 2.5 0 01-2.5 2.5h-1a.5.5 0 010-1h1a1.5 1.5 0 001.5-1.5v-4a1.5 1.5 0 00-1.5-1.5H5.667z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M10 8.167a.5.5 0 00-.5.5v6.549a.5.5 0 01-.885.32l-1.563-1.883a.5.5 0 00-.77.64l2.539 3.054a.5.5 0 11-.77.64l-2.537-3.055a1.501 1.501 0 012.306-1.918l.68.818V8.667a1.5 1.5 0 013 0V12.5H13a3.167 3.167 0 013.167 3.167v2a.5.5 0 11-1 0v-2A2.167 2.167 0 0013 13.5h-2a.5.5 0 01-.5-.5V8.667a.5.5 0 00-.5-.5z"
            clipRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  },
);

ButtonIcon.displayName = "ButtonIcon";
export { ButtonIcon };
