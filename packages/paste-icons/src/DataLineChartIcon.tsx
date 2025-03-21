import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import type { IconWrapperProps } from "./helpers/IconWrapper";
import { IconWrapper } from "./helpers/IconWrapper.js";

export interface DataLineChartIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const DataLineChartIcon = React.forwardRef<HTMLElement, DataLineChartIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `DataLineChartIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[DataLineChartIcon]: Missing a title for non-decorative icon.");
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
          <path fill="currentColor" d="M4 3.5a.5.5 0 00-1 0v13a.5.5 0 00.5.5h13a.5.5 0 000-1H4V3.5z" />
          <path
            fill="currentColor"
            d="M15.854 8.354a.5.5 0 00-.708-.708l-3.307 3.309a.127.127 0 01-.089.037.124.124 0 01-.088-.037l-1.616-1.616a1.126 1.126 0 00-1.591 0l-3.309 3.307a.5.5 0 10.708.708l3.308-3.308a.127.127 0 01.088-.037.125.125 0 01.089.037l1.616 1.616a1.125 1.125 0 001.591 0l3.308-3.308z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

DataLineChartIcon.displayName = "DataLineChartIcon";
export { DataLineChartIcon };
