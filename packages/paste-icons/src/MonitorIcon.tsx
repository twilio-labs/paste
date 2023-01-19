/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';

import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface MonitorIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const MonitorIcon = React.forwardRef<HTMLElement, MonitorIconProps>(
  ({as, display, element = 'ICON', size, color, title, decorative}, ref) => {
    const titleId = `MonitorIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[MonitorIcon]: Missing a title for non-decorative icon.');
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
            d="M10.5 14.417h6.333c.645 0 1.167-.523 1.167-1.167V4.583c0-.644-.522-1.166-1.167-1.166H3.167C2.522 3.417 2 3.939 2 4.583v8.667c0 .644.522 1.167 1.167 1.167H9.5v1.5H7a.5.5 0 100 1h6a.5.5 0 000-1h-2.5v-1.5zm-7.333-10A.167.167 0 003 4.583v8.667c0 .092.075.167.167.167h13.666A.167.167 0 0017 13.25V4.583a.167.167 0 00-.167-.166H3.167z"
            clipRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  }
);

MonitorIcon.displayName = 'MonitorIcon';
export {MonitorIcon};
