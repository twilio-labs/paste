import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface BoldIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const BoldIcon = React.forwardRef<HTMLElement, BoldIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `BoldIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[BoldIcon]: Missing a title for non-decorative icon.");
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
            d="M13.298 9.629a.244.244 0 01-.015-.327c.415-.5.688-1.12.784-1.784a3.728 3.728 0 00-.241-1.957 3.421 3.421 0 00-1.19-1.5 3.058 3.058 0 00-1.755-.561H7.22a1.66 1.66 0 00-1.217.544c-.323.348-.504.82-.504 1.313v9.286c0 .492.181.965.504 1.313s.761.544 1.218.544h3.616c.74.001 1.462-.24 2.072-.69a3.91 3.91 0 001.345-1.835 4.238 4.238 0 00.145-2.334 4.017 4.017 0 00-1.105-2.012h.003zm-6.076-4.04a.24.24 0 01.063-.164.208.208 0 01.152-.068h3.444c.4 0 .782.171 1.065.476.283.305.441.718.441 1.15 0 .43-.159.843-.441 1.148a1.453 1.453 0 01-1.065.476H7.437a.208.208 0 01-.152-.068.242.242 0 01-.063-.164V5.589zm3.619 9.054H7.437a.208.208 0 01-.152-.068.242.242 0 01-.063-.164v-3.715a.24.24 0 01.063-.164.207.207 0 01.152-.068h3.404c.514 0 1.007.22 1.37.612.363.392.567.923.567 1.478 0 .554-.204 1.085-.567 1.477a1.868 1.868 0 01-1.37.612z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

BoldIcon.displayName = "BoldIcon";
export { BoldIcon };
