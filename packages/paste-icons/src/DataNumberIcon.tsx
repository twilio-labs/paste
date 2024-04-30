import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface DataNumberIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const DataNumberIcon = React.forwardRef<HTMLElement, DataNumberIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `DataNumberIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[DataNumberIcon]: Missing a title for non-decorative icon.");
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
            d="M3.877 7a.46.46 0 01.461.461v5.748a.461.461 0 01-.922 0V7.46a.46.46 0 01.461-.461z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.877 7a.46.46 0 01.461.461c0 1.049-.85 1.898-1.898 1.898h-.479a.461.461 0 110-.922h.48a.976.976 0 00.975-.976A.46.46 0 013.877 7zM1.5 13.209a.46.46 0 01.461-.461h3.832a.461.461 0 110 .922H1.96a.461.461 0 01-.461-.461zM15.552 7h.718a1.778 1.778 0 011.27 3.023c.455.347.748.894.748 1.51v.239c0 1.048-.85 1.898-1.898 1.898h-.958c-.827 0-1.53-.529-1.79-1.265a.461.461 0 01.87-.308c.134.38.496.65.92.65h.958a.976.976 0 00.976-.975v-.24a.976.976 0 00-.976-.975h-.479a.461.461 0 010-.923h.36a.856.856 0 000-1.712h-.72a.856.856 0 00-.823.623.461.461 0 01-.887-.251A1.779 1.779 0 0115.55 7zM7.666 8.265A1.899 1.899 0 019.456 7h.995a1.86 1.86 0 01.746 3.566l-2.132.932a.976.976 0 00-.585.894v.356h3.37a.461.461 0 010 .922H8.02a.461.461 0 01-.461-.461v-.817c0-.754.446-1.436 1.137-1.739l2.132-.932a.938.938 0 00-.376-1.799h-.995a.976.976 0 00-.92.65.461.461 0 01-.87-.307z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

DataNumberIcon.displayName = "DataNumberIcon";
export { DataNumberIcon };
