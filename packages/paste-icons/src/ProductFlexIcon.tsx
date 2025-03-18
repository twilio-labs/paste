"use client";

import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface ProductFlexIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductFlexIcon = React.forwardRef<HTMLElement, ProductFlexIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `ProductFlexIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[ProductFlexIcon]: Missing a title for non-decorative icon.");
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
            d="M2.31 8.167a.5.5 0 01.54.105l4.302 4.316c.1.09.154.218.15.351v4.566a.502.502 0 01-.85.351L2.15 13.541A.457.457 0 012 13.19V8.624c.003-.201.125-.38.31-.457zM13.205 2a.54.54 0 01.35.15l4.302 4.316a.503.503 0 01-.35.853H7.853a.501.501 0 000 1.004h2.8a.455.455 0 01.351.15l4.302 4.366a.503.503 0 01-.35.853H9.854a.455.455 0 01-.35-.15L2.15 6.164A.457.457 0 012 5.814V2.502A.541.541 0 012.5 2z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

ProductFlexIcon.displayName = "ProductFlexIcon";
export { ProductFlexIcon };
