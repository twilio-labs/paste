import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface GitIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const GitIcon = React.forwardRef<HTMLElement, GitIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `GitIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[GitIcon]: Missing a title for non-decorative icon.");
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
          aria-labelledby={decorative || title == null ? undefined : titleId}
        >
          {title ? <title id={titleId}>{title}</title> : null}
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M2.146 10.354a.5.5 0 010-.708l7.5-7.5a.5.5 0 01.707 0l7.5 7.5a.5.5 0 010 .707l-7.5 7.5a.5.5 0 01-.707 0l-7.5-7.5zM3.206 10L10 16.793 16.793 10 10 3.207 3.207 10z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M7.063 4.73a.5.5 0 01.707 0l1.76 1.758a.5.5 0 01-.707.708l-1.759-1.76a.5.5 0 010-.706zm4.27 5.937a1.667 1.667 0 113.334 0 1.667 1.667 0 01-3.334 0zm-3 2.666a1.667 1.667 0 113.334 0 1.667 1.667 0 01-3.334 0z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M8.333 7.667a1.667 1.667 0 113.334 0 1.667 1.667 0 01-3.334 0z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M10.471 8.138a.5.5 0 01.707 0l1.35 1.35a.5.5 0 11-.706.707l-1.35-1.35a.5.5 0 010-.707z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M10 8.333a.5.5 0 01.5.5v3.334a.5.5 0 11-1 0V8.833a.5.5 0 01.5-.5z"
            clipRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  },
);

GitIcon.displayName = "GitIcon";
export { GitIcon };
