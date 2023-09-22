import { useUID } from '@twilio-paste/uid-library';
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';

import { IconWrapper } from './helpers/IconWrapper';
import type { IconWrapperProps } from './helpers/IconWrapper';

export interface RecordIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const RecordIcon = React.forwardRef<HTMLElement, RecordIconProps>(
  ({ as, display, element = 'ICON', size, color, title, decorative }, ref) => {
    const titleId = `RecordIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[RecordIcon]: Missing a title for non-decorative icon.');
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
          <path fill="currentColor" d="M3.5 10a6.5 6.5 0 1013 0 6.5 6.5 0 00-13 0z" />
        </svg>
      </IconWrapper>
    );
  },
);

RecordIcon.displayName = 'RecordIcon';
export { RecordIcon };
