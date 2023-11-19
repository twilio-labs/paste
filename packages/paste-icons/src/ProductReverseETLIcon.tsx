import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface ProductReverseETLIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductReverseETLIcon = React.forwardRef<HTMLElement, ProductReverseETLIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `ProductReverseETLIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[ProductReverseETLIcon]: Missing a title for non-decorative icon.");
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
            d="M2.941 5.246c0-.245.122-.525.444-.83.324-.305.817-.602 1.465-.862 1.293-.517 3.113-.848 5.146-.848 2.034 0 3.855.33 5.15.848.65.26 1.144.556 1.467.862.313.295.437.567.445.806a1.48 1.48 0 01-.767 1.114.47.47 0 00.446.829c.113-.061.22-.13.321-.207v2.301a.47.47 0 00.942 0V5.246c0-.587-.3-1.099-.74-1.514-.44-.415-1.05-.766-1.764-1.052-1.432-.572-3.377-.915-5.5-.915-2.122 0-4.066.343-5.496.915-.714.286-1.323.638-1.761 1.052C2.299 4.148 2 4.66 2 5.246v8.027c0 .657.373 1.218.903 1.66.53.444 1.267.813 2.128 1.1 1.725.575 4.047.852 6.507.661a.47.47 0 00-.073-.938c-2.356.183-4.55-.086-6.136-.616-.795-.265-1.413-.587-1.823-.93-.411-.343-.565-.664-.565-.937V10.95c.373.304.84.57 1.37.796 1.324.567 3.129.928 5.12.986a.47.47 0 10.027-.94c-1.906-.056-3.588-.402-4.777-.91-.595-.256-1.044-.542-1.337-.833-.292-.29-.403-.555-.403-.79V6.938c.416.338.95.63 1.56.874 1.43.572 3.372.916 5.495.916a18.068 18.068 0 003.083-.256.47.47 0 10-.158-.928c-.966.164-1.944.245-2.923.243h-.002c-2.033 0-3.853-.33-5.146-.848-.648-.26-1.141-.557-1.465-.862-.322-.305-.444-.586-.444-.83z"
          />
          <path
            fill="currentColor"
            d="M18 11.463a.552.552 0 01-.083.28l-4.035 6.493V13.34h-1.909a.565.565 0 01-.49-.284.552.552 0 01.012-.563L15.53 6v4.895h1.909a.566.566 0 01.49.285.552.552 0 01.071.283z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

ProductReverseETLIcon.displayName = "ProductReverseETLIcon";
export { ProductReverseETLIcon };
