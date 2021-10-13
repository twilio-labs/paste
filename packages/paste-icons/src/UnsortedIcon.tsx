/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';
import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface UnsortedIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const UnsortedIcon: React.FC<UnsortedIconProps> = ({as, display, element = 'ICON', size, color, title, decorative}) => {
  const titleId = `UnsortedIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error('[UnsortedIcon]: Missing a title for non-decorative icon.');
  }

  return (
    <IconWrapper as={as} display={display} element={element} size={size} color={color}>
      <svg
        role="img"
        aria-hidden={decorative}
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
          d="M4.145 8.839a.598.598 0 01-.057-.704l.057-.076L6.65 5.161a.459.459 0 01.632-.063l.068.063L9.855 8.06a.596.596 0 010 .78.459.459 0 01-.632.063l-.069-.063L7.5 6.913V12.5a.5.5 0 01-1 0V6.914L4.846 8.84a.459.459 0 01-.632.063l-.069-.063zm11.71 2.322a.598.598 0 01.057.704l-.057.076-2.505 2.898a.459.459 0 01-.632.063l-.068-.063-2.505-2.898a.596.596 0 010-.78.459.459 0 01.632-.063l.069.063 1.654 1.926V7.5a.5.5 0 011 0v5.586l1.654-1.925a.459.459 0 01.632-.063l.069.063z"
          clipRule="evenodd"
        />
      </svg>
    </IconWrapper>
  );
};

UnsortedIcon.displayName = 'UnsortedIcon';
export {UnsortedIcon};
