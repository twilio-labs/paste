import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface FileZipIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const FileZipIcon = React.forwardRef<HTMLElement, FileZipIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `FileZipIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[FileZipIcon]: Missing a title for non-decorative icon.");
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
          aria-labelledby={decorative || title == null ? undefined : titleId}
        >
          {title ? <title id={titleId}>{title}</title> : null}
          <path
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.5 17h-13a.5.5 0 01-.5-.5v-13a.5.5 0 01.5-.5h1.81l-.324 2.61a2.127 2.127 0 00.516 1.671l.007.008a2.2 2.2 0 003.236 0l.006-.008a2.126 2.126 0 00.517-1.67L8.94 3h4.438a.5.5 0 01.353.146l3.122 3.122A.5.5 0 0117 6.62v9.88a.5.5 0 01-.5.5zM7.934 3H6.317l-.34 2.734a1.127 1.127 0 00.271.881 1.2 1.2 0 001.757 0 1.126 1.126 0 00.27-.88L7.935 3zm5.445-1a1.5 1.5 0 011.06.44l3.122 3.12A1.5 1.5 0 0118 6.622V16.5a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 012 16.5v-13A1.5 1.5 0 013.5 2h9.879zM7.125 9.625a.812.812 0 100 1.625.812.812 0 000-1.625zm-.575 3.988a.813.813 0 111.15 1.15.813.813 0 01-1.15-1.15z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

FileZipIcon.displayName = "FileZipIcon";
export { FileZipIcon };
