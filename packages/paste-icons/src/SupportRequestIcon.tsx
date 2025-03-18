"use client";

import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface SupportRequestIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const SupportRequestIcon = React.forwardRef<HTMLElement, SupportRequestIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `SupportRequestIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[SupportRequestIcon]: Missing a title for non-decorative icon.");
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
            d="M10.076 5.185a.97.97 0 00-1.036.967.5.5 0 11-1 0 1.97 1.97 0 013.776-.783 1.968 1.968 0 01-1.15 2.639.234.234 0 00-.157.222v.125a.5.5 0 11-1 0V8.23a1.235 1.235 0 01.823-1.165.969.969 0 00-.256-1.88zm-.066 4.139a.684.684 0 110 1.367.684.684 0 010-1.367z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.804 2a1.435 1.435 0 00-1.435 1.435v5.85l-.328-.21a1 1 0 00-1.541.84V15.5A1.5 1.5 0 004 17h12a1.5 1.5 0 001.5-1.5V9.916a1 1 0 00-1.54-.841l-.31.199v-5.84A1.434 1.434 0 0014.214 2h-8.41zm8.845 7.917V3.435A.435.435 0 0014.216 3H5.804a.435.435 0 00-.435.435v6.494l4.36 2.803a.5.5 0 00.541 0l4.38-2.815zm-3.838 3.656L16.5 9.916V15.5a.5.5 0 01-.5.5H4a.5.5 0 01-.5-.5V9.916l5.689 3.657a1.5 1.5 0 001.622 0z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

SupportRequestIcon.displayName = "SupportRequestIcon";
export { SupportRequestIcon };
