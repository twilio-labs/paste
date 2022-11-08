/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';

import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface NotesIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const NotesIcon = React.forwardRef<HTMLElement, NotesIconProps>(
  ({as, display, element = 'ICON', size, color, title, decorative}, ref) => {
    const titleId = `NotesIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[NotesIcon]: Missing a title for non-decorative icon.');
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
          xmlns="http://www.w3.org/2000/svg"
          aria-labelledby={titleId}
        >
          {title ? <title id={titleId}>{title}</title> : null}
          <path
            fill="currentColor"
            d="M16.5 17.5h-13a1 1 0 01-1-1v-13a1 1 0 011-1h13a1 1 0 011 1v13a1 1 0 01-1 1z"
            stroke="#606B85"
          />
          <path
            fill="currentColor"
            d="M13 4V1M7 4V1M10 4V1"
            stroke="#606B85"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path fill="currentColor" stroke="#606B85" strokeLinecap="round" d="M5.5 7.5h9M5.5 10.5h9M5.5 13.5h6" />
          <path
            fill="currentColor"
            d="M5.5 7a.5.5 0 000 1h9a.5.5 0 000-1h-9zM5 10.5a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zM5.5 13a.5.5 0 000 1h6a.5.5 0 000-1h-6z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13 .5a.5.5 0 01.5.5v1h3A1.5 1.5 0 0118 3.5v13a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 012 16.5v-13A1.5 1.5 0 013.5 2h3V1a.5.5 0 011 0v1h2V1a.5.5 0 011 0v1h2V1a.5.5 0 01.5-.5zM7.5 3h2v1a.5.5 0 001 0V3h2v1a.5.5 0 001 0V3h3a.5.5 0 01.5.5v13a.5.5 0 01-.5.5h-13a.5.5 0 01-.5-.5v-13a.5.5 0 01.5-.5h3v1a.5.5 0 001 0V3z"
          />
        </svg>
      </IconWrapper>
    );
  }
);

NotesIcon.displayName = 'NotesIcon';
export {NotesIcon};
