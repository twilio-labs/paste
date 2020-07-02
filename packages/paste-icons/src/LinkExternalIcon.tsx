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
        {uid => (
          <svg role="img" aria-hidden={decorative} aria-labelledby={uid} width="100%" height="100%" viewBox="0 0 24 24">
            {title ? <title id={uid}>{title}</title> : null}
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M14.646 9.354h.026a.449.449 0 01.474.476v5.024a.5.5 0 01-.991.09l-.009-.09V10.99l-6.524 6.524a.45.45 0 01-.689-.574l.052-.063 6.524-6.524H9.646a.5.5 0 01-.491-.41l-.009-.09a.5.5 0 01.41-.492l.09-.008h5z"
            />
          </svg>
        )}
      </UID>
    </IconWrapper>
  );
};

LinkExternalIcon.displayName = 'LinkExternalIcon';
export {LinkExternalIcon};
