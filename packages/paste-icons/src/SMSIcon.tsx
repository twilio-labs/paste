import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface SMSIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const SMSIcon = React.forwardRef<HTMLElement, SMSIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `SMSIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[SMSIcon]: Missing a title for non-decorative icon.");
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
            d="M8.693 2.693A2.367 2.367 0 0110.367 2h5.263A2.37 2.37 0 0118 4.367v1.866a2.37 2.37 0 01-.697 1.674c-.258.259-.588.403-.896.484a3.6 3.6 0 01-.907.109h-.261l-2.388 2.356A.5.5 0 0112 10.5v-2h-1.633c-.548 0-1.186-.105-1.674-.593A2.367 2.367 0 018 6.233V4.367c0-.628.25-1.23.693-1.674zM10.367 3A1.367 1.367 0 009 4.367v1.866c0 .363.144.71.4.967.212.212.525.3.967.3H12.5a.5.5 0 01.5.5v1.304l1.682-1.66a.5.5 0 01.351-.144h.467c.218 0 .448-.022.651-.075.207-.055.354-.134.445-.225A1.37 1.37 0 0017 6.233V4.367A1.37 1.37 0 0015.63 3h-5.263zM6.2 3h.3a.5.5 0 010 1h-.3c-.373 0-.654.093-.846.285A1.203 1.203 0 005 5.134V14.8A1.203 1.203 0 006.2 16h3.567c.328 0 .661-.133.88-.351.226-.226.353-.532.353-.849V13a.5.5 0 011 0v1.8c0 .585-.235 1.144-.646 1.556A2.275 2.275 0 019.767 17H6.2A2.202 2.202 0 014 14.8V5.134c0-.585.235-1.144.646-1.556C5.092 3.132 5.672 3 6.2 3zm1.3 11a.5.5 0 000 1h1a.5.5 0 000-1h-1z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

SMSIcon.displayName = "SMSIcon";
export { SMSIcon };
