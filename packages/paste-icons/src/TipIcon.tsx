import { useUID } from "@twilio-paste/uid-library";
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from "react";

import { IconWrapper } from "./helpers/IconWrapper";
import type { IconWrapperProps } from "./helpers/IconWrapper";

export interface TipIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const TipIcon = React.forwardRef<HTMLElement, TipIconProps>(
  ({ as, display, element = "ICON", size, color, title, decorative }, ref) => {
    const titleId = `TipIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error("[TipIcon]: Missing a title for non-decorative icon.");
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
          aria-labelledby={decorative || title == null ? undefined : titleId}
        >
          {title ? <title id={titleId}>{title}</title> : null}
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M10 2.5a5.411 5.411 0 00-3.895 1.672A5.784 5.784 0 004.5 8.185c0 .422.11.883.255 1.313.147.436.34.872.529 1.257a16.094 16.094 0 00.74 1.336l.008.013.522.974c.286.6.446 1.583.446 2.366 0 .633.382 1.161.914 1.508.535.349 1.26.548 2.086.548.826 0 1.55-.2 2.085-.548.533-.347.915-.875.915-1.508 0-.784.16-1.766.446-2.366l.522-.974.008-.013.049-.08c.042-.067.1-.166.172-.288.141-.243.33-.583.52-.968.188-.385.381-.821.528-1.257.145-.43.255-.89.255-1.313a5.784 5.784 0 00-1.604-4.013A5.411 5.411 0 0010 2.5zm-3.095 9.116a.479.479 0 00-.02-.034l-.002-.004-.011-.018a10.26 10.26 0 01-.204-.339c-.133-.23-.31-.548-.487-.908a9.52 9.52 0 01-.478-1.134c-.13-.387-.203-.728-.203-.994 0-1.248.478-2.442 1.324-3.32A4.411 4.411 0 0110 3.5c1.188 0 2.33.489 3.176 1.366a4.784 4.784 0 011.324 3.32c0 .265-.073.606-.203.993-.128.38-.3.774-.478 1.134a15.067 15.067 0 01-.69 1.247l-.012.018-.002.004a.524.524 0 00-.02.034l-.394.736H7.299l-.394-.736zm1.037 2.887a7.54 7.54 0 00-.226-1.151h4.568c-.105.367-.18.764-.226 1.151A.513.513 0 0012 14.5H8c-.02 0-.04.001-.058.003zm.061.997c.02.187.147.412.458.614.34.222.865.386 1.539.386.674 0 1.2-.164 1.54-.386.31-.202.436-.427.457-.614H8.003z"
            clipRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  },
);

TipIcon.displayName = "TipIcon";
export { TipIcon };
