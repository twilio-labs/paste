/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import { useUID } from '@twilio-paste/uid-library';

import { IconWrapper } from './helpers/IconWrapper';
import type { IconWrapperProps } from './helpers/IconWrapper';

export interface IndentIncreaseIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const IndentIncreaseIcon = React.forwardRef<HTMLElement, IndentIncreaseIconProps>(
  ({ as, display, element = 'ICON', size, color, title, decorative }, ref) => {
    const titleId = `IndentIncreaseIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[IndentIncreaseIcon]: Missing a title for non-decorative icon.');
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
            d="M2 5.5c0-.276.21-.5.47-.5h15.06c.26 0 .47.224.47.5s-.21.5-.47.5H2.47C2.21 6 2 5.776 2 5.5zM10.941 8c-.26 0-.47.224-.47.5s.21.5.47.5h6.588c.26 0 .471-.224.471-.5s-.21-.5-.47-.5h-6.59zm-.471 3.5c0-.276.211-.5.471-.5h6.588c.26 0 .471.224.471.5s-.21.5-.47.5h-6.59c-.26 0-.47-.224-.47-.5zM2 14.5c0-.276.21-.5.47-.5h15.06c.26 0 .47.224.47.5s-.21.5-.47.5H2.47c-.26 0-.47-.224-.47-.5zm3.161-6.339a.55.55 0 01.778 0l1.65 1.65.046.052a.55.55 0 01-.046.726l-1.65 1.65-.052.046a.55.55 0 01-.726-.046l-.046-.052a.55.55 0 01.046-.726l1.26-1.261-1.26-1.261-.046-.052a.55.55 0 01.046-.726z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

IndentIncreaseIcon.displayName = 'IndentIncreaseIcon';
export { IndentIncreaseIcon };
