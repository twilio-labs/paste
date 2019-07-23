/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface DocsIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const DocsIcon: React.FC<DocsIconProps> = ({title, decorative, ...props}) => (
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
            d="M527.992 0H79v1024h866.464V417.472L527.992 0m23.616 133.92l259.936 259.936H551.608V133.92M157.784 945.216V78.752h315.072v393.856h393.856v472.608H157.784"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

DocsIcon.defaultProps = {
  title: 'Docs Icon',
  decorative: true,
};

export {DocsIcon};
