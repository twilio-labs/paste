/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface DownloadIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const DownloadIcon: React.FC<DownloadIconProps> = ({title, decorative, ...props}) => (
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
            d="M973.131 512c0-254.652-206.479-461.131-461.131-461.131C257.297 50.869 50.869 257.348 50.869 512c0 254.652 206.428 461.131 461.131 461.131 254.652 0 461.131-206.479 461.131-461.131m50.869 0c0 282.783-229.217 512-512 512S0 794.783 0 512 229.217 0 512 0s512 229.217 512 512M537.435 799.514V224.486c0-14.04-11.395-25.434-25.435-25.434s-25.435 11.394-25.435 25.434v575.028c0 14.04 11.395 25.434 25.435 25.434s25.435-11.394 25.435-25.434M286.7 538.249c-9.971-9.92-26.045-9.92-35.965 0-9.97 9.919-9.97 26.045 0 35.964l243.257 243.308c9.92 9.92 26.045 9.92 35.965 0l243.308-243.308c9.92-9.919 9.92-26.045 0-35.964-9.92-9.92-26.045-9.92-35.965 0L512 763.549l-225.3-225.3"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

DownloadIcon.defaultProps = {
  title: 'Download Icon',
  decorative: true,
};

DownloadIcon.displayName = 'DownloadIcon';

export {DownloadIcon};
