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
            d="M5.555 3.348A8 8 0 0110 2a8.016 8.016 0 018 8 8.003 8.003 0 01-4.938 7.391A8 8 0 015.555 3.348zM10 3a7 7 0 107 7 7.014 7.014 0 00-7-7zm1.685 2.81a4.447 4.447 0 00-1.68-.31L10 5l.003.5a4.5 4.5 0 00-4.47 4.5v.005a4.44 4.44 0 00.31 1.677l5.842-5.872zM9.995 4.5a5.447 5.447 0 012.79.734.5.5 0 01.103.785l-6.834 6.867a.5.5 0 01-.787-.102 5.447 5.447 0 01-.734-2.787A5.5 5.5 0 019.996 4.5zm4.367 2.47a.5.5 0 01.367.24A5.45 5.45 0 0115.5 10a5.501 5.501 0 01-5.5 5.5 5.448 5.448 0 01-2.79-.77.5.5 0 01-.097-.784l6.833-6.833a.5.5 0 01.416-.143zm-6.053 7.195c.535.22 1.109.335 1.691.335a4.5 4.5 0 004.5-4.5c0-.582-.115-1.156-.335-1.69l-5.856 5.855z"
            clipRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  }
);

DisableIcon.displayName = 'DisableIcon';
export {DisableIcon};
