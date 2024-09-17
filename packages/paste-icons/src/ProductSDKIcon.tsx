import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface ProductSDKIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductSDKIcon = React.forwardRef<HTMLElement, ProductSDKIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `ProductSDKIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[ProductSDKIcon]: Missing a title for non-decorative icon.");
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
          aria-labelledby={decorative || title == null ? undefined : titleId}
        >
          {title ? <title id={titleId}>{title}</title> : null}
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M2.81 13.633l7.096 3.292c.1.042.214.042.314 0l6.97-3.235a.526.526 0 01.665.268.52.52 0 01-.223.677l-6.97 3.235a1.403 1.403 0 01-1.187 0l-7.107-3.293a.52.52 0 01-.223-.677.526.526 0 01.664-.267zm0-3.653l7.096 3.293c.1.042.214.042.314 0l6.97-3.235a.526.526 0 01.665.267.52.52 0 01-.223.677l-6.97 3.235a1.403 1.403 0 01-1.187 0l-7.107-3.292a.52.52 0 01-.223-.677.526.526 0 01.664-.268zm7.794-7.847l6.697 3.13a1.194 1.194 0 010 2.17l-6.697 3.132c-.19.086-.396.13-.604.13-.208 0-.414-.044-.604-.13L2.7 7.435A1.194 1.194 0 012 6.348c0-.466.273-.89.7-1.085l6.696-3.13a1.435 1.435 0 011.208 0zm-.761.95l-6.698 3.13a.151.151 0 000 .282l6.698 3.13c.1.042.214.042.314 0l6.698-3.13a.151.151 0 000-.282l-6.698-3.13a.412.412 0 00-.314 0z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

ProductSDKIcon.displayName = "ProductSDKIcon";
export { ProductSDKIcon };
