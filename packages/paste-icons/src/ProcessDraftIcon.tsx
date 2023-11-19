import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface ProcessDraftIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProcessDraftIcon = React.forwardRef<HTMLElement, ProcessDraftIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `ProcessDraftIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[ProcessDraftIcon]: Missing a title for non-decorative icon.");
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
            d="M9.994 3.5h.012a1 1 0 01-.002 2h-.008a1 1 0 01-.002-2zm1.886 1.234a1 1 0 011.366-.366l.01.005a1 1 0 11-1.003 1.73l-.007-.003a1 1 0 01-.366-1.366zm-3.76 0A1 1 0 017.754 6.1l-.007.004a1 1 0 11-1.003-1.73l.01-.006a1 1 0 011.366.366zm6.14 1.646a1 1 0 011.367.364l.005.01a1 1 0 11-1.732 1l-.004-.007a1 1 0 01.364-1.367zm-8.52 0a1 1 0 01.364 1.367l-.004.007a1 1 0 11-1.732-1l.005-.01A1 1 0 015.74 6.38zm9.76 2.615a1 1 0 011 1v.011a1 1 0 01-2-.002v-.008a1 1 0 011-1zm-11 0a1 1 0 011 1.001v.008a1 1 0 01-2 .002v-.012a1 1 0 011-.999zm10.766 2.885a1 1 0 01.366 1.366l-.005.01a1 1 0 01-1.73-1.003l.003-.007a1 1 0 011.366-.366zm-10.532 0a1 1 0 011.366.366l.004.007a1 1 0 11-1.73 1.003l-.006-.01a1 1 0 01.366-1.366zm1.646 2.38a1 1 0 011.367-.364l.007.004a1 1 0 01-1 1.732l-.01-.005a1 1 0 01-.364-1.367zm7.24 0a1 1 0 01-.364 1.367l-.01.005a1 1 0 11-1-1.732l.007-.004a1 1 0 011.367.364zM8.995 15.5a1 1 0 011.001-1h.008a1 1 0 01.002 2h-.012a1 1 0 01-.999-1z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

ProcessDraftIcon.displayName = "ProcessDraftIcon";
export { ProcessDraftIcon };
