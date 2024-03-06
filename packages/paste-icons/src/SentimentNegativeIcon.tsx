/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';

import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface SentimentNegativeIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const SentimentNegativeIcon = React.forwardRef<HTMLElement, SentimentNegativeIconProps>(
  ({as, display, element = 'ICON', size, color, title, decorative}, ref) => {
    const titleId = `SentimentNegativeIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[SentimentNegativeIcon]: Missing a title for non-decorative icon.');
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
            d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm8-7a7 7 0 100 14 7 7 0 000-14zM7.461 7.135a.788.788 0 100 1.577.788.788 0 000-1.577zm5.077 0a.788.788 0 100 1.577.788.788 0 000-1.577zM7 13.339a3.498 3.498 0 013-1.696c1.273 0 2.387.679 3 1.696a.5.5 0 00.857-.516A4.498 4.498 0 0010 10.643c-1.638 0-3.07.875-3.857 2.18A.5.5 0 007 13.34z"
          />
        </svg>
      </IconWrapper>
    );
  }
);

SentimentNegativeIcon.displayName = 'SentimentNegativeIcon';
export {SentimentNegativeIcon};
