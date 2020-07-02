/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface UploadToCloudIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const UploadToCloudIcon: React.FC<UploadToCloudIconProps> = ({as, display, size, iconColor, title, decorative}) => {
  if (!decorative && title == null) {
    throw new Error('[UploadToCloudIcon]: Missing a title for non-decorative icon.');
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
              d="M11.926 11.005l.032-.003.054-.002c.02 0 .04.002.06.005L12 11l.054.003.096.02.061.024.073.042.057.046 2.87 2.869a.5.5 0 01-.638.765l-.07-.058-2.003-2.004v7.856a.5.5 0 01-.992.09l-.008-.09v-7.856l-2.004 2.004a.5.5 0 01-.637.058l-.07-.058a.5.5 0 01-.058-.638l.058-.07 2.857-2.857a.502.502 0 01.086-.068l.057-.031.06-.024.077-.018zM11.907 4a6.519 6.519 0 015.657 3.282l.094.171.103.004a4.8 4.8 0 014.548 4.583l.005.213c0 1.852-.83 3.145-2.188 3.93a5.682 5.682 0 01-2.07.7l-.119.012h-1.311a.5.5 0 01-.09-.992l.09-.008 1.267.002.157-.021a4.68 4.68 0 00.371-.079c.412-.103.824-.26 1.204-.48 1.064-.615 1.689-1.588 1.689-3.064a3.8 3.8 0 00-3.749-3.802l-.195.002-.33.012-.14-.297A5.523 5.523 0 0011.906 5a5.524 5.524 0 00-5.495 4.975l-.018.223-.034.578-.567-.118A2.731 2.731 0 002.5 13.33c0 1.225.517 1.93 1.414 2.301.442.183.907.258 1.294.266l.238-.002h1.717a.5.5 0 01.09.992l-.09.008H5.43a4.632 4.632 0 01-1.897-.34C2.275 16.036 1.5 14.977 1.5 13.33A3.732 3.732 0 015.246 9.6l.203.006.025-.159a6.524 6.524 0 016.198-5.442L11.907 4z"
            />
          </svg>
        )}
      </UID>
    </IconWrapper>
  );
};

UploadToCloudIcon.displayName = 'UploadToCloudIcon';
export {UploadToCloudIcon};
