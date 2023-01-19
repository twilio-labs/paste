/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';

import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface RepeatIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const RepeatIcon = React.forwardRef<HTMLElement, RepeatIconProps>(
  ({as, display, element = 'ICON', size, color, title, decorative}, ref) => {
    const titleId = `RepeatIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[RepeatIcon]: Missing a title for non-decorative icon.');
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
            d="M6.095 5.377a5.501 5.501 0 018.483 4.622v.177l-.992-.992a.5.5 0 00-.708.707l1.822 1.822a.499.499 0 00.757-.001l1.82-1.821a.5.5 0 10-.706-.707l-.993.992V10a6.501 6.501 0 10-1.018 3.495.5.5 0 00-.844-.537 5.501 5.501 0 11-7.62-7.58z"
          />
        </svg>
      </IconWrapper>
    );
  }
);

RepeatIcon.displayName = 'RepeatIcon';
export {RepeatIcon};
