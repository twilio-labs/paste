import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface ProductChannelsIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductChannelsIcon = React.forwardRef<HTMLElement, ProductChannelsIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `ProductChannelsIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[ProductChannelsIcon]: Missing a title for non-decorative icon.");
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
            d="M5.5 13.469a.497.497 0 01.5.498v2.377l3.165-2.756a.501.501 0 01.335-.12h8a.5.5 0 110 .997H9.69l-3.235 2.82a.882.882 0 01-.57.215.867.867 0 01-.885-.877v-2.158H2.5a.5.5 0 110-.996h3zm12-2.99a.5.5 0 110 .997h-15a.5.5 0 110-.997zm0-2.99a.5.5 0 110 .997h-15a.5.5 0 110-.996zm0-2.989a.5.5 0 110 .997h-15a.5.5 0 110-.997h15z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

ProductChannelsIcon.displayName = "ProductChannelsIcon";
export { ProductChannelsIcon };
