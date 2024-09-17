import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface RepeatIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const RepeatIcon = React.forwardRef<HTMLElement, RepeatIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `RepeatIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[RepeatIcon]: Missing a title for non-decorative icon.");
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
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M10.348 4.06a6 6 0 104.212 9.165.5.5 0 01.844.537A7 7 0 1116.5 10v.292l1.146-1.146a.5.5 0 01.708.707l-1.974 1.974a.499.499 0 01-.758 0l-1.975-1.974a.5.5 0 01.707-.707l1.146 1.146V10a6 6 0 00-5.152-5.939z"
            clipRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  },
);

RepeatIcon.displayName = "RepeatIcon";
export { RepeatIcon };
