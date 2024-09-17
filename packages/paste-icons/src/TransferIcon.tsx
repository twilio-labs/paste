import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface TransferIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const TransferIcon = React.forwardRef<HTMLElement, TransferIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `TransferIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[TransferIcon]: Missing a title for non-decorative icon.");
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
          xmlns="http://www.w3.org/2000/svg"
          aria-labelledby={decorative || title == null ? undefined : titleId}
        >
          {title ? <title id={titleId}>{title}</title> : null}
          <path
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.585 10.117a.546.546 0 01.773 0L16.84 12.6a.546.546 0 010 .772l-2.482 2.482a.546.546 0 01-.773-.772l2.097-2.096-2.097-2.096a.546.546 0 010-.773zM6.414 4.16a.546.546 0 010 .772L4.318 7.028l2.096 2.096a.546.546 0 01-.772.773L3.16 7.414a.546.546 0 010-.772L5.642 4.16a.546.546 0 01.772 0z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3 7.028c0-.301.244-.546.546-.546h12.908a.546.546 0 010 1.092H3.546A.546.546 0 013 7.028zM3 12.986c0-.302.244-.546.546-.546h12.908a.546.546 0 010 1.092H3.546A.546.546 0 013 12.986z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

TransferIcon.displayName = "TransferIcon";
export { TransferIcon };
