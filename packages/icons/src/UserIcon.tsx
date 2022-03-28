/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';
import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface UserIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const UserIcon: React.FC<UserIconProps> = ({as, display, element = 'ICON', size, color, title, decorative}) => {
  const titleId = `UserIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error('[UserIcon]: Missing a title for non-decorative icon.');
  }

  return (
    <IconWrapper as={as} display={display} element={element} size={size} color={color}>
      <svg role="img" aria-hidden={decorative} width="100%" height="100%" viewBox="0 0 20 20" aria-labelledby={titleId}>
        {title ? <title id={titleId}>{title}</title> : null}
        <path
          fill="currentColor"
          d="M10.302 10a6.309 6.309 0 016.3 6.301.566.566 0 11-1.131 0 5.17 5.17 0 00-10.339 0 .566.566 0 11-1.132 0 6.309 6.309 0 016.07-6.297l.232-.004zm-.155-8a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm0 1.085a2.415 2.415 0 100 4.831 2.415 2.415 0 000-4.831z"
        />
      </svg>
    </IconWrapper>
  );
};

UserIcon.displayName = 'UserIcon';
export {UserIcon};
