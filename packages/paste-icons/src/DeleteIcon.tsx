/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface DeleteIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const DeleteIcon: React.FC<DeleteIconProps> = ({as, display, size, iconColor, title, decorative}) => {
  if (!decorative && title == null) {
    throw new Error('[DeleteIcon]: Missing a title for non-decorative icon.');
  }

  return (
    <IconWrapper as={as} display={display} size={size} iconColor={iconColor}>
      <UID>
        {titleId => (
          <svg
            role="img"
            aria-hidden={decorative}
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            aria-labelledby={titleId}
          >
            {title ? <title id={titleId}>{title}</title> : null}
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M14.25 4c.966 0 1.75.784 1.75 1.75L15.999 7H19.5a.5.5 0 01.09.992L19.5 8h-1.501L18 18.25a1.75 1.75 0 01-1.606 1.744L16.25 20H7.74C6.774 20 6 19.217 6 18.25L5.999 8H4.5a.5.5 0 01-.09-.992L4.5 7h3.499L8 5.75a1.75 1.75 0 011.606-1.744L9.75 4zm2.749 4h-10L7 18.25c0 .383.276.694.64.743l.1.007h8.51a.75.75 0 00.75-.75L16.999 8zM10.5 11a.5.5 0 01.492.41l.008.09v4a.5.5 0 01-.992.09L10 15.5v-4a.5.5 0 01.5-.5zm3 0a.5.5 0 01.492.41l.008.09v4a.5.5 0 01-.992.09L13 15.5v-4a.5.5 0 01.5-.5zm.75-6h-4.5a.75.75 0 00-.75.75L8.999 7h6L15 5.75a.75.75 0 00-.648-.743L14.25 5z"
            />
          </svg>
        )}
      </UID>
    </IconWrapper>
  );
};

DeleteIcon.displayName = 'DeleteIcon';
export {DeleteIcon};
