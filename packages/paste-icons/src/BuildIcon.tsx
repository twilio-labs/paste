import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface BuildIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const BuildIcon = React.forwardRef<HTMLElement, BuildIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `BuildIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[BuildIcon]: Missing a title for non-decorative icon.");
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
            fillRule="evenodd"
            d="M6.392 3.716a5.38 5.38 0 016.887.272l.022.017.052.046.129.123a246.353 246.353 0 011.369 1.36 1.167 1.167 0 01.26 1.254l-.003.006a.5.5 0 00.822.538l.004-.005a.833.833 0 011.182 0l.705.707.001.001a1.168 1.168 0 010 1.654l-2.362 2.362-.001.001a1.167 1.167 0 01-1.654 0l-.708-.708a.838.838 0 01-.182-.91.833.833 0 01.181-.271.504.504 0 00-.548-.82.503.503 0 00-.164.109l-.918.918a.499.499 0 01-.025.028l-6.471 6.47a1.837 1.837 0 11-2.6-2.598l6.444-6.444a.508.508 0 01.026-.027l.892-.892c.048-.048.051-.073.052-.078.002-.01.003-.044-.025-.113-.064-.154-.22-.348-.447-.575a3.162 3.162 0 00-2.382-.927.836.836 0 01-.822-.553.833.833 0 01.283-.945zm2.803 5.145l1.184 1.184-6.116 6.116a.837.837 0 01-1.185-1.184l6.117-6.116zM7.418 4.225a4.158 4.158 0 012.603 1.21c.233.233.516.546.662.898.077.184.126.404.092.64-.036.244-.154.46-.335.641l-.539.539 1.184 1.184.592-.592a1.504 1.504 0 012.421.418l.826-.825a1.506 1.506 0 01-.787-.91 1.5 1.5 0 01.044-1.01v.001l.002-.006-.002.005a.167.167 0 00-.037-.178 250.558 250.558 0 00-1.357-1.347 6.993 6.993 0 00-.11-.105l-.004-.004a.515.515 0 01-.043-.034 4.38 4.38 0 00-5.212-.525zm9.107 3.926l-2.604 2.603.593.593a.167.167 0 00.236 0l.001-.002 2.364-2.364h.001a.168.168 0 00.037-.183.168.168 0 00-.037-.054l-.001-.002-.59-.591zm-3.203-3.417z"
            clipRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  },
);

BuildIcon.displayName = "BuildIcon";
export { BuildIcon };
