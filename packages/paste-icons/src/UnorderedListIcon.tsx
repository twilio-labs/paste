import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface UnorderedListIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const UnorderedListIcon = React.forwardRef<HTMLElement, UnorderedListIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `UnorderedListIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[UnorderedListIcon]: Missing a title for non-decorative icon.");
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
            d="M4.366 6.384a1.25 1.25 0 111.768-1.768 1.25 1.25 0 01-1.768 1.768zm0 4a1.25 1.25 0 111.768-1.768 1.25 1.25 0 01-1.768 1.768zM4 13.5a1.25 1.25 0 102.5 0 1.25 1.25 0 00-2.5 0zM8.5 5a.5.5 0 000 1h8a.5.5 0 000-1h-8zM8 9.5a.5.5 0 01.5-.5h8a.5.5 0 010 1h-8a.5.5 0 01-.5-.5zm.5 3.5a.5.5 0 000 1h8a.5.5 0 000-1h-8z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

UnorderedListIcon.displayName = "UnorderedListIcon";
export { UnorderedListIcon };
