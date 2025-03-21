import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import type { IconWrapperProps } from "./helpers/IconWrapper";
import { IconWrapper } from "./helpers/IconWrapper.js";

export interface LogOutIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const LogOutIcon = React.forwardRef<HTMLElement, LogOutIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `LogOutIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[LogOutIcon]: Missing a title for non-decorative icon.");
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
            d="M5.409 3.5a1.528 1.528 0 00-1.004.404c-.264.25-.42.594-.405.965V15.13c-.015.37.14.716.405.965a1.529 1.529 0 001.004.404h6.182a.5.5 0 000-1H5.42a.529.529 0 01-.33-.132.255.255 0 01-.092-.199L5 15.143V4.83c-.004-.057.018-.13.09-.199a.528.528 0 01.33-.131h6.17a.5.5 0 000-1H5.41zm7.237 3.65a.5.5 0 01.708 0l2.5 2.5A.5.5 0 0116 10v.006a.5.5 0 01-.146.35l-2.5 2.5a.5.5 0 01-.708-.707l1.647-1.646H9a.5.5 0 010-1h5.293l-1.647-1.647a.5.5 0 010-.707z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

LogOutIcon.displayName = "LogOutIcon";
export { LogOutIcon };
