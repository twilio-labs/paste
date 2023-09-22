import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface ProductInternetOfThingsIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductInternetOfThingsIcon = React.forwardRef<HTMLElement, ProductInternetOfThingsIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `ProductInternetOfThingsIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[ProductInternetOfThingsIcon]: Missing a title for non-decorative icon.");
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
            d="M10.002 7.998a.5.5 0 01.5.5v6.588a1.514 1.514 0 11-1 0V8.498a.5.5 0 01.5-.5zm-2 0a.5.5 0 01.5.5v3.188a1.258 1.258 0 01-.366.884l-3.283 3.283a1.5 1.5 0 11-.707-.706l3.283-3.284a.25.25 0 00.074-.177V8.498a.5.5 0 01.5-.5zm3.999 0a.5.5 0 01.5.5v3.188c0 .067.026.13.073.177l3.283 3.284a1.495 1.495 0 011.82 2.278 1.497 1.497 0 01-2.526-1.572l-3.284-3.283a1.258 1.258 0 01-.366-.884V8.498a.5.5 0 01.5-.5zM7.924 3.111a2.5 2.5 0 114.156 2.777A2.5 2.5 0 017.924 3.11zm3.138.328a1.5 1.5 0 00-2.12 0 1.49 1.49 0 000 2.12 1.5 1.5 0 002.12-2.12z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

ProductInternetOfThingsIcon.displayName = "ProductInternetOfThingsIcon";
export { ProductInternetOfThingsIcon };
