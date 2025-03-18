"use client";

import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface MicrophoneOnIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const MicrophoneOnIcon = React.forwardRef<HTMLElement, MicrophoneOnIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `MicrophoneOnIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[MicrophoneOnIcon]: Missing a title for non-decorative icon.");
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
            d="M10 3.071A2.357 2.357 0 007.643 5.43v4a2.357 2.357 0 104.714 0v-4A2.357 2.357 0 0010 3.07zm-2.374-.016a3.357 3.357 0 015.731 2.374v4a3.357 3.357 0 01-6.714 0v-4c0-.89.354-1.745.983-2.374z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M12.732 15.217a5.63 5.63 0 01-1.947.422v.004H10.5v1.785a.5.5 0 11-1 0v-1.785h-.071v-.004A5.63 5.63 0 014 10a.5.5 0 011 0 4.631 4.631 0 004.62 4.642h.974A4.632 4.632 0 0015.214 10a.5.5 0 111-.002 5.632 5.632 0 01-3.482 5.218z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

MicrophoneOnIcon.displayName = "MicrophoneOnIcon";
export { MicrophoneOnIcon };
