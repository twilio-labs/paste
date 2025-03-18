"use client";

import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface ShareIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ShareIcon = React.forwardRef<HTMLElement, ShareIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `ShareIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[ShareIcon]: Missing a title for non-decorative icon.");
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
            d="M7.15 5.646a.5.5 0 10.706.708l1.647-1.647V11a.5.5 0 001 0V4.707l1.646 1.647a.5.5 0 10.707-.708l-2.5-2.5A.499.499 0 0010.01 3h-.014a.498.498 0 00-.347.146l-2.5 2.5z"
          />
          <path
            fill="currentColor"
            d="M4 15.474v.017c.013.37.127.744.349 1.032.22.288.556.495.95.476h9.402c.394.018.73-.188.95-.476a1.812 1.812 0 00.349-1.05V8.5a.5.5 0 00-1 0v6.964a.816.816 0 01-.142.45.267.267 0 01-.084.078c-.017.009-.025.008-.027.008a.578.578 0 00-.033-.001H5.286L5.253 16c-.002 0-.01 0-.027-.008a.268.268 0 01-.084-.077.816.816 0 01-.142-.45V8.5a.5.5 0 10-1 0v6.974z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

ShareIcon.displayName = "ShareIcon";
export { ShareIcon };
