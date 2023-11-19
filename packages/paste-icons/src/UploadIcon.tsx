import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface UploadIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const UploadIcon = React.forwardRef<HTMLElement, UploadIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `UploadIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[UploadIcon]: Missing a title for non-decorative icon.");
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
            d="M9.583 2.958a.625.625 0 01.884 0l3.125 3.125a.625.625 0 11-.884.884l-2.083-2.083V13.5a.625.625 0 11-1.25 0V4.934L7.342 6.967a.625.625 0 01-.884-.884l3.125-3.125zM2.875 16.5c0-.345.28-.625.625-.625h13a.625.625 0 110 1.25h-13a.625.625 0 01-.625-.625z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

UploadIcon.displayName = "UploadIcon";
export { UploadIcon };
