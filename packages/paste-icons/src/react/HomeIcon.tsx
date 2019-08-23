/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface HomeIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const HomeIcon: React.FC<HomeIconProps> = ({title, decorative, ...props}) => (
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
            d="M846.276 944.26H623.425V665.697h-222.85V944.26H177.724V609.984h-55.713v389.989h334.276V721.409h111.426v278.564h334.276V609.984h-55.713V944.26M547.656 60.656L512 25l-35.656 35.656L0 537l35.099 35.656L512 95.755l476.901 476.901L1024 537 547.656 60.656"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

HomeIcon.defaultProps = {
  title: 'Home Icon',
  decorative: true,
};

HomeIcon.displayName = 'HomeIcon';

export {HomeIcon};
