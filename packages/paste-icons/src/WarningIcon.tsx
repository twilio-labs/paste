/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface WarningIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const WarningIcon: React.FC<WarningIconProps> = ({as, size, iconColor, title, decorative}) => {
  if (!decorative && title == null) {
    throw new Error('[WarningIcon]: Missing a title for non-decorative icon.');
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
              d="M11.546 2.267a.52.52 0 01.908 0L21.946 20.3c.169.321-.077.7-.454.7H2.508c-.377 0-.623-.379-.454-.7zM12 3.56L3.33 20.033h17.34L12 3.561zM12.005 16a.935.935 0 110 1.87.935.935 0 010-1.87zM12 9c.245 0 .45.155.492.359l.008.078v4.126c0 .241-.224.437-.5.437-.245 0-.45-.155-.492-.359l-.008-.078V9.437c0-.241.224-.437.5-.437z"
            />
          </svg>
        )}
      </UID>
    </IconWrapper>
  );
};

WarningIcon.displayName = 'WarningIcon';
export {WarningIcon};
