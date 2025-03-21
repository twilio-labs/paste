import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import type { IconWrapperProps } from "./helpers/IconWrapper";
import { IconWrapper } from "./helpers/IconWrapper.js";

export interface CheckmarkCircleIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const CheckmarkCircleIcon = React.forwardRef<HTMLElement, CheckmarkCircleIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `CheckmarkCircleIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[CheckmarkCircleIcon]: Missing a title for non-decorative icon.");
    }

    return (
      <IconWrapper as={as} display={display} element={element} size={size} color={color} ref={ref}>
        <svg
          role="img"
          aria-hidden={decorative}
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 24 24"
          aria-labelledby={titleId}
        >
          {title ? <title id={titleId}>{title}</title> : null}
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M12 4a8 8 0 110 16 8 8 0 010-16zm0 1a7 7 0 100 14 7 7 0 000-14zm4.31 3.16a.5.5 0 01.132.627l-.05.075-5.223 6.608a1.2 1.2 0 01-1.867.054l-.077-.103-1.634-2.318a.5.5 0 01.76-.644l.058.068 1.64 2.328a.199.199 0 00.274.056l.029-.023.027-.03 5.229-6.616a.5.5 0 01.702-.082z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

CheckmarkCircleIcon.displayName = "CheckmarkCircleIcon";
export { CheckmarkCircleIcon };
