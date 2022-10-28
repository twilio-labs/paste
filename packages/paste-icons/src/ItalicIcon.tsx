/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';

import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface ItalicIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ItalicIcon = React.forwardRef<HTMLElement, ItalicIconProps>(
  ({as, display, element = 'ICON', size, color, title, decorative}, ref) => {
    const titleId = `ItalicIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[ItalicIcon]: Missing a title for non-decorative icon.');
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
          xmlns="http://www.w3.org/2000/svg"
          aria-labelledby={titleId}
        >
          {title ? <title id={titleId}>{title}</title> : null}
          <path
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.16 4.069a.625.625 0 01.271.84l-5.5 10.75a.625.625 0 01-1.112-.569l5.5-10.75a.625.625 0 01.84-.271z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 15.375c0-.345.28-.625.625-.625h5.75a.625.625 0 110 1.25h-5.75A.625.625 0 014 15.375zM9 4.625C9 4.28 9.28 4 9.625 4h5.75a.625.625 0 110 1.25h-5.75A.625.625 0 019 4.625z"
          />
        </svg>
      </IconWrapper>
    );
  }
);

ItalicIcon.displayName = 'ItalicIcon';
export {ItalicIcon};
