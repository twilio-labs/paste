import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import type { IconWrapperProps } from "./helpers/IconWrapper";
import { IconWrapper } from "./helpers/IconWrapper.js";

export interface RepeatPurchaseIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const RepeatPurchaseIcon = React.forwardRef<HTMLElement, RepeatPurchaseIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `RepeatPurchaseIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[RepeatPurchaseIcon]: Missing a title for non-decorative icon.");
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
          aria-labelledby={titleId}
        >
          {title ? <title id={titleId}>{title}</title> : null}
          <path
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.983 2.83a.555.555 0 00-.548.462m0 0l-1.881 11.06a1.587 1.587 0 01-1.564 1.32H5.91a.515.515 0 110-1.03h7.08a.555.555 0 00.548-.462l1.881-11.06a1.586 1.586 0 011.564-1.32h.702a.515.515 0 010 1.03h-.702M7.249 17.278a.248.248 0 000-.495v-.535a.783.783 0 000 1.565v-.535z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.249 16.248a.783.783 0 110 1.565v-.535a.248.248 0 010-.495v-.535zM12.6 17.278a.248.248 0 000-.495v-.535a.783.783 0 100 1.565v-.535z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.6 16.248a.783.783 0 110 1.565v-.535a.248.248 0 010-.495v-.535zM2.59 5.687a.515.515 0 01.625.374l1.035 4.14a1.625 1.625 0 001.577 1.23h8.613a.515.515 0 010 1.03H5.827a2.656 2.656 0 01-2.577-2.01L2.216 6.31a.515.515 0 01.374-.624z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.674 6.585c0-.259.21-.468.468-.468h2.123a.468.468 0 010 .936H6.61v1.654a.468.468 0 11-.937 0V6.585z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.436 6.126c.253-.05.5.115.55.37a2.685 2.685 0 005.175.352.468.468 0 01.886.304 3.622 3.622 0 01-6.981-.477.468.468 0 01.37-.55zM12.934 2.297c.258 0 .468.21.468.468v2.122c0 .259-.21.469-.468.469H10.81a.468.468 0 010-.937h1.654V2.765c0-.258.21-.468.469-.468z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.639 2.815a2.685 2.685 0 00-2.724 1.81.468.468 0 01-.886-.304 3.622 3.622 0 016.981.476.468.468 0 11-.92.18A2.685 2.685 0 009.64 2.815z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

RepeatPurchaseIcon.displayName = "RepeatPurchaseIcon";
export { RepeatPurchaseIcon };
