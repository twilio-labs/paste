"use client";

import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface ArchiveIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ArchiveIcon = React.forwardRef<HTMLElement, ArchiveIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `ArchiveIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[ArchiveIcon]: Missing a title for non-decorative icon.");
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
            d="M2.44 3.106a1.5 1.5 0 011.06-.44h13a1.5 1.5 0 011.5 1.5v2a.5.5 0 01-.5.5h-15a.5.5 0 01-.5-.5v-2c0-.397.158-.779.44-1.06zm1.06.56a.5.5 0 00-.5.5v1.5h14v-1.5a.5.5 0 00-.5-.5h-13z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M3.5 8a.5.5 0 01.5.5v6.333a1.5 1.5 0 001.5 1.5h9a1.5 1.5 0 001.5-1.5V8.5a.5.5 0 011 0v6.333a2.5 2.5 0 01-2.5 2.5h-9a2.5 2.5 0 01-2.5-2.5V8.5a.5.5 0 01.5-.5z"
          />
          <path
            fill="currentColor"
            d="M10 14.5a.5.5 0 01-.191-.038l.542-.106A.499.499 0 0110 14.5zm2.354-2.146l-2 2-.545.108a.499.499 0 01-.163-.108l-2-2a.5.5 0 01.708-.708L9.5 12.793V9a.5.5 0 011 0v3.793l1.146-1.147a.5.5 0 01.708.708z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

ArchiveIcon.displayName = "ArchiveIcon";
export { ArchiveIcon };
