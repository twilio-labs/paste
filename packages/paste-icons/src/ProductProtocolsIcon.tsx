import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import type { IconWrapperProps } from "./helpers/IconWrapper";
import { IconWrapper } from "./helpers/IconWrapper.js";

export interface ProductProtocolsIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductProtocolsIcon = React.forwardRef<HTMLElement, ProductProtocolsIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `ProductProtocolsIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[ProductProtocolsIcon]: Missing a title for non-decorative icon.");
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
          aria-labelledby={titleId}
        >
          {title ? <title id={titleId}>{title}</title> : null}
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M10.186 3.321a1.451 1.451 0 100 2.903 1.451 1.451 0 000-2.903zM7.619 4.772a2.567 2.567 0 115.134 0 2.567 2.567 0 01-5.134 0zM4.567 12.55c-.226 0-.422.034-.531.09l-.017.007-.016.007A1.495 1.495 0 003.116 14c0 .808.643 1.451 1.451 1.451.36 0 .715-.154 1.004-.414.258-.233.448-.605.448-1.037 0-.77-.68-1.45-1.452-1.45zm-1.013-.918c.333-.161.724-.2 1.013-.2 1.388 0 2.568 1.181 2.568 2.568 0 .759-.332 1.429-.817 1.866-.456.41-1.068.702-1.75.702A2.56 2.56 0 012 14c0-1.041.652-1.98 1.554-2.368zm11.879.918a1.451 1.451 0 100 2.901 1.451 1.451 0 000-2.902zM12.865 14A2.567 2.567 0 1118 14a2.567 2.567 0 01-5.135 0z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M8.512 5.496c-2.446.68-4.205 2.885-4.205 5.49 0 .3.033.603.071.943l-1.11.124-.001-.014a9.515 9.515 0 01-.076-1.053c0-3.124 2.11-5.756 5.022-6.565l.3 1.075zm-2.343 9.689c1.021.92 2.38 1.494 3.831 1.494 1.487 0 2.808-.573 3.831-1.494l.747.83c-1.21 1.089-2.791 1.78-4.578 1.78-1.748 0-3.367-.69-4.578-1.78l.747-.83zm9.487-4.199a5.666 5.666 0 00-3.694-5.319l.392-1.045a6.783 6.783 0 014.418 6.364c0 .366-.04.727-.076 1.053l-.002.014-1.11-.124c.039-.34.072-.644.072-.943zm-2.78-1.801L9.89 13.451l-2.703-2.703.79-.789 1.761 1.762 2.223-3.176.915.64z"
            clipRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  },
);

ProductProtocolsIcon.displayName = "ProductProtocolsIcon";
export { ProductProtocolsIcon };
