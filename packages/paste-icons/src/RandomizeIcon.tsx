import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface RandomizeIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const RandomizeIcon = React.forwardRef<HTMLElement, RandomizeIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `RandomizeIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[RandomizeIcon]: Missing a title for non-decorative icon.");
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
            d="M2.3 6.4a.5.5 0 01.5-.5h3.483c1.16 0 1.999.678 2.517 1.284a5.486 5.486 0 01.777 1.2l.01.025.004.007.001.003-.441.19.442-.19a.5.5 0 01-.919.396v-.002L8.666 8.8a4.009 4.009 0 00-.146-.281 4.486 4.486 0 00-.48-.685c-.43-.503-1.017-.933-1.758-.933H2.8a.5.5 0 01-.5-.5z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.44 7.147c.655-.696 1.45-1.246 2.443-1.246h3.484a.5.5 0 010 1h-3.484c-.59 0-1.14.32-1.713.93-.575.613-1.104 1.44-1.665 2.321l-.016.025c-.542.853-1.117 1.757-1.763 2.444-.654.697-1.45 1.246-2.443 1.246H2.8a.5.5 0 010-1h3.483c.591 0 1.141-.32 1.714-.93.575-.613 1.103-1.44 1.665-2.321l.015-.025c.543-.853 1.118-1.757 1.764-2.444z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.44 11.051a.5.5 0 01.692.138l.001.002.008.011.036.05a5.038 5.038 0 00.736.786c.51.437 1.19.83 1.97.83h3.484a.5.5 0 110 1h-3.484c-1.119 0-2.023-.558-2.62-1.071a6.041 6.041 0 01-.941-1.022l-.015-.02-.004-.007-.001-.002-.001-.001.416-.278-.416.278a.5.5 0 01.138-.694zM15.823 4.084a.5.5 0 01.693.139l1.267 1.9a.5.5 0 010 .554l-1.267 1.9a.5.5 0 11-.832-.554L16.766 6.4l-1.082-1.623a.5.5 0 01.139-.693z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.823 11.05a.5.5 0 01.693.14l1.267 1.9a.5.5 0 010 .554l-1.267 1.9a.5.5 0 01-.832-.555l1.082-1.622-1.082-1.623a.5.5 0 01.139-.693z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

RandomizeIcon.displayName = "RandomizeIcon";
export { RandomizeIcon };
