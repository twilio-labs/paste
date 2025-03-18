"use client";

import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface ProductSourcesIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductSourcesIcon = React.forwardRef<HTMLElement, ProductSourcesIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `ProductSourcesIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[ProductSourcesIcon]: Missing a title for non-decorative icon.");
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
            d="M7.864 3.713a6.5 6.5 0 014.245.336.5.5 0 00.401-.916 7.5 7.5 0 10.256 13.622.5.5 0 00-.435-.9A6.5 6.5 0 117.864 3.713z"
          />
          <path
            fill="currentColor"
            d="M14.646 7.15a.5.5 0 000 .706l1.647 1.647H7a.5.5 0 100 1h9.293l-1.647 1.646a.5.5 0 00.708.707l2.5-2.5a.5.5 0 000-.707l-2.5-2.5a.5.5 0 00-.708 0z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

ProductSourcesIcon.displayName = "ProductSourcesIcon";
export { ProductSourcesIcon };
