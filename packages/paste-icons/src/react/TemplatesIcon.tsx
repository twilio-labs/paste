/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface TemplatesIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const TemplatesIcon: React.FC<TemplatesIconProps> = ({title, decorative, ...props}) => (
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
            d="M26.256 26.756v420.103h420.103V26.756H26.256M472.615.5v472.615H0V.5h472.615m105.026 26.256v420.103h420.103V26.756H577.641M1024 .5v472.615H551.385V.5H1024M26.256 578.141v420.103h420.103V578.141H26.256m446.359-26.256V1024.5H0V551.885h472.615m105.026 26.256v420.103h420.103V578.141H577.641M1024 551.885V1024.5H551.385V551.885H1024"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

TemplatesIcon.defaultProps = {
  title: 'Templates Icon',
  decorative: true,
};

export {TemplatesIcon};
