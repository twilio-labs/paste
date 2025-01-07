import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface FeedbackIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const FeedbackIcon = React.forwardRef<HTMLElement, FeedbackIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `FeedbackIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[FeedbackIcon]: Missing a title for non-decorative icon.");
    }

    return (
      <IconWrapper as={as} display={display} element={element} size={size} color={color} ref={ref}>
        <svg
          role="img"
          aria-hidden={decorative}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 20 20"
          aria-labelledby={titleId}
        >
          {title ? <title id={titleId}>{title}</title> : null}
          <path
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.433 4A.433.433 0 005 4.433v12.13a.433.433 0 00.433.433h3.732a.5.5 0 010 1H5.433A1.433 1.433 0 014 16.563V4.433A1.433 1.433 0 015.433 3h6.613c.38 0 .744.152 1.013.42l3.653 3.654a1.459 1.459 0 01.417 1.127.5.5 0 11-.998-.07.457.457 0 00-.13-.354l-3.65-3.65A.434.434 0 0012.045 4H5.433z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.965 3a.5.5 0 01.5.5v3.732a.433.433 0 00.433.433h3.732a.5.5 0 010 1h-3.732a1.433 1.433 0 01-1.433-1.433V3.5a.5.5 0 01.5-.5zM9.42 8.614a.5.5 0 01.093.701L8.16 11.084a.987.987 0 01-.694.379l-.017.001a.98.98 0 01-.738-.28l-.009-.009-.697-.722a.5.5 0 11.72-.694l.664.688 1.328-1.74a.5.5 0 01.701-.093zm0 4.199a.5.5 0 01.093.7l-1.352 1.77a.985.985 0 01-.694.379H7.45a.978.978 0 01-.738-.279l-.009-.009-.697-.722a.5.5 0 01.72-.694l.664.687 1.328-1.738a.5.5 0 01.701-.094zm1.112-1.848a.5.5 0 01.5-.5h2.332a.5.5 0 110 1h-2.332a.5.5 0 01-.5-.5zm6.645-.437a.812.812 0 00-.577.24l-.002.003-4.64 4.64-.289 1.448 1.449-.29 4.64-4.641a.813.813 0 000-1.155l-.003-.004a.814.814 0 00-.578-.241zm-.698-.86a1.812 1.812 0 011.985.396 1.814 1.814 0 010 2.574h-.002l-4.744 4.745a.5.5 0 01-.256.137l-2.332.467a.5.5 0 01-.589-.589l.467-2.332a.5.5 0 01.137-.256l4.744-4.744.001-.001c.168-.17.369-.305.59-.397z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

FeedbackIcon.displayName = "FeedbackIcon";
export { FeedbackIcon };
