"use client";

import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface ProductEmailAPIIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductEmailAPIIcon = React.forwardRef<HTMLElement, ProductEmailAPIIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `ProductEmailAPIIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[ProductEmailAPIIcon]: Missing a title for non-decorative icon.");
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
            d="M16.75 2h-8.5C7.56 2 7 2.56 7 3.25V7H3.25C2.56 7 2 7.56 2 8.25v8.5c0 .69.56 1.25 1.25 1.25h8.5c.69 0 1.25-.56 1.25-1.25V13h3.75c.69 0 1.25-.56 1.25-1.25v-8.5C18 2.56 17.44 2 16.75 2zM12 16.75a.25.25 0 01-.25.25h-8.5a.25.25 0 01-.25-.25v-8.5A.25.25 0 013.25 8H7v3.75c0 .69.56 1.25 1.25 1.25H12v3.75zM12 12H8.25a.25.25 0 01-.25-.25V8h3.75a.25.25 0 01.25.25V12zm5-.25a.25.25 0 01-.25.25H13V8.25C13 7.56 12.44 7 11.75 7H8V3.25A.25.25 0 018.25 3h8.5a.25.25 0 01.25.25v8.5z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

ProductEmailAPIIcon.displayName = "ProductEmailAPIIcon";
export { ProductEmailAPIIcon };
