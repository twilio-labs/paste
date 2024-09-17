import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface MoreIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const MoreIcon = React.forwardRef<HTMLElement, MoreIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `MoreIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[MoreIcon]: Missing a title for non-decorative icon.");
    }

    return (
      <IconWrapper as={as} display={display} element={element} size={size} color={color} ref={ref}>
        <svg
          role="img"
          aria-hidden={decorative}
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 20 20"
          aria-labelledby={decorative || title == null ? undefined : titleId}
        >
          {title ? <title id={titleId}>{title}</title> : null}
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M10 14.5c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5-1.5-.673-1.5-1.5.673-1.5 1.5-1.5zm0-6c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5-1.5-.673-1.5-1.5.673-1.5 1.5-1.5zm0-6c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5S8.5 4.827 8.5 4s.673-1.5 1.5-1.5z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

MoreIcon.displayName = "MoreIcon";
export { MoreIcon };
