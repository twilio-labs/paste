/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface ChevronUpIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ChevronUpIcon: React.FC<ChevronUpIconProps> = ({as, display, size, color, title, decorative}) => {
  const titleId = `ChevronUpIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error('[ChevronUpIcon]: Missing a title for non-decorative icon.');
  }

  return (
    <IconWrapper as={as} display={display} size={size} color={color}>
      <svg role="img" aria-hidden={decorative} width="100%" height="100%" viewBox="0 0 20 20" aria-labelledby={titleId}>
        {title ? <title id={titleId}>{title}</title> : null}
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M9.293 7.293a1 1 0 011.32-.083l.094.083 3 3a1 1 0 01-1.32 1.497l-.094-.083L10 9.415l-2.293 2.292a1 1 0 01-1.32.083l-.094-.083a1 1 0 01-.083-1.32l.083-.094 3-3z"
        />
      </svg>
    </IconWrapper>
  );
};

ChevronUpIcon.displayName = 'ChevronUpIcon';
export {ChevronUpIcon};
