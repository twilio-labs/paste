import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import type { IconWrapperProps } from "./helpers/IconWrapper";
import { IconWrapper } from "./helpers/IconWrapper.js";

export interface DataArrayIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const DataArrayIcon = React.forwardRef<HTMLElement, DataArrayIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `DataArrayIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[DataArrayIcon]: Missing a title for non-decorative icon.");
    }

    return (
      <IconWrapper as={as} display={display} element={element} size={size} color={color} ref={ref}>
        <svg
          role="img"
          aria-hidden={decorative}
          height="100%"
          width="100%"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          aria-labelledby={titleId}
        >
          {title ? <title id={titleId}>{title}</title> : null}
          <path
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.233 5A.233.233 0 005 5.233v9.534a.233.233 0 00.233.233h1.833a.5.5 0 010 1H5.233A1.233 1.233 0 014 14.767V5.233A1.233 1.233 0 015.233 4h1.833a.5.5 0 010 1H5.233zm7.2-.5a.5.5 0 01.5-.5h1.833A1.233 1.233 0 0116 5.233v9.534A1.233 1.233 0 0114.766 16h-1.833a.5.5 0 010-1h1.833a.234.234 0 00.233-.233V5.233A.234.234 0 0014.766 5h-1.833a.5.5 0 01-.5-.5z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

DataArrayIcon.displayName = "DataArrayIcon";
export { DataArrayIcon };
