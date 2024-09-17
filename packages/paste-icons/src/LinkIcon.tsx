import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface LinkIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const LinkIcon = React.forwardRef<HTMLElement, LinkIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `LinkIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[LinkIcon]: Missing a title for non-decorative icon.");
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
            d="M13.074 5.674a2.3 2.3 0 013.252 3.252l-2.97 2.97A2.3 2.3 0 019.869 8.92a.5.5 0 10-.808-.588 3.3 3.3 0 005.004 4.272l2.97-2.97a3.3 3.3 0 00-4.667-4.666l-.467.466a.5.5 0 10.707.707l.467-.466z"
          />
          <path
            fill="currentColor"
            d="M9.18 7.163a2.3 2.3 0 011.952 3.65.5.5 0 10.809.59A3.3 3.3 0 006.936 7.13l-2.97 2.97a3.3 3.3 0 004.667 4.667l.58-.58a.5.5 0 10-.707-.707l-.58.58a2.3 2.3 0 11-3.252-3.252l2.97-2.97c.409-.41.958-.652 1.536-.675z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

LinkIcon.displayName = "LinkIcon";
export { LinkIcon };
