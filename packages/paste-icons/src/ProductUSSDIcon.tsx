"use client";

import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface ProductUSSDIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductUSSDIcon = React.forwardRef<HTMLElement, ProductUSSDIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `ProductUSSDIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[ProductUSSDIcon]: Missing a title for non-decorative icon.");
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
            d="M17.096 11.305l-2.28-1.315 2.28-1.315c.24-.14.32-.445.186-.685a.505.505 0 00-.686-.185l-2.28 1.315V6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v2.625l-2.285-1.32a.5.5 0 10-.5.87l2.28 1.315-2.28 1.315a.505.505 0 00-.184.685.503.503 0 00.684.185l2.285-1.32v2.65c0 .275.225.5.5.5s.5-.225.5-.5V10.86l2.28 1.315a.505.505 0 00.686-.185.5.5 0 00-.186-.685zM6.901 4c-.275 0-.5.225-.5.5s.225.5.5.5h2.195c.275 0 .5-.225.5-.5s-.225-.5-.5-.5H6.901z"
          />
          <path
            fill="currentColor"
            d="M15.802 14.87a.501.501 0 00-.61-.355.501.501 0 00-.356.61l.48 1.81s.005.025-.01.045c-.014.02-.034.02-.04.02H7.772a.503.503 0 01-.485-.37L3.641 3.065s-.005-.025.01-.045c.015-.02.035-.02.04-.02h7.49c.25 0 .47.17.53.41l.455 1.72c.07.265.345.425.61.355a.501.501 0 00.356-.61l-.455-1.72A1.552 1.552 0 0011.177 2H3.69a1.047 1.047 0 00-1.015 1.32L6.32 16.89c.175.655.77 1.11 1.45 1.11h7.5c.33 0 .63-.15.83-.41.2-.26.265-.59.186-.91l-.48-1.81h-.005z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

ProductUSSDIcon.displayName = "ProductUSSDIcon";
export { ProductUSSDIcon };
