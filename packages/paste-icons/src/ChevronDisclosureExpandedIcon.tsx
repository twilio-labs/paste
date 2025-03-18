"use client";

import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface ChevronDisclosureExpandedIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ChevronDisclosureExpandedIcon = React.forwardRef<HTMLElement, ChevronDisclosureExpandedIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `ChevronDisclosureExpandedIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[ChevronDisclosureExpandedIcon]: Missing a title for non-decorative icon.");
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
            d="M10.258 12.882l3.67-4.371a.305.305 0 00-.052-.442A.34.34 0 0013.67 8H6.33c-.182 0-.33.14-.33.314 0 .072.026.141.072.197l3.67 4.371a.341.341 0 00.516 0z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

ChevronDisclosureExpandedIcon.displayName = "ChevronDisclosureExpandedIcon";
export { ChevronDisclosureExpandedIcon };
