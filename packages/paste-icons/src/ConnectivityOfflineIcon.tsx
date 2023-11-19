import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface ConnectivityOfflineIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ConnectivityOfflineIcon = React.forwardRef<HTMLElement, ConnectivityOfflineIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `ConnectivityOfflineIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[ConnectivityOfflineIcon]: Missing a title for non-decorative icon.");
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
          xmlns="http://www.w3.org/2000/svg"
          aria-labelledby={titleId}
        >
          {title ? <title id={titleId}>{title}</title> : null}
          <path
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 8a2 2 0 100 4 2 2 0 000-4zm-4 2a4 4 0 118 0 4 4 0 01-8 0z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

ConnectivityOfflineIcon.displayName = "ConnectivityOfflineIcon";
export { ConnectivityOfflineIcon };
