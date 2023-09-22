import { useUID } from '@twilio-paste/uid-library';
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';

import { IconWrapper } from './helpers/IconWrapper';
import type { IconWrapperProps } from './helpers/IconWrapper';

export interface ThemeIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ThemeIcon = React.forwardRef<HTMLElement, ThemeIconProps>(
  ({ as, display, element = 'ICON', size, color, title, decorative }, ref) => {
    const titleId = `ThemeIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[ThemeIcon]: Missing a title for non-decorative icon.');
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
            d="M5.5 4a.5.5 0 00-.5.5v2a.5.5 0 00.5.5h2a.5.5 0 00.5-.5v-2a.5.5 0 00-.5-.5h-2zM6 6V5h1v1H6zm-.5 2a.5.5 0 00-.5.5v2a.5.5 0 00.5.5h2a.5.5 0 00.5-.5v-2a.5.5 0 00-.5-.5h-2zm.5 2V9h1v1H6zm-1 2.5a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5v-2zm1 .5v1h1v-1H6z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M3 3.5A1.5 1.5 0 014.5 2h4A1.5 1.5 0 0110 3.5v11.053l3.65-9.847a.154.154 0 00-.09-.198l-2.682-.994a.5.5 0 01.348-.938l2.68.994a1.156 1.156 0 01.682 1.484l-3.454 9.317 5.833-6.673a.159.159 0 00.023-.041l.001-.004a.87.87 0 00.005-.051l.002-.027a.413.413 0 00-.033-.09 111.33 111.33 0 01-1.607-1.426.5.5 0 01.669-.744c.547.492 1.448 1.299 1.564 1.39.206.162.3.381.345.514a1.428 1.428 0 01.058.243l.002.02.001.008v.004l-.497.05.5.012v.012l-.002.027c0 .021-.002.051-.005.085a1.268 1.268 0 01-.046.27 1.162 1.162 0 01-.213.39l-.008.01-7.85 8.98a.498.498 0 01-.184.132 1.498 1.498 0 01-1.192.589h-4a1.5 1.5 0 01-1.5-1.5V3.5zM4.5 3a.5.5 0 00-.5.5v13.05a.5.5 0 00.5.5h4a.5.5 0 00.5-.5V3.5a.5.5 0 00-.5-.5h-4z"
            clipRule="evenodd"
          />
          <path fill="currentColor" d="M17.5 7.545l.497-.05c.003.02.003.04.003.061l-.5-.011z" />
        </svg>
      </IconWrapper>
    );
  },
);

ThemeIcon.displayName = 'ThemeIcon';
export { ThemeIcon };
