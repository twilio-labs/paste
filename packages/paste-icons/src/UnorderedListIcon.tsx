/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';

import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface UnorderedListIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const UnorderedListIcon = React.forwardRef<HTMLElement, UnorderedListIconProps>(
  ({as, display, element = 'ICON', size, color, title, decorative}, ref) => {
    const titleId = `UnorderedListIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[UnorderedListIcon]: Missing a title for non-decorative icon.');
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
            d="M3 5.25a1.25 1.25 0 102.5 0 1.25 1.25 0 00-2.5 0zM3 10a1.25 1.25 0 102.5 0A1.25 1.25 0 003 10zm0 4.75a1.25 1.25 0 102.5 0 1.25 1.25 0 00-2.5 0z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M7.374 5.25c0-.345.28-.625.625-.625h8.376a.625.625 0 110 1.25H7.999a.625.625 0 01-.625-.625zm0 4.75c0-.345.28-.625.625-.625h8.376a.625.625 0 110 1.25H7.999A.625.625 0 017.374 10zm0 4.75c0-.345.28-.625.625-.625h8.376a.625.625 0 110 1.25H7.999a.625.625 0 01-.625-.625z"
            clipRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  }
);

UnorderedListIcon.displayName = 'UnorderedListIcon';
export {UnorderedListIcon};
