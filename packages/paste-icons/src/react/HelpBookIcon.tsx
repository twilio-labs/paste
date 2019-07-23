/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface HelpBookIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const HelpBookIcon: React.FC<HelpBookIconProps> = ({title, decorative, ...props}) => (
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
            d="M835.579 161.684H296.632c-16.169 0-26.948-16.168-26.948-26.947s10.779-26.948 26.948-26.948h538.947c10.779 0 26.947 10.779 26.947 26.948 0 16.168-16.168 26.947-26.947 26.947M916.421 1024H226.568C161.895 1024 108 970.105 108 905.432V134.737C108 59.284 167.284 0 242.737 0h646.737c16.168 0 26.947 10.779 26.947 26.947 0 16.169-10.779 26.948-26.947 26.948H242.737c-43.116 0-80.842 37.726-80.842 80.842s32.337 80.842 75.452 80.842h679.074V1024M161.895 242.526v668.295c0 32.337 26.947 59.284 64.673 59.284h635.958V264.084H242.737c-32.337 0-59.284-5.389-80.842-21.558m350.316 560.506c-21.558 0-32.337 16.168-32.337 37.726s16.168 37.726 32.337 37.726c21.557 0 32.336-16.168 32.336-37.726s-16.168-37.726-32.336-37.726m26.947-48.506h-53.895v-80.842c0-43.116 37.726-80.842 80.842-80.842 16.169 0 26.948-10.779 26.948-26.947v-107.79c0-16.168-10.779-26.947-26.948-26.947H458.316c-16.169 0-26.948 10.779-26.948 26.947v80.842h-53.894v-80.842c0-43.116 37.726-80.842 80.842-80.842h107.789c43.116 0 80.842 37.726 80.842 80.842v107.79c0 43.116-37.726 80.842-80.842 80.842-16.168 0-26.947 10.779-26.947 26.947v80.842"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

HelpBookIcon.defaultProps = {
  title: 'Help Book Icon',
  decorative: true,
};

export {HelpBookIcon};
