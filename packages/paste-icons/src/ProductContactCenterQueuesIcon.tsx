import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface ProductContactCenterQueuesIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductContactCenterQueuesIcon = React.forwardRef<HTMLElement, ProductContactCenterQueuesIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `ProductContactCenterQueuesIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[ProductContactCenterQueuesIcon]: Missing a title for non-decorative icon.");
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
          aria-labelledby={decorative || title == null ? undefined : titleId}
        >
          {title ? <title id={titleId}>{title}</title> : null}
          <path
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.167 4A.167.167 0 003 4.167v8.666c0 .092.075.167.167.167h13.666a.167.167 0 00.167-.167V4.167A.167.167 0 0016.833 4H3.167zM2 4.167C2 3.522 2.522 3 3.167 3h13.666C17.478 3 18 3.522 18 4.167v8.666c0 .645-.522 1.167-1.167 1.167H10.5v2h2a.5.5 0 010 1h-5a.5.5 0 010-1h2v-2H3.167A1.167 1.167 0 012 12.833V4.167zM8 6.5a.5.5 0 01.5-.5h6a.5.5 0 010 1h-6a.5.5 0 01-.5-.5zM8.5 8a.5.5 0 000 1h6a.5.5 0 000-1h-6zM8 10.5a.5.5 0 01.5-.5h6a.5.5 0 010 1h-6a.5.5 0 01-.5-.5zM5.5 6a.5.5 0 000 1h1a.5.5 0 000-1h-1zM5 8.5a.5.5 0 01.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5zm.5 1.5a.5.5 0 000 1h1a.5.5 0 000-1h-1z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

ProductContactCenterQueuesIcon.displayName = "ProductContactCenterQueuesIcon";
export { ProductContactCenterQueuesIcon };
