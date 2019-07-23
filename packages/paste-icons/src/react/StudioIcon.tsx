/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface StudioIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const StudioIcon: React.FC<StudioIconProps> = ({title, decorative, ...props}) => (
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
            d="M544 0v192H96c-35.328 0-64 28.672-64 64v128c0 35.328 28.672 64 64 64h192v192h640v128H32v256h448V832h448c35.328 0 64-28.672 64-64V640c0-35.328-28.672-64-64-64H736V384H96V256h896V0H544M416 960H96V832h320v128m256-512v128H352V448h320m256-256H608V64h320v128"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

StudioIcon.defaultProps = {
  title: 'Studio Icon',
  decorative: true,
};

export {StudioIcon};
