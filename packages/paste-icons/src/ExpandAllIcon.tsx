/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';

import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface ExpandAllIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ExpandAllIcon = React.forwardRef<HTMLElement, ExpandAllIconProps>(
  ({as, display, element = 'ICON', size, color, title, decorative}, ref) => {
    const titleId = `ExpandAllIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[ExpandAllIcon]: Missing a title for non-decorative icon.');
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
            d="M10.613 4.21a1 1 0 00-1.32.083l-3 3-.083.094a1 1 0 00.083 1.32l.094.083a1 1 0 001.32-.083L10 6.415l2.293 2.292.094.083a1 1 0 001.32-1.497l-3-3-.094-.083zm-3 7a1 1 0 00-1.32 1.497l3 3 .094.083a1 1 0 001.32-.083l3-3 .083-.094a1 1 0 00-.083-1.32l-.094-.083a1 1 0 00-1.32.083L10 13.585l-2.293-2.292-.094-.083z"
            clipRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  }
);

ExpandAllIcon.displayName = 'ExpandAllIcon';
export {ExpandAllIcon};
