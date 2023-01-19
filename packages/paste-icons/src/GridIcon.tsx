/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';

import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface GridIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const GridIcon = React.forwardRef<HTMLElement, GridIconProps>(
  ({as, display, element = 'ICON', size, color, title, decorative}, ref) => {
    const titleId = `GridIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[GridIcon]: Missing a title for non-decorative icon.');
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
            d="M3.5 1.998a1.5 1.5 0 00-1.5 1.5v4a1.5 1.5 0 001.5 1.5h4a1.5 1.5 0 001.5-1.5v-4a1.5 1.5 0 00-1.5-1.5h-4zm-.5 1.5a.5.5 0 01.5-.5h4a.5.5 0 01.5.5v4a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5v-4zm.5 7.5a1.5 1.5 0 00-1.5 1.5v4a1.5 1.5 0 001.5 1.5h4a1.5 1.5 0 001.5-1.5v-4a1.5 1.5 0 00-1.5-1.5h-4zm-.5 1.5a.5.5 0 01.5-.5h4a.5.5 0 01.5.5v4a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5v-4zm8-9a1.5 1.5 0 011.5-1.5h4a1.5 1.5 0 011.5 1.5v4a1.5 1.5 0 01-1.5 1.5h-4a1.5 1.5 0 01-1.5-1.5v-4zm1.5-.5a.5.5 0 00-.5.5v4a.5.5 0 00.5.5h4a.5.5 0 00.5-.5v-4a.5.5 0 00-.5-.5h-4zm0 8a1.5 1.5 0 00-1.5 1.5v4a1.5 1.5 0 001.5 1.5h4a1.5 1.5 0 001.5-1.5v-4a1.5 1.5 0 00-1.5-1.5h-4zm-.5 1.5a.5.5 0 01.5-.5h4a.5.5 0 01.5.5v4a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5v-4z"
            clipRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  }
);

GridIcon.displayName = 'GridIcon';
export {GridIcon};
