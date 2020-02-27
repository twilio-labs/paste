/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface ErrorIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ErrorIcon: React.FC<ErrorIconProps> = ({as, size, iconColor, title, decorative}) => {
  if (!decorative && title == null) {
    throw new Error('[ErrorIcon]: Missing a title for non-decorative icon.');
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
              d="M12 2a9.968 9.968 0 017.06 2.918l.011.01.011.012a9.967 9.967 0 012.913 6.765L22 12c0 5.523-4.477 10-10 10a9.969 9.969 0 01-7.066-2.924l-.005-.005A9.973 9.973 0 012 12C2 6.477 6.477 2 12 2zm6.709 4L5.999 18.707a8.966 8.966 0 006 2.293c4.883 0 8.856-3.886 8.997-8.72l.004-.266-.004-.28A8.96 8.96 0 0018.709 6zm-6.71-3A9 9 0 003 12c0 2.305.867 4.408 2.292 6L18 5.293A8.97 8.97 0 0012 3z"
            />
          </svg>
        )}
      </UID>
    </IconWrapper>
  );
};

ErrorIcon.displayName = 'ErrorIcon';
export {ErrorIcon};
