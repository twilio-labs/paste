/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';

import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface GitIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const GitIcon = React.forwardRef<HTMLElement, GitIconProps>(
  ({as, display, element = 'ICON', size, color, title, decorative}, ref) => {
    const titleId = `GitIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[GitIcon]: Missing a title for non-decorative icon.');
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
            d="M2.146 10.354a.5.5 0 010-.708l7.5-7.5a.5.5 0 01.707 0l7.5 7.5a.5.5 0 010 .707l-7.5 7.5a.5.5 0 01-.707 0l-7.5-7.5zM3.206 10L10 16.793 16.793 10 10 3.207 8.124 5.083 9.229 6.19a1.667 1.667 0 012.249 2.249l.751.75a1.667 1.667 0 11-.707.707l-.751-.75a1.658 1.658 0 01-.271.112v2.486a1.667 1.667 0 11-1 0V9.257a1.667 1.667 0 01-.978-2.361L7.417 5.79 3.207 10zm6.797-1.667h-.007a.667.667 0 01-.48-1.125l.013-.012.012-.013a.667.667 0 01.94.945l-.01.01-.01.01a.665.665 0 01-.458.185zm2.526 1.862l-.012.012a.667.667 0 10.024-.024l-.012.012zm-2.53 2.472A.667.667 0 1010 14a.667.667 0 000-1.333z"
            clipRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  }
);

GitIcon.displayName = 'GitIcon';
export {GitIcon};
