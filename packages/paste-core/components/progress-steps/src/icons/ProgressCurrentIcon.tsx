import { IconWrapper } from "@twilio-paste/icons/esm/helpers/IconWrapper";
import type { IconWrapperProps } from "@twilio-paste/icons/esm/helpers/IconWrapper";
import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

export interface ProgressCurrentIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProgressCurrentIcon = React.forwardRef<HTMLElement, ProgressCurrentIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `ProgressCurrentIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[ProgressCurrentIcon]: Missing a title for non-decorative icon.");
    }

    return (
      <IconWrapper as={as} display={display} element={element} size={size} color={color} ref={ref}>
        <svg
          role="img"
          aria-hidden={decorative}
          fill="none"
          height="100%"
          viewBox="0 0 20 20"
          width="100%"
          xmlns="http://www.w3.org/2000/svg"
          aria-labelledby={titleId}
        >
          {title ? <title id={titleId}>{title}</title> : null}
          <path
            fill="currentColor"
            clipRule="evenodd"
            d="M10 16a6 6 0 100-12 6 6 0 000 12zm0 2a8 8 0 100-16 8 8 0 000 16z"
            fillRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  },
);

ProgressCurrentIcon.displayName = "ProgressCurrentIcon";
export { ProgressCurrentIcon };
