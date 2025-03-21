import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import type { IconWrapperProps } from "./helpers/IconWrapper";
import { IconWrapper } from "./helpers/IconWrapper.js";

export interface ProductCommsIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductCommsIcon = React.forwardRef<HTMLElement, ProductCommsIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `ProductCommsIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[ProductCommsIcon]: Missing a title for non-decorative icon.");
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
          aria-labelledby={titleId}
        >
          {title ? <title id={titleId}>{title}</title> : null}
          <path
            fill="currentColor"
            d="M4.213 10.942c-.213.448-.88.352-.954-.139v.005L2 2.582v-.128a.52.52 0 01.443-.449h12.832c.224.027.4.198.437.422l.661 4.337h-.005a.505.505 0 01-.501.576H6.24a.496.496 0 00-.459.289l-1.568 3.313zM18 17.477v.059a.503.503 0 01-.507.464l-.032-.005H4.795a.514.514 0 01-.502-.427l-.661-4.332a.5.5 0 01.501-.577h9.627a.517.517 0 00.459-.288l1.562-3.307c.214-.443.886-.353.955.138l1.259 8.227a.208.208 0 01.005.048z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

ProductCommsIcon.displayName = "ProductCommsIcon";
export { ProductCommsIcon };
