"use client";

import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface ProductContactCenterAssessmentsIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductContactCenterAssessmentsIcon = React.forwardRef<HTMLElement, ProductContactCenterAssessmentsIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `ProductContactCenterAssessmentsIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[ProductContactCenterAssessmentsIcon]: Missing a title for non-decorative icon.");
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
            d="M6 8.5a.5.5 0 01.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5zm0 3a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5zm0 3a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.5 3a2 2 0 00-2 2 .5.5 0 01-.5.5H4.5A.5.5 0 004 6v10.5a.5.5 0 00.5.5h5a.5.5 0 010 1h-5A1.5 1.5 0 013 16.5V6a1.5 1.5 0 011.5-1.5h2.042a3 3 0 015.916 0H14.5A1.5 1.5 0 0116 6v1.5a.5.5 0 01-1 0V6a.5.5 0 00-.5-.5H12a.5.5 0 01-.5-.5 2 2 0 00-.586-1.414M9.5 3a2 2 0 011.414.586L9.5 3z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 13.5a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zm4.5-3.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM8.75 4.757a.75.75 0 111.5 0 .75.75 0 01-1.5 0z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.58 11.937a.5.5 0 01.1.7l-1.936 2.582c-.086.114-.196.21-.322.278m2.159-3.56a.5.5 0 00-.7.1l.7-.1zm-.7.1l-1.937 2.582 1.937-2.582zm-1.937 2.582l-1-1a.5.5 0 00-.708.707l1 1a1.002 1.002 0 001.186.171"
          />
          <path
            fill="currentColor"
            d="M16.58 11.937l-.7.1-1.936 2.582-1-1a.5.5 0 00-.708.707l1 1a1.002 1.002 0 001.186.171l2.159-3.56z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

ProductContactCenterAssessmentsIcon.displayName = "ProductContactCenterAssessmentsIcon";
export { ProductContactCenterAssessmentsIcon };
