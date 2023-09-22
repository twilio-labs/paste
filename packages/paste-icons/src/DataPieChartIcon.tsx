/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import { useUID } from '@twilio-paste/uid-library';

import { IconWrapper } from './helpers/IconWrapper';
import type { IconWrapperProps } from './helpers/IconWrapper';

export interface DataPieChartIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const DataPieChartIcon = React.forwardRef<HTMLElement, DataPieChartIconProps>(
  ({ as, display, element = 'ICON', size, color, title, decorative }, ref) => {
    const titleId = `DataPieChartIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[DataPieChartIcon]: Missing a title for non-decorative icon.');
    }

    return (
      <IconWrapper as={as} display={display} element={element} size={size} color={color} ref={ref}>
        <svg
          role="img"
          aria-hidden={decorative}
          width="100%"
          height="100%"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-labelledby={titleId}
        >
          {title ? <title id={titleId}>{title}</title> : null}
          <path
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.05 14.95a7 7 0 119.9-9.9 7 7 0 01-9.9 9.9zM15.98 9.5a6 6 0 00-5.48-5.48V9.5h5.48zM9.5 4.02a6 6 0 102.924 11.468l-2.858-5.24A.498.498 0 019.5 9.99V4.02zm1.342 6.48h5.137a6 6 0 01-2.677 4.51l-2.46-4.51z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

DataPieChartIcon.displayName = 'DataPieChartIcon';
export { DataPieChartIcon };
