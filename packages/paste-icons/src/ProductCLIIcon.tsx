import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface ProductCLIIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductCLIIcon = React.forwardRef<HTMLElement, ProductCLIIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `ProductCLIIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[ProductCLIIcon]: Missing a title for non-decorative icon.");
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
          aria-labelledby={decorative || title == null ? undefined : titleId}
        >
          {title ? <title id={titleId}>{title}</title> : null}
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M16.75 4c.69 0 1.25.56 1.25 1.25v9.5c0 .69-.56 1.25-1.25 1.25H3.25C2.56 16 2 15.44 2 14.75v-9.5C2 4.56 2.56 4 3.25 4h13.5zm0 1H3.25a.25.25 0 00-.25.25v9.5c0 .138.112.25.25.25h13.5a.25.25 0 00.25-.25v-9.5a.25.25 0 00-.25-.25zM14 12a.5.5 0 110 1h-3.5a.5.5 0 110-1H14zM6.29 7.165l2 1.97a1.25 1.25 0 010 1.77L6.375 12.83a.5.5 0 11-.73-.685l1.95-1.945a.255.255 0 00-.005-.355l-2-1.97a.5.5 0 11.7-.71z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

ProductCLIIcon.displayName = "ProductCLIIcon";
export { ProductCLIIcon };
