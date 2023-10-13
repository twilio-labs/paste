import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface ProductFrontlineIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductFrontlineIcon = React.forwardRef<HTMLElement, ProductFrontlineIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `ProductFrontlineIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[ProductFrontlineIcon]: Missing a title for non-decorative icon.");
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
            d="M8.892 2.067a.507.507 0 01.504 0 .5.5 0 01.251.433v8.763a.5.5 0 01-.251.433l-4.762 2.728a.502.502 0 00-.203.219l-1.472 3.072A.505.505 0 012 17.5V6.304a.5.5 0 01.252-.433zm8.132.225a.507.507 0 01.57.045.498.498 0 01.16.545l-1.567 4.682a.497.497 0 00.035.395l1.718 3.166a.498.498 0 01-.192.67l-6.337 3.63a.507.507 0 01-.504 0 .5.5 0 01-.252-.433V6.229a.5.5 0 01.252-.433z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

ProductFrontlineIcon.displayName = "ProductFrontlineIcon";
export { ProductFrontlineIcon };
