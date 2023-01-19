/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';

import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface SlashIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const SlashIcon = React.forwardRef<HTMLElement, SlashIconProps>(
  ({as, display, element = 'ICON', size, color, title, decorative}, ref) => {
    const titleId = `SlashIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[SlashIcon]: Missing a title for non-decorative icon.');
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
            d="M13.686 2.046a.5.5 0 01.243.664l-6.95 15a.5.5 0 11-.908-.42l6.95-15a.5.5 0 01.665-.244z"
            clipRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  }
);

SlashIcon.displayName = 'SlashIcon';
export {SlashIcon};
