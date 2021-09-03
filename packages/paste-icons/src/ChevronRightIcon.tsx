/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';
import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface ChevronRightIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ChevronRightIcon: React.FC<ChevronRightIconProps> = ({
  as,
  display,
  element = 'ICON',
  size,
  color,
  title,
  decorative,
}) => {
  const titleId = `ChevronRightIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error('[ChevronRightIcon]: Missing a title for non-decorative icon.');
  }

  return (
    <IconWrapper as={as} display={display} element={element} size={size} color={color}>
      <svg role="img" aria-hidden={decorative} width="100%" height="100%" viewBox="0 0 20 20" aria-labelledby={titleId}>
        {title ? <title id={titleId}>{title}</title> : null}
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M9.707 6.293a1 1 0 00-1.497 1.32l.083.094L10.585 10l-2.292 2.293a1 1 0 00-.083 1.32l.083.094a1 1 0 001.32.083l.094-.083 3-3a1 1 0 00.083-1.32l-.083-.094-3-3z"
        />
      </svg>
    </IconWrapper>
  );
};

ChevronRightIcon.displayName = 'ChevronRightIcon';
export {ChevronRightIcon};
