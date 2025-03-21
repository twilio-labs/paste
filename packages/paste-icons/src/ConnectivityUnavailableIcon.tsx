import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import type { IconWrapperProps } from "./helpers/IconWrapper";
import { IconWrapper } from "./helpers/IconWrapper.js";

export interface ConnectivityUnavailableIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ConnectivityUnavailableIcon = React.forwardRef<HTMLElement, ConnectivityUnavailableIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `ConnectivityUnavailableIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[ConnectivityUnavailableIcon]: Missing a title for non-decorative icon.");
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
          <circle fill="currentColor" cx={10} cy={10} r={4} />
        </svg>
      </IconWrapper>
    );
  },
);

ConnectivityUnavailableIcon.displayName = "ConnectivityUnavailableIcon";
export { ConnectivityUnavailableIcon };
