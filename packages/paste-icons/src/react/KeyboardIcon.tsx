/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface KeyboardIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const KeyboardIcon: React.FC<KeyboardIconProps> = ({title, decorative, ...props}) => (
  <IconWrapper {...props}>
    <UID>
      {uid => (
        <svg role="img" aria-hidden={decorative} aria-labelledby={uid} width="100%" height="100%" viewBox="0 0 24 24">
          <title id={uid}>{title}</title>
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M20.03 4C21.115 4 22 4.884 22 5.971v12.058A1.973 1.973 0 0120.03 20H3.97A1.972 1.972 0 012 18.029V5.971C2 4.884 2.883 4 3.97 4h16.06zm0 1H3.97a.97.97 0 00-.97.971v12.058a.97.97 0 00.97.971h16.06a.971.971 0 00.97-.971V5.971A.971.971 0 0020.03 5zM5 9V7h2v2H5zm4 0V7h2v2H9zm4 0V7h2v2h-2zm4 0V7h2v2h-2zM5 13v-2h2v2H5zm4 0v-2h2v2H9zm4 0v-2h2v2h-2zm4 0v-2h2v2h-2zM5 17v-2h2v2H5zm4 0v-2h6v2H9zm8 0v-2h2v2h-2z"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

KeyboardIcon.defaultProps = {
  title: 'Keyboard Icon',
  decorative: true,
};

KeyboardIcon.displayName = 'KeyboardIcon';

export {KeyboardIcon};
