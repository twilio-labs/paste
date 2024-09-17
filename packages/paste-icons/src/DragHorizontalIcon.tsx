import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface DragHorizontalIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const DragHorizontalIcon = React.forwardRef<HTMLElement, DragHorizontalIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `DragHorizontalIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[DragHorizontalIcon]: Missing a title for non-decorative icon.");
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
          aria-labelledby={decorative || title == null ? undefined : titleId}
        >
          {title ? <title id={titleId}>{title}</title> : null}
          <path
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9 3.999a.5.5 0 10-1 0v12a.5.5 0 001 0v-12zm3 0a.5.5 0 00-1 0v12a.5.5 0 001 0v-12z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

DragHorizontalIcon.displayName = "DragHorizontalIcon";
export { DragHorizontalIcon };
