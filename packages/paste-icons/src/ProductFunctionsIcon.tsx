"use client";

import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface ProductFunctionsIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductFunctionsIcon = React.forwardRef<HTMLElement, ProductFunctionsIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `ProductFunctionsIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[ProductFunctionsIcon]: Missing a title for non-decorative icon.");
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
            d="M16.714 3.461A1.263 1.263 0 0015.738 3H7.524A4.517 4.517 0 003 7.51v8.232c0 .353.15.69.412.927.229.211.528.33.84.331h.105c3.906-.34 5.445-2.966 5.53-4.67a5.016 5.016 0 003.584-4.009 5.017 5.017 0 003.504-3.818 1.245 1.245 0 00-.261-1.042zM4.272 15.988a.267.267 0 01-.181-.065.245.245 0 01-.086-.18V12.52h4.867c-.207 1.198-1.433 3.202-4.6 3.478v-.01zm4.258-4.47H4.005V8.512H12.426a4.02 4.02 0 01-3.896 3.006zm3.519-4.008H4.005a3.513 3.513 0 013.52-3.508h8.213a.242.242 0 01.196.095c.05.056.071.132.056.206a4.018 4.018 0 01-3.941 3.207z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

ProductFunctionsIcon.displayName = "ProductFunctionsIcon";
export { ProductFunctionsIcon };
