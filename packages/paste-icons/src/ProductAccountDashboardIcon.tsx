import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface ProductAccountDashboardIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductAccountDashboardIcon = React.forwardRef<HTMLElement, ProductAccountDashboardIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `ProductAccountDashboardIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[ProductAccountDashboardIcon]: Missing a title for non-decorative icon.");
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
          aria-labelledby={decorative || title == null ? undefined : titleId}
        >
          {title ? <title id={titleId}>{title}</title> : null}
          <path
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.867 3.51c-.776 0-1.357.58-1.357 1.357v10.266c0 .776.58 1.357 1.357 1.357h10.266c.788 0 1.357-.592 1.357-1.294V4.865c0-.775-.58-1.356-1.357-1.356H4.867zM2.49 4.867A2.343 2.343 0 014.867 2.49h10.266a2.343 2.343 0 012.377 2.377v10.329c0 1.288-1.049 2.314-2.377 2.314H4.867a2.343 2.343 0 01-2.377-2.377V4.867z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.49 5.738a.51.51 0 01.51-.51h14a.51.51 0 110 1.02H3a.51.51 0 01-.51-.51zM14.54 8.451a.51.51 0 01-.035.72l-4.056 3.688a.51.51 0 01-.69-.005l-1.883-1.756-2.456 2.069a.51.51 0 01-.657-.78l2.802-2.36a.51.51 0 01.677.017l1.869 1.744 3.708-3.37a.51.51 0 01.72.033z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.218 8.794a.51.51 0 01.51-.51h2.434a.51.51 0 01.51.51v2.36a.51.51 0 11-1.02 0v-1.85h-1.924a.51.51 0 01-.51-.51z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

ProductAccountDashboardIcon.displayName = "ProductAccountDashboardIcon";
export { ProductAccountDashboardIcon };
