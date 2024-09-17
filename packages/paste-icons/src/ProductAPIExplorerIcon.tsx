import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface ProductAPIExplorerIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductAPIExplorerIcon = React.forwardRef<HTMLElement, ProductAPIExplorerIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `ProductAPIExplorerIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[ProductAPIExplorerIcon]: Missing a title for non-decorative icon.");
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
            d="M17.312 4.227l-4.109-2.068a1.506 1.506 0 00-1.343-.002l-4.234 2.11a.249.249 0 01-.222 0L3.808 2.473A1.25 1.25 0 002 3.593v11.063c-.001.473.265.905.688 1.117l4.109 2.067c.422.211.92.212 1.343.002l4.233-2.11a.255.255 0 01.223 0l3.596 1.792A1.25 1.25 0 0018 16.406V5.343a1.243 1.243 0 00-.688-1.116zM17 16.407a.243.243 0 01-.118.212.247.247 0 01-.243.01l-3.597-1.792c-.018-.009-.039-.012-.058-.02V5.003a.5.5 0 10-1 0v9.814c-.018.008-.039.011-.057.02l-4.233 2.11a.498.498 0 01-.448 0l-4.108-2.068A.249.249 0 013 14.656V3.593c0-.087.044-.168.118-.213a.246.246 0 01.243-.011L6.958 5.16l.01.004V15a.5.5 0 001 0V5.2c.035-.014.072-.022.105-.039l4.233-2.11a.5.5 0 01.448.001l4.109 2.068a.249.249 0 01.137.223v11.063z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

ProductAPIExplorerIcon.displayName = "ProductAPIExplorerIcon";
export { ProductAPIExplorerIcon };
