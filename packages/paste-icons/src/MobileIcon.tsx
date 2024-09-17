import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface MobileIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const MobileIcon = React.forwardRef<HTMLElement, MobileIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `MobileIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[MobileIcon]: Missing a title for non-decorative icon.");
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
          <path fill="currentColor" d="M9 15.5a1 1 0 102 0 1 1 0 00-2 0z" />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M5 4.5A2.5 2.5 0 017.5 2h5A2.5 2.5 0 0115 4.5v11a2.5 2.5 0 01-2.5 2.5h-5A2.5 2.5 0 015 15.5v-11zm9 0V13H6V4.5A1.5 1.5 0 017.5 3h5A1.5 1.5 0 0114 4.5zm0 9.5H6v1.5A1.5 1.5 0 007.5 17h5a1.5 1.5 0 001.5-1.5V14z"
            clipRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  },
);

MobileIcon.displayName = "MobileIcon";
export { MobileIcon };
