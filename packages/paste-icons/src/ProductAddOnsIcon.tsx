"use client";

import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface ProductAddOnsIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductAddOnsIcon = React.forwardRef<HTMLElement, ProductAddOnsIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `ProductAddOnsIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[ProductAddOnsIcon]: Missing a title for non-decorative icon.");
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
            d="M16.87 7.922a1.3 1.3 0 01.63 1.125v5.023c0 .502-.267.965-.699 1.216l-4.376 2.541c-.19.11-.405.17-.624.173-.713 0-1.29-.58-1.29-1.298v-5.044c.001-.501.267-.964.699-1.216l4.376-2.54c.401-.224.89-.216 1.284.02zm-6.171-5.735l4.37 2.54a1.293 1.293 0 010 2.244l-4.558 2.65a2.165 2.165 0 00-1.076 1.875v5.18a1.293 1.293 0 01-1.29 1.297A1.328 1.328 0 017.5 17.8l-4.301-2.514c-.434-.25-.7-.714-.699-1.216V6.96a1.396 1.396 0 01.699-1.216L9.3 2.187a1.402 1.402 0 011.398 0zm5.532 6.622a.21.21 0 00-.107.027l-4.377 2.541a.325.325 0 00-.161.281v5.023c0 .078.041.15.108.19a.214.214 0 00.215 0l4.376-2.51a.336.336 0 00.161-.28V9.046a.222.222 0 00-.107-.189.284.284 0 00-.108-.027v-.022zM10 3.08a.327.327 0 00-.161.043L3.715 6.679a.314.314 0 00-.161.281v7.11c0 .116.061.223.161.28l4.301 2.51c.065.045.15.045.215 0a.195.195 0 00.108-.185v-5.179c-.001-1.16.614-2.231 1.613-2.811l4.559-2.65a.2.2 0 00.107-.183.206.206 0 00-.107-.19l-4.371-2.54a.359.359 0 00-.14-.043z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

ProductAddOnsIcon.displayName = "ProductAddOnsIcon";
export { ProductAddOnsIcon };
