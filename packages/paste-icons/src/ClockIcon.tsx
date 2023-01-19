/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';

import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface ClockIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ClockIcon = React.forwardRef<HTMLElement, ClockIconProps>(
  ({as, display, element = 'ICON', size, color, title, decorative}, ref) => {
    const titleId = `ClockIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[ClockIcon]: Missing a title for non-decorative icon.');
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
            d="M9.53 11.17A.498.498 0 019.5 11V6a.5.5 0 011 0v4.793l1.621 1.621a.5.5 0 11-.707.707l-1.768-1.768a.498.498 0 01-.116-.182z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M10 2.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15zM5.404 5.404a6.5 6.5 0 119.192 9.192 6.5 6.5 0 01-9.192-9.192z"
            clipRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  }
);

ClockIcon.displayName = 'ClockIcon';
export {ClockIcon};
