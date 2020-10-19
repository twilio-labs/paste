/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface FaxCapableIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const FaxCapableIcon: React.FC<FaxCapableIconProps> = ({as, display, size, color, title, decorative}) => {
  if (!decorative && title == null) {
    throw new Error('[FaxCapableIcon]: Missing a title for non-decorative icon.');
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
            viewBox="0 0 20 20"
            aria-labelledby={titleId}
          >
            {title ? <title id={titleId}>{title}</title> : null}
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M13.08 2l.135.009c.179.024.349.094.492.204l.103.09 2.887 2.887.09.103c.11.143.18.313.204.492l.009.136V8l-.007.083c.543.189.944.68 1 1.273L18 9.5v7a1.5 1.5 0 01-1.356 1.493L16.5 18h-14a1.5 1.5 0 01-1.493-1.356L1 16.5v-7a1.5 1.5 0 011.356-1.493L2.5 8H3V5.5a1.5 1.5 0 011.356-1.493L4.5 4h1a1.5 1.5 0 011.493 1.356L7 5.5V8h1V3.033l.006-.112c.052-.478.43-.858.906-.914L9.033 2h4.046zM3 9h-.5a.5.5 0 00-.492.41L2 9.5v7a.5.5 0 00.41.492L2.5 17h14a.5.5 0 00.492-.41L17 16.5v-7a.5.5 0 00-.41-.492L16.5 9H7v5.5a1.5 1.5 0 01-1.356 1.493L5.5 16h-1a1.5 1.5 0 01-1.493-1.356L3 14.5V9zm6.5 6a.5.5 0 110 1h-1a.5.5 0 110-1h1zm3 0a.5.5 0 110 1h-1a.5.5 0 110-1h1zm3 0a.5.5 0 110 1h-1a.5.5 0 110-1h1zM5.5 5h-1a.5.5 0 00-.492.41L4 5.5v9a.5.5 0 00.41.492L4.5 15h1a.5.5 0 00.492-.41L6 14.5v-9a.5.5 0 00-.5-.5zm4 8a.5.5 0 110 1h-1a.5.5 0 110-1h1zm3 0a.5.5 0 110 1h-1a.5.5 0 110-1h1zm3 0a.5.5 0 110 1h-1a.5.5 0 110-1h1zm-6-2a.5.5 0 110 1h-1a.5.5 0 110-1h1zm3 0a.5.5 0 110 1h-1a.5.5 0 110-1h1zm3 0a.5.5 0 110 1h-1a.5.5 0 110-1h1zm-3-8H9.033l-.016.005-.012.012L9 3.033V8h7V6.5h-2.492c-.52 0-.947-.393-1.002-.898l-.006-.11V3zm1 .407v2.085l.002.006.006.002 2.084-.001L13.5 3.407z"
            />
          </svg>
        )}
      </UID>
    </IconWrapper>
  );
};

FaxCapableIcon.displayName = 'FaxCapableIcon';
export {FaxCapableIcon};
