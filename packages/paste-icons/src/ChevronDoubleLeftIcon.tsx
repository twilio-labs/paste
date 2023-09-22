import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface ChevronDoubleLeftIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ChevronDoubleLeftIcon = React.forwardRef<HTMLElement, ChevronDoubleLeftIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `ChevronDoubleLeftIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[ChevronDoubleLeftIcon]: Missing a title for non-decorative icon.");
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
          aria-labelledby={titleId}
        >
          {title ? <title id={titleId}>{title}</title> : null}
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M9.749 5.244c.309.3.333.773.071 1.1l-.071.079L6.07 10l3.679 3.577c.309.3.333.774.071 1.1l-.071.079a.876.876 0 01-1.131.07l-.081-.07-4.286-4.167a.816.816 0 01-.071-1.1l.071-.078 4.286-4.167a.875.875 0 011.212 0zm6 0c.309.3.333.773.071 1.1l-.071.079L12.07 10l3.679 3.577c.309.3.333.774.071 1.1l-.071.079a.876.876 0 01-1.131.07l-.081-.07-4.286-4.167a.816.816 0 01-.071-1.1l.071-.078 4.286-4.167a.875.875 0 011.212 0z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

ChevronDoubleLeftIcon.displayName = "ChevronDoubleLeftIcon";
export { ChevronDoubleLeftIcon };
