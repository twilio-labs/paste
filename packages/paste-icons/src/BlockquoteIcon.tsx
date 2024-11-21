import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface BlockquoteIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const BlockquoteIcon = React.forwardRef<HTMLElement, BlockquoteIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `BlockquoteIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[BlockquoteIcon]: Missing a title for non-decorative icon.");
    }

    return (
      <IconWrapper as={as} display={display} element={element} size={size} color={color} ref={ref}>
        <svg
          role="img"
          aria-hidden={decorative}
          width="100%"
          height="100%"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          aria-labelledby={titleId}
        >
          {title ? <title id={titleId}>{title}</title> : null}
          <path
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.865 16.305a44.92 44.92 0 01-1.698.028c-.707 0-1.264-.011-1.699-.028-1.018-.039-1.754-.819-1.781-1.824a62.15 62.15 0 01-.02-1.67V9.646c0-3.19 2.12-5.165 4.585-5.926.335-.103.765-.073 1.061.236.224.232.378.5.484.738.267.605-.107 1.181-.552 1.454-.707.433-1.218.918-1.554 1.48-.29.485-.459 1.044-.498 1.705.635 0 1.148.007 1.56.017 1.065.025 1.87.833 1.896 1.897a65.173 65.173 0 01-.002 3.234c-.028 1.005-.764 1.785-1.782 1.824zm-8.333 0a44.92 44.92 0 01-1.699.028c-.706 0-1.263-.011-1.698-.028-1.018-.039-1.754-.819-1.782-1.824-.011-.432-.02-.981-.02-1.67V9.646c0-3.19 2.12-5.164 4.585-5.925.336-.104.765-.074 1.062.235.224.232.378.5.483.738.268.606-.106 1.182-.552 1.454-.707.434-1.217.918-1.553 1.48-.29.485-.459 1.044-.499 1.705.636 0 1.149.007 1.56.017 1.065.025 1.87.833 1.897 1.897.01.415.017.93.017 1.564 0 .689-.008 1.238-.02 1.67-.027 1.005-.764 1.785-1.78 1.824z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

BlockquoteIcon.displayName = "BlockquoteIcon";
export { BlockquoteIcon };
