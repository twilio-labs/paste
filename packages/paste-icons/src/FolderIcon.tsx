import { useUID } from "@twilio-paste/uid-library";
import * as React from "react";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface FolderIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const FolderIcon = React.forwardRef<HTMLElement, FolderIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `FolderIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[FolderIcon]: Missing a title for non-decorative icon.");
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
          xmlns="http://www.w3.org/2000/svg"
          aria-labelledby={decorative || title == null ? undefined : titleId}
        >
          {title ? <title id={titleId}>{title}</title> : null}
          <path
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.432 3.432A1.474 1.474 0 014.475 3h3.011a1.474 1.474 0 011.475 1.475v.534h6.556a1.474 1.474 0 011.475 1.475v1.538h.533a1.474 1.474 0 011.427 1.85l-1.474 6.032A1.476 1.476 0 0116.053 17H4.606a.47.47 0 01-.143-.022A1.608 1.608 0 013 15.398V4.474c0-.39.155-.766.432-1.043zm2.632 12.626h9.989a.533.533 0 00.514-.392l1.474-6.031a.534.534 0 00-.516-.67H8.242a.535.535 0 00-.51.375L6.16 15.795a1.611 1.611 0 01-.096.263zm9.987-8.036V6.484a.534.534 0 00-.534-.533H8.49a.47.47 0 01-.47-.471V4.475a.534.534 0 00-.534-.533H4.475a.533.533 0 00-.534.533v10.912a.668.668 0 001.307.176L6.82 9.106a1.475 1.475 0 011.422-1.083h7.81z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

FolderIcon.displayName = "FolderIcon";
export { FolderIcon };
