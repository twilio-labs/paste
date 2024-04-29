/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";
import { useUID } from "@twilio-paste/uid-library";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface DataObjectIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const DataObjectIcon = React.forwardRef<HTMLElement, DataObjectIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `DataObjectIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[DataObjectIcon]: Missing a title for non-decorative icon.");
    }

    return (
      <IconWrapper as={as} display={display} element={element} size={size} color={color} ref={ref}>
        <svg
          role="img"
          aria-hidden={decorative}
          width="100%"
          height="100%"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-labelledby={titleId}
        >
          {title ? <title id={titleId}>{title}</title> : null}
          <path
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.674 5.294a1.21 1.21 0 00-.907-.29h-.91a.5.5 0 010-1h.894a2.21 2.21 0 012.337 2.071v1.507a1.024 1.024 0 00.56.88l1.922 1.105a.5.5 0 010 .867l-1.922 1.104-.014.008a1.027 1.027 0 00-.546.873v1.507l-.001.04a2.21 2.21 0 01-2.336 2.03h-.895a.5.5 0 010-1h.911l.034.001a1.21 1.21 0 001.287-1.092v-1.508a2.027 2.027 0 011.069-1.73l1.16-.667-1.16-.667a2.025 2.025 0 01-1.069-1.73V6.097a1.21 1.21 0 00-.414-.803zM7.32 4.004h.895a.5.5 0 010 1h-.91l-.035-.001a1.21 1.21 0 00-1.287 1.094v1.506a2.025 2.025 0 01-1.069 1.73L3.753 10l1.16.667a2.028 2.028 0 011.069 1.73v1.508a1.21 1.21 0 001.321 1.091h.91a.5.5 0 010 1H7.32a2.21 2.21 0 01-2.337-2.07v-1.508a1.027 1.027 0 00-.545-.872l-.015-.008L2.5 10.434a.5.5 0 010-.867l1.92-1.105a1.025 1.025 0 00.56-.88V6.075a2.21 2.21 0 012.337-2.071z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

DataObjectIcon.displayName = "DataObjectIcon";
export { DataObjectIcon };
