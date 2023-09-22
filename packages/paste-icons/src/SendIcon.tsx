/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import { useUID } from '@twilio-paste/uid-library';

import { IconWrapper } from './helpers/IconWrapper';
import type { IconWrapperProps } from './helpers/IconWrapper';

export interface SendIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const SendIcon = React.forwardRef<HTMLElement, SendIconProps>(
  ({ as, display, element = 'ICON', size, color, title, decorative }, ref) => {
    const titleId = `SendIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[SendIcon]: Missing a title for non-decorative icon.');
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
            d="M16.999 10.032a.337.337 0 00-.044-.175.274.274 0 00-.123-.114L4.365 4.02a.244.244 0 00-.148-.014.266.266 0 00-.132.075.322.322 0 00-.076.147.355.355 0 00.004.172l1.19 4.46c.004.03.016.056.034.077a.124.124 0 00.067.041l7.054.857a.13.13 0 01.082.052.17.17 0 01.033.101.17.17 0 01-.033.101.13.13 0 01-.082.052l-7.042.87a.124.124 0 00-.067.041.157.157 0 00-.036.077l-1.189 4.46a.355.355 0 00-.008.17.324.324 0 00.072.15.26.26 0 00.13.083c.048.013.1.01.147-.01l12.482-5.644a.28.28 0 00.118-.125.342.342 0 00.034-.181z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

SendIcon.displayName = 'SendIcon';
export { SendIcon };
