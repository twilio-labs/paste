import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import type { IconWrapperProps } from "./helpers/IconWrapper";
import { IconWrapper } from "./helpers/IconWrapper.js";

export interface ProductConversationalInsightsIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductConversationalInsightsIcon = React.forwardRef<HTMLElement, ProductConversationalInsightsIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `ProductConversationalInsightsIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[ProductConversationalInsightsIcon]: Missing a title for non-decorative icon.");
    }

    return (
      <IconWrapper as={as} display={display} element={element} size={size} color={color} ref={ref}>
        <svg
          role="img"
          aria-hidden={decorative}
          height="100%"
          width="100%"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          aria-labelledby={titleId}
        >
          {title ? <title id={titleId}>{title}</title> : null}
          <path
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5 5a.5.5 0 00-.5.5v10a.5.5 0 00.5.5h10a.5.5 0 00.5-.5v-5a.5.5 0 011 0v5A1.5 1.5 0 0115 17H5a1.5 1.5 0 01-1.5-1.5v-10A1.5 1.5 0 015 4h5a.5.5 0 010 1H5z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.7 6.5a.5.5 0 01.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5zm0 2.25a.5.5 0 01.5-.5h3.5a.5.5 0 010 1H6.2a.5.5 0 01-.5-.5zm2.146 2.896a.5.5 0 01.666-.036l2.15 1.72 1.184-1.184a.5.5 0 01.708.708l-1.5 1.5a.5.5 0 01-.666.036l-2.15-1.72-1.684 1.684a.5.5 0 01-.708-.707l2-2zm1.61-5.608c2.745-.04 4.072-1.32 4.082-4.077.002-.617.927-.614.925.004-.01 2.687 1.263 4.01 4.085 4.073.61.014.599.928-.013.925-2.634-.01-3.933 1.315-4.072 4.097-.03.598-.92.58-.925-.018C13.51 8.29 12.28 6.96 9.463 6.963c-.613.001-.62-.917-.007-.925zm4.603-1.435l-.063-.135-.104.219c-.417.818-1.06 1.417-1.923 1.796l.16.073c.884.423 1.513 1.102 1.893 2.018l.019.047.08-.176c.422-.884 1.067-1.531 1.93-1.93l.035-.017-.107-.046c-.875-.395-1.516-1.015-1.92-1.849z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

ProductConversationalInsightsIcon.displayName = "ProductConversationalInsightsIcon";
export { ProductConversationalInsightsIcon };
