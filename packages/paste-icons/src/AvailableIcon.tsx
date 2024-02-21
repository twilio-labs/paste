import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface AvailableIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const AvailableIcon = React.forwardRef<HTMLElement, AvailableIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `AvailableIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[AvailableIcon]: Missing a title for non-decorative icon.");
    }

    return (
      <IconWrapper as={as} display={display} element={element} size={size} color={color} ref={ref}>
        <svg
          role="img"
          aria-hidden={decorative}
          width="100%"
          height="100%"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          aria-labelledby={titleId}
        >
          {title ? <title id={titleId}>{title}</title> : null}
          <path
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.669 6.315c.435.427.442 1.126.016 1.561L9.49 15.22a1.104 1.104 0 01-1.576 0l-3.598-3.663a1.104 1.104 0 111.575-1.546l2.81 2.86 6.407-6.539a1.104 1.104 0 011.56-.016z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

AvailableIcon.displayName = "AvailableIcon";
export { AvailableIcon };
