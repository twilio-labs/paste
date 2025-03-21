import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import type { IconWrapperProps } from "./helpers/IconWrapper";
import { IconWrapper } from "./helpers/IconWrapper.js";

export interface DataStringIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const DataStringIcon = React.forwardRef<HTMLElement, DataStringIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `DataStringIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[DataStringIcon]: Missing a title for non-decorative icon.");
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
            d="M3.715 8.106a.155.155 0 01.295 0l.89 2.673H2.825l.89-2.673zM2.49 11.78h2.744l.516 1.548a.5.5 0 10.949-.316l-1.74-5.22a1.155 1.155 0 00-2.193 0l-1.74 5.22a.5.5 0 00.948.316l.516-1.548zM8.623 7a.5.5 0 00-.5.5v5.67a.5.5 0 00.5.5h2.244a2.035 2.035 0 001.146-3.719A1.8 1.8 0 0010.631 7H8.623zm.5 3.598h1.744a1.035 1.035 0 110 2.071H9.123V10.6zm1.516-1A.8.8 0 0010.631 8H9.123v1.598h1.516zm3.662-.68c0-1.06.859-1.918 1.918-1.918h.944c.836 0 1.546.534 1.809 1.278a.5.5 0 01-.943.333.918.918 0 00-.866-.611h-.944a.917.917 0 00-.918.917v2.835c0 .506.411.917.918.917h.944c.4 0 .74-.254.866-.611a.5.5 0 01.943.333 1.918 1.918 0 01-1.809 1.278h-.944a1.917 1.917 0 01-1.918-1.917V8.917z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

DataStringIcon.displayName = "DataStringIcon";
export { DataStringIcon };
