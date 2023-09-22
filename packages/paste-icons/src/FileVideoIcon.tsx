import { useUID } from '@twilio-paste/uid-library';
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';

import { IconWrapper } from './helpers/IconWrapper';
import type { IconWrapperProps } from './helpers/IconWrapper';

export interface FileVideoIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const FileVideoIcon = React.forwardRef<HTMLElement, FileVideoIconProps>(
  ({ as, display, element = 'ICON', size, color, title, decorative }, ref) => {
    const titleId = `FileVideoIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[FileVideoIcon]: Missing a title for non-decorative icon.');
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
            d="M5 17H3.5a.5.5 0 01-.5-.5V15h2v2zm-2-5v2h2v-2H3zm3 1h8v4H6v-4zm9 2v2h1.5a.5.5 0 00.5-.5V15h-2zm2-1v-2h-2v2h2zM3 9v2h2V9H3zm3 3V7h8v5H6zm11-1V9h-2v2h2zM3 6v2h2V6H3zm14 2V6.621a.5.5 0 00-.146-.353L15 4.414V8h2zM5 5H3V3.5a.5.5 0 01.5-.5H5v2zm1 1h8V3.414l-.268-.268A.5.5 0 0013.38 3H6v3zm11.56-.44l-3.12-3.12A1.5 1.5 0 0013.378 2H3.5A1.5 1.5 0 002 3.5v13A1.5 1.5 0 003.5 18h13a1.5 1.5 0 001.5-1.5V6.621a1.5 1.5 0 00-.44-1.06z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

FileVideoIcon.displayName = 'FileVideoIcon';
export { FileVideoIcon };
