/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';

import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface ChevronDisclosureCollapsedIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ChevronDisclosureCollapsedIcon = React.forwardRef<HTMLElement, ChevronDisclosureCollapsedIconProps>(
  ({as, display, element = 'ICON', size, color, title, decorative}, ref) => {
    const titleId = `ChevronDisclosureCollapsedIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[ChevronDisclosureCollapsedIcon]: Missing a title for non-decorative icon.');
    }

    // eslint-disable-next-line no-console
    console.error(
      '[ChevronDisclosureCollapsedIcon]: This icon is deprecated. Please use ChevronDisclosureIcon instead. This icon will be removed after the 2023.05.16 release.'
    );

    return (
      <IconWrapper as={as} display={display} element={element} size={size} color={color} ref={ref}>
        <svg
          role="img"
          aria-hidden={decorative}
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 20 20"
          aria-labelledby={titleId}
        >
          {title ? <title id={titleId}>{title}</title> : null}
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M12.382 9.742l-4.371-3.67a.305.305 0 00-.442.052.34.34 0 00-.069.206v7.34c0 .182.14.33.314.33.072 0 .141-.026.197-.072l4.371-3.67a.341.341 0 000-.516z"
          />
        </svg>
      </IconWrapper>
    );
  }
);

ChevronDisclosureCollapsedIcon.displayName = 'ChevronDisclosureCollapsedIcon';
export {ChevronDisclosureCollapsedIcon};
