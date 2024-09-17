import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface SkipBackIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const SkipBackIcon = React.forwardRef<HTMLElement, SkipBackIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `SkipBackIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[SkipBackIcon]: Missing a title for non-decorative icon.");
    }

    return (
      <IconWrapper as={as} display={display} element={element} size={size} color={color} ref={ref}>
        <svg
          role="img"
          aria-hidden={decorative}
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 20 20"
          aria-labelledby={decorative || title == null ? undefined : titleId}
        >
          {title ? <title id={titleId}>{title}</title> : null}
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M6.854 10.146a.5.5 0 01.057.638l-.057.07a.5.5 0 01-.638.057l-.07-.057-3-3-.011-.013a.503.503 0 01-.033-.039l.044.052A.502.502 0 013 7.5v-.01c0-.022.002-.043.005-.064L3 7.5a.502.502 0 01.089-.284l.013-.018a.503.503 0 01.033-.04l.011-.012 3-3a.5.5 0 01.765.638l-.057.07L4.706 7H12.5a4.5 4.5 0 01.212 8.995L12.5 16h-5a.5.5 0 01-.09-.992L7.5 15h5a3.5 3.5 0 00.192-6.995L12.5 8H4.706l2.148 2.146z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

SkipBackIcon.displayName = "SkipBackIcon";
export { SkipBackIcon };
