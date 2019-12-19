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
              d="M12.002.48c6.362 0 11.521 5.159 11.521 11.522s-5.159 11.521-11.521 11.521C5.638 23.523.48 18.365.48 12.002.48 5.638 5.638.48 12.002.48zm0 2a9.521 9.521 0 00-9.522 9.522 9.521 9.521 0 009.522 9.521c5.258 0 9.521-4.263 9.521-9.521 0-5.259-4.263-9.522-9.521-9.522zm.301 7.609a1 1 0 011 1v5.608h1.866a1 1 0 01.993.884l.007.116a1 1 0 01-1 1H9.43a1 1 0 110-2h1.873v-4.608h-.913a1 1 0 010-2zm-.475-4.305a1.478 1.478 0 110 2.956 1.478 1.478 0 010-2.956z"
            />
          </svg>
        )}
      </UID>
    </IconWrapper>
  );
};

InformationIcon.displayName = 'InformationIcon';
export {InformationIcon};
