import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface ChevronDownIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ChevronDownIcon = React.forwardRef<HTMLElement, ChevronDownIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `ChevronDownIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[ChevronDownIcon]: Missing a title for non-decorative icon.");
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
            d="M6.293 8.293a1 1 0 011.32-.083l.094.083L10 10.585l2.293-2.292a1 1 0 011.32-.083l.094.083a1 1 0 01.083 1.32l-.083.094-3 3a1 1 0 01-1.32.083l-.094-.083-3-3a1 1 0 010-1.414z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

ChevronDownIcon.displayName = "ChevronDownIcon";
export { ChevronDownIcon };
