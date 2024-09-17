import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface AttachIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const AttachIcon = React.forwardRef<HTMLElement, AttachIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `AttachIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[AttachIcon]: Missing a title for non-decorative icon.");
    }

    return (
      <IconWrapper as={as} display={display} element={element} size={size} color={color} ref={ref}>
        <svg
          role="img"
          aria-hidden={decorative}
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 20 20"
          aria-labelledby={decorative || title == null ? undefined : titleId}
        >
          {title ? <title id={titleId}>{title}</title> : null}
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M3.879 9.264l5.59-5.73a3.251 3.251 0 013.214-.924 3.347 3.347 0 012.36 2.42 3.447 3.447 0 01-.75 3.135l-.145.153-5.623 5.767a1.87 1.87 0 01-2.668-.023 1.987 1.987 0 01-.116-2.627l.099-.113 5.618-5.761c.195-.2.512-.2.708 0a.523.523 0 01.058.655l-.058.07-5.612 5.755a.94.94 0 00.011 1.295.885.885 0 001.174.09l.083-.073 5.624-5.767a2.4 2.4 0 00.628-2.296 2.333 2.333 0 00-1.645-1.686 2.264 2.264 0 00-2.117.523l-.129.127L4.587 9.99a3.866 3.866 0 000 5.371 3.64 3.64 0 005.097.139l.143-.139 6.818-6.99c.196-.2.513-.2.708 0a.523.523 0 01.058.655l-.058.071-6.818 6.99a4.626 4.626 0 01-6.656 0c-1.787-1.832-1.837-4.77-.15-6.663l.15-.16z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

AttachIcon.displayName = "AttachIcon";
export { AttachIcon };
