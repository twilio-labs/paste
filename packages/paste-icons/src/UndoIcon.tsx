import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface UndoIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const UndoIcon = React.forwardRef<HTMLElement, UndoIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `UndoIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[UndoIcon]: Missing a title for non-decorative icon.");
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
            d="M3.213 4.798a.611.611 0 10-1.204.213l.793 4.493A.611.611 0 003.51 10l.375-.066a.601.601 0 00.028-.005l4.09-.721a.611.611 0 00-.212-1.204l-3.186.562a6.233 6.233 0 117.018 8.029.611.611 0 10.212 1.204A7.455 7.455 0 103.693 7.516l-.48-2.718z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

UndoIcon.displayName = "UndoIcon";
export { UndoIcon };
