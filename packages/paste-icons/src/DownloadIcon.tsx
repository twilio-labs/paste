/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface DownloadIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const DownloadIcon: React.FC<DownloadIconProps> = ({as, size, iconColor, title, decorative, ...props}) => {
  if (!decorative && title == null) {
    throw new Error('[DownloadIcon]: Missing a title for non-decorative icon.');
  }

  return (
    <IconWrapper as={as} size={size} iconColor={iconColor} {...props}>
      <UID>
        {uid => (
          <svg role="img" aria-hidden={decorative} aria-labelledby={uid} width="100%" height="100%" viewBox="0 0 24 24">
            {title ? <title id={uid}>{title}</title> : null}
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M18.5 19a.5.5 0 01.09.992L18.5 20h-13a.5.5 0 01-.09-.992L5.5 19h13zM12 6a.5.5 0 01.492.41l.008.09v8.842l2.296-2.296a.5.5 0 01.638-.057l.07.057a.5.5 0 01.057.638l-.057.07-3.125 3.125a.5.5 0 01-.638.057l-.07-.057-3.125-3.125a.5.5 0 01.638-.765l.07.057 2.246 2.246V6.5A.5.5 0 0112 6z"
            />
          </svg>
        )}
      </UID>
    </IconWrapper>
  );
};

DownloadIcon.displayName = 'DownloadIcon';
export {DownloadIcon};
