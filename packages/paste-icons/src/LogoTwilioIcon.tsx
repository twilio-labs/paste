/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import { useUID } from '@twilio-paste/uid-library';

import { IconWrapper } from './helpers/IconWrapper';
import type { IconWrapperProps } from './helpers/IconWrapper';

export interface LogoTwilioIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const LogoTwilioIcon = React.forwardRef<HTMLElement, LogoTwilioIconProps>(
  ({ as, display, element = 'ICON', size, color, title, decorative }, ref) => {
    const titleId = `LogoTwilioIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[LogoTwilioIcon]: Missing a title for non-decorative icon.');
    }

    return (
      <IconWrapper as={as} display={display} element={element} size={size} color={color} ref={ref}>
        <svg
          role="img"
          aria-hidden={decorative}
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 20 20"
          aria-labelledby={titleId}
        >
          {title ? <title id={titleId}>{title}</title> : null}
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10A10 10 0 0010 0zm0 17.333a7.333 7.333 0 110-14.666 7.333 7.333 0 010 14.666zm4.533-9.8a2.067 2.067 0 11-2.066-2.066 2.08 2.08 0 012.066 2.066zm0 4.934a2.067 2.067 0 11-2.066-2.067 2.08 2.08 0 012.066 2.067zm-4.933 0A2.067 2.067 0 117.533 10.4 2.08 2.08 0 019.6 12.467zm0-4.934a2.067 2.067 0 11-2.067-2.066A2.08 2.08 0 019.6 7.533z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

LogoTwilioIcon.displayName = 'LogoTwilioIcon';
export { LogoTwilioIcon };
