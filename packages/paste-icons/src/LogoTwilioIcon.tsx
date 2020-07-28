/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface LogoTwilioIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const LogoTwilioIcon: React.FC<LogoTwilioIconProps> = ({as, display, size, iconColor, title, decorative}) => {
  if (!decorative && title == null) {
    throw new Error('[LogoTwilioIcon]: Missing a title for non-decorative icon.');
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
              d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12A12 12 0 0012 0zm0 20.8a8.8 8.8 0 110-17.6 8.8 8.8 0 010 17.6zm5.44-11.76a2.48 2.48 0 11-2.48-2.48 2.496 2.496 0 012.48 2.48zm0 5.92a2.48 2.48 0 11-2.48-2.48 2.496 2.496 0 012.48 2.48zm-5.92 0a2.48 2.48 0 11-2.48-2.48 2.496 2.496 0 012.48 2.48zm0-5.92a2.48 2.48 0 11-2.48-2.48 2.496 2.496 0 012.48 2.48z"
            />
          </svg>
        )}
      </UID>
    </IconWrapper>
  );
};

LogoTwilioIcon.displayName = 'LogoTwilioIcon';
export {LogoTwilioIcon};
