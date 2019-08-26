/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface ChannelsIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const ChannelsIcon: React.FC<ChannelsIconProps> = ({title, decorative, ...props}) => (
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
            d="M483.975 601.553v.539L215.579 800.963v-199.41H0v53.895h161.684v252.227l340.615-252.227h520.623v-53.895H483.975M0 116.5h1024v53.895H0V116.5m0 323.369h1022.922v53.894H0v-53.894m0-161.685h1024v53.895H0v-53.895"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

ChannelsIcon.defaultProps = {
  title: 'Channels Icon',
  decorative: true,
};

ChannelsIcon.displayName = 'ChannelsIcon';

export {ChannelsIcon};
