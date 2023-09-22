/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import { useUID } from '@twilio-paste/uid-library';

import { IconWrapper } from './helpers/IconWrapper';
import type { IconWrapperProps } from './helpers/IconWrapper';

export interface BuiltInIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const BuiltInIcon = React.forwardRef<HTMLElement, BuiltInIconProps>(
  ({ as, display, element = 'ICON', size, color, title, decorative }, ref) => {
    const titleId = `BuiltInIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[BuiltInIcon]: Missing a title for non-decorative icon.');
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
            d="M16.5 2A1.5 1.5 0 0118 3.5v13a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 012 16.5v-13A1.5 1.5 0 013.5 2h13zm0 1h-13a.5.5 0 00-.492.41L3 3.5v13a.5.5 0 00.41.492L3.5 17h13a.5.5 0 00.492-.41L17 16.5v-13a.5.5 0 00-.41-.492L16.5 3zM9 10.5l.176.008A2 2 0 0110.937 12L14.501 12a.5.5 0 01.09.992L14.5 13l-3.564.001a2 2 0 01-3.873 0L5.501 13a.5.5 0 01-.09-.992L5.5 12h1.563A2 2 0 019 10.5zm0 1l-.116.007A1 1 0 109 11.5zm4.001-6a2 2 0 11-1.937 2.501L5.5 8a.5.5 0 01-.09-.992L5.5 7h5.563A2 2 0 0113 5.5zm0 1a1 1 0 100 2 1 1 0 000-2z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

BuiltInIcon.displayName = 'BuiltInIcon';
export { BuiltInIcon };
