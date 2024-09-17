import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface ProductContactCenterAdminIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductContactCenterAdminIcon = React.forwardRef<HTMLElement, ProductContactCenterAdminIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `ProductContactCenterAdminIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[ProductContactCenterAdminIcon]: Missing a title for non-decorative icon.");
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
          aria-labelledby={decorative || title == null ? undefined : titleId}
        >
          {title ? <title id={titleId}>{title}</title> : null}
          <path
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.335 2h-8.67a3.771 3.771 0 00-2.578 1.02A3.435 3.435 0 002 5.497v.004A3.435 3.435 0 003.087 7.98 3.771 3.771 0 005.665 9h8.67a3.771 3.771 0 002.578-1.02A3.435 3.435 0 0018 5.503v-.004a3.435 3.435 0 00-1.087-2.479A3.771 3.771 0 0014.335 2zM3.775 7.255A2.435 2.435 0 013 5.5a2.435 2.435 0 01.775-1.755A2.771 2.771 0 015.668 3h8.664a2.772 2.772 0 011.893.745A2.44 2.44 0 0117 5.5a2.436 2.436 0 01-.775 1.755A2.772 2.772 0 0114.332 8H5.668a2.771 2.771 0 01-1.893-.745zM14.335 10h-8.67a3.77 3.77 0 00-2.578 1.02A3.435 3.435 0 002 13.497v.004a3.435 3.435 0 001.087 2.479A3.77 3.77 0 005.665 17h8.67a3.77 3.77 0 002.578-1.02A3.435 3.435 0 0018 13.503v-.004a3.435 3.435 0 00-1.087-2.479A3.77 3.77 0 0014.335 10zm-10.56 5.255A2.436 2.436 0 013 13.5a2.436 2.436 0 01.775-1.755A2.771 2.771 0 015.668 11h8.664a2.772 2.772 0 011.893.745A2.44 2.44 0 0117 13.5a2.436 2.436 0 01-.775 1.755 2.772 2.772 0 01-1.893.745H5.668a2.772 2.772 0 01-1.893-.745zM6 4.5a1 1 0 100 2 1 1 0 000-2zm-2 1a2 2 0 114 0 2 2 0 01-4 0zm9 8a1 1 0 112 0 1 1 0 01-2 0zm1-2a2 2 0 100 4 2 2 0 000-4z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

ProductContactCenterAdminIcon.displayName = "ProductContactCenterAdminIcon";
export { ProductContactCenterAdminIcon };
