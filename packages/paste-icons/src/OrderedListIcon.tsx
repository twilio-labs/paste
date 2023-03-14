/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';

import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface OrderedListIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const OrderedListIcon = React.forwardRef<HTMLElement, OrderedListIconProps>(
  ({as, display, element = 'ICON', size, color, title, decorative}, ref) => {
    const titleId = `OrderedListIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[OrderedListIcon]: Missing a title for non-decorative icon.');
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
            d="M5.625 4.63a.625.625 0 00-.994-.505l-1.37 1a.625.625 0 00.737 1.01l.377-.275v2.52a.625.625 0 101.25 0V4.63zm1.749.62c0-.345.28-.625.625-.625h8.376a.625.625 0 110 1.25H7.999a.625.625 0 01-.625-.625zm0 4.75c0-.345.28-.625.625-.625h8.376a.625.625 0 110 1.25H7.999A.625.625 0 017.374 10zm.625 4.125a.625.625 0 100 1.25h8.376a.625.625 0 100-1.25H7.999zm-3.331-1.87a.398.398 0 00-.285.124.463.463 0 00-.128.322.625.625 0 11-1.25 0c0-.444.17-.873.48-1.192a1.643 1.643 0 012.366 0c.31.32.48.748.48 1.192 0 .231-.026.452-.117.682a2.427 2.427 0 01-.36.595c-.12.156-.416.467-.718.777h.744a.625.625 0 110 1.25H3.63a.625.625 0 01-.439-1.07l.063-.062a91.194 91.194 0 00.698-.697c.415-.419.812-.831.915-.964a1.25 1.25 0 00.184-.286.575.575 0 00.03-.225.463.463 0 00-.127-.322.398.398 0 00-.286-.124z"
          />
        </svg>
      </IconWrapper>
    );
  }
);

OrderedListIcon.displayName = 'OrderedListIcon';
export {OrderedListIcon};
