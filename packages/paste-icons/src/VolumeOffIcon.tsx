/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface VolumeOffIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const VolumeOffIcon: React.FC<VolumeOffIconProps> = ({as, display, size, iconColor, title, decorative}) => {
  if (!decorative && title == null) {
    throw new Error('[VolumeOffIcon]: Missing a title for non-decorative icon.');
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
              d="M11.577 5.949L7.465 9.9H5.5A1.5 1.5 0 004 11.4v2l.007.144A1.5 1.5 0 005.5 14.9h1.966l4.118 3.958a.842.842 0 00.907.173.828.828 0 00.509-.768V6.538a.828.828 0 00-.509-.77.845.845 0 00-.914.18zm.423.979v10.943l-3.987-3.832a.5.5 0 00-.346-.139H5.5a.5.5 0 01-.5-.5v-2a.5.5 0 01.5-.5h2.167a.5.5 0 00.346-.14L12 6.929z"
            />
          </svg>
        )}
      </UID>
    </IconWrapper>
  );
};

VolumeOffIcon.displayName = 'VolumeOffIcon';
export {VolumeOffIcon};
