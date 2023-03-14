/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';

import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface DisableIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const DisableIcon = React.forwardRef<HTMLElement, DisableIconProps>(
  ({as, display, element = 'ICON', size, color, title, decorative}, ref) => {
    const titleId = `DisableIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[DisableIcon]: Missing a title for non-decorative icon.');
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
            d="M10 4.5a5.5 5.5 0 00-4.227 9.02l7.747-7.747A5.478 5.478 0 0010 4.5zm4.227 1.98L6.48 14.227a5.5 5.5 0 007.746-7.746zM3.5 10a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"
            clipRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  }
);

DisableIcon.displayName = 'DisableIcon';
export {DisableIcon};
