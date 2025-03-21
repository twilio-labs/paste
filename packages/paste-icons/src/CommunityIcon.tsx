import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import type { IconWrapperProps } from "./helpers/IconWrapper";
import { IconWrapper } from "./helpers/IconWrapper.js";

export interface CommunityIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const CommunityIcon = React.forwardRef<HTMLElement, CommunityIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `CommunityIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[CommunityIcon]: Missing a title for non-decorative icon.");
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
            d="M10 2a8 8 0 100 16 8 8 0 000-16zm6.11 11.416a7 7 0 10-11.983.393 5 5 0 013.29-1.31 3.25 3.25 0 113.294-3.754.507.507 0 01.018.133 3.25 3.25 0 01-3.144 3.62 5 5 0 013.374 1.389 3.503 3.503 0 011.651-1.197 2.249 2.249 0 011.14-4.19 2.25 2.25 0 011.14 4.19 3.5 3.5 0 011.22.726zm-5.49 1.579a.499.499 0 00.05.063l.005.007c.402.523.666 1.137.772 1.784a7 7 0 01-6.714-2.238 3.999 3.999 0 015.888.384zm1.008-.319a2.501 2.501 0 013.922-.41 7.02 7.02 0 01-3.136 2.305 4.998 4.998 0 00-.786-1.895zM9.643 8.562a2.251 2.251 0 00-3.851-.776 4.067 4.067 0 003.851.776zM5.32 8.69a5.067 5.067 0 004.406.89 2.25 2.25 0 11-4.406-.89zM13.75 12a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

CommunityIcon.displayName = "CommunityIcon";
export { CommunityIcon };
