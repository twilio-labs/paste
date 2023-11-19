import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface ProductTrustHubIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductTrustHubIcon = React.forwardRef<HTMLElement, ProductTrustHubIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `ProductTrustHubIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[ProductTrustHubIcon]: Missing a title for non-decorative icon.");
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
            d="M17.314 6.313c-.912.001-1.658.73-1.68 1.642l-2.14.695c-.025-.097-.05-.194-.08-.29l-.295-.907a1.332 1.332 0 00-1.269-.922h-1.277V4.275a1.686 1.686 0 10-1.124 0V6.53H8.171c-.578 0-1.09.372-1.269.923l-.294.905c-.031.097-.056.194-.082.29l-2.138-.695a1.694 1.694 0 10-.35 1.068l2.326.756a5.064 5.064 0 001.035 3.233l-1.427 1.965a1.667 1.667 0 00-.475-.077 1.689 1.689 0 101.387.731l1.305-1.794c.086.072.174.143.266.21l.771.56a1.33 1.33 0 001.569 0l.77-.56c.093-.067.18-.139.268-.21l1.304 1.795a1.755 1.755 0 10.913-.655l-1.428-1.966a5.063 5.063 0 001.036-3.232l2.326-.756a1.683 1.683 0 101.33-2.709zm-6.409 6.824l-.771.56a.21.21 0 01-.247 0l-.77-.56a3.953 3.953 0 01-1.44-4.43l.294-.906a.21.21 0 01.2-.146h3.68a.21.21 0 01.2.145l.293.906a3.952 3.952 0 01-1.439 4.43z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

ProductTrustHubIcon.displayName = "ProductTrustHubIcon";
export { ProductTrustHubIcon };
