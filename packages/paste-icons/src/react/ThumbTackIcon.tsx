/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface ThumbTackIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const ThumbTackIcon: React.FC<ThumbTackIconProps> = ({title, decorative, ...props}) => (
  <IconWrapper {...props}>
    <UID>
      {uid => (
        <svg
          role="img"
          aria-hidden={decorative}
          aria-labelledby={uid}
          height="100%"
          width="100%"
          viewBox="0 0 1024 1024"
        >
          <title id={uid}>{title}</title>
          <path
            fill="currentColor"
            d="M453.386 453.002V177.31c0-5.751-1.812-10.477-5.514-14.179s-8.428-5.593-14.179-5.514c-5.75.079-10.476 1.891-14.178 5.514s-5.514 8.35-5.514 14.179v275.692c0 5.75 1.812 10.476 5.514 14.178s8.428 5.593 14.178 5.514c5.751-.079 10.477-1.89 14.179-5.514 3.702-3.623 5.514-8.349 5.514-14.178m413.538 216.615c0 10.634-3.859 19.929-11.658 27.727-7.798 7.798-17.014 11.737-27.726 11.658H563.505l-31.35 297.196c-.866 4.963-2.993 9.137-6.459 12.603-3.466 3.466-7.641 5.199-12.603 5.199h-.63c-11.107 0-17.645-5.514-19.693-16.62l-46.789-298.457H197.386c-10.634 0-19.929-3.86-27.727-11.658-7.798-7.798-11.737-17.014-11.658-27.727 0-50.491 16.069-95.862 48.286-136.27 32.216-40.409 68.608-60.574 109.253-60.653V157.538c-21.347 0-39.779-7.798-55.375-23.394-15.596-15.596-23.395-34.028-23.395-55.375 0-21.346 7.799-39.778 23.395-55.375C275.761 7.798 294.193 0 315.54 0h393.846c21.346 0 39.778 7.798 55.375 23.394 15.596 15.597 23.394 34.029 23.394 55.375 0 21.347-7.798 39.779-23.394 55.375-15.597 15.596-34.029 23.394-55.375 23.394v315.077c40.566 0 77.036 20.244 109.253 60.653 32.216 40.408 48.364 85.858 48.285 136.27v.079"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

ThumbTackIcon.defaultProps = {
  title: 'Thumb Tack Icon',
  decorative: true,
};

ThumbTackIcon.displayName = 'ThumbTackIcon';

export {ThumbTackIcon};
