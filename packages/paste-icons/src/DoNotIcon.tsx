import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import type { IconWrapperProps } from "./helpers/IconWrapper";
import { IconWrapper } from "./helpers/IconWrapper.js";

export interface DoNotIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const DoNotIcon = React.forwardRef<HTMLElement, DoNotIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `DoNotIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[DoNotIcon]: Missing a title for non-decorative icon.");
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
            d="M4.343 15.657A8 8 0 1115.657 4.343 8 8 0 014.343 15.657zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

DoNotIcon.displayName = "DoNotIcon";
export { DoNotIcon };
