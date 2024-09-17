import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface ArrowDownIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ArrowDownIcon = React.forwardRef<HTMLElement, ArrowDownIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `ArrowDownIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[ArrowDownIcon]: Missing a title for non-decorative icon.");
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
            d="M9.91 14.991l.05.007h.08l.07-.01.029-.01a.489.489 0 00.272-.205l3.444-3.832a.596.596 0 000-.78.459.459 0 00-.632-.063l-.069.063-2.659 2.957V5.513A.504.504 0 0010 5a.5.5 0 00-.488.42l-.008.093v7.604l-2.658-2.956a.459.459 0 00-.632-.063l-.069.063a.598.598 0 00-.057.704l.057.076 3.444 3.832c.064.098.16.172.272.206l.049.012z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

ArrowDownIcon.displayName = "ArrowDownIcon";
export { ArrowDownIcon };
