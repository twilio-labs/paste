"use client";

import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface StopScreenShareIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const StopScreenShareIcon = React.forwardRef<HTMLElement, StopScreenShareIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `StopScreenShareIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[StopScreenShareIcon]: Missing a title for non-decorative icon.");
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
            d="M12.14 7.148a.504.504 0 11.712.713L10.713 10l2.14 2.14a.504.504 0 11-.714.712L10 10.713l-2.14 2.14a.504.504 0 01-.712-.714L9.287 10l-2.14-2.14a.504.504 0 11.714-.712L10 9.287l2.14-2.14z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M1 5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2H3a2 2 0 01-2-2V5zm2-1h14a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V5a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  },
);

StopScreenShareIcon.displayName = "StopScreenShareIcon";
export { StopScreenShareIcon };
