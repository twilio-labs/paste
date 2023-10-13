import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface SuperscriptIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const SuperscriptIcon = React.forwardRef<HTMLElement, SuperscriptIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `SuperscriptIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[SuperscriptIcon]: Missing a title for non-decorative icon.");
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
            d="M16.635 3A1.135 1.135 0 0015.5 4.135v.327a.5.5 0 01-1 0v-.327a2.135 2.135 0 014.27-.003 2.566 2.566 0 01-.959 2.027l-.005.003-1.36 1.069H18.5a.5.5 0 010 1H15a.5.5 0 01-.309-.893l2.495-1.96a1.566 1.566 0 00.583-1.238v-.005A1.135 1.135 0 0016.635 3zM4.17 5.624a.5.5 0 01.706.047l3.47 3.965 3.47-3.965a.5.5 0 11.753.658L9.01 10.396l3.558 4.066a.5.5 0 01-.753.658l-3.47-3.965-3.47 3.965a.5.5 0 01-.752-.658l3.558-4.066-3.558-4.067a.5.5 0 01.047-.705z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

SuperscriptIcon.displayName = "SuperscriptIcon";
export { SuperscriptIcon };
