"use client";

import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface TriggerIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const TriggerIcon = React.forwardRef<HTMLElement, TriggerIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `TriggerIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[TriggerIcon]: Missing a title for non-decorative icon.");
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
            d="M11.557 2.045a.5.5 0 0 1 .278.575l-1.327 5.358h4.231a.5.5 0 0 1 .415.78L9.067 17.78a.5.5 0 0 1-.905-.38l1.095-5.378H5a.5.5 0 0 1-.409-.788l6.35-9.022a.5.5 0 0 1 .616-.167Zm-5.594 8.977H9.87a.5.5 0 0 1 .49.6l-.716 3.514 4.155-6.158h-3.93a.5.5 0 0 1-.485-.62l.84-3.389-4.26 6.053Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  },
);

TriggerIcon.displayName = "TriggerIcon";
export { TriggerIcon };
