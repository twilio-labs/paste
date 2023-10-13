import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface ProductAssetsIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductAssetsIcon = React.forwardRef<HTMLElement, ProductAssetsIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `ProductAssetsIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[ProductAssetsIcon]: Missing a title for non-decorative icon.");
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
            d="M15.487 6.987l-4.474-4.474A1.736 1.736 0 009.775 2H5.25C4.56 2 4 2.56 4 3.25v13.5c0 .69.56 1.25 1.25 1.25h9.5c.69 0 1.25-.56 1.25-1.25V8.225a1.74 1.74 0 00-.513-1.238zm-.9.513H10.75a.25.25 0 01-.25-.25V3.414L14.586 7.5zm.163 9.5h-9.5a.25.25 0 01-.25-.25V3.25A.25.25 0 015.25 3H9.5v4.25c0 .69.56 1.25 1.25 1.25H15v8.25a.25.25 0 01-.25.25z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

ProductAssetsIcon.displayName = "ProductAssetsIcon";
export { ProductAssetsIcon };
