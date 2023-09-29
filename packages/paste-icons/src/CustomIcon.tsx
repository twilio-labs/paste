import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface CustomIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const CustomIcon = React.forwardRef<HTMLElement, CustomIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `CustomIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[CustomIcon]: Missing a title for non-decorative icon.");
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
            d="M16.613 1.072c-1.074.135-2.064.454-2.89 1.007-2.084 1.392-3.434 4.502-2.605 6.083l-2.152 2.154-.058.069a.5.5 0 00.765.638l2.151-2.152c1.073.568 2.867.167 4.375-.95 1.953-1.446 3.056-3.744 2.75-6.444a.5.5 0 00-.444-.44 8.61 8.61 0 00-1.892.035zM12.6 8.096c.724.15 1.929-.182 3.005-.979 1.548-1.146 2.466-2.9 2.39-4.996l-.007-.118-.124-.002a8.341 8.341 0 00-1.125.064c-.932.117-1.777.389-2.46.845-1.568 1.049-2.628 3.333-2.39 4.481l2.967-2.967a.5.5 0 01.765.638l-.058.07L12.6 8.095zM9.5 3.994a.5.5 0 01.09.993l-.09.008h-5a.5.5 0 00-.492.41L4 5.495V15.5a.5.5 0 00.41.492l.09.009h10a.5.5 0 00.492-.41l.008-.09v-5.003a.5.5 0 01.992-.09l.008.09V15.5a1.5 1.5 0 01-1.356 1.494L14.5 17h-10a1.5 1.5 0 01-1.493-1.356L3 15.499V5.495a1.5 1.5 0 011.355-1.494l.145-.007h5z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

CustomIcon.displayName = "CustomIcon";
export { CustomIcon };
