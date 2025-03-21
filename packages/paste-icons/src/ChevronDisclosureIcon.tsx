import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import type { IconWrapperProps } from "./helpers/IconWrapper";
import { IconWrapper } from "./helpers/IconWrapper.js";

export interface ChevronDisclosureIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ChevronDisclosureIcon = React.forwardRef<HTMLElement, ChevronDisclosureIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `ChevronDisclosureIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[ChevronDisclosureIcon]: Missing a title for non-decorative icon.");
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
            d="M9.707 6.293a1 1 0 00-1.497 1.32l.083.094L10.585 10l-2.292 2.293a1 1 0 00-.083 1.32l.083.094a1 1 0 001.32.083l.094-.083 3-3a1 1 0 00.083-1.32l-.083-.094-3-3z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

ChevronDisclosureIcon.displayName = "ChevronDisclosureIcon";
export { ChevronDisclosureIcon };
