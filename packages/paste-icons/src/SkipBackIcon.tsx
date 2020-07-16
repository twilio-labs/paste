/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface SkipBackIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const SkipBackIcon: React.FC<SkipBackIconProps> = ({as, display, size, iconColor, title, decorative}) => {
  if (!decorative && title == null) {
    throw new Error('[SkipBackIcon]: Missing a title for non-decorative icon.');
  }

  return (
    <IconWrapper as={as} display={display} size={size} iconColor={iconColor}>
      <UID>
        {uid => (
          <svg role="img" aria-hidden={decorative} aria-labelledby={uid} width="100%" height="100%" viewBox="0 0 24 24">
            {title ? <title id={uid}>{title}</title> : null}
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M8.854 11.746a.5.5 0 01.057.638l-.057.07a.5.5 0 01-.638.057l-.07-.057-3-3-.011-.013a.503.503 0 01-.033-.039l.044.052A.502.502 0 015 9.1v-.01c0-.022.002-.043.005-.064L5 9.1a.502.502 0 01.089-.284l.013-.018a.503.503 0 01.033-.04l.011-.012 3-3a.5.5 0 01.765.638l-.057.07L6.706 8.6H14.5a4.5 4.5 0 01.212 8.995l-.212.005h-5a.5.5 0 01-.09-.992l.09-.008h5a3.5 3.5 0 00.192-6.995L14.5 9.6H6.706l2.148 2.146z"
            />
          </svg>
        )}
      </UID>
    </IconWrapper>
  );
};

SkipBackIcon.displayName = 'SkipBackIcon';
export {SkipBackIcon};
