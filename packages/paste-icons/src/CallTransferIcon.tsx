import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface CallTransferIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const CallTransferIcon = React.forwardRef<HTMLElement, CallTransferIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `CallTransferIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[CallTransferIcon]: Missing a title for non-decorative icon.");
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
            d="M12.854 1.146a.5.5 0 010 .708l-.647.646H16a.5.5 0 010 1h-3.793l.647.646a.5.5 0 01-.708.708l-1.5-1.5a.5.5 0 010-.708l1.5-1.5a.5.5 0 01.708 0zm2.792 6.5L16.293 7H12.5a.5.5 0 010-1h3.793l-.647-.646a.5.5 0 01.708-.708l1.5 1.5a.5.5 0 010 .708l-1.5 1.5a.5.5 0 01-.708-.708zM5.302 2.5a1.66 1.66 0 00-1.16.471l-.483.472a3.815 3.815 0 00-.543 4.82l.001.001.015.023a31.25 31.25 0 008.48 8.302l.003.003a4.001 4.001 0 004.917-.516l.481-.471a1.622 1.622 0 00.487-1.152 1.603 1.603 0 00-.487-1.152l-2.03-1.986a1.649 1.649 0 00-1.16-.472 1.669 1.669 0 00-1.162.472.66.66 0 01-.923 0L8.492 8.136a.612.612 0 01-.186-.437c0-.162.066-.32.186-.437A1.622 1.622 0 008.98 6.11a1.604 1.604 0 00-.487-1.152l-2.03-1.986a1.66 1.66 0 00-1.16-.472zm-.461 1.186a.66.66 0 01.461-.186.66.66 0 01.462.186l2.029 1.986a.622.622 0 01.186.438.603.603 0 01-.186.437c-.31.304-.487.718-.487 1.152 0 .434.177.848.487 1.152l3.245 3.178a1.66 1.66 0 002.322 0 .649.649 0 01.462-.186.669.669 0 01.462.186l2.03 1.986a.622.622 0 01.186.438.603.603 0 01-.186.437l-.482.472a3.001 3.001 0 01-3.66.4l-.006-.005a30.252 30.252 0 01-8.202-8.026l-.006-.008a2.815 2.815 0 01.4-3.565l.483-.472z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

CallTransferIcon.displayName = "CallTransferIcon";
export { CallTransferIcon };
