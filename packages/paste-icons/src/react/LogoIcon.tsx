/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface LogoIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const LogoIcon: React.FC<LogoIconProps> = ({title, decorative, ...props}) => (
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
            d="M512 0C229.306 0 0 229.306 0 512c0 282.694 229.306 512 512 512 282.694 0 512-229.306 512-512C1024 229.306 794.899 0 512 0m0 888.994c-208.237 0-376.994-168.757-376.994-376.994 0-208.237 168.757-376.994 376.994-376.994 208.237 0 376.994 168.757 376.994 376.994 0 208.237-168.757 376.994-376.994 376.994m21.274-504.636c0 81.883 88.639 133.059 159.552 92.117a106.366 106.366 0 0053.184-92.117c0-81.883-88.639-133.059-159.552-92.117a106.366 106.366 0 00-53.184 92.117m0 255.079c0 81.884 88.639 133.059 159.552 92.118a106.367 106.367 0 0053.184-92.118c0-81.883-88.639-133.058-159.552-92.117a106.367 106.367 0 00-53.184 92.117m-255.08 0c0 81.884 88.64 133.059 159.553 92.118 32.91-19.002 53.184-54.115 53.184-92.118 0-81.883-88.64-133.058-159.553-92.117-32.91 19.002-53.184 54.115-53.184 92.117m0-254.874c0 81.883 88.64 133.058 159.553 92.117 32.91-19.002 53.184-54.115 53.184-92.117 0-81.884-88.64-133.059-159.553-92.118-32.91 19.002-53.184 54.115-53.184 92.118"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

LogoIcon.defaultProps = {
  title: 'Logo Icon',
  decorative: true,
};

LogoIcon.displayName = 'LogoIcon';

export {LogoIcon};
