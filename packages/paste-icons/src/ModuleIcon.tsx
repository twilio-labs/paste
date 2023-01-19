/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';

import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface ModuleIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ModuleIcon = React.forwardRef<HTMLElement, ModuleIconProps>(
  ({as, display, element = 'ICON', size, color, title, decorative}, ref) => {
    const titleId = `ModuleIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[ModuleIcon]: Missing a title for non-decorative icon.');
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
            d="M16.982 4.556A1.676 1.676 0 0118 6.13v7.742a1.676 1.676 0 01-1.014 1.572l-.015.007-6.066 2.379a2.47 2.47 0 01-1.807 0l-6.066-2.38-.014-.005A1.674 1.674 0 012 13.87V6.129a1.675 1.675 0 011.014-1.572l.197.459-.182-.465 6.065-2.379a2.46 2.46 0 011.809 0l6.066 2.379.013.005zm-7.52-1.454a1.457 1.457 0 011.073 0h.002l5.592 2.193-6.13 2.403-6.13-2.403 5.592-2.192h.001zm1.038 13.81l.04-.014 6.058-2.376a.675.675 0 00.402-.634V6.113c0-.028 0-.056-.003-.084L10.5 8.576v8.337zm-1-8.336v8.336a1.638 1.638 0 01-.037-.014l-6.059-2.376A.676.676 0 013 13.887V6.112c0-.028 0-.055.003-.083L9.5 8.576z"
            clipRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  }
);

ModuleIcon.displayName = 'ModuleIcon';
export {ModuleIcon};
