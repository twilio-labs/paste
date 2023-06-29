/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';

import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface ProductAlarmsIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductAlarmsIcon = React.forwardRef<HTMLElement, ProductAlarmsIconProps>(
  ({as, display, element = 'ICON', size, color, title, decorative}, ref) => {
    const titleId = `ProductAlarmsIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[ProductAlarmsIcon]: Missing a title for non-decorative icon.');
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
            d="M6.96 4.61C7.778 3.7 8.874 3.202 10 3.202c1.128 0 2.223.498 3.042 1.408.82.913 1.29 2.163 1.29 3.478v5.54H5.67v-5.54c0-1.315.47-2.565 1.29-3.478zm8.573 3.478v5.54h1.409v1.2H3.06v-1.2h1.409v-5.54c0-1.594.569-3.135 1.598-4.28C7.1 2.661 8.512 2.002 10.001 2.002c1.489 0 2.902.659 3.933 1.806 1.03 1.145 1.599 2.686 1.599 4.28zm-7.717 8.71v1.2h4.37v-1.2h-4.37z"
            clipRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  }
);

ProductAlarmsIcon.displayName = 'ProductAlarmsIcon';
export {ProductAlarmsIcon};
