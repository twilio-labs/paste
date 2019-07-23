/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface IpMessagingIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const IpMessagingIcon: React.FC<IpMessagingIconProps> = ({title, decorative, ...props}) => (
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
            d="M161.69 935.706V681.344H0V88.5h1024v592.844H504.986L161.69 935.706M53.914 627.431h161.689v201.011l269.466-201.011h485.017V142.362H53.914v485.069M161.69 384.896c0 62.26 67.379 101.12 121.241 70.042 25.037-14.49 40.448-41.165 40.448-70.042 0-62.208-67.379-101.12-121.293-69.99-24.985 14.438-40.396 41.114-40.396 69.99m269.465 0c0 62.26 67.379 101.12 121.293 70.042 24.986-14.49 40.397-41.165 40.397-70.042 0-62.208-67.379-101.12-121.242-69.99-25.037 14.438-40.448 41.114-40.448 69.99m269.466 0c0 62.26 67.379 101.12 121.293 70.042 24.985-14.49 40.396-41.165 40.396-70.042 0-62.208-67.379-101.12-121.241-69.99-25.037 14.438-40.448 41.114-40.448 69.99"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

IpMessagingIcon.defaultProps = {
  title: 'Ip Messaging Icon',
  decorative: true,
};

export {IpMessagingIcon};
