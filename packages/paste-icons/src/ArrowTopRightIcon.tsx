/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';

import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface ArrowTopRightIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ArrowTopRightIcon = React.forwardRef<HTMLElement, ArrowTopRightIconProps>(
  ({as, display, element = 'ICON', size, color, title, decorative}, ref) => {
    const titleId = `ArrowTopRightIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[ArrowTopRightIcon]: Missing a title for non-decorative icon.');
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
            d="M4.146 14.98a.5.5 0 10.708.707l9.753-9.753v8.793a.5.5 0 101 0v-10a.497.497 0 00-.5-.5h-10a.5.5 0 000 1H13.9L4.146 14.98z"
          />
        </svg>
      </IconWrapper>
    );
  }
);

ArrowTopRightIcon.displayName = 'ArrowTopRightIcon';
export {ArrowTopRightIcon};
