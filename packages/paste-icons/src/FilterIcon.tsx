/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';
import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface FilterIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const FilterIcon: React.FC<FilterIconProps> = ({as, display, element = 'ICON', size, color, title, decorative}) => {
  const titleId = `FilterIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error('[FilterIcon]: Missing a title for non-decorative icon.');
  }

  return (
    <IconWrapper as={as} display={display} element={element} size={size} color={color}>
      <svg role="img" aria-hidden={decorative} width="100%" height="100%" viewBox="0 0 20 20" aria-labelledby={titleId}>
        {title ? <title id={titleId}>{title}</title> : null}
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 13a1 1 0 010 2H8a1 1 0 010-2h4zm2-4a1 1 0 010 2H6a1 1 0 010-2h8zm2-4a1 1 0 010 2H4a1 1 0 110-2h12z"
        />
      </svg>
    </IconWrapper>
  );
};

FilterIcon.displayName = 'FilterIcon';
export {FilterIcon};
