import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import type { IconWrapperProps } from "./helpers/IconWrapper";
import { IconWrapper } from "./helpers/IconWrapper.js";

export interface CollapseIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const CollapseIcon = React.forwardRef<HTMLElement, CollapseIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `CollapseIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[CollapseIcon]: Missing a title for non-decorative icon.");
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
            fillRule="evenodd"
            d="M7.613 4.21a1 1 0 00-1.32 1.497l3 3 .094.083a1 1 0 001.32-.083l3-3 .083-.094a1 1 0 00-.083-1.32l-.094-.083a1 1 0 00-1.32.083L10 6.585 7.707 4.293l-.094-.083zm3 6a1 1 0 00-1.32.083l-3 3-.083.094a1 1 0 00.083 1.32l.094.083a1 1 0 001.32-.083L10 12.415l2.293 2.292.094.083a1 1 0 001.32-1.497l-3-3-.094-.083z"
            clipRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  },
);

CollapseIcon.displayName = "CollapseIcon";
export { CollapseIcon };
