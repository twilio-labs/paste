/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import { useUID } from '@twilio-paste/uid-library';

import { IconWrapper } from './helpers/IconWrapper';
import type { IconWrapperProps } from './helpers/IconWrapper';

export interface MMSCapableIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const MMSCapableIcon = React.forwardRef<HTMLElement, MMSCapableIconProps>(
  ({ as, display, element = 'ICON', size, color, title, decorative }, ref) => {
    const titleId = `MMSCapableIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[MMSCapableIcon]: Missing a title for non-decorative icon.');
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
            d="M16.5 3A1.502 1.502 0 0118 4.5v10a1.502 1.502 0 01-1.5 1.5H9.667L5.8 18.9a.5.5 0 01-.8-.4V16H3.5A1.502 1.502 0 012 14.5v-10A1.502 1.502 0 013.5 3zm0 1h-13a.5.5 0 00-.5.5v10a.5.5 0 00.5.5h2a.5.5 0 01.5.5v2l3.2-2.4a.5.5 0 01.3-.1h7a.5.5 0 00.5-.5v-10a.5.5 0 00-.5-.5zm-4.985 2.886a1 1 0 01.82.445l2.582 3.893c.008.013.01.028.017.041.03.06.05.124.057.191.002.015.009.028.009.044l-.01.047a.484.484 0 01-.18.336c-.012.01-.02.025-.034.034l-.103.048A.497.497 0 0114.5 12h-9a.5.5 0 110-1h.746l1.55-2.323a.976.976 0 01.72-.44c.263-.03.529.046.736.213l.407.327 1.026-1.464a1 1 0 01.83-.427zm-.012.999l-1.332 1.903a.5.5 0 01-.723.102l-.821-.66L7.447 11h6.121l-2.065-3.115zM6.807 5.5a.75.75 0 110 1.5.75.75 0 010-1.5z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

MMSCapableIcon.displayName = 'MMSCapableIcon';
export { MMSCapableIcon };
