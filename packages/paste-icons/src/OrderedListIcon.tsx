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
            d="M5.595 4.6a.625.625 0 00-.993-.505l-1.37 1a.625.625 0 10.736 1.01l.377-.275V8.4a.625.625 0 101.25 0V4.6zM8.5 5a.5.5 0 000 1h8a.5.5 0 000-1h-8zM8 9.5a.5.5 0 01.5-.5h8a.5.5 0 010 1h-8a.5.5 0 01-.5-.5zm0 4a.5.5 0 01.5-.5h8a.5.5 0 010 1h-8a.5.5 0 01-.5-.5zm-3.362-2.4a.523.523 0 00-.375.162.588.588 0 00-.163.409.5.5 0 01-1 0c0-.412.158-.81.445-1.105a1.52 1.52 0 012.187 0c.286.295.445.693.445 1.105 0 .22-.026.425-.109.637-.08.202-.2.38-.342.563-.144.186-.55.607-.918.979H5.85a.5.5 0 110 1H3.6a.5.5 0 01-.35-.856l.062-.062a108.383 108.383 0 00.7-.699c.41-.415.815-.834.924-.974a1.36 1.36 0 00.202-.317.696.696 0 00.039-.271.589.589 0 00-.163-.41.523.523 0 00-.376-.161z"
          />
        </svg>
      </IconWrapper>
    );
  }
);

OrderedListIcon.displayName = 'OrderedListIcon';
export {OrderedListIcon};
