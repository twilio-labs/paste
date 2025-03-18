"use client";

import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface ProductAdminAccountsIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductAdminAccountsIcon = React.forwardRef<HTMLElement, ProductAdminAccountsIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `ProductAdminAccountsIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[ProductAdminAccountsIcon]: Missing a title for non-decorative icon.");
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
            d="M3.81 2.941a.872.872 0 00-.869.868v5.02c0 .476.392.868.868.868h.335a.47.47 0 110 .94h-.335C2.813 10.638 2 9.826 2 8.83v-5.02C2 2.813 2.813 2 3.81 2h5.019c.996 0 1.809.813 1.809 1.81v.334a.47.47 0 01-.941 0v-.335a.872.872 0 00-.868-.868h-5.02z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.49 6.622a.872.872 0 00-.868.868v5.02c0 .476.392.868.868.868h.335a.47.47 0 010 .941H7.49c-.996 0-1.809-.813-1.809-1.81V7.49c0-.996.813-1.809 1.81-1.809h5.019c.996 0 1.809.813 1.809 1.81v.334a.47.47 0 01-.941 0V7.49a.872.872 0 00-.868-.868H7.49z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.171 10.303a.872.872 0 00-.868.868v5.02c0 .476.392.868.868.868h5.02a.872.872 0 00.868-.868v-5.02a.872.872 0 00-.868-.868h-5.02zm-1.809.868c0-.996.813-1.809 1.81-1.809h5.019c.996 0 1.809.813 1.809 1.81v5.019c0 .996-.813 1.809-1.81 1.809h-5.019c-.996 0-1.809-.813-1.809-1.81v-5.019z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

ProductAdminAccountsIcon.displayName = "ProductAdminAccountsIcon";
export { ProductAdminAccountsIcon };
