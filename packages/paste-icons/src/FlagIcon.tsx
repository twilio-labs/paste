import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface FlagIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const FlagIcon = React.forwardRef<HTMLElement, FlagIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `FlagIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[FlagIcon]: Missing a title for non-decorative icon.");
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
            d="M5 3.5a.5.5 0 00-1 0v14a.5.5 0 001 0v-4.678l.822-.258a5.433 5.433 0 014.544.59 5.434 5.434 0 004.437.628l1.726-.504a.65.65 0 00.34-.24.676.676 0 00.131-.4V5.706a.678.678 0 00-.259-.53.644.644 0 00-.57-.11l-1.368.4a5.435 5.435 0 01-4.437-.623 5.433 5.433 0 00-4.544-.591L5 4.51V3.5zm0 8.274V5.558l1.123-.353a4.433 4.433 0 013.71.484 6.435 6.435 0 005.25.738L16 6.159v6.231l-1.477.433a4.435 4.435 0 01-3.624-.514 6.433 6.433 0 00-5.377-.699L5 11.774z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

FlagIcon.displayName = "FlagIcon";
export { FlagIcon };
