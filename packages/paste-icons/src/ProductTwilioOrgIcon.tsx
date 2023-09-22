import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface ProductTwilioOrgIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductTwilioOrgIcon = React.forwardRef<HTMLElement, ProductTwilioOrgIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `ProductTwilioOrgIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[ProductTwilioOrgIcon]: Missing a title for non-decorative icon.");
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
            d="M17.238 4c.253 0 .456.104.608.313a.75.75 0 01.101.73l-2.94 9.28c-.152.312-.405.573-.76.677h-.254a.987.987 0 01-.71-.313l-1.773-1.824H8.519l-.456 1.355c-.153.417-.507.73-.964.73H2.74a.716.716 0 01-.608-.313c-.152-.208-.152-.47-.102-.73l2.281-7.09c.152-.417.558-.73.964-.73h2.129L7.86 4.73c.152-.417.507-.73.963-.73zm-.355 1.043h-8.06l-2.18 6.777h5.07c.151 0 .253.052.354.156l1.926 1.981 2.89-8.914zM7.049 7.128H5.275l-2.18 6.777h3.65l-1.217-1.199-.05-.052a.52.52 0 01-.051-.47l1.622-5.056zm2.89-.104a.901.901 0 011.165.104l.558.626.608-.574a.901.901 0 011.166-.104c.05.052.05.052.101.156.355.313.355.886 0 1.251l-1.571 1.564a.453.453 0 01-.609 0L9.837 8.38c-.051 0-.051-.052-.102-.104-.304-.417-.202-.99.203-1.251z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

ProductTwilioOrgIcon.displayName = "ProductTwilioOrgIcon";
export { ProductTwilioOrgIcon };
