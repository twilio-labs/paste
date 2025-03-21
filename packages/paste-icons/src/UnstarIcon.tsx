import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import type { IconWrapperProps } from "./helpers/IconWrapper";
import { IconWrapper } from "./helpers/IconWrapper.js";

export interface UnstarIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const UnstarIcon = React.forwardRef<HTMLElement, UnstarIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `UnstarIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[UnstarIcon]: Missing a title for non-decorative icon.");
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
            d="M11.342 2.813a.98.98 0 0 1 .061.146l1.32 4.035h3.82a1.507 1.507 0 0 1 .868.303 1.486 1.486 0 0 1 .553 1.505 1.48 1.48 0 0 1-.495.807l-3.288 2.55 1.42 3.885c.01.028.02.055.027.084a1.477 1.477 0 0 1-.505 1.538 1.511 1.511 0 0 1-1.753.098l-3.376-2.37-3.372 2.318a1.516 1.516 0 0 1-1.744-.104 1.49 1.49 0 0 1-.506-1.54.983.983 0 0 1 .027-.086l1.418-3.828L2.532 9.61a1.481 1.481 0 0 1-.441-1.64c.097-.266.27-.5.498-.672a1.507 1.507 0 0 1 .868-.303h3.82l1.32-4.035a.985.985 0 0 1 .062-.146 1.5 1.5 0 0 1 .555-.594 1.518 1.518 0 0 1 2.128.594Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  },
);

UnstarIcon.displayName = "UnstarIcon";
export { UnstarIcon };
