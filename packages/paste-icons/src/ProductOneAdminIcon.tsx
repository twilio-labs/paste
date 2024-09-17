import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface ProductOneAdminIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductOneAdminIcon = React.forwardRef<HTMLElement, ProductOneAdminIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `ProductOneAdminIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[ProductOneAdminIcon]: Missing a title for non-decorative icon.");
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
          aria-labelledby={decorative || title == null ? undefined : titleId}
        >
          {title ? <title id={titleId}>{title}</title> : null}
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M9.5 3.5A.5.5 0 0110 3h1a2.5 2.5 0 012.5 2.5V10a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V3.5zm1 .5v5.5h2v-4A1.5 1.5 0 0011 4h-.5z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M6.5 10a.5.5 0 01.5-.5h3a.5.5 0 01.5.5v6.5a.5.5 0 01-.5.5H9a2.5 2.5 0 01-2.5-2.5V10zm1 .5v4A1.5 1.5 0 009 16h.5v-5.5h-2z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M16.5 9.5a.5.5 0 01.5.5v1a2.5 2.5 0 01-2.5 2.5H10a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h6.5zm-.5 1h-5.5v2h4A1.5 1.5 0 0016 11v-.5z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M10 6.5a.5.5 0 01.5.5v3a.5.5 0 01-.5.5H3.5A.5.5 0 013 10V9a2.5 2.5 0 012.5-2.5H10zm-.5 1h-4A1.5 1.5 0 004 9v.5h5.5v-2z"
            clipRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  },
);

ProductOneAdminIcon.displayName = "ProductOneAdminIcon";
export { ProductOneAdminIcon };
