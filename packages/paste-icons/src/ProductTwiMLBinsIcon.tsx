"use client";

import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface ProductTwiMLBinsIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductTwiMLBinsIcon = React.forwardRef<HTMLElement, ProductTwiMLBinsIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `ProductTwiMLBinsIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[ProductTwiMLBinsIcon]: Missing a title for non-decorative icon.");
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
            d="M17.5 3a.5.5 0 01.5.5v4a.5.5 0 01-.5.5H17v8.5a.5.5 0 01-.5.5h-13a.5.5 0 01-.5-.5V8h-.5a.5.5 0 01-.5-.5v-4a.5.5 0 01.5-.5h15zM16 8H4v7.999h12V8zm-3.5 1a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-5a.5.5 0 01-.5-.5v-2a.5.5 0 01.5-.5h5zm-.5 1H8v1h4v-1zm5-6H3v3h14V4z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

ProductTwiMLBinsIcon.displayName = "ProductTwiMLBinsIcon";
export { ProductTwiMLBinsIcon };
