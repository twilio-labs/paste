import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import type { IconWrapperProps } from "./helpers/IconWrapper";
import { IconWrapper } from "./helpers/IconWrapper.js";

export interface EditIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const EditIcon = React.forwardRef<HTMLElement, EditIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `EditIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[EditIcon]: Missing a title for non-decorative icon.");
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
            d="M12.345 3.646c.973-.972 2.434-.845 3.646.368 1.21 1.21 1.333 2.662.36 3.636L8.39 15.613a.525.525 0 01-.01.011l-.013.01-.28.28a.515.515 0 01-.157.108l-.091.03-4.081.937a.618.618 0 01-.742-.74l.926-4.089a.515.515 0 01.138-.25l6.84-6.84a.525.525 0 01.01-.01l.009-.008zM4.847 12.82l-.682 3.016 3.007-.69-2.325-2.326zm6.446-6.668l-5.829 5.828 2.549 2.549 5.828-5.829-2.548-2.548zm3.97-1.41c-.836-.836-1.65-.907-2.19-.369l-1.051 1.051 2.548 2.548 1.053-1.051c.48-.482.48-1.171-.11-1.903l-.119-.138z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

EditIcon.displayName = "EditIcon";
export { EditIcon };
