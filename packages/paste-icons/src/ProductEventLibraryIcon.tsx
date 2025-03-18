"use client";

import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface ProductEventLibraryIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductEventLibraryIcon = React.forwardRef<HTMLElement, ProductEventLibraryIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `ProductEventLibraryIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[ProductEventLibraryIcon]: Missing a title for non-decorative icon.");
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
            d="M10 7.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM8.94 8.94a1.5 1.5 0 112.12 2.12 1.5 1.5 0 01-2.12-2.12z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M10 2a.5.5 0 01.5.5v2.023A5.5 5.5 0 0115.477 9.5H17.5a.5.5 0 010 1h-2.023a5.5 5.5 0 01-4.977 4.977V17.5a.5.5 0 01-1 0v-2.023A5.5 5.5 0 014.523 10.5H2.5a.5.5 0 010-1h2.023A5.5 5.5 0 019.5 4.523V2.5A.5.5 0 0110 2zm4.5 8a4.5 4.5 0 10-9 0 4.5 4.5 0 009 0z"
            clipRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  },
);

ProductEventLibraryIcon.displayName = "ProductEventLibraryIcon";
export { ProductEventLibraryIcon };
