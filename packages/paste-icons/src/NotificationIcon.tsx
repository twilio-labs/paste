/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';

import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface NotificationIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const NotificationIcon = React.forwardRef<HTMLElement, NotificationIconProps>(
  ({as, display, element = 'ICON', size, color, title, decorative}, ref) => {
    const titleId = `NotificationIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[NotificationIcon]: Missing a title for non-decorative icon.');
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
          aria-labelledby={titleId}
        >
          {title ? <title id={titleId}>{title}</title> : null}
          <path
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 3.08a4.376 4.376 0 00-3.111 1.303 4.48 4.48 0 00-1.291 3.151c0 2.794-.406 4.512-.837 5.55a5.742 5.742 0 01-.259.544h10.994a5.725 5.725 0 01-.257-.54c-.431-1.036-.837-2.754-.837-5.554a4.48 4.48 0 00-1.291-3.151A4.376 4.376 0 0010 3.08zm6.792 10.642a1.29 1.29 0 01-.15-.162c-.12-.148-.296-.415-.48-.856-.366-.882-.76-2.462-.76-5.17a5.48 5.48 0 00-1.58-3.855A5.377 5.377 0 0010 2.08c-1.434 0-2.81.576-3.822 1.6a5.48 5.48 0 00-1.58 3.854c0 2.702-.393 4.282-.76 5.166-.184.442-.361.71-.48.86a1.33 1.33 0 01-.152.163.5.5 0 00.294.905h13a.5.5 0 00.292-.906zm-8.42 1.874a.5.5 0 01.612.357c.072.275.235.52.464.695a1.32 1.32 0 001.604 0 1.29 1.29 0 00.465-.695.5.5 0 11.967.254c-.13.492-.42.926-.824 1.235a2.32 2.32 0 01-2.82 0 2.288 2.288 0 01-.824-1.235.5.5 0 01.357-.61z"
          />
        </svg>
      </IconWrapper>
    );
  }
);

NotificationIcon.displayName = 'NotificationIcon';
export {NotificationIcon};
