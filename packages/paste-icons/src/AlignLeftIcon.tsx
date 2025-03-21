import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import type { IconWrapperProps } from "./helpers/IconWrapper";
import { IconWrapper } from "./helpers/IconWrapper.js";

export interface AlignLeftIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const AlignLeftIcon = React.forwardRef<HTMLElement, AlignLeftIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `AlignLeftIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[AlignLeftIcon]: Missing a title for non-decorative icon.");
    }

    return (
      <IconWrapper as={as} display={display} element={element} size={size} color={color} ref={ref}>
        <svg
          role="img"
          aria-hidden={decorative}
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          fill="none"
          viewBox="0 0 20 20"
          aria-labelledby={titleId}
        >
          {title ? <title id={titleId}>{title}</title> : null}
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M3.5 1a.5.5 0 01.5.5v16a.5.5 0 01-1 0v-16a.5.5 0 01.5-.5zm2.333 3.4a.29.29 0 00-.277.3v2.4c0 .18.137.3.277.3h6.223a.29.29 0 00.277-.3V4.7a.29.29 0 00-.277-.3H5.833zm-1.277.3c0-.705.558-1.3 1.277-1.3h6.223c.718 0 1.277.595 1.277 1.3v2.4c0 .705-.559 1.3-1.277 1.3H5.833c-.719 0-1.277-.595-1.277-1.3V4.7zm1.277 6.1a.29.29 0 00-.277.3v2.4c0 .179.137.3.277.3h10.89a.29.29 0 00.277-.3v-2.4a.29.29 0 00-.278-.3H5.833zm-1.277.3c0-.705.558-1.3 1.277-1.3h10.89c.718 0 1.277.595 1.277 1.3v2.4c0 .705-.559 1.3-1.278 1.3H5.833c-.719 0-1.277-.595-1.277-1.3v-2.4z"
            clipRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  },
);

AlignLeftIcon.displayName = "AlignLeftIcon";
export { AlignLeftIcon };
