/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';

import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface FileImageIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const FileImageIcon = React.forwardRef<HTMLElement, FileImageIconProps>(
  ({as, display, element = 'ICON', size, color, title, decorative}, ref) => {
    const titleId = `FileImageIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[FileImageIcon]: Missing a title for non-decorative icon.');
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
          <path fill="currentColor" d="M6.062 6.5H6.06a.813.813 0 10.002 0z" />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M11.747 8.86a1.124 1.124 0 00-.932.482v.002L9.457 11.28l-.614-.491a1.125 1.125 0 00-1.638.254l-2.122 3.18A.5.5 0 005.5 15h9.982a.5.5 0 00.416-.776L12.673 9.36a1.124 1.124 0 00-.926-.5zm-.066 1.014a.124.124 0 01.16.04L14.55 14H6.434l1.603-2.402a.127.127 0 01.084-.054.124.124 0 01.098.026l1.03.824a.5.5 0 00.722-.104l1.663-2.375v-.002a.125.125 0 01.046-.04z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M3.5 2A1.5 1.5 0 002 3.5v13A1.5 1.5 0 003.5 18h13a1.5 1.5 0 001.5-1.5V6.621a1.5 1.5 0 00-.44-1.06l-3.12-3.122A1.5 1.5 0 0013.378 2H3.5zm0 15h13a.5.5 0 00.5-.5V6.621a.5.5 0 00-.146-.353l-3.122-3.122A.5.5 0 0013.38 3H3.5a.5.5 0 00-.5.5v13a.5.5 0 00.5.5z"
            clipRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  }
);

FileImageIcon.displayName = 'FileImageIcon';
export {FileImageIcon};
