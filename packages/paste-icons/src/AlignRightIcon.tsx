import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import type { IconWrapperProps } from "./helpers/IconWrapper";
import { IconWrapper } from "./helpers/IconWrapper.js";

export interface AlignRightIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const AlignRightIcon = React.forwardRef<HTMLElement, AlignRightIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `AlignRightIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[AlignRightIcon]: Missing a title for non-decorative icon.");
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
            d="M17.4 1.5a.5.5 0 01.5.5v16a.5.5 0 01-1 0V2a.5.5 0 01.5-.5zM15 7.9a.3.3 0 00.3-.3V5.2a.3.3 0 00-.3-.3H8.6a.3.3 0 00-.3.3v2.4a.3.3 0 00.3.3H15zm1.3-.3A1.3 1.3 0 0115 8.9H8.6a1.3 1.3 0 01-1.3-1.3V5.2a1.3 1.3 0 011.3-1.3H15a1.3 1.3 0 011.3 1.3v2.4zM15 14.3a.3.3 0 00.3-.3v-2.4a.3.3 0 00-.3-.3H3.8a.3.3 0 00-.3.3V14a.3.3 0 00.3.3H15zm1.3-.3a1.3 1.3 0 01-1.3 1.3H3.8A1.3 1.3 0 012.5 14v-2.4a1.3 1.3 0 011.3-1.3H15a1.3 1.3 0 011.3 1.3V14z"
            clipRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  },
);

AlignRightIcon.displayName = "AlignRightIcon";
export { AlignRightIcon };
