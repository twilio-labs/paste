"use client";

import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface ProductUnifyIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductUnifyIcon = React.forwardRef<HTMLElement, ProductUnifyIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `ProductUnifyIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[ProductUnifyIcon]: Missing a title for non-decorative icon.");
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
            d="M3 17.415V18h6.634v-1.17H4.171a6.033 6.033 0 015.424-5.425v-1.17C5.927 10.545 3 13.628 3 17.414zM6.512 5.707c0 1.834 1.366 3.356 3.122 3.669v-1.21a2.544 2.544 0 01-1.951-2.459c0-1.17.82-2.185 1.951-2.458V2.078a3.657 3.657 0 00-3.122 3.63zm5.464 2.576c.156-.078.312-.195.468-.312l.78.78.82-.82-.859-.858c.117-.234.234-.507.274-.78h1.248V5.122H13.46c-.04-.273-.157-.546-.274-.78l.859-.86-.82-.819-.78.78a3.256 3.256 0 00-.468-.311V2h-1.171v1.99c.858.117 1.56.82 1.56 1.717 0 .898-.702 1.64-1.56 1.717v1.99h1.17v-1.13zm4.604 8.547a7.034 7.034 0 00-.39-1.562l1.015-.507-.546-1.015-1.015.508c-.312-.508-.742-.976-1.17-1.366l.663-1.054-1.015-.624-.624 1.014a5.45 5.45 0 00-1.561-.624v-1.405h-1.171v2.38c2.614.196 4.683 2.381 4.683 5.035V18h2.341v-1.17h-1.21z"
          />
          <path
            fill="currentColor"
            d="M10.805 13.746v1.171a2.73 2.73 0 012.341 2.693V18h1.171v-.39c0-1.99-1.56-3.668-3.512-3.864z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

ProductUnifyIcon.displayName = "ProductUnifyIcon";
export { ProductUnifyIcon };
