/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import { useUID } from '@twilio-paste/uid-library';

import { IconWrapper } from './helpers/IconWrapper';
import type { IconWrapperProps } from './helpers/IconWrapper';

export interface TextFormatClearIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const TextFormatClearIcon = React.forwardRef<HTMLElement, TextFormatClearIconProps>(
  ({ as, display, element = 'ICON', size, color, title, decorative }, ref) => {
    const titleId = `TextFormatClearIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[TextFormatClearIcon]: Missing a title for non-decorative icon.');
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
            d="M9.931 7.76l1.28-2.505H8.64a.624.624 0 010-1.25h3.514a.62.62 0 01.16 0h4.062a.624.624 0 010 1.25h-3.763L11.042 8.33a.623.623 0 11-1.11-.57zm-1.006 4.715a.623.623 0 10-1.11-.57L6.188 15.09a.623.623 0 101.11.57l1.627-3.185zM3.836 4.131a.498.498 0 10-.674.738l11.979 11a.498.498 0 10.674-.738l-11.979-11z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

TextFormatClearIcon.displayName = 'TextFormatClearIcon';
export { TextFormatClearIcon };
