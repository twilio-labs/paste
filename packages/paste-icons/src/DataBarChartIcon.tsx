import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import type { IconWrapperProps } from "./helpers/IconWrapper";
import { IconWrapper } from "./helpers/IconWrapper.js";

export interface DataBarChartIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const DataBarChartIcon = React.forwardRef<HTMLElement, DataBarChartIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `DataBarChartIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[DataBarChartIcon]: Missing a title for non-decorative icon.");
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
            d="M8.293 3.293A1 1 0 019 3h2a1 1 0 011 1v12h1V8a1 1 0 011-1h2a1 1 0 011 1v8h.5a.5.5 0 010 1h-.998H13.5h-11a.5.5 0 110-1H3v-6a1 1 0 011-1h2a1 1 0 011 1v6h1V4a1 1 0 01.293-.707zM16 16V8h-2v8h2zM9 4v12h2V4H9zm-5 6h2v6H4v-6z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

DataBarChartIcon.displayName = "DataBarChartIcon";
export { DataBarChartIcon };
