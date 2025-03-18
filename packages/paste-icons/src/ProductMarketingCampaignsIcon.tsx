"use client";

import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface ProductMarketingCampaignsIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductMarketingCampaignsIcon = React.forwardRef<HTMLElement, ProductMarketingCampaignsIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `ProductMarketingCampaignsIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[ProductMarketingCampaignsIcon]: Missing a title for non-decorative icon.");
    }

    return (
      <IconWrapper as={as} display={display} element={element} size={size} color={color} ref={ref}>
        <svg
          role="img"
          aria-hidden={decorative}
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
            d="M7.767 11.436a.568.568 0 01-.474.13l-5.04-.916a.378.378 0 01-.019-.705l15.552-7.317a.153.153 0 01.031-.007.144.144 0 01.017-.005.14.14 0 01.089.02c.02.012.038.029.05.048a.134.134 0 01.01.02.15.15 0 01.016.084l-1.443 13.461a.365.365 0 01-.542.235l-5.662-3.355a.365.365 0 10-.35.64l.855.509a.372.372 0 01.125.54l-1.64 2.405a.365.365 0 01-.666-.204V12.44c0-.132.051-.26.142-.355l7.257-7.616a.09.09 0 00-.123-.13l-8.185 7.097z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

ProductMarketingCampaignsIcon.displayName = "ProductMarketingCampaignsIcon";
export { ProductMarketingCampaignsIcon };
