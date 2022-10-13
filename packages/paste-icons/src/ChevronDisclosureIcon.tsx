/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';

import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface ChevronDisclosureIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ChevronDisclosureIcon = React.forwardRef<HTMLElement, ChevronDisclosureIconProps>(
  ({as, display, element = 'ICON', size, color, title, decorative}, ref) => {
    const titleId = `ChevronDisclosureIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[ChevronDisclosureIcon]: Missing a title for non-decorative icon.');
    }

    return (
      <IconWrapper as={as} display={display} element={element} size={size} color={color} ref={ref}>
        <svg
          role="img"
          aria-hidden={decorative}
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 24 24"
          aria-labelledby={titleId}
        >
          {title ? <title id={titleId}>{title}</title> : null}
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M16.258 14.882l3.67-4.371a.305.305 0 00-.052-.442.34.34 0 00-.206-.069h-7.34c-.182 0-.33.14-.33.314 0 .072.026.141.072.197l3.67 4.371a.341.341 0 00.516 0z"
          />
        </svg>
      </IconWrapper>
    );
  }
);

ChevronDisclosureIcon.displayName = 'ChevronDisclosureIcon';
export {ChevronDisclosureIcon};
