/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';

import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface CirclesIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const CirclesIcon = React.forwardRef<HTMLElement, CirclesIconProps>(
  ({as, display, element = 'ICON', size, color, title, decorative}, ref) => {
    const titleId = `CirclesIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[CirclesIcon]: Missing a title for non-decorative icon.');
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
            d="M4.343 4.343a8 8 0 1111.314 11.314A8 8 0 014.343 4.343zM10 3a7 7 0 100 14 7 7 0 000-14z"
            clipRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  }
);

CirclesIcon.displayName = 'CirclesIcon';
export {CirclesIcon};
