/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';

import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface SubscriptIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const SubscriptIcon = React.forwardRef<HTMLElement, SubscriptIconProps>(
  ({as, display, element = 'ICON', size, color, title, decorative}, ref) => {
    const titleId = `SubscriptIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[SubscriptIcon]: Missing a title for non-decorative icon.');
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
            d="M4.17 5.624a.5.5 0 01.706.047l3.47 3.965 3.47-3.965a.5.5 0 11.753.658L9.01 10.396l3.558 4.066a.5.5 0 01-.753.658l-3.47-3.965-3.47 3.965a.5.5 0 01-.752-.658l3.558-4.066-3.558-4.067a.5.5 0 01.047-.705zm11.662 7.708a1.135 1.135 0 011.937.803v.005a1.565 1.565 0 01-.582 1.238l-2.496 1.96a.5.5 0 00.309.893h3.5a.5.5 0 000-1h-2.054l1.36-1.069.005-.003a2.566 2.566 0 00.958-2.027 2.135 2.135 0 00-4.269.003v.326a.5.5 0 101 0v-.326c0-.301.12-.59.332-.803z"
          />
        </svg>
      </IconWrapper>
    );
  }
);

SubscriptIcon.displayName = 'SubscriptIcon';
export {SubscriptIcon};
