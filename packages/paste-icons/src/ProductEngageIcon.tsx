import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface ProductEngageIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductEngageIcon = React.forwardRef<HTMLElement, ProductEngageIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `ProductEngageIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[ProductEngageIcon]: Missing a title for non-decorative icon.");
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
          aria-labelledby={decorative || title == null ? undefined : titleId}
        >
          {title ? <title id={titleId}>{title}</title> : null}
          <path
            fill="currentColor"
            d="M15.878 9.111c-.353-2.578-2.475-4.711-5.038-5.067-1.591-.266-3.094.178-4.243.978a.542.542 0 01-.62-.089l-.706-.71c-.177-.267-.177-.623.088-.8A8.27 8.27 0 019.956 2h7.337c.353 0 .619.267.707.622v7.29c0 1.688-.619 3.288-1.503 4.621-.177.267-.619.267-.795.09l-.708-.712a.55.55 0 01-.088-.622c.796-1.156 1.15-2.578.972-4.178zm-6.806 6.756c-2.564-.356-4.685-2.49-5.039-5.067-.177-1.511.177-3.022.973-4.178.176-.178.088-.444-.089-.622l-.707-.711c-.177-.267-.53-.178-.707.089C2.53 6.622 2 8.222 2 10v7.378c0 .267.265.622.619.622h7.337c1.68 0 3.27-.533 4.597-1.511.265-.178.265-.533.088-.8l-.707-.711a.542.542 0 00-.62-.09c-1.148.89-2.651 1.245-4.242.979z"
          />
          <path
            fill="currentColor"
            d="M9.956 14c2.197 0 3.978-1.79 3.978-4s-1.781-4-3.978-4-3.978 1.79-3.978 4 1.78 4 3.978 4z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

ProductEngageIcon.displayName = "ProductEngageIcon";
export { ProductEngageIcon };
