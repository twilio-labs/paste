"use client";

import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface DarkModeIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const DarkModeIcon = React.forwardRef<HTMLElement, DarkModeIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `DarkModeIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[DarkModeIcon]: Missing a title for non-decorative icon.");
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
            d="M15.904 13.38A8.87 8.87 0 016.62 4.097a6.706 6.706 0 109.283 9.283zm1.053-1.212c.34-.065.645.248.51.567A7.79 7.79 0 012.5 9.712c0-3.23 1.965-6 4.765-7.18.319-.134.632.171.567.51a7.788 7.788 0 009.125 9.125z"
            clipRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  },
);

DarkModeIcon.displayName = "DarkModeIcon";
export { DarkModeIcon };
