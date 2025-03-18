"use client";

import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface UpsellIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const UpsellIcon = React.forwardRef<HTMLElement, UpsellIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `UpsellIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[UpsellIcon]: Missing a title for non-decorative icon.");
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
            d="M3.51 2.5a.51.51 0 01.51.51v12.47h12.47a.51.51 0 010 1.02H3.51a.51.51 0 01-.51-.51V3.01a.51.51 0 01.51-.51z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.912 7.613c.199.199.199.522 0 .72l-2.992 2.993a1.077 1.077 0 01-1.52 0L8.938 9.865a.056.056 0 00-.04-.017.055.055 0 00-.038.017l-2.992 2.991a.51.51 0 01-.722-.721l2.992-2.991a1.076 1.076 0 011.521 0l1.462 1.46a.056.056 0 00.06.013.057.057 0 00.018-.012l2.992-2.992c.199-.2.521-.2.72 0z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.006 7.578a.51.51 0 01.51-.51h2.351a.51.51 0 01.51.51v2.351a.51.51 0 11-1.02 0V8.088h-1.84a.51.51 0 01-.51-.51z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

UpsellIcon.displayName = "UpsellIcon";
export { UpsellIcon };
