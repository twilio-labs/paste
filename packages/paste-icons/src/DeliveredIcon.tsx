"use client";

import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface DeliveredIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const DeliveredIcon = React.forwardRef<HTMLElement, DeliveredIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `DeliveredIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[DeliveredIcon]: Missing a title for non-decorative icon.");
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
            d="M11.922 6.828a.5.5 0 01.078.703l-2.106 2.633a.498.498 0 01-.787 0L7.001 7.531a.5.5 0 01.78-.625l1.22 1.524V7.22A3.719 3.719 0 005.28 3.5H4.228a.5.5 0 010-1h1.055A4.719 4.719 0 0110 7.219V8.43l1.219-1.524a.5.5 0 01.702-.078z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.742 11a1.555 1.555 0 00-1.554 1.555v3.164a1.555 1.555 0 001.554 1.554h12.513c.414 0 .806-.165 1.096-.455a1.56 1.56 0 00.462-1.1v-3.163c0-.42-.176-.813-.462-1.1A1.547 1.547 0 0016.255 11h-2.55a.5.5 0 00-.435.252 3.683 3.683 0 01-6.4 0A.5.5 0 006.438 11H3.742zm-.392 1.162A.554.554 0 013.742 12h2.415a4.685 4.685 0 007.827 0h2.271c.146 0 .284.057.389.162a.56.56 0 01.169.393v3.164a.56.56 0 01-.17.392.547.547 0 01-.388.162H3.742a.555.555 0 01-.554-.554v-3.164c0-.147.058-.288.162-.393z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

DeliveredIcon.displayName = "DeliveredIcon";
export { DeliveredIcon };
