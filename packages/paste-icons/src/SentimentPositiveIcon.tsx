"use client";

import { useUID } from "@twilio-paste/uid-library";
import * as React from "react";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface SentimentPositiveIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const SentimentPositiveIcon = React.forwardRef<HTMLElement, SentimentPositiveIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `SentimentPositiveIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[SentimentPositiveIcon]: Missing a title for non-decorative icon.");
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
          aria-labelledby={titleId}
        >
          {title ? <title id={titleId}>{title}</title> : null}
          <path
            fill="currentColor"
            d="M6.674 11.02a.5.5 0 00-.964.268c.653 2.35 3.241 3.766 5.577 3.117a.531.531 0 00.037-.012c1.403-.51 2.572-1.663 2.966-3.108a.5.5 0 00-.965-.263c-.297 1.089-1.197 2.008-2.324 2.425-1.813.492-3.828-.629-4.327-2.427zm.787-3.885a.788.788 0 100 1.577.788.788 0 000-1.577zm5.077 0a.788.788 0 000 1.577.789.789 0 100-1.577z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 2a8 8 0 100 16 8 8 0 000-16zm-7 8a7 7 0 1114 0 7 7 0 01-14 0z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

SentimentPositiveIcon.displayName = "SentimentPositiveIcon";
export { SentimentPositiveIcon };
