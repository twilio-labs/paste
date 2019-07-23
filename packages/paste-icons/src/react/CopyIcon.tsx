/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface CopyIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const CopyIcon: React.FC<CopyIconProps> = ({title, decorative, ...props}) => (
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
            d="M751.167 204.8V0H68.5v819.2h204.8V1024h682.667V204.8h-204.8M887.7 955.733H341.567V819.2v-34.133-34.134-477.866H887.7v682.666M136.767 68.267H682.9V204.8H273.3v546.133H136.767V68.267"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

CopyIcon.defaultProps = {
  title: 'Copy Icon',
  decorative: true,
};

export {CopyIcon};
