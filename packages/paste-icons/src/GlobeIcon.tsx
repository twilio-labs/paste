/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';

import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface GlobeIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const GlobeIcon = React.forwardRef<HTMLElement, GlobeIconProps>(
  ({as, display, element = 'ICON', size, color, title, decorative}, ref) => {
    const titleId = `GlobeIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[GlobeIcon]: Missing a title for non-decorative icon.');
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
            d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm6.903-6.915a7.053 7.053 0 012.194 0c.461.685.858 1.696 1.138 2.915h-4.47c.28-1.219.677-2.23 1.138-2.915zM6.741 6c.207-.966.486-1.838.826-2.566A7.02 7.02 0 004.255 6H6.74zM3.674 7h2.884a19.979 19.979 0 00-.218 2.5H3.018c.062-.89.291-1.733.656-2.5zM7.57 7h4.858c.127.78.207 1.622.23 2.5H7.34c.024-.878.104-1.72.23-2.5zm5.87 0c.122.796.197 1.637.219 2.5h3.322a6.959 6.959 0 00-.656-2.5h-2.884zm2.304-1a7.02 7.02 0 00-3.312-2.566c.34.728.62 1.6.826 2.566h2.486zM3.018 10.5h3.32c.02.866.093 1.707.213 2.5H3.674a6.959 6.959 0 01-.656-2.5zM4.255 14h2.477c.205.96.483 1.83.822 2.56a7.02 7.02 0 01-3.3-2.56zm7.989 0H7.756c.275 1.202.667 2.206 1.125 2.911a7.053 7.053 0 002.238 0c.458-.705.85-1.709 1.125-2.911zm-4.681-1h4.874c.125-.779.204-1.62.224-2.5H7.34c.02.88.099 1.721.224 2.5zm4.883 3.56c.339-.73.617-1.6.822-2.56h2.477a7.02 7.02 0 01-3.299 2.56zM13.45 13h2.877c.365-.767.594-1.61.656-2.5h-3.32a19.84 19.84 0 01-.213 2.5z"
            clipRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  }
);

GlobeIcon.displayName = 'GlobeIcon';
export {GlobeIcon};
