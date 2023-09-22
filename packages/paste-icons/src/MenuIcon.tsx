import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface MenuIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const MenuIcon = React.forwardRef<HTMLElement, MenuIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `MenuIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[MenuIcon]: Missing a title for non-decorative icon.");
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
            d="M4.496 6a.5.5 0 000 1h11.001a.5.5 0 000-1h-11zm-.5 4.002a.5.5 0 01.5-.5h11.001a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zm0 3.498a.5.5 0 01.5-.5h11.001a.5.5 0 010 1h-11a.5.5 0 01-.5-.5z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

MenuIcon.displayName = "MenuIcon";
export { MenuIcon };
