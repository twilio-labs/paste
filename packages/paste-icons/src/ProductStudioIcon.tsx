import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface ProductStudioIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductStudioIcon = React.forwardRef<HTMLElement, ProductStudioIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `ProductStudioIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[ProductStudioIcon]: Missing a title for non-decorative icon.");
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
            d="M4 6h13.5a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5h-6a.5.5 0 00-.5.5V5H4a2 2 0 100 4h2v2.5a.5.5 0 00.5.5H16a1 1 0 010 2H2.5a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h6a.5.5 0 00.5-.5V15h7a2 2 0 100-4h-2V8.5a.5.5 0 00-.5-.5H4a1 1 0 110-2zm8-3h5v2h-5V3zM8 17H3v-2h5v2zm5-6H7V9h6v2z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

ProductStudioIcon.displayName = "ProductStudioIcon";
export { ProductStudioIcon };
