"use client";

import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface EmailIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const EmailIcon = React.forwardRef<HTMLElement, EmailIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `EmailIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[EmailIcon]: Missing a title for non-decorative icon.");
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3 5a1 1 0 00-1 1v9a1 1 0 001 1h14a1 1 0 001-1V6a1 1 0 00-1-1H3zm13.824 1H3.176l.137.11 5.61 4.507c.312.25.69.383 1.077.383s.765-.133 1.076-.383l5.61-4.507.138-.11zM3 7.141V15h14V7.141l-5.297 4.255A2.717 2.717 0 0110 12a2.717 2.717 0 01-1.703-.604L3 7.141z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

EmailIcon.displayName = "EmailIcon";
export { EmailIcon };
