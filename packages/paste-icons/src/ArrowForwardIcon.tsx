import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface ArrowForwardIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ArrowForwardIcon = React.forwardRef<HTMLElement, ArrowForwardIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `ArrowForwardIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[ArrowForwardIcon]: Missing a title for non-decorative icon.");
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
            d="M14.991 9.91l.007.05v.08l-.01.07-.01.029a.489.489 0 01-.205.272l-3.832 3.444a.596.596 0 01-.78 0 .459.459 0 01-.063-.632l.063-.069 2.957-2.659H5.513A.504.504 0 015 10a.5.5 0 01.42-.488l.093-.008h7.604l-2.956-2.658a.459.459 0 01-.063-.632l.063-.069a.598.598 0 01.704-.057l.076.057 3.832 3.444c.098.064.172.16.206.272l.012.049z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

ArrowForwardIcon.displayName = "ArrowForwardIcon";
export { ArrowForwardIcon };
