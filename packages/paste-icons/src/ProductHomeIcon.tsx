import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import type { IconWrapperProps } from "./helpers/IconWrapper";
import { IconWrapper } from "./helpers/IconWrapper.js";

export interface ProductHomeIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductHomeIcon = React.forwardRef<HTMLElement, ProductHomeIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `ProductHomeIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[ProductHomeIcon]: Missing a title for non-decorative icon.");
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
            d="M9.654 3.14a.5.5 0 01.692 0l8 7.681a.5.5 0 11-.692.722L10 4.193l-7.654 7.35a.5.5 0 01-.692-.722l8-7.682z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M4.462 8.318a.5.5 0 01.5.5V16H8a.5.5 0 010 1H4.462a.5.5 0 01-.5-.5V8.818a.5.5 0 01.5-.5zm11.076 0a.5.5 0 01.5.5V16.5a.5.5 0 01-.5.5H12a.5.5 0 010-1h3.039V8.818a.5.5 0 01.5-.5z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M9 12a.5.5 0 00-.5.5v4h-1v-4A1.5 1.5 0 019 11h2a1.5 1.5 0 011.5 1.5v4h-1v-4a.5.5 0 00-.5-.5H9z"
            clipRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  },
);

ProductHomeIcon.displayName = "ProductHomeIcon";
export { ProductHomeIcon };
