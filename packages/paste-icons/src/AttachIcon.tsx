/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface AttachIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const AttachIcon: React.FC<AttachIconProps> = ({as, size, iconColor, title, decorative}) => {
  if (!decorative && title == null) {
    throw new Error('[AttachIcon]: Missing a title for non-decorative icon.');
  }

  return (
    <IconWrapper as={as} size={size} iconColor={iconColor}>
      <UID>
        {uid => (
          <svg role="img" aria-hidden={decorative} aria-labelledby={uid} width="100%" height="100%" viewBox="0 0 24 24">
            {title ? <title id={uid}>{title}</title> : null}
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M11.503 6.385a2.9 2.9 0 014.242 3.955l-.135.14-4.814 4.817A1.7 1.7 0 018.29 13.01l.108-.123 4.808-4.81a.5.5 0 01.765.638l-.057.069-4.803 4.804a.7.7 0 00.899 1.065l.085-.07 4.814-4.816a1.9 1.9 0 00-2.577-2.79l-.116.11-4.808 4.807a3.1 3.1 0 004.241 4.519l.143-.135 5.854-5.855a.5.5 0 01.765.638l-.057.07-5.855 5.854a4.1 4.1 0 01-5.953-5.634l.155-.164 4.802-4.802z"
            />
          </svg>
        )}
      </UID>
    </IconWrapper>
  );
};

AttachIcon.displayName = 'AttachIcon';
export {AttachIcon};
