/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import { useUID } from '@twilio-paste/uid-library';

import { IconWrapper } from './helpers/IconWrapper';
import type { IconWrapperProps } from './helpers/IconWrapper';

export interface DragVerticalIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const DragVerticalIcon = React.forwardRef<HTMLElement, DragVerticalIconProps>(
  ({ as, display, element = 'ICON', size, color, title, decorative }, ref) => {
    const titleId = `DragVerticalIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[DragVerticalIcon]: Missing a title for non-decorative icon.');
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
          aria-labelledby={titleId}
        >
          {title ? <title id={titleId}>{title}</title> : null}
          <path fill="currentColor" d="M4 7.999a.5.5 0 100 1h12a.5.5 0 000-1H4zm0 3a.5.5 0 100 1h12a.5.5 0 000-1H4z" />
        </svg>
      </IconWrapper>
    );
  },
);

DragVerticalIcon.displayName = 'DragVerticalIcon';
export { DragVerticalIcon };
