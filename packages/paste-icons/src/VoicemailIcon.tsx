import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import type { IconWrapperProps } from "./helpers/IconWrapper";
import { IconWrapper } from "./helpers/IconWrapper.js";

export interface VoicemailIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const VoicemailIcon = React.forwardRef<HTMLElement, VoicemailIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `VoicemailIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[VoicemailIcon]: Missing a title for non-decorative icon.");
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
            d="M9 11a3.99 3.99 0 01-1.354 3h4.708A4 4 0 1115 15H5a4 4 0 114-4zm-4 3a3 3 0 100-6 3 3 0 000 6zm10 0a3 3 0 100-6 3 3 0 000 6z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

VoicemailIcon.displayName = "VoicemailIcon";
export { VoicemailIcon };
