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

const VolumeOffIcon: React.FC<VolumeOffIconProps> = ({as, display, size, color, title, decorative}) => {
  if (!decorative && title == null) {
    throw new Error('[VolumeOffIcon]: Missing a title for non-decorative icon.');
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
            viewBox="0 0 24 24"
            aria-labelledby={titleId}
          >
            {title ? <title id={titleId}>{title}</title> : null}
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M11.105 6.223a.801.801 0 01.857-.164c.294.12.477.403.477.712v10.46c0 .309-.183.591-.477.71a.796.796 0 01-.844-.156L7.255 14.33H5.407c-.733 0-1.336-.63-1.401-1.35L4 12.854v-1.846c0-.763.623-1.292 1.407-1.292h1.847zm.397.894l-3.746 3.4a.473.473 0 01-.318.121H5.407c-.294 0-.47.149-.47.37v1.845c0 .285.24.554.47.554h2.031c.118 0 .232.043.318.122l3.746 3.398v-9.81zm8.36 2.71c.163.16.182.408.055.588l-.054.064-1.543 1.517 1.543 1.519a.456.456 0 010 .652.475.475 0 01-.598.054l-.065-.054-1.543-1.519-1.542 1.52a.474.474 0 01-.663 0 .456.456 0 01-.054-.59l.054-.063 1.542-1.519-1.542-1.517a.456.456 0 010-.652.475.475 0 01.598-.054l.065.054 1.542 1.517L19.2 9.827c.183-.18.48-.18.663 0z"
            />
          </svg>
        )}
      </UID>
    </IconWrapper>
  );
};

VolumeOffIcon.displayName = 'VolumeOffIcon';
export {VolumeOffIcon};
