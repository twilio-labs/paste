/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import { useUID } from '@twilio-paste/uid-library';

import { IconWrapper } from './helpers/IconWrapper';
import type { IconWrapperProps } from './helpers/IconWrapper';

export interface TourIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const TourIcon = React.forwardRef<HTMLElement, TourIconProps>(
  ({ as, display, element = 'ICON', size, color, title, decorative }, ref) => {
    const titleId = `TourIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[TourIcon]: Missing a title for non-decorative icon.');
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
            d="M12.368 3.004c-.11.01-.22.032-.32.064-.024.007-1.022.405-2.218.883-1.197.478-2.195.875-2.218.88a.583.583 0 01-.23 0 254.59 254.59 0 01-2.014-.8 519.355 519.355 0 00-2.026-.81.957.957 0 00-.348-.059.982.982 0 00-.889.555.99.99 0 00-.088.246l-.014.061L2 8.92c-.002 3.605 0 4.916.005 4.97a1.496 1.496 0 00.835 1.203c.076.037 4.137 1.662 4.21 1.685.276.087.584.09.866.008.046-.013.926-.361 2.252-.892a285.17 285.17 0 012.216-.88.593.593 0 01.236.002c.025.007.814.32 1.753.695 2.276.909 2.306.92 2.38.94a.883.883 0 00.284.027.954.954 0 00.52-.168c.088-.058.211-.18.268-.265a1.04 1.04 0 00.167-.442c.005-.035.008-1.627.009-5.89 0-3.215 0-5.412-.002-4.884a27.05 27.05 0 01-.01.906 1.505 1.505 0 00-.816-1.175c-.1-.05-4.149-1.67-4.245-1.698a1.61 1.61 0 00-.242-.052 2.054 2.054 0 00-.32-.006zM2.002 8.965c0 2.693.001 3.793.002 2.446a4488.935 4488.935 0 00-.002-2.446zM3 8.989l.002 4.827.014.051a.504.504 0 00.267.326c.027.013 3.299 1.324 3.685 1.477l.03.012-.001-4.96-.002-4.962-1.974-.79-1.998-.799-.025-.01L3 8.99zm6.999-4.028l-1.995.798v9.923l.02-.008 1.997-.799 1.976-.79V9.123c0-2.728 0-4.96-.002-4.96l-1.996.798zM13 9.125c0 3.177.002 4.963.006 4.963.003 0 .9.357 1.994.794 1.093.436 1.99.793 1.993.793.005 0 .006-1.59.005-4.824l-.001-4.824-.015-.05a.513.513 0 00-.25-.316 691.202 691.202 0 00-3.702-1.487L13 4.162v4.963z"
            clipRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  },
);

TourIcon.displayName = 'TourIcon';
export { TourIcon };
