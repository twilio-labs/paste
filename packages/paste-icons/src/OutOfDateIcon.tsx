import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface OutOfDateIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const OutOfDateIcon = React.forwardRef<HTMLElement, OutOfDateIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `OutOfDateIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[OutOfDateIcon]: Missing a title for non-decorative icon.");
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
            d="M9.934 4.066a6.167 6.167 0 11-5.267 6.146l.782.939a.5.5 0 10.768-.64l-1.666-2a.5.5 0 00-.768 0l-1.667 2a.5.5 0 10.768.64l.783-.94a7.167 7.167 0 101.827-4.825.5.5 0 10.745.667 6.167 6.167 0 013.695-1.987zM11.25 6.5a.5.5 0 00-1 0v4a.5.5 0 001 0v-4zm-.5 7a.75.75 0 100-1.5.75.75 0 000 1.5z"
            clipRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  },
);

OutOfDateIcon.displayName = "OutOfDateIcon";
export { OutOfDateIcon };
