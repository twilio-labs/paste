/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';

import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface ApplicationsIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ApplicationsIcon = React.forwardRef<HTMLElement, ApplicationsIconProps>(
  ({as, display, element = 'ICON', size, color, title, decorative}, ref) => {
    const titleId = `ApplicationsIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[ApplicationsIcon]: Missing a title for non-decorative icon.');
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
            d="M2.007 5.002a1.5 1.5 0 011.5-1.5h9a1.5 1.5 0 011.5 1.5V6.5h2.5a1.5 1.5 0 011.5 1.5v7a1.5 1.5 0 01-1.5 1.5h-9a1.5 1.5 0 01-1.5-1.5v-1.498h-2.5a1.5 1.5 0 01-1.5-1.5v-7zm1.5-.5a.5.5 0 00-.5.5v1.5h10v-1.5a.5.5 0 00-.5-.5h-9zm9.5 3h-10v4.5a.5.5 0 00.5.5h9a.5.5 0 00.5-.5v-4.5zm1 4.5v-1.5h3V15a.5.5 0 01-.5.5h-9a.5.5 0 01-.5-.5v-1.498h5.5a1.5 1.5 0 001.5-1.5zm2.5-4.502h-2.5v2.002h3V8a.5.5 0 00-.5-.5z"
            clipRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  }
);

ApplicationsIcon.displayName = 'ApplicationsIcon';
export {ApplicationsIcon};
