import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import type { IconWrapperProps } from "./helpers/IconWrapper";
import { IconWrapper } from "./helpers/IconWrapper.js";

export interface AuthenticationIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const AuthenticationIcon = React.forwardRef<HTMLElement, AuthenticationIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `AuthenticationIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[AuthenticationIcon]: Missing a title for non-decorative icon.");
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
            d="M13.106 7.281a.5.5 0 1 0-.8-.6l-2.64 3.52-1.583-1.583a.5.5 0 1 0-.707.707l1.585 1.585a.997.997 0 0 0 1.503-.107l2.642-3.522Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.429 2.5A1.429 1.429 0 0 0 3 3.929v5.573c0 .868.324 1.724.794 2.513.472.792 1.109 1.549 1.78 2.228C6.919 15.602 8.45 16.7 9.23 17.204a1.414 1.414 0 0 0 1.544 0c.78-.504 2.312-1.602 3.656-2.96.672-.68 1.31-1.437 1.78-2.23.47-.788.795-1.644.795-2.512V3.93a1.429 1.429 0 0 0-1.43-1.429H4.43Zm-.303 1.126c.08-.08.19-.126.303-.126h11.147a.429.429 0 0 1 .429.429v5.573c0 .623-.236 1.3-.654 2.001-.416.7-.994 1.392-1.632 2.037-1.277 1.291-2.746 2.345-3.489 2.825l-.001.001a.415.415 0 0 1-.453 0h-.002c-.742-.481-2.211-1.535-3.488-2.826-.638-.645-1.217-1.338-1.633-2.037-.417-.702-.653-1.378-.653-2V3.928c0-.114.045-.223.126-.303Z"
            fill="currentColor"
          />
        </svg>
      </IconWrapper>
    );
  },
);

AuthenticationIcon.displayName = "AuthenticationIcon";
export { AuthenticationIcon };
