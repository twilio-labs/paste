import { useUID } from '@twilio-paste/uid-library';
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';

import { IconWrapper } from './helpers/IconWrapper';
import type { IconWrapperProps } from './helpers/IconWrapper';

export interface MinusIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const MinusIcon = React.forwardRef<HTMLElement, MinusIconProps>(
  ({ as, display, element = 'ICON', size, color, title, decorative }, ref) => {
    const titleId = `MinusIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[MinusIcon]: Missing a title for non-decorative icon.');
    }

    return (
      <IconWrapper as={as} display={display} element={element} size={size} color={color} ref={ref}>
        <svg
          role="img"
          aria-hidden={decorative}
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 20 20"
          aria-labelledby={titleId}
        >
          {title ? <title id={titleId}>{title}</title> : null}
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M14.167 9.5c.46 0 .833.448.833 1 0 .513-.322.936-.736.993l-.097.007H5.833c-.46 0-.833-.448-.833-1 0-.513.322-.936.736-.993l.097-.007h8.334z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

MinusIcon.displayName = 'MinusIcon';
export { MinusIcon };
