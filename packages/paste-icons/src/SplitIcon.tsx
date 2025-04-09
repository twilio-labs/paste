import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface SplitIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const SplitIcon = React.forwardRef<HTMLElement, SplitIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `SplitIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[SplitIcon]: Missing a title for non-decorative icon.");
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
            d="M11.824 5.352c.554-.566 1.278-.952 2.281-.952h3.716a.533.533 0 010 1.067h-3.716c-.685 0-1.143.247-1.518.63-.401.411-.705.972-1.05 1.62l-.019.034c-.325.61-.693 1.3-1.211 1.83-.554.566-1.278.952-2.281.952H2.283a.533.533 0 010-1.066h5.743c.685 0 1.143-.248 1.518-.632.401-.41.705-.97 1.05-1.62l.019-.033c.325-.61.693-1.3 1.211-1.83z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.588 2.115a.533.533 0 01.749.087l1.902 2.4a.533.533 0 010 .662l-1.902 2.4a.533.533 0 01-.836-.662l1.64-2.07-1.64-2.067a.533.533 0 01.087-.75zM7.492 10c0-.295.239-.533.534-.533 1.003 0 1.727.386 2.28.952.519.53.887 1.22 1.212 1.83l.018.033c.346.65.65 1.21 1.05 1.62.376.384.834.631 1.52.631h3.715a.533.533 0 010 1.067h-3.716c-1.003 0-1.727-.386-2.28-.952-.519-.53-.887-1.22-1.212-1.83l-.018-.034c-.346-.649-.65-1.21-1.05-1.62-.376-.383-.834-.63-1.52-.63A.533.533 0 017.493 10z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.588 12.249a.533.533 0 01.749.086l1.902 2.4a.533.533 0 010 .662l-1.902 2.4a.533.533 0 01-.836-.662l1.64-2.07-1.64-2.067a.533.533 0 01.087-.75z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

SplitIcon.displayName = "SplitIcon";
export { SplitIcon };
