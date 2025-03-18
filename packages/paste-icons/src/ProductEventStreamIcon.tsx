"use client";

import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface ProductEventStreamIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductEventStreamIcon = React.forwardRef<HTMLElement, ProductEventStreamIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `ProductEventStreamIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[ProductEventStreamIcon]: Missing a title for non-decorative icon.");
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
            d="M2 10a2 2 0 013.937-.5h2.126a2 2 0 013.874 0h2.126a2 2 0 110 1h-2.126a2 2 0 01-3.874 0H5.937A2 2 0 012 10zm13 0a1 1 0 102 0 1 1 0 00-2 0zm-5 1a1 1 0 110-2 1 1 0 010 2zM4 9a1 1 0 100 2 1 1 0 000-2z"
            clipRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  },
);

ProductEventStreamIcon.displayName = "ProductEventStreamIcon";
export { ProductEventStreamIcon };
