import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface ProductJourneysIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductJourneysIcon = React.forwardRef<HTMLElement, ProductJourneysIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `ProductJourneysIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[ProductJourneysIcon]: Missing a title for non-decorative icon.");
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
            d="M1.75 3.5a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-1.5V8a1.5 1.5 0 001.5 1.5h2.5V8a1 1 0 011-1h7a1 1 0 011 1v4a1 1 0 01-1 1h-7a1 1 0 01-1-1v-1.5h-2.5a1.5 1.5 0 00-1.5 1.5v1.5h1.5a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1v-2a1 1 0 011-1h1.5V12c0-.818.393-1.544 1-2a2.496 2.496 0 01-1-2V6.5h-1.5a1 1 0 01-1-1v-2zm5 0h-4v2h4v-2zm3.5 6.584a.5.5 0 000-.167V8h7v4h-7v-1.916zM2.75 16.5v-2h4v2h-4z"
            clipRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  },
);

ProductJourneysIcon.displayName = "ProductJourneysIcon";
export { ProductJourneysIcon };
