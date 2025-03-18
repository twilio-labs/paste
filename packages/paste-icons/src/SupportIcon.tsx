"use client";

import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface SupportIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const SupportIcon = React.forwardRef<HTMLElement, SupportIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `SupportIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[SupportIcon]: Missing a title for non-decorative icon.");
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
            d="M1.5 10a8.5 8.5 0 1 1 17 0 8.5 8.5 0 0 1-17 0ZM10 2.686a7.314 7.314 0 1 0 0 14.628 7.314 7.314 0 0 0 0-14.628Zm.227 3.67a1.987 1.987 0 0 0-2.213 1.977l.001.593-1.186.002v-.594a3.173 3.173 0 1 1 3.857 3.094l-.013.003a.1.1 0 0 0-.08.094v.946H9.407v-.96a1.286 1.286 0 0 1 1.028-1.242 1.986 1.986 0 0 0-.208-3.913Zm-.99 8.044a.765.765 0 1 1 1.529 0 .765.765 0 0 1-1.53 0Z"
            clipRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  },
);

SupportIcon.displayName = "SupportIcon";
export { SupportIcon };
