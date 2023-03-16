/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';

import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface AddListIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const AddListIcon = React.forwardRef<HTMLElement, AddListIconProps>(
  ({as, display, element = 'ICON', size, color, title, decorative}, ref) => {
    const titleId = `AddListIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[AddListIcon]: Missing a title for non-decorative icon.');
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
            d="M2.75 2.665a.75.75 0 110 1.5.75.75 0 010-1.5zm2.75.25a.5.5 0 000 1h10a.5.5 0 000-1h-10zm8.5 8.5a.5.5 0 00-1 0v1.5h-1.5a.5.5 0 000 1H13v1.5a.5.5 0 101 0v-1.5h1.5a.5.5 0 100-1H14v-1.5z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M13.5 8.915a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm-3.5 4.5a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M5 7.415a.5.5 0 01.5-.5h10a.5.5 0 010 1h-10a.5.5 0 01-.5-.5zm.5 3.5a.5.5 0 000 1h2a.5.5 0 100-1h-2zm-2.75-4.25a.75.75 0 110 1.5.75.75 0 010-1.5zM2 11.415a.75.75 0 101.5 0 .75.75 0 00-1.5 0z"
          />
        </svg>
      </IconWrapper>
    );
  }
);

AddListIcon.displayName = 'AddListIcon';
export {AddListIcon};
