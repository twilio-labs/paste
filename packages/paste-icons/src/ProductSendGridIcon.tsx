"use client";

import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface ProductSendGridIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductSendGridIcon = React.forwardRef<HTMLElement, ProductSendGridIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `ProductSendGridIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[ProductSendGridIcon]: Missing a title for non-decorative icon.");
    }

    return (
      <IconWrapper as={as} display={display} element={element} size={size} color={color} ref={ref}>
        <svg
          role="img"
          aria-hidden={decorative}
          width="100%"
          height="100%"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          aria-labelledby={titleId}
        >
          {title ? <title id={titleId}>{title}</title> : null}
          <path
            fill="currentColor"
            d="M8.5 2.5H17c.275 0 .5.225.5.5v8.5c0 .55-.45 1-1 1h-3c-.55 0-1-.45-1-1v-3c0-.55-.45-1-1-1h-3c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1zm3 15H3a.501.501 0 01-.5-.5V8.5c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v3c0 .55.45 1 1 1h3c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

ProductSendGridIcon.displayName = "ProductSendGridIcon";
export { ProductSendGridIcon };
