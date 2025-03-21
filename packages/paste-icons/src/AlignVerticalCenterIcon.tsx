import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import type { IconWrapperProps } from "./helpers/IconWrapper";
import { IconWrapper } from "./helpers/IconWrapper.js";

export interface AlignVerticalCenterIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const AlignVerticalCenterIcon = React.forwardRef<HTMLElement, AlignVerticalCenterIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `AlignVerticalCenterIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[AlignVerticalCenterIcon]: Missing a title for non-decorative icon.");
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
            d="M10 14.3a.5.5 0 01.5.5V18a.5.5 0 11-1 0v-3.2a.5.5 0 01.5-.5zm0-6.4a.5.5 0 01.5.5v2.4a.5.5 0 11-1 0V8.4a.5.5 0 01.5-.5zm0-6.4a.5.5 0 01.5.5v2.4a.5.5 0 01-1 0V2a.5.5 0 01.5-.5z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M6.5 4.9c-.25 0-.375.176-.375.3v2.4c0 .124.125.3.375.3h7c.25 0 .375-.176.375-.3V5.2c0-.124-.125-.3-.375-.3h-7zm-1.375.3c0-.76.659-1.3 1.375-1.3h7c.716 0 1.375.54 1.375 1.3v2.4c0 .76-.659 1.3-1.375 1.3h-7c-.716 0-1.375-.54-1.375-1.3V5.2zm-1.25 6.1c-.25 0-.375.175-.375.3V14c0 .124.125.3.375.3h12.25c.25 0 .375-.176.375-.3v-2.4c0-.124-.125-.3-.375-.3H3.875zm-1.375.3c0-.76.659-1.3 1.375-1.3h12.25c.716 0 1.375.54 1.375 1.3V14c0 .76-.659 1.3-1.375 1.3H3.875c-.716 0-1.375-.54-1.375-1.3v-2.4z"
            clipRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  },
);

AlignVerticalCenterIcon.displayName = "AlignVerticalCenterIcon";
export { AlignVerticalCenterIcon };
