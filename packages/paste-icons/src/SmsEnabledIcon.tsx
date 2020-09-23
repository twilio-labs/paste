/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface SmsEnabledIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const SmsEnabledIcon: React.FC<SmsEnabledIconProps> = ({as, display, size, color, title, decorative}) => {
  if (!decorative && title == null) {
    throw new Error('[SmsEnabledIcon]: Missing a title for non-decorative icon.');
  }

  return (
    <IconWrapper as={as} display={display} size={size} color={color}>
      <UID>
        {titleId => (
          <svg
            role="img"
            aria-hidden={decorative}
            height="100%"
            width="100%"
            viewBox="0 0 1024 1024"
            aria-labelledby={titleId}
          >
            {title ? <title id={titleId}>{title}</title> : null}
            <path
              fill="currentColor"
              d="M128 896V640H0V0h1024v640H441.6L128 896M64 576h128v185.6L416 576h544V64H64v512m128-384v64h640v-64H192m0 192v64h448v-64H192m249.6 640"
            />
          </svg>
        )}
      </UID>
    </IconWrapper>
  );
};

SmsEnabledIcon.displayName = 'SmsEnabledIcon';
export {SmsEnabledIcon};
