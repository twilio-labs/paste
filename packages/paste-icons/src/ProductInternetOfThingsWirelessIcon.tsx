"use client";

import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface ProductInternetOfThingsWirelessIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductInternetOfThingsWirelessIcon = React.forwardRef<HTMLElement, ProductInternetOfThingsWirelessIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `ProductInternetOfThingsWirelessIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[ProductInternetOfThingsWirelessIcon]: Missing a title for non-decorative icon.");
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
          aria-labelledby={titleId}
        >
          {title ? <title id={titleId}>{title}</title> : null}
          <path
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.425.519l2.025 2.025A1.875 1.875 0 0117 3.875v14.563A1.562 1.562 0 0115.437 20H3.563A1.563 1.563 0 012 18.425V1.55A1.569 1.569 0 013.563 0H13.1c.493-.008.969.179 1.325.519zm1.233 18.14a.313.313 0 00.092-.221V3.874a.625.625 0 00-.181-.412l-2.025-2.025a.625.625 0 00-.444-.188H3.563a.313.313 0 00-.313.313v16.875a.313.313 0 00.313.312h11.874a.313.313 0 00.221-.091zM6.375 6.25h6.25A1.875 1.875 0 0114.5 8.125v7.5a1.875 1.875 0 01-1.875 1.875h-6.25A1.875 1.875 0 014.5 15.625v-7.5A1.875 1.875 0 016.375 6.25zm6.875 5.844V8.125a.625.625 0 00-.625-.625H8.656l4.594 4.594zm-7.5-1.088v4.62a.625.625 0 00.625.624h4.619L5.75 11.006zm0-1.768l6.994 7.012a.626.626 0 00.506-.625v-1.769L6.894 7.5h-.519a.625.625 0 00-.625.625v1.113z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

ProductInternetOfThingsWirelessIcon.displayName = "ProductInternetOfThingsWirelessIcon";
export { ProductInternetOfThingsWirelessIcon };
