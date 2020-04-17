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
              d="M12 4a8 8 0 110 16 8 8 0 010-16zm0 7c-.26.01-.528.08-.707.24-.178.158-.292.355-.292.575v3.37c0 .21.11.428.292.577.173.14.457.247.707.237.26-.008.528-.078.707-.237.178-.16.292-.355.292-.577v-3.37a.766.766 0 00-.292-.575A1.14 1.14 0 0012 11zm0-3l-.266.036c-.17.047-.318.131-.441.253l-.156.198A.958.958 0 0011 8.98v.04a.728.728 0 00.086.378c.04.121.108.227.206.315.09.094.197.163.321.202.12.06.248.09.386.084l.266-.035c.17-.047.318-.131.441-.253l.156-.198A.958.958 0 0013 9.02v-.04a.728.728 0 00-.086-.378.721.721 0 00-.206-.315.757.757 0 00-.321-.202.767.767 0 00-.386-.084z"
            />
          </svg>
        )}
      </UID>
    </IconWrapper>
  );
};

InformationIcon.displayName = 'InformationIcon';
export {InformationIcon};
