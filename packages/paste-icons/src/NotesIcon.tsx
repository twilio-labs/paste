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
            d="M5 7.5a.5.5 0 01.5-.5h9a.498.498 0 01.45.717.5.5 0 01-.45.283h-9a.5.5 0 01-.5-.5zm.5 2.5a.498.498 0 00-.49.6.5.5 0 00.49.4h9a.5.5 0 100-1h-9zm-.195 3.04A.498.498 0 015.5 13h6a.498.498 0 01.481.636.5.5 0 01-.481.364h-6a.498.498 0 01-.458-.7.502.502 0 01.263-.26z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M13.5 1a.5.5 0 00-1 0v1h-2V1a.5.5 0 00-1 0v1h-2V1a.5.5 0 00-1 0v1h-3A1.5 1.5 0 002 3.5v13A1.5 1.5 0 003.5 18h13a1.5 1.5 0 001.5-1.5v-13A1.5 1.5 0 0016.5 2h-3V1zm-4 2h-2v1a.5.5 0 01-1 0V3h-3a.5.5 0 00-.5.5v13a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-13a.5.5 0 00-.5-.5h-3v1a.5.5 0 01-1 0V3h-2v1a.5.5 0 01-1 0V3z"
            clipRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  }
);

NotesIcon.displayName = 'NotesIcon';
export {NotesIcon};
