import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import type { IconWrapperProps } from "./helpers/IconWrapper";
import { IconWrapper } from "./helpers/IconWrapper.js";

export interface SMSCapableIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const SMSCapableIcon = React.forwardRef<HTMLElement, SMSCapableIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `SMSCapableIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[SMSCapableIcon]: Missing a title for non-decorative icon.");
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
          aria-labelledby={titleId}
        >
          {title ? <title id={titleId}>{title}</title> : null}
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M16.5 3A1.502 1.502 0 0118 4.5v10a1.502 1.502 0 01-1.5 1.5H9.667L5.8 18.9a.5.5 0 01-.8-.4V16H3.5A1.502 1.502 0 012 14.5v-10A1.502 1.502 0 013.5 3zm0 1h-13a.5.5 0 00-.5.5v10a.5.5 0 00.5.5h2a.5.5 0 01.5.5v2l3.2-2.4a.5.5 0 01.3-.1h7a.5.5 0 00.5-.5v-10a.5.5 0 00-.5-.5zm-5 7a.5.5 0 110 1h-6a.5.5 0 110-1h6zm3-3a.5.5 0 110 1h-9a.5.5 0 010-1h9z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

SMSCapableIcon.displayName = "SMSCapableIcon";
export { SMSCapableIcon };
