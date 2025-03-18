"use client";

import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface ProductAIAssistantsIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductAIAssistantsIcon = React.forwardRef<HTMLElement, ProductAIAssistantsIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `ProductAIAssistantsIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[ProductAIAssistantsIcon]: Missing a title for non-decorative icon.");
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
            d="M12.325 3.495a.495.495 0 11-.99 0 .495.495 0 01.99 0zm4.309 1.244a.663.663 0 11-1.327 0 .663.663 0 011.327 0zm1.703 2.471a.664.664 0 00-.663.663c0 .026.004.05.007.075l.003.02-1.915 1.168-.007-.007a1.272 1.272 0 10.288.447l1.903-1.163a.664.664 0 10.384-1.203zm-4.431 7.886l-.654-1.686a1.272 1.272 0 10-.481.206l.648 1.669a.661.661 0 00.464 1.136.664.664 0 00.663-.663.657.657 0 00-.64-.661v-.001zm-4.626 2.38a.705.705 0 100-1.41.705.705 0 000 1.41zm0-3.894a.466.466 0 11.932 0 .466.466 0 01-.933 0zm8.124.162a.663.663 0 10-.213-1.31.663.663 0 00.213 1.31zM5.823 4.529a.663.663 0 11-.939.938.663.663 0 01.939-.938zm.74 8.98a.984.984 0 10-.452-1.916.984.984 0 00.452 1.916z"
          />
          <path
            fill="currentColor"
            d="M11.088 9.129a1.267 1.267 0 00-1.02-.367c-.053-.157-.11-.326-.167-.5L9.9 8.258l-.179-.535-.358-1.07a1.041 1.041 0 00-.571-1.915 1.042 1.042 0 100 2.085l.053-.002.024-.002c.195.583.455 1.358.7 2.097a1.273 1.273 0 00-.425.386L3.085 7.747a1.042 1.042 0 10-.13.504l5.983 1.537a1.272 1.272 0 102.148-.66h.002zm2.339-2.339a1.272 1.272 0 11-1.8 1.799 1.272 1.272 0 011.8-1.799z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

ProductAIAssistantsIcon.displayName = "ProductAIAssistantsIcon";
export { ProductAIAssistantsIcon };
