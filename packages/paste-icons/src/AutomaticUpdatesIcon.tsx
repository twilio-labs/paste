/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';

import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface AutomaticUpdatesIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const AutomaticUpdatesIcon = React.forwardRef<HTMLElement, AutomaticUpdatesIconProps>(
  ({as, display, element = 'ICON', size, color, title, decorative}, ref) => {
    const titleId = `AutomaticUpdatesIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[AutomaticUpdatesIcon]: Missing a title for non-decorative icon.');
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
            d="M14.045 4.738a6.167 6.167 0 00-7.806 1.15.5.5 0 01-.745-.666 7.167 7.167 0 11-1.827 4.825l-.783.94a.5.5 0 01-.768-.64l1.667-2a.5.5 0 01.768 0l1.666 2a.5.5 0 01-.768.64l-.782-.939a6.167 6.167 0 109.378-5.31z"
          />
          <path
            fill="currentColor"
            d="M13.4 8.3a.5.5 0 10-.8-.6l-2.654 3.538-1.593-1.592a.5.5 0 10-.706.708l1.592 1.592a1 1 0 001.507-.107L13.4 8.3z"
          />
        </svg>
      </IconWrapper>
    );
  }
);

AutomaticUpdatesIcon.displayName = 'AutomaticUpdatesIcon';
export {AutomaticUpdatesIcon};
