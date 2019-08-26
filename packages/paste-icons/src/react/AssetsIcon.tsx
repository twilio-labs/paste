/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface AssetsIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const AssetsIcon: React.FC<AssetsIconProps> = ({title, decorative, ...props}) => (
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
          <path fill="currentColor" d="M928 832H289.92V0H544l384 384v448M544 0v384h384M800 832v192H96V128h178.56" />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

AssetsIcon.defaultProps = {
  title: 'Assets Icon',
  decorative: true,
};

AssetsIcon.displayName = 'AssetsIcon';

export {AssetsIcon};
