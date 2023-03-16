/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';

import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface LockIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const LockIcon = React.forwardRef<HTMLElement, LockIconProps>(
  ({as, display, element = 'ICON', size, color, title, decorative}, ref) => {
    const titleId = `LockIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[LockIcon]: Missing a title for non-decorative icon.');
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
          <path fill="currentColor" d="M10.5 12a.5.5 0 00-1 0v2a.5.5 0 001 0v-2z" />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M6 6v2h-.5A1.5 1.5 0 004 9.5v7A1.5 1.5 0 005.5 18h9a1.5 1.5 0 001.5-1.5v-7A1.5 1.5 0 0014.5 8H14V6a4 4 0 10-8 0zm4-3a3 3 0 00-3 3v2h6V6a3 3 0 00-3-3zM5 9.5a.5.5 0 01.5-.5h9a.5.5 0 01.5.5v7a.5.5 0 01-.5.5h-9a.5.5 0 01-.5-.5v-7z"
            clipRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  }
);

LockIcon.displayName = 'LockIcon';
export {LockIcon};
