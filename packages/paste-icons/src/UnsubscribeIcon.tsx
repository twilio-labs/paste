import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import type { IconWrapperProps } from "./helpers/IconWrapper";
import { IconWrapper } from "./helpers/IconWrapper.js";

export interface UnsubscribeIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const UnsubscribeIcon = React.forwardRef<HTMLElement, UnsubscribeIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `UnsubscribeIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[UnsubscribeIcon]: Missing a title for non-decorative icon.");
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
            fillRule="evenodd"
            d="M14 10.75a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm-3.5 2.5a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M11.404 15.14l4.242-4.244.708.708-4.243 4.242-.707-.707zM3.477 4.043l5.174 4.849c.257.241.557.358.849.358.292 0 .592-.117.85-.358l5.173-4.849.684.73-5.174 4.848a2.24 2.24 0 01-1.533.629 2.24 2.24 0 01-1.533-.629L2.793 4.773l.684-.73z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M2.5 4.25a1 1 0 011-1h12a1 1 0 011 1v4.5a.5.5 0 01-1 0v-4.5h-12v9H9a.5.5 0 010 1H3.5a1 1 0 01-1-1v-9z"
            clipRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  },
);

UnsubscribeIcon.displayName = "UnsubscribeIcon";
export { UnsubscribeIcon };
