import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface ProcessNeutralIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProcessNeutralIcon = React.forwardRef<HTMLElement, ProcessNeutralIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `ProcessNeutralIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[ProcessNeutralIcon]: Missing a title for non-decorative icon.");
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
          xmlns="http://www.w3.org/2000/svg"
          aria-labelledby={titleId}
        >
          {title ? <title id={titleId}>{title}</title> : null}
          <path
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.714 4h8.572C15.233 4 16 4.768 16 5.714v8.572c0 .947-.768 1.714-1.714 1.714H5.714A1.714 1.714 0 014 14.286V5.714C4 4.768 4.768 4 5.714 4z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

ProcessNeutralIcon.displayName = "ProcessNeutralIcon";
export { ProcessNeutralIcon };
