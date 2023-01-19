/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';

import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface InboxIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const InboxIcon = React.forwardRef<HTMLElement, InboxIconProps>(
  ({as, display, element = 'ICON', size, color, title, decorative}, ref) => {
    const titleId = `InboxIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[InboxIcon]: Missing a title for non-decorative icon.');
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
            d="M2.44 7.44A1.5 1.5 0 013.5 7h3.055a.5.5 0 01.434.252 3.467 3.467 0 006.022 0A.5.5 0 0113.445 7H16.5A1.5 1.5 0 0118 8.5v3a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 012 11.5v-3c0-.398.158-.78.44-1.06zM3.5 8a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5h-2.776a4.467 4.467 0 01-7.448 0H3.5z"
            clipRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  }
);

InboxIcon.displayName = 'InboxIcon';
export {InboxIcon};
