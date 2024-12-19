import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface TextIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const TextIcon = React.forwardRef<HTMLElement, TextIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `TextIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[TextIcon]: Missing a title for non-decorative icon.");
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
            d="M6.84 3h6.325c.648 0 1.183 0 1.607.057.447.06.843.192 1.162.51.319.32.45.718.51 1.164.056.423.056.957.056 1.6v.727a.5.5 0 01-1 0v-.683c0-.692 0-1.16-.048-1.511-.045-.336-.124-.487-.226-.59-.102-.102-.253-.18-.588-.226C14.29 4.001 13.822 4 13.13 4H10.5v12.438a.5.5 0 01-1 0V4H6.875c-.692 0-1.16.001-1.51.048-.337.045-.488.124-.59.227-.103.102-.182.253-.227.59-.047.35-.048.818-.048 1.51v.683a.5.5 0 11-1 0V6.34c0-.648 0-1.184.057-1.609.06-.447.192-.845.51-1.164m0 0c.32-.318.717-.45 1.164-.51C5.656 3 6.192 3 6.84 3"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.5 16.5A.5.5 0 016 16h8a.5.5 0 010 1H6a.5.5 0 01-.5-.5z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

TextIcon.displayName = "TextIcon";
export { TextIcon };
