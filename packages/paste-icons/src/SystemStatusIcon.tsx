"use client";

import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface SystemStatusIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const SystemStatusIcon = React.forwardRef<HTMLElement, SystemStatusIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `SystemStatusIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[SystemStatusIcon]: Missing a title for non-decorative icon.");
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
            d="M3.167 4A.167.167 0 003 4.167v8.666c0 .092.075.167.167.167h13.666a.167.167 0 00.167-.167V4.167A.167.167 0 0016.833 4H3.167zM2 4.167C2 3.522 2.522 3 3.167 3h13.666C17.478 3 18 3.522 18 4.167v8.666c0 .645-.522 1.167-1.167 1.167H10.5v2h2a.5.5 0 010 1h-5a.5.5 0 010-1h2v-2H3.167A1.167 1.167 0 012 12.833V4.167zM11.436 6a.733.733 0 01.631.29L13.565 8h.935a.5.5 0 010 1h-1.056a.739.739 0 01-.346-.09.723.723 0 01-.238-.197l-1.347-1.537-2.25 3.45a.733.733 0 01-.594.373.733.733 0 01-.37-.081.733.733 0 01-.26-.216L6.54 9H5.5a.5.5 0 010-1h1.161c.14 0 .259.042.346.09.057.03.155.088.238.196l1.35 1.534 2.248-3.447A.733.733 0 0111.436 6z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

SystemStatusIcon.displayName = "SystemStatusIcon";
export { SystemStatusIcon };
