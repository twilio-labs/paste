/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface LinkExternalIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const LinkExternalIcon: React.FC<LinkExternalIconProps> = ({as, size, iconColor, title, decorative}) => {
  if (!decorative && title == null) {
    throw new Error('[LinkExternalIcon]: Missing a title for non-decorative icon.');
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
              d="M15.5 8h.012c.02 0 .041.002.062.005L15.5 8a.502.502 0 01.354.146l.011.013a.503.503 0 01.033.039l-.044-.052a.502.502 0 01.138.264l.003.018A.503.503 0 0116 8.48v8.02a.5.5 0 01-.992.09L15 16.5V9.706l-8.146 8.148a.5.5 0 01-.765-.638l.057-.07L14.292 9H7.5a.5.5 0 01-.492-.41L7 8.5a.5.5 0 01.41-.492L7.5 8h8z"
            />
          </svg>
        )}
      </UID>
    </IconWrapper>
  );
};

LinkExternalIcon.displayName = 'LinkExternalIcon';
export {LinkExternalIcon};
