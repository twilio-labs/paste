import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface UnderlineIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const UnderlineIcon = React.forwardRef<HTMLElement, UnderlineIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `UnderlineIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[UnderlineIcon]: Missing a title for non-decorative icon.");
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
            d="M6.25 4.625a.625.625 0 10-1.25 0v5.321c0 1.554.508 2.615 1.419 3.565C7.33 14.46 8.5 15 10 15s2.67-.539 3.581-1.49C14.492 12.56 15 11.5 15 9.947V4.625a.625.625 0 10-1.25 0v5.321a3.835 3.835 0 01-1.07 2.699c-.683.71-1.68 1.105-2.68 1.105-1 0-1.997-.394-2.68-1.105a3.835 3.835 0 01-1.07-2.699V4.625zm-1.625 11.75a.625.625 0 100 1.25h10.75a.625.625 0 100-1.25H4.625z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

UnderlineIcon.displayName = "UnderlineIcon";
export { UnderlineIcon };
