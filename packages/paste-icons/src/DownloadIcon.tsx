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

const DownloadIcon: React.FC<DownloadIconProps> = ({as, display, size, color, title, decorative}) => {
  if (!decorative && title == null) {
    throw new Error('[DownloadIcon]: Missing a title for non-decorative icon.');
  }

  return (
    <IconWrapper as={as} display={display} size={size} color={color}>
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
              d="M18.5 18a.5.5 0 01.09.992L18.5 19h-13a.5.5 0 01-.09-.992L5.5 18h13zM12 5a.5.5 0 01.492.41l.008.09v8.842l2.296-2.296a.5.5 0 01.638-.057l.07.057a.5.5 0 01.057.638l-.057.07-3.125 3.125a.5.5 0 01-.638.057l-.07-.057-3.125-3.125a.5.5 0 01.638-.765l.07.057 2.246 2.246V5.5A.5.5 0 0112 5z"
            />
          </svg>
        )}
      </UID>
    </IconWrapper>
  );
};

DownloadIcon.displayName = 'DownloadIcon';
export {DownloadIcon};
