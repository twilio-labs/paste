"use client";

import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface ProductFlowIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductFlowIcon = React.forwardRef<HTMLElement, ProductFlowIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `ProductFlowIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[ProductFlowIcon]: Missing a title for non-decorative icon.");
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
            d="M8.813 11.978a.5.5 0 10.707.707l2.104-2.103h1.932a2.25 2.25 0 100-1H11.79l-2.27-2.27a.5.5 0 10-.707.707l1.563 1.563H6.444a2.25 2.25 0 100 1h3.766l-1.397 1.396zM3 10.082a1.25 1.25 0 112.5 0 1.25 1.25 0 01-2.5 0zm11.5 0a1.25 1.25 0 112.5 0 1.25 1.25 0 01-2.5 0z"
            clipRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  },
);

ProductFlowIcon.displayName = "ProductFlowIcon";
export { ProductFlowIcon };
