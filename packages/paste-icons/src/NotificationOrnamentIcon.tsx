import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface NotificationOrnamentIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const NotificationOrnamentIcon = React.forwardRef<HTMLElement, NotificationOrnamentIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `NotificationOrnamentIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[NotificationOrnamentIcon]: Missing a title for non-decorative icon.");
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
          <circle fill="currentColor" cx={10} cy={10} r={6} />
        </svg>
      </IconWrapper>
    );
  },
);

NotificationOrnamentIcon.displayName = "NotificationOrnamentIcon";
export { NotificationOrnamentIcon };
