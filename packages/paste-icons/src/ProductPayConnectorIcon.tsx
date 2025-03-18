"use client";

import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface ProductPayConnectorIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductPayConnectorIcon = React.forwardRef<HTMLElement, ProductPayConnectorIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `ProductPayConnectorIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[ProductPayConnectorIcon]: Missing a title for non-decorative icon.");
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
            d="M3.42 4.42c.269-.27.633-.42 1.014-.42h10.268a1.434 1.434 0 011.434 1.434V7.7a.5.5 0 11-1 0v-.2H4v5.402a.434.434 0 00.434.433H9.1a.5.5 0 010 1H4.433A1.434 1.434 0 013 12.901V5.435c0-.38.151-.745.42-1.014zm11.716 1.014V6.5H4V5.434A.433.433 0 014.434 5h10.268a.434.434 0 01.434.434z"
          />
          <path
            fill="currentColor"
            d="M5.367 9.134a.5.5 0 100 1h5a.5.5 0 000-1h-5zm-.5 2.367a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.148 12.013a1.17 1.17 0 010-1.654l1.183-1.182a1.17 1.17 0 011.653 0l.281.281a2.508 2.508 0 01.37 3.076.5.5 0 01-.027.05 13.907 13.907 0 01-1.899 2.365l-.76.76a13.875 13.875 0 01-2.365 1.897 2.508 2.508 0 01-3.124-.342l-.281-.282a1.17 1.17 0 010-1.653l1.182-1.183a1.17 1.17 0 011.654 0 .17.17 0 00.24 0l1.893-1.893a.17.17 0 00.05-.12.17.17 0 00-.05-.12zm1.89-2.129a.17.17 0 01.24 0l.28.281a1.508 1.508 0 01.206 1.876.472.472 0 00-.025.044c-.5.78-1.082 1.502-1.737 2.157l-.76.76a12.88 12.88 0 01-2.199 1.76 1.508 1.508 0 01-1.876-.206l-.28-.28a.17.17 0 01-.001-.24l1.182-1.183a.17.17 0 01.24 0 1.17 1.17 0 001.654 0l1.893-1.893a1.168 1.168 0 000-1.654.17.17 0 010-.24l1.183-1.182z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

ProductPayConnectorIcon.displayName = "ProductPayConnectorIcon";
export { ProductPayConnectorIcon };
