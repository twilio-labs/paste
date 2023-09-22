/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import { useUID } from '@twilio-paste/uid-library';

import { IconWrapper } from './helpers/IconWrapper';
import type { IconWrapperProps } from './helpers/IconWrapper';

export interface SentIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const SentIcon = React.forwardRef<HTMLElement, SentIconProps>(
  ({ as, display, element = 'ICON', size, color, title, decorative }, ref) => {
    const titleId = `SentIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[SentIcon]: Missing a title for non-decorative icon.');
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
            d="M13.328 2.188a.5.5 0 01.703-.078l2.633 2.106a.518.518 0 01.063.06.498.498 0 01-.063.727l-2.633 2.106a.5.5 0 01-.625-.78l1.524-1.22h-1.21A3.719 3.719 0 0010 8.83v1.054a.5.5 0 11-1 0V8.828a4.719 4.719 0 014.719-4.719h1.211L13.406 2.89a.5.5 0 01-.078-.702z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.742 11a1.555 1.555 0 00-1.554 1.555v3.164a1.555 1.555 0 001.554 1.554h12.513c.414 0 .806-.165 1.096-.455a1.56 1.56 0 00.462-1.1v-3.163c0-.42-.176-.813-.462-1.1A1.547 1.547 0 0016.255 11h-2.55a.5.5 0 00-.435.252 3.683 3.683 0 01-6.4 0A.5.5 0 006.438 11H3.742zm-.392 1.162A.554.554 0 013.742 12h2.415a4.685 4.685 0 007.827 0h2.271c.146 0 .284.057.389.162a.56.56 0 01.169.393v3.164a.56.56 0 01-.17.392.547.547 0 01-.388.162H3.742a.555.555 0 01-.554-.554v-3.164c0-.147.058-.288.162-.393z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

SentIcon.displayName = 'SentIcon';
export { SentIcon };
