import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import type { IconWrapperProps } from "./helpers/IconWrapper";
import { IconWrapper } from "./helpers/IconWrapper.js";

export interface ProductConnectionsIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductConnectionsIcon = React.forwardRef<HTMLElement, ProductConnectionsIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `ProductConnectionsIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[ProductConnectionsIcon]: Missing a title for non-decorative icon.");
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
            d="M10 6c-2.218 0-4 1.782-4 4s1.782 4 4 4 4-1.782 4-4-1.818-4-4-4zm0 6.91c-1.6 0-2.91-1.31-2.91-2.91S8.4 7.09 10 7.09 12.91 8.4 12.91 10 11.6 12.91 10 12.91zM4.182 2A2.165 2.165 0 002 4.182c0 1.2.982 2.182 2.182 2.182s2.182-.982 2.182-2.182S5.382 2 4.182 2zm0 3.273c-.618 0-1.091-.473-1.091-1.091S3.564 3.09 4.18 3.09c.619 0 1.092.473 1.092 1.09 0 .619-.51 1.092-1.091 1.092zm0 8.363c-1.2 0-2.182.982-2.182 2.182S2.982 18 4.182 18s2.182-.982 2.182-2.182-.982-2.182-2.182-2.182zm0 3.273a1.072 1.072 0 01-1.091-1.09c0-.619.473-1.092 1.09-1.092.619 0 1.092.473 1.092 1.091s-.51 1.091-1.091 1.091zm11.636-3.273c-1.2 0-2.182.982-2.182 2.182S14.618 18 15.818 18 18 17.018 18 15.818s-.982-2.182-2.182-2.182zm0 3.273a1.07 1.07 0 01-1.09-1.09c0-.619.472-1.092 1.09-1.092.618 0 1.091.473 1.091 1.091s-.509 1.091-1.09 1.091zm0-14.909c-1.2 0-2.182.982-2.182 2.182s.982 2.182 2.182 2.182S18 5.382 18 4.182 17.018 2 15.818 2zm0 3.273c-.618 0-1.09-.473-1.09-1.091s.472-1.091 1.09-1.091c.618 0 1.091.473 1.091 1.09 0 .619-.509 1.092-1.09 1.092z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M15.077 5.695l-2.255 2.254-.771-.771 2.254-2.255.772.772zm-7.2 7.2l-2.219 2.218-.771-.771 2.218-2.219.772.772zM5.662 5.072L7.88 7.327l-.778.765-2.218-2.255.778-.765zm7.048 7.085l2.218 2.181-.765.778-2.218-2.182.765-.777z"
            clipRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  },
);

ProductConnectionsIcon.displayName = "ProductConnectionsIcon";
export { ProductConnectionsIcon };
