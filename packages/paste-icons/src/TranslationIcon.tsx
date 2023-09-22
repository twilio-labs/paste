import { useUID } from '@twilio-paste/uid-library';
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';

import { IconWrapper } from './helpers/IconWrapper';
import type { IconWrapperProps } from './helpers/IconWrapper';

export interface TranslationIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const TranslationIcon = React.forwardRef<HTMLElement, TranslationIconProps>(
  ({ as, display, element = 'ICON', size, color, title, decorative }, ref) => {
    const titleId = `TranslationIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[TranslationIcon]: Missing a title for non-decorative icon.');
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
            d="M4 4.5a.5.5 0 01.5-.5h6a.5.5 0 01.5.5v6a.5.5 0 01-.5.5h-6a.5.5 0 01-.5-.5v-6zM4.5 3A1.5 1.5 0 003 4.5v6A1.5 1.5 0 004.5 12h6a1.5 1.5 0 001.5-1.5v-6A1.5 1.5 0 0010.5 3h-6zm9 6a.5.5 0 000 1h3a.5.5 0 01.5.5v6a.5.5 0 01-.5.5h-6a.5.5 0 01-.5-.5v-3a.5.5 0 00-1 0v3a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5v-6A1.5 1.5 0 0016.5 9h-3zm-1.666 5v-1.167a1.667 1.667 0 113.333 0V15.5a.5.5 0 11-1 0v-1h-1.333v1a.5.5 0 11-1 0V14zm2.333-.5h-1.333v-.667a.667.667 0 111.333 0v.667zM8 5.5a.5.5 0 00-1 0V6H5.5a.5.5 0 000 1h2.246a6.32 6.32 0 01-.412.723 5.013 5.013 0 01-.171.24.497.497 0 00-.102.13C6.627 8.626 6.102 9 5.5 9a.5.5 0 000 1c.826 0 1.488-.401 1.992-.897a3.113 3.113 0 001.975.883.5.5 0 10.066-.998 2.113 2.113 0 01-1.4-.66l.033-.05A7.547 7.547 0 008.843 7H9.5a.5.5 0 000-1H8v-.5z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

TranslationIcon.displayName = 'TranslationIcon';
export { TranslationIcon };
