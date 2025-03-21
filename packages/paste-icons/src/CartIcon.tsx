import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import type { IconWrapperProps } from "./helpers/IconWrapper";
import { IconWrapper } from "./helpers/IconWrapper.js";

export interface CartIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const CartIcon = React.forwardRef<HTMLElement, CartIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `CartIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[CartIcon]: Missing a title for non-decorative icon.");
    }

    return (
      <IconWrapper as={as} display={display} element={element} size={size} color={color} ref={ref}>
        <svg
          role="img"
          aria-hidden={decorative}
          width="100%"
          height="100%"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-labelledby={titleId}
        >
          {title ? <title id={titleId}>{title}</title> : null}
          <path
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.984 2.83a.555.555 0 00-.547.46m0 0l-1.88 11.05a1.585 1.585 0 01-1.562 1.319H5.923a.515.515 0 010-1.03h7.072a.555.555 0 00.547-.461l1.88-11.05A1.585 1.585 0 0116.984 1.8h.701a.515.515 0 010 1.03h-.701M7.26 17.263a.247.247 0 100-.495v-.534a.782.782 0 100 1.563v-.534z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.26 16.234a.782.782 0 110 1.563v-.534a.247.247 0 010-.495v-.534zM12.606 17.263a.247.247 0 000-.495v-.534a.782.782 0 100 1.563v-.534z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.606 16.234a.782.782 0 110 1.563v-.534a.247.247 0 010-.495v-.534zM3.25 6.032a.02.02 0 00-.02.016v.01l1.034 4.134a1.624 1.624 0 001.575 1.23h8.605a.515.515 0 010 1.029H5.839a2.654 2.654 0 01-2.574-2.01L2.231 6.308A1.05 1.05 0 013.25 5.003h12.285a.515.515 0 010 1.03H3.25z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

CartIcon.displayName = "CartIcon";
export { CartIcon };
