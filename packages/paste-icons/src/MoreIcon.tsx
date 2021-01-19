/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';
import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface MoreIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const MoreIcon: React.FC<MoreIconProps> = ({as, display, size, color, title, decorative}) => {
  const titleId = `MoreIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error('[MoreIcon]: Missing a title for non-decorative icon.');
  }

  return (
    <IconWrapper as={as} display={display} size={size} color={color}>
      <svg role="img" aria-hidden={decorative} width="100%" height="100%" viewBox="0 0 20 20" aria-labelledby={titleId}>
        {title ? <title id={titleId}>{title}</title> : null}
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M10 14.5c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5-1.5-.673-1.5-1.5.673-1.5 1.5-1.5zm0-6c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5-1.5-.673-1.5-1.5.673-1.5 1.5-1.5zm0-6c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5S8.5 4.827 8.5 4s.673-1.5 1.5-1.5z"
        />
      </svg>
    </IconWrapper>
  );
};

MoreIcon.displayName = 'MoreIcon';
export {MoreIcon};
