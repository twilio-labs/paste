"use client";

import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface WinbackIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const WinbackIcon = React.forwardRef<HTMLElement, WinbackIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `WinbackIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[WinbackIcon]: Missing a title for non-decorative icon.");
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
            d="M6.9 3.96a.47.47 0 01.666 0L10.108 6.5a.47.47 0 11-.666.666L6.901 4.625a.47.47 0 010-.665zM12.83 9.89a.47.47 0 01.666 0l2.541 2.54a.47.47 0 11-.665.666l-2.541-2.541a.47.47 0 010-.666z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.304 2c-.283 0-.555.112-.755.312l-.001.001-4.656 4.659a6.46 6.46 0 109.136 9.136l4.66-4.657a1.071 1.071 0 000-1.511L15.99 8.243a1.07 1.07 0 00-1.166-.232l-.347.232L9.82 12.9a1.925 1.925 0 01-2.723-2.722l4.659-4.66a1.07 1.07 0 000-1.512L10.06 2.312c-.2-.2-.472-.312-.756-.312zm-3.713 9.54a.47.47 0 10.941 0 .47.47 0 00-.941 0zm0 0a2.867 2.867 0 004.893 2.027l4.66-4.66a.127.127 0 01.139-.027.13.13 0 01.041.028l1.697 1.696a.13.13 0 010 .183l-4.658 4.655a5.517 5.517 0 01-9.002-1.79 5.518 5.518 0 011.197-6.015L9.213 2.98v-.001a.13.13 0 01.183.001l1.693 1.694a.127.127 0 010 .181L6.43 9.514a2.867 2.867 0 00-.839 2.026z"
          />
          <path fill="currentColor" d="M6.062 12.01a.47.47 0 100-.94.47.47 0 000 .94z" />
        </svg>
      </IconWrapper>
    );
  },
);

WinbackIcon.displayName = "WinbackIcon";
export { WinbackIcon };
