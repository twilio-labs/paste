"use client";

import { useUID } from "@twilio-paste/uid-library";
import * as React from "react";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface SentimentNeutralIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const SentimentNeutralIcon = React.forwardRef<HTMLElement, SentimentNeutralIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `SentimentNeutralIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[SentimentNeutralIcon]: Missing a title for non-decorative icon.");
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
            d="M7.461 7.135a.788.788 0 100 1.577.788.788 0 000-1.577zm5.077 0a.788.788 0 100 1.577.788.788 0 000-1.577zM7.012 11.99a.5.5 0 000 1h5.976a.5.5 0 100-1H7.012z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm8-7a7 7 0 100 14 7 7 0 000-14z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

SentimentNeutralIcon.displayName = "SentimentNeutralIcon";
export { SentimentNeutralIcon };
