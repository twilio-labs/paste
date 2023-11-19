import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface ChatIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ChatIcon = React.forwardRef<HTMLElement, ChatIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `ChatIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[ChatIcon]: Missing a title for non-decorative icon.");
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
            d="M3.302 2.755A3.458 3.458 0 015.466 2h2.268a3.468 3.468 0 013.322 2.476.5.5 0 00.959-.286A4.468 4.468 0 007.734 1H5.468a4.458 4.458 0 00-2.2 8.34v3.493a.5.5 0 00.853.353l2.267-2.266a.5.5 0 00-.708-.707l-1.413 1.413V9.037a.5.5 0 00-.286-.452 3.458 3.458 0 01-.68-5.83zm8.965 3.911a4.466 4.466 0 100 8.933h.36l3.253 3.254a.5.5 0 00.853-.354v-3.492A4.459 4.459 0 0019 11.134a4.469 4.469 0 00-4.466-4.468h-2.267zM9.816 8.682a3.466 3.466 0 012.451-1.016h2.267A3.467 3.467 0 0118 11.132a3.459 3.459 0 01-1.98 3.12.5.5 0 00-.287.451v2.589l-2.546-2.546a.5.5 0 00-.353-.147h-.567a3.466 3.466 0 01-2.451-5.917z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

ChatIcon.displayName = "ChatIcon";
export { ChatIcon };
