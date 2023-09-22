/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import { useUID } from '@twilio-paste/uid-library';

import { IconWrapper } from './helpers/IconWrapper';
import type { IconWrapperProps } from './helpers/IconWrapper';

export interface ClearIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ClearIcon = React.forwardRef<HTMLElement, ClearIconProps>(
  ({ as, display, element = 'ICON', size, color, title, decorative }, ref) => {
    const titleId = `ClearIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[ClearIcon]: Missing a title for non-decorative icon.');
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
          <path
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 16.5a6.5 6.5 0 100-13 6.5 6.5 0 000 13zm.897-6.5l1.917 1.917a.635.635 0 01-.897.897L10 10.897l-1.917 1.917a.635.635 0 01-.897-.897L9.103 10 7.186 8.083a.635.635 0 01.897-.897L10 9.103l1.917-1.917a.635.635 0 01.897.897L10.897 10z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

ClearIcon.displayName = 'ClearIcon';
export { ClearIcon };
