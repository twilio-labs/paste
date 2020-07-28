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

const LinkExternalIcon: React.FC<LinkExternalIconProps> = ({as, display, size, iconColor, title, decorative}) => {
  if (!decorative && title == null) {
    throw new Error('[LinkExternalIcon]: Missing a title for non-decorative icon.');
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
              d="M10.5 7a.5.5 0 110 1H8v8h8v-2.5a.5.5 0 01.41-.492L16.5 13a.5.5 0 01.492.41l.008.09v3a.5.5 0 01-.41.492L16.5 17h-9a.5.5 0 01-.492-.41L7 16.5v-9a.5.5 0 01.41-.492L7.5 7h3zm6 0a.5.5 0 01.5.5v3a.5.5 0 11-1 0V8.785l-3.607 3.608a.556.556 0 01-.709.064l-.077-.064a.556.556 0 01-.064-.709l.064-.077L15.213 8H13.5a.5.5 0 110-1h3z"
            />
          </svg>
        )}
      </UID>
    </IconWrapper>
  );
};

LinkExternalIcon.displayName = 'LinkExternalIcon';
export {LinkExternalIcon};
