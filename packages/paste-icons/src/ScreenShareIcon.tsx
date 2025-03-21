import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import type { IconWrapperProps } from "./helpers/IconWrapper";
import { IconWrapper } from "./helpers/IconWrapper.js";

export interface ScreenShareIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ScreenShareIcon = React.forwardRef<HTMLElement, ScreenShareIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `ScreenShareIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[ScreenShareIcon]: Missing a title for non-decorative icon.");
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
            d="M17 4H3a1 1 0 00-1 1v10a1 1 0 001 1h14a1 1 0 001-1V5a1 1 0 00-1-1zM3 3a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2H3z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M12.866 9.36a.5.5 0 01-.707 0L9.996 7.197 7.834 9.36a.5.5 0 11-.708-.707l2.517-2.517a.5.5 0 01.707 0l2.516 2.517a.5.5 0 010 .707z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M9.976 6.506a.5.5 0 01.5.5v6.5a.5.5 0 11-1 0v-6.5a.5.5 0 01.5-.5z"
            clipRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  },
);

ScreenShareIcon.displayName = "ScreenShareIcon";
export { ScreenShareIcon };
