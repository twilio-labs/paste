import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface LogoPasteIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const LogoPasteIcon = React.forwardRef<HTMLElement, LogoPasteIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `LogoPasteIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[LogoPasteIcon]: Missing a title for non-decorative icon.");
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
            d="M5.49 1h8.828a2.401 2.401 0 012.399 2.399v.005l-.002.14v6.209a2.412 2.412 0 01-2.41 2.41h-4.84l-2.52 5.643-.001.004A2.076 2.076 0 015.07 19H5.07A2.072 2.072 0 013 16.929v-3.895c0-.619.239-1.213.664-1.66a2.402 2.402 0 01-.631-1.62v-.005l.058-6.353v-.001A2.401 2.401 0 015.49 1zm0 1.538a.862.862 0 00-.862.861v.005L4.57 9.756a.863.863 0 00.862.858h3.04l3.603-8.076H5.49zm9.006.065a.872.872 0 00-.978.474l-3.363 7.537h4.104a.862.862 0 00.861-.861v-.004l.057-6.215v-.08a.872.872 0 00-.68-.851zm-9.085 9.56a.874.874 0 00-.873.872v3.893a.532.532 0 001.01.232l2.23-4.997H5.411z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

LogoPasteIcon.displayName = "LogoPasteIcon";
export { LogoPasteIcon };
