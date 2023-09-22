/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import { useUID } from '@twilio-paste/uid-library';

import { IconWrapper } from './helpers/IconWrapper';
import type { IconWrapperProps } from './helpers/IconWrapper';

export interface TextHighlightIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const TextHighlightIcon = React.forwardRef<HTMLElement, TextHighlightIconProps>(
  ({ as, display, element = 'ICON', size, color, title, decorative }, ref) => {
    const titleId = `TextHighlightIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[TextHighlightIcon]: Missing a title for non-decorative icon.');
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
            d="M4.195 14.043l1.052-3.157a.498.498 0 01.161-.265l7.66-7.662a1.568 1.568 0 012.216 0l2.757 2.759a1.567 1.567 0 010 2.215l-7.685 7.688a.5.5 0 01-.195.12l-3.2 1.068a.5.5 0 01-.416-.046l-.991.992a.5.5 0 01-.354.146H2a.5.5 0 01-.354-.854l2.593-2.591a.5.5 0 01-.044-.413zM14.175 3.5a.567.567 0 00-.4.166l-7.333 7.336 3.56 3.56 7.332-7.336a.567.567 0 000-.801l-2.758-2.759a.567.567 0 00-.4-.166zm-9.24 11.674L3.207 16.9h1.786l.835-.834-.893-.893zm4.14-.124l-3.121-3.122-.713 2.138 1.696 1.696 2.138-.712z"
            clipRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  },
);

TextHighlightIcon.displayName = 'TextHighlightIcon';
export { TextHighlightIcon };
