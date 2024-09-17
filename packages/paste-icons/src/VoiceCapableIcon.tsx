import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface VoiceCapableIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const VoiceCapableIcon = React.forwardRef<HTMLElement, VoiceCapableIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `VoiceCapableIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[VoiceCapableIcon]: Missing a title for non-decorative icon.");
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
          aria-labelledby={decorative || title == null ? undefined : titleId}
        >
          {title ? <title id={titleId}>{title}</title> : null}
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M14.023 18.004a4.191 4.191 0 01-2.026-.526l-.248-.148a33.635 33.635 0 01-9.076-9.08 4.17 4.17 0 01.559-5.229l.516-.516a1.733 1.733 0 012.445 0L8.376 4.69c.627.637.66 1.638.102 2.313l-.112.123a.731.731 0 000 1.032l3.478 3.478c.11.11.25.181.4.205l.116.01a.723.723 0 00.515-.214 1.734 1.734 0 012.446-.001l2.174 2.172c.673.676.673 1.77 0 2.446l-.516.516a4.17 4.17 0 01-2.956 1.234zm-1.72-1.507c1.26.81 2.914.63 3.97-.434l.515-.515a.732.732 0 000-1.033l-2.174-2.172a.732.732 0 00-1.032 0 1.73 1.73 0 01-2.443.002l-3.48-3.48a1.732 1.732 0 010-2.446.729.729 0 00.076-.943l-.083-.096-2.166-2.168a.732.732 0 00-1.032 0l-.515.516a3.17 3.17 0 00-.436 3.966 32.641 32.641 0 008.282 8.446l.517.357z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

VoiceCapableIcon.displayName = "VoiceCapableIcon";
export { VoiceCapableIcon };
