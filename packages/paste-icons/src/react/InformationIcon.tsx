/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface InformationIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const InformationIcon: React.FC<InformationIconProps> = ({title, decorative, ...props}) => (
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
            d="M512 1024C229.248 1024 0 794.752 0 512S229.248 0 512 0s512 229.248 512 512-229.248 512-512 512m-64-557.952v398.208h128V466.048H448m63.04-103.36c47.168 0 85.44-38.208 85.44-85.376 0-47.104-38.272-85.312-85.44-85.312s-85.44 38.208-85.44 85.312c0 47.168 38.272 85.376 85.44 85.376"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

InformationIcon.defaultProps = {
  title: 'Information Icon',
  decorative: true,
};

export {InformationIcon};
