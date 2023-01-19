/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';

import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface HeartIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const HeartIcon = React.forwardRef<HTMLElement, HeartIconProps>(
  ({as, display, element = 'ICON', size, color, title, decorative}, ref) => {
    const titleId = `HeartIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[HeartIcon]: Missing a title for non-decorative icon.');
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
            d="M6.138 2.942a4.284 4.284 0 00-3.073 7.106c.049.055 6.49 6.778 6.577 6.864a.647.647 0 00.271.17.44.44 0 00.18 0 .584.584 0 00.253-.158c.073-.071 6.523-6.803 6.58-6.866a4.317 4.317 0 00.93-1.735 4.34 4.34 0 00.135-.833.308.308 0 01.01-.085 1.68 1.68 0 00.005-.193c0-.109-.002-.194-.005-.19-.003.006-.007-.024-.01-.07a4.278 4.278 0 00-.67-2.044 4.283 4.283 0 00-6.185-1.104c-.196.148-.271.217-.718.663L10 4.883l-.411-.41c-.448-.446-.53-.522-.725-.669a4.277 4.277 0 00-2.726-.862zm-.032 1.001a3.83 3.83 0 00-.3.032 3.242 3.242 0 00-1.713.803 3.277 3.277 0 00-.105 4.79l3.074 3.206c1.613 1.683 2.935 3.06 2.938 3.06.005 0 6.11-6.368 6.18-6.446a3.285 3.285 0 00.782-2.652 3.272 3.272 0 00-1.055-1.958 3.25 3.25 0 00-1.691-.8 3.315 3.315 0 00-.91-.013 3.307 3.307 0 00-1.543.62c-.172.129-.253.205-.86.81-.368.367-.622.614-.647.632a.415.415 0 01-.256.09.415.415 0 01-.256-.09 22.49 22.49 0 01-.646-.632c-.608-.605-.689-.681-.861-.81a3.309 3.309 0 00-1.738-.64 4.854 4.854 0 00-.393-.002zM2.003 7.22c0 .11 0 .155.002.101a6.131 6.131 0 000-.198c-.001-.056-.002-.012-.002.097z"
            clipRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  }
);

HeartIcon.displayName = 'HeartIcon';
export {HeartIcon};
