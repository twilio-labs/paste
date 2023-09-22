import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface ProductMappingIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductMappingIcon = React.forwardRef<HTMLElement, ProductMappingIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `ProductMappingIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[ProductMappingIcon]: Missing a title for non-decorative icon.");
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
            d="M5.354 7.145a.5.5 0 010 .707L3.707 9.5h12.586l-1.647-1.647a.5.5 0 01.708-.707l2.5 2.5a.5.5 0 010 .707l-2.5 2.5a.5.5 0 01-.708-.707l1.647-1.646H3.707l1.647 1.646a.5.5 0 11-.708.707l-2.5-2.5a.498.498 0 01-.146-.35v-.006a.498.498 0 01.146-.35l2.5-2.5a.5.5 0 01.708 0z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

ProductMappingIcon.displayName = "ProductMappingIcon";
export { ProductMappingIcon };
