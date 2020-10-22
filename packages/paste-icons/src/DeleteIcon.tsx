/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface DeleteIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const DeleteIcon: React.FC<DeleteIconProps> = ({as, display, size, color, title, decorative}) => {
  const titleId = `DeleteIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error('[DeleteIcon]: Missing a title for non-decorative icon.');
  }

  return (
    <IconWrapper as={as} display={display} size={size} color={color}>
      <svg role="img" aria-hidden={decorative} width="100%" height="100%" viewBox="0 0 20 20" aria-labelledby={titleId}>
        {title ? <title id={titleId}>{title}</title> : null}
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12.25 2c.966 0 1.75.784 1.75 1.75L13.999 5H17.5a.5.5 0 01.09.992L17.5 6h-1.501L16 16.25a1.75 1.75 0 01-1.606 1.744L14.25 18H5.74C4.774 18 4 17.217 4 16.25L3.999 6H2.5a.5.5 0 01-.09-.992L2.5 5h3.499L6 3.75a1.75 1.75 0 011.606-1.744L7.75 2zm2.749 4h-10L5 16.25c0 .383.276.694.64.743l.1.007h8.51a.75.75 0 00.75-.75L14.999 6zM8.5 9a.5.5 0 01.492.41L9 9.5v4a.5.5 0 01-.992.09L8 13.5v-4a.5.5 0 01.5-.5zm3 0a.5.5 0 01.492.41L12 9.5v4a.5.5 0 01-.992.09L11 13.5v-4a.5.5 0 01.5-.5zm.75-6h-4.5a.75.75 0 00-.75.75L6.999 5h6L13 3.75a.75.75 0 00-.648-.743L12.25 3z"
        />
      </svg>
    </IconWrapper>
  );
};

DeleteIcon.displayName = 'DeleteIcon';
export {DeleteIcon};
