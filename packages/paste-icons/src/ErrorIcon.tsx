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
              d="M19.778 4.222c4.296 4.296 4.296 11.26 0 15.556-4.296 4.296-11.26 4.296-15.556 0-4.296-4.296-4.296-11.26 0-15.556 4.296-4.296 11.26-4.296 15.556 0zM5.636 5.636a9.001 9.001 0 00-.668 11.982l12.65-12.65a9.001 9.001 0 00-11.982.668zm13.397.747l-12.65 12.65a9.001 9.001 0 0012.65-12.65z"
            />
          </svg>
        )}
      </UID>
    </IconWrapper>
  );
};

ErrorIcon.displayName = 'ErrorIcon';
export {ErrorIcon};
