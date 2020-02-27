/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface InformationIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const InformationIcon: React.FC<InformationIconProps> = ({as, size, iconColor, title, decorative}) => {
  if (!decorative && title == null) {
    throw new Error('[InformationIcon]: Missing a title for non-decorative icon.');
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
              d="M12 2c5.522 0 10 4.478 10 10s-4.478 10-10 10C6.477 22 2 17.523 2 12S6.477 2 12 2zm0 .994A9.006 9.006 0 002.994 12 9.007 9.007 0 1012 2.994zm.24 7.506a.5.5 0 01.491.41l.008.09v5.25h2.133a.5.5 0 01.09.992l-.09.008H9.628a.5.5 0 01-.09-.992l.09-.008h2.111V11.5H10.5a.5.5 0 01-.492-.41L10 11a.5.5 0 01.41-.492l.09-.008h1.74zm-.405-3.745a.935.935 0 110 1.87.935.935 0 010-1.87z"
            />
          </svg>
        )}
      </UID>
    </IconWrapper>
  );
};

InformationIcon.displayName = 'InformationIcon';
export {InformationIcon};
