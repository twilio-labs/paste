/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';

import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface SupportIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const SupportIcon = React.forwardRef<HTMLElement, SupportIconProps>(
  ({as, display, element = 'ICON', size, color, title, decorative}, ref) => {
    const titleId = `SupportIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[SupportIcon]: Missing a title for non-decorative icon.');
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
            d="M1.4 10a8.6 8.6 0 1117.2 0 8.6 8.6 0 01-17.2 0zM10 2.6a7.4 7.4 0 100 14.8 7.4 7.4 0 000-14.8zm.23 3.713a2.01 2.01 0 00-2.239 2v.6l-1.2.002v-.6a3.21 3.21 0 113.903 3.13l-.013.002a.1.1 0 00-.081.096v.957H9.4v-.97a1.301 1.301 0 011.04-1.258 2.01 2.01 0 00-.21-3.959zm-1.003 8.139a.774.774 0 111.548 0 .774.774 0 01-1.548 0z"
            clipRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  }
);

SupportIcon.displayName = 'SupportIcon';
export {SupportIcon};
