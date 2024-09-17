import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface BusinessIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const BusinessIcon = React.forwardRef<HTMLElement, BusinessIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `BusinessIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[BusinessIcon]: Missing a title for non-decorative icon.");
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
          aria-labelledby={decorative || title == null ? undefined : titleId}
        >
          {title ? <title id={titleId}>{title}</title> : null}
          <path
            fill="currentColor"
            d="M7.187 6.09a.63.63 0 100 1.258.63.63 0 000-1.258zm3.443.629a.63.63 0 10-1.26 0 .63.63 0 001.26 0zm2.812 0a.63.63 0 10-1.259 0 .63.63 0 001.259 0zM7.187 10.16a.63.63 0 110-1.258.63.63 0 010 1.258zm3.443-.629a.63.63 0 10-1.26 0 .63.63 0 001.26 0zm2.812 0a.63.63 0 10-1.259 0 .63.63 0 001.259 0zm-6.255 3.442a.63.63 0 110-1.258.63.63 0 010 1.258zm3.443-.629a.63.63 0 10-1.26 0 .63.63 0 001.26 0zm2.812 0a.63.63 0 10-1.259 0 .63.63 0 001.259 0z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.428 2.792a.395.395 0 01.353-.218h8.438c.15 0 .286.085.353.218l.934 1.869a.39.39 0 01.044.162v.014l.001.007V17.03a.395.395 0 01-.395.395H4.844a.395.395 0 01-.395-.395V4.844c0-.067.016-.13.046-.184l.933-1.868zm.597.572l-.543 1.085h9.036l-.543-1.085h-7.95zm-.787 1.875v11.398H8.2v-1.012a1.801 1.801 0 013.602 0v1.012h2.96V5.239H5.239zm5.773 10.386v1.012H8.989v-1.012a1.012 1.012 0 012.024 0z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

BusinessIcon.displayName = "BusinessIcon";
export { BusinessIcon };
