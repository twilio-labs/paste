"use client";

import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface TextAlignRightIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const TextAlignRightIcon = React.forwardRef<HTMLElement, TextAlignRightIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `TextAlignRightIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[TextAlignRightIcon]: Missing a title for non-decorative icon.");
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
            d="M5 5.476C5 5.213 5.224 5 5.5 5h12c.276 0 .5.213.5.476a.489.489 0 01-.5.476h-12a.489.489 0 01-.5-.476zm-2 6c0-.263.224-.476.5-.476h14c.276 0 .5.213.5.476a.489.489 0 01-.5.476h-14a.489.489 0 01-.5-.476zm-1-3C2 8.213 2.224 8 2.5 8h15c.276 0 .5.213.5.476a.489.489 0 01-.5.476h-15a.489.489 0 01-.5-.476zm3 6.048c0-.263.224-.476.5-.476h12c.276 0 .5.213.5.476a.489.489 0 01-.5.476h-12a.489.489 0 01-.5-.476z"
            clipRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  },
);

TextAlignRightIcon.displayName = "TextAlignRightIcon";
export { TextAlignRightIcon };
