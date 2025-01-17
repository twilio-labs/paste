import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface CardIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const CardIcon = React.forwardRef<HTMLElement, CardIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `CardIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[CardIcon]: Missing a title for non-decorative icon.");
    }

    return (
      <IconWrapper as={as} display={display} element={element} size={size} color={color} ref={ref}>
        <svg
          role="img"
          aria-hidden={decorative}
          fill="none"
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
            clipRule="evenodd"
            d="M3 3.505V16.5c0 .163.04.251.072.3a.38.38 0 00.152.128.732.732 0 00.28.072H16.5c.163 0 .251-.04.3-.072a.38.38 0 00.128-.152.731.731 0 00.071-.269l.001-.012V3.5a.524.524 0 00-.072-.3.378.378 0 00-.152-.128.73.73 0 00-.269-.071L16.495 3H3.5a.524.524 0 00-.3.072.38.38 0 00-.128.152.73.73 0 00-.071.269L3 3.505zM16.5 2.5V2h-13c-.337 0-.624.086-.855.24a1.377 1.377 0 00-.467.536A1.728 1.728 0 002 3.472V3.5l.5.001H2v13c0 .337.086.624.24.855.153.229.352.375.536.467a1.729 1.729 0 00.696.178H3.5l.001-.5v.5h13c.337 0 .624-.086.855-.24.229-.153.375-.352.467-.536a1.73 1.73 0 00.178-.696V16.5l-.5-.001h.5v-13c0-.337-.086-.624-.24-.855a1.378 1.378 0 00-.536-.467A1.73 1.73 0 0016.528 2H16.5l-.001.5z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7 6.528v2.944a.255.255 0 00.122.028h5.82a.255.255 0 00.121-.028V6.528a.255.255 0 00-.122-.028H7.122A.255.255 0 007 6.528zm-.622-.786c.208-.158.472-.242.744-.242h5.82c.271 0 .536.084.743.242a.926.926 0 01.378.734v3.048c0 .32-.17.575-.378.734a1.226 1.226 0 01-.744.242H7.122c-.272 0-.536-.084-.744-.242A.926.926 0 016 9.524V6.476c0-.32.17-.575.378-.734zM5 12.5a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zm0 2a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

CardIcon.displayName = "CardIcon";
export { CardIcon };
