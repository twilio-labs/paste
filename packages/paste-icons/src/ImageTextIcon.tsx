import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import type { IconWrapperProps } from "./helpers/IconWrapper";
import { IconWrapper } from "./helpers/IconWrapper.js";

export interface ImageTextIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ImageTextIcon = React.forwardRef<HTMLElement, ImageTextIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `ImageTextIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[ImageTextIcon]: Missing a title for non-decorative icon.");
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
            d="M3.362 2.84a.521.521 0 00-.522.522v13.276a.521.521 0 00.522.522h6.127a.5.5 0 010 1H3.362a1.521 1.521 0 01-1.522-1.522V3.362c0-.404.16-.79.446-1.076m0 0a1.521 1.521 0 011.076-.446h10.213c.396 0 .776.155 1.06.431l.001.001 2.043 1.963a1.521 1.521 0 01.46 1.09v4.164a.5.5 0 01-1 0V5.325a.52.52 0 00-.157-.372l-.001-.002-2.043-1.962a.521.521 0 00-.364-.149H3.363m1.542 4.607a.5.5 0 01.5-.5h8.17a.5.5 0 010 1h-8.17a.5.5 0 01-.5-.5zm0 3.064a.5.5 0 01.5-.5H9.49a.5.5 0 010 1H5.404a.5.5 0 01-.5-.5zm6.128 1.7c0-.653.529-1.182 1.18-1.182h4.767c.652 0 1.18.529 1.18 1.181v4.766a1.18 1.18 0 01-1.18 1.181h-3.354a.497.497 0 01-.104 0h-1.308a1.18 1.18 0 01-1.181-1.18V12.21zm3.404 4.946h2.543a.18.18 0 00.076-.017l-1.396-2.093-.004-.004h-.005m-.005 0l-.003.004-1.206 2.11m2.724-1.662V12.21a.18.18 0 00-.181-.18h-4.766a.18.18 0 00-.181.18v4.766c0 .1.08.181.18.181h1.072l1.489-2.604a1.01 1.01 0 011.34-.399m1.047 1.34l-.668-1a1.011 1.011 0 00-.38-.34m-3.229-.646a.755.755 0 111.51 0 .755.755 0 01-1.51 0zm-7.979.067a.5.5 0 01.5-.5H9.49a.5.5 0 010 1H5.404a.5.5 0 01-.5-.5z"
            clipRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  },
);

ImageTextIcon.displayName = "ImageTextIcon";
export { ImageTextIcon };
