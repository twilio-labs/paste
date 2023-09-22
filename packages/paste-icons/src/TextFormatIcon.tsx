/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import { useUID } from '@twilio-paste/uid-library';

import { IconWrapper } from './helpers/IconWrapper';
import type { IconWrapperProps } from './helpers/IconWrapper';

export interface TextFormatIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const TextFormatIcon = React.forwardRef<HTMLElement, TextFormatIconProps>(
  ({ as, display, element = 'ICON', size, color, title, decorative }, ref) => {
    const titleId = `TextFormatIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[TextFormatIcon]: Missing a title for non-decorative icon.');
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
            d="M7.522 11.625h4.956l1.193 2.938a.625.625 0 001.158-.47l-3.811-9.384a1.118 1.118 0 00-.393-.504 1.08 1.08 0 00-1.25 0c-.18.127-.314.304-.393.504l-3.811 9.384a.625.625 0 101.158.47l1.193-2.938zm.508-1.25L10 5.525l1.97 4.85H8.03z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M4 17c0-.345.28-.625.625-.625h10.75a.625.625 0 110 1.25H4.625A.625.625 0 014 17z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

TextFormatIcon.displayName = 'TextFormatIcon';
export { TextFormatIcon };
