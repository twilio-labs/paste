/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';

import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface BriefcaseIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const BriefcaseIcon = React.forwardRef<HTMLElement, BriefcaseIconProps>(
  ({as, display, element = 'ICON', size, color, title, decorative}, ref) => {
    const titleId = `BriefcaseIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[BriefcaseIcon]: Missing a title for non-decorative icon.');
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
            d="M3.5 6.5A.5.5 0 003 7v9a.5.5 0 00.5.5h13a.5.5 0 00.5-.5V7a.5.5 0 00-.5-.5h-13zM2 7a1.5 1.5 0 011.5-1.5h13A1.5 1.5 0 0118 7v9a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 012 16V7z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M8.72 2.5a1.5 1.5 0 00-.876.283zm0 1a.5.5 0 00-.448.28V5.5h3.456V3.78a.5.5 0 00-.449-.28H8.721zm0-1h2.56a1.5 1.5 0 011.422 1.025.498.498 0 01.026.158V6a.5.5 0 01-.5.5H7.772a.5.5 0 01-.5-.5V3.683a.5.5 0 01.026-.158 1.5 1.5 0 01.546-.742"
            clipRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  }
);

BriefcaseIcon.displayName = 'BriefcaseIcon';
export {BriefcaseIcon};
