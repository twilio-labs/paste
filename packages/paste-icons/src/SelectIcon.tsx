/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';

import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface SelectIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const SelectIcon = React.forwardRef<HTMLElement, SelectIconProps>(
  ({as, display, element = 'ICON', size, color, title, decorative}, ref) => {
    const titleId = `SelectIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[SelectIcon]: Missing a title for non-decorative icon.');
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
            d="M3.44 3.437a1.5 1.5 0 011.06-.439.5.5 0 000-1 2.5 2.5 0 00-2.5 2.5.5.5 0 001 0c0-.398.159-.78.44-1.06zM3 13.498a.5.5 0 10-1 0 2.5 2.5 0 002.5 2.5.5.5 0 000-1 1.5 1.5 0 01-1.5-1.5zm10-11a.5.5 0 01.5-.5 2.5 2.5 0 012.5 2.5.5.5 0 11-1 0 1.5 1.5 0 00-1.5-1.5.5.5 0 01-.5-.5zm3 5a.5.5 0 10-1 0v3a.5.5 0 001 0v-3zm-13.5-.5a.5.5 0 01.5.5v3a.5.5 0 01-1 0v-3a.5.5 0 01.5-.5zm5-5a.5.5 0 100 1h3a.5.5 0 100-1h-3zm-.5 13.5a.5.5 0 01.5-.5h3a.5.5 0 110 1h-3a.5.5 0 01-.5-.5z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M12.019 11.373a.5.5 0 00-.644.644l2.121 5.657a.5.5 0 00.928.021l.982-2.29 2.292-.983a.5.5 0 00-.022-.928l-5.657-2.12zm1.977 4.784l-1.298-3.461 3.461 1.298-1.33.57a.5.5 0 00-.263.262l-.57 1.33z"
            clipRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  }
);

SelectIcon.displayName = 'SelectIcon';
export {SelectIcon};
