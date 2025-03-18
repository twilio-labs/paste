"use client";

import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface CodeIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const CodeIcon = React.forwardRef<HTMLElement, CodeIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `CodeIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[CodeIcon]: Missing a title for non-decorative icon.");
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
            d="M3.576 3.5H16.43c.404.001.797.15 1.094.423.298.275.474.656.475 1.063v10.02c0 .409-.177.793-.476 1.069a1.624 1.624 0 01-1.098.423H3.5c-.386 0-.763-.14-1.046-.403A1.388 1.388 0 012 15.075V4.992c0-.408.177-.792.476-1.068a1.626 1.626 0 011.1-.424zm12.852 1H3.576a.624.624 0 00-.42.159.457.457 0 00-.155.334v10.082a.39.39 0 00.132.286.544.544 0 00.368.137h12.922a.624.624 0 00.422-.158.458.458 0 00.154-.334V4.989a.455.455 0 00-.153-.331.62.62 0 00-.418-.158zm0 0z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M12.646 7.647a.5.5 0 01.707 0l2 1.998a.5.5 0 010 .707l-2 2a.5.5 0 01-.707-.707l1.647-1.646-1.646-1.645a.5.5 0 010-.707zm-5.292 0a.5.5 0 010 .707L5.706 9.999l1.647 1.646a.5.5 0 01-.708.707l-2-2a.5.5 0 010-.707l2-1.999a.5.5 0 01.708 0zm3.87-.094a.5.5 0 01.223.67l-2 4a.5.5 0 11-.894-.447l2-4a.5.5 0 01.67-.223z"
            clipRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  },
);

CodeIcon.displayName = "CodeIcon";
export { CodeIcon };
