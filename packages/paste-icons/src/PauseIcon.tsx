import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface PauseIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const PauseIcon = React.forwardRef<HTMLElement, PauseIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `PauseIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[PauseIcon]: Missing a title for non-decorative icon.");
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
            d="M8.143 4C8.616 4 9 4.488 9 5.09v9.82c0 .602-.384 1.09-.857 1.09H6.857C6.384 16 6 15.512 6 14.91V5.09C6 4.489 6.384 4 6.857 4h1.286zm5 0c.473 0 .857.488.857 1.09v9.82c0 .602-.384 1.09-.857 1.09h-1.286c-.473 0-.857-.488-.857-1.09V5.09c0-.602.384-1.09.857-1.09h1.286z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

PauseIcon.displayName = "PauseIcon";
export { PauseIcon };
