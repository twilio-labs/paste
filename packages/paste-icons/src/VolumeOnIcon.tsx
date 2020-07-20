/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface VolumeOnIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const VolumeOnIcon: React.FC<VolumeOnIconProps> = ({as, display, size, iconColor, title, decorative}) => {
  if (!decorative && title == null) {
    throw new Error('[VolumeOnIcon]: Missing a title for non-decorative icon.');
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
              d="M11.577 5.949a.845.845 0 01.914-.18c.313.13.508.433.509.769v11.725a.828.828 0 01-.509.768.842.842 0 01-.907-.173L7.466 14.9H5.5a1.5 1.5 0 01-1.493-1.356L4 13.4v-2a1.5 1.5 0 011.5-1.5h1.965zm6.262.75a7.762 7.762 0 010 11.402.5.5 0 11-.678-.735 6.762 6.762 0 000-9.932.5.5 0 01.678-.735zM12 6.928l-3.987 3.833a.5.5 0 01-.346.139H5.5a.5.5 0 00-.5.5v2a.5.5 0 00.5.5h2.167a.5.5 0 01.346.14L12 17.87V6.928zm4.142 1.074a5.523 5.523 0 010 8.796.5.5 0 01-.604-.796 4.523 4.523 0 000-7.204.5.5 0 01.604-.796zm-1.348 1.66c2.058 1.497 2.056 3.982 0 5.476a.5.5 0 11-.588-.81c1.507-1.094 1.508-2.76 0-3.857a.5.5 0 01.588-.809z"
            />
          </svg>
        )}
      </UID>
    </IconWrapper>
  );
};

VolumeOnIcon.displayName = 'VolumeOnIcon';
export {VolumeOnIcon};
