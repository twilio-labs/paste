import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface StarIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const StarIcon = React.forwardRef<HTMLElement, StarIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `StarIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[StarIcon]: Missing a title for non-decorative icon.");
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
          aria-labelledby={decorative || title == null ? undefined : titleId}
        >
          {title ? <title id={titleId}>{title}</title> : null}
          <path
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.342 2.813a.98.98 0 01.061.146l1.32 4.035h3.82a1.507 1.507 0 01.868.303 1.486 1.486 0 01.553 1.505 1.48 1.48 0 01-.495.807l-3.288 2.55 1.42 3.885c.01.028.02.055.027.084a1.477 1.477 0 01-.505 1.538 1.511 1.511 0 01-1.753.098l-3.376-2.37-3.372 2.318a1.516 1.516 0 01-1.744-.104 1.49 1.49 0 01-.506-1.54.983.983 0 01.027-.086l1.418-3.828L2.532 9.61a1.481 1.481 0 01-.441-1.64c.097-.266.27-.5.498-.672a1.507 1.507 0 01.868-.303h3.82l1.32-4.035a.985.985 0 01.062-.146 1.5 1.5 0 01.555-.594 1.518 1.518 0 012.128.594zm-3.34 5.17H3.458a.503.503 0 00-.428.325.491.491 0 00.118.521l3.858 2.99-1.668 4.504a.497.497 0 00.17.517.508.508 0 00.545.059L10 14.185l3.947 2.772a.51.51 0 00.708-.292.497.497 0 00.008-.284l-1.668-4.56 3.858-2.992a.495.495 0 00-.31-.846h-4.546l-1.543-4.72A.506.506 0 0010 2.99a.513.513 0 00-.453.275l-1.544 4.72z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

StarIcon.displayName = "StarIcon";
export { StarIcon };
