import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface ProcessDisabledIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProcessDisabledIcon = React.forwardRef<HTMLElement, ProcessDisabledIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `ProcessDisabledIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[ProcessDisabledIcon]: Missing a title for non-decorative icon.");
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
          aria-labelledby={decorative || title == null ? undefined : titleId}
        >
          {title ? <title id={titleId}>{title}</title> : null}
          <path
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 16.5a6.5 6.5 0 100-13 6.5 6.5 0 000 13zm-.707-8.621a1 1 0 00-1.414 1.414l2.828 2.828a1 1 0 001.414-1.414L9.293 7.88z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

ProcessDisabledIcon.displayName = "ProcessDisabledIcon";
export { ProcessDisabledIcon };
