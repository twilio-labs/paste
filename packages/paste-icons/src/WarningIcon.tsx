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
              d="M12.897 1.033L23.42 22.076a1 1 0 01-.894 1.447H1.48a1 1 0 01-.894-1.447L11.109 1.033a1 1 0 011.788 0zm-.894 2.683L3.099 21.523h17.808L12.003 3.716zm0 13.486a1.478 1.478 0 110 2.957 1.478 1.478 0 010-2.957zm0-8.401c.552 0 1 .336 1 .751v5.498c0 .415-.448.75-1 .75s-1-.335-1-.75V9.552c0-.415.448-.751 1-.751z"
            />
          </svg>
        )}
      </UID>
    </IconWrapper>
  );
};

WarningIcon.displayName = 'WarningIcon';
export {WarningIcon};
