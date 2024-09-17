import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface PaymentIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const PaymentIcon = React.forwardRef<HTMLElement, PaymentIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `PaymentIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[PaymentIcon]: Missing a title for non-decorative icon.");
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
          aria-labelledby={decorative || title == null ? undefined : titleId}
        >
          {title ? <title id={titleId}>{title}</title> : null}
          <path
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.939 2.609a8 8 0 116.122 14.782A8 8 0 016.94 2.61zM10 3.166a6.835 6.835 0 100 13.669 6.835 6.835 0 000-13.67z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.345 7.684A.9.9 0 1010 9.417a2.066 2.066 0 11-2.066 2.066.583.583 0 011.165 0 .9.9 0 10.901-.9 2.066 2.066 0 112.066-2.066.583.583 0 11-1.165 0 .9.9 0 00-.556-.833z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 5.461c.322 0 .583.261.583.583v.99a.583.583 0 01-1.166 0v-.99c0-.322.261-.583.583-.583zM10 12.384c.322 0 .583.261.583.583v.989a.583.583 0 01-1.166 0v-.99c0-.321.261-.582.583-.582z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

PaymentIcon.displayName = "PaymentIcon";
export { PaymentIcon };
