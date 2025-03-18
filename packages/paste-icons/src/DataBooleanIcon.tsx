"use client";

import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface DataBooleanIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const DataBooleanIcon = React.forwardRef<HTMLElement, DataBooleanIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `DataBooleanIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[DataBooleanIcon]: Missing a title for non-decorative icon.");
    }

    return (
      <IconWrapper as={as} display={display} element={element} size={size} color={color} ref={ref}>
        <svg
          role="img"
          aria-hidden={decorative}
          height="100%"
          width="100%"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          aria-labelledby={titleId}
        >
          {title ? <title id={titleId}>{title}</title> : null}
          <path
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.023 7h5.956c.8.003 1.567.32 2.133.882A3 3 0 0116 9.998v.004a3 3 0 01-.888 2.116 3.045 3.045 0 01-2.133.882H7.021a3.045 3.045 0 01-2.133-.882A3 3 0 014 10.002v-.004a3 3 0 01.888-2.116A3.045 3.045 0 017.021 7h.002zm0 .956a2.078 2.078 0 00-1.454.602A2.047 2.047 0 004.963 10c.003.541.22 1.06.606 1.442.386.383.909.6 1.455.602h5.952a2.079 2.079 0 001.455-.602c.385-.382.603-.9.606-1.442a2.047 2.047 0 00-.606-1.442 2.078 2.078 0 00-1.455-.602H7.024z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.747 8.911a1.557 1.557 0 012.194 0 1.534 1.534 0 010 2.178 1.557 1.557 0 01-2.194 0 1.534 1.534 0 010-2.178zm1.097.505a.59.59 0 00-.416.171.582.582 0 00.416.997.59.59 0 00.416-.171.582.582 0 00-.416-.997z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

DataBooleanIcon.displayName = "DataBooleanIcon";
export { DataBooleanIcon };
