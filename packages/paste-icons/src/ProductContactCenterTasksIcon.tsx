import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface ProductContactCenterTasksIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductContactCenterTasksIcon = React.forwardRef<HTMLElement, ProductContactCenterTasksIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `ProductContactCenterTasksIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[ProductContactCenterTasksIcon]: Missing a title for non-decorative icon.");
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.472 2.483A6.845 6.845 0 0116.82 8.145c.492.107.942.39 1.252.814a2.13 2.13 0 01.388 1.58l-.414 2.738a2.105 2.105 0 01-2.476 1.768 6.836 6.836 0 01-3.943 2.426 1.844 1.844 0 01-1.649 1.022 1.85 1.85 0 01-1.845-1.856 1.85 1.85 0 011.845-1.857c.919 0 1.68.675 1.822 1.557a5.775 5.775 0 002.786-1.767 2.132 2.132 0 01-.709-1.927l.414-2.738a2.104 2.104 0 011.47-1.716 5.785 5.785 0 00-11.565-.012c.8.225 1.394.901 1.512 1.723l.415 2.743a2.133 2.133 0 01-.388 1.58 2.105 2.105 0 01-3.78-.942l-.415-2.742a2.129 2.129 0 01.387-1.58c.301-.411.733-.69 1.209-.804a6.845 6.845 0 013.336-5.672zM3.636 9.158a1.044 1.044 0 00-.853.428 1.069 1.069 0 00-.195.793l.416 2.747a1.044 1.044 0 001.875.47c.168-.229.238-.514.195-.794l-.416-2.748a1.044 1.044 0 00-.78-.865l-.124-.023a1.042 1.042 0 00-.118-.008zm13.775 1.22a1.069 1.069 0 00-.195-.792 1.044 1.044 0 00-1.876.473l-.414 2.743c-.043.28.027.565.194.793a1.044 1.044 0 001.877-.473l.414-2.743zm-7.433 5.463a.79.79 0 01.785.796.79.79 0 01-.785.795.79.79 0 01-.785-.795.79.79 0 01.785-.796z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

ProductContactCenterTasksIcon.displayName = "ProductContactCenterTasksIcon";
export { ProductContactCenterTasksIcon };
