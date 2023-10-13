import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface ResetIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ResetIcon = React.forwardRef<HTMLElement, ResetIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `ResetIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[ResetIcon]: Missing a title for non-decorative icon.");
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
            d="M13.296 4.117A7.002 7.002 0 002.5 10v.293L1.354 9.146a.5.5 0 10-.708.708l1.975 1.974a.499.499 0 00.758 0l1.975-1.974a.5.5 0 10-.708-.708L3.5 10.293V10a6.002 6.002 0 11.94 3.227.5.5 0 10-.843.537 7.001 7.001 0 109.699-9.647z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

ResetIcon.displayName = "ResetIcon";
export { ResetIcon };
