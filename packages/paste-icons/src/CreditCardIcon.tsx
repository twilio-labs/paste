import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import type { IconWrapperProps } from "./helpers/IconWrapper";
import { IconWrapper } from "./helpers/IconWrapper.js";

export interface CreditCardIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const CreditCardIcon = React.forwardRef<HTMLElement, CreditCardIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `CreditCardIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[CreditCardIcon]: Missing a title for non-decorative icon.");
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
            d="M2 6.5A1.5 1.5 0 013.5 5h13A1.5 1.5 0 0118 6.5v8a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 012 14.5v-8zm15 0V8H3V6.5a.5.5 0 01.5-.5h13a.5.5 0 01.5.5zM17 9H3v5.5a.5.5 0 00.5.5h13a.5.5 0 00.5-.5V9zm-6.5 3a.5.5 0 000 1h4a.5.5 0 000-1h-4z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

CreditCardIcon.displayName = "CreditCardIcon";
export { CreditCardIcon };
