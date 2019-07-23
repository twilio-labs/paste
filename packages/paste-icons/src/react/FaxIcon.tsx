/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface FaxIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const FaxIcon: React.FC<FaxIconProps> = ({title, decorative, ...props}) => (
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
            d="M161.684 304.974h485.053v53.895H161.684v-53.895m0 161.684h485.053v-53.895H161.684v53.895m0 107.79h431.158v-53.895H161.684v53.895M1024 170.237v436.547c0 70.064-59.284 129.348-134.737 129.348H506.611L161.684 989.437V736.132H0V143.29h754.526C765.305 78.616 819.2 35.5 889.263 35.5 964.716 35.5 1024 94.784 1024 170.237m-53.895 431.158c0-43.116-37.726-80.842-80.842-80.842-37.726 0-64.674 21.558-75.452 53.895h-59.285V197.184H53.895v485.053h161.684v199.411l269.474-199.411h404.21c43.116 0 80.842-37.726 80.842-80.842m0-431.158c0-48.505-37.726-80.842-80.842-80.842s-80.842 32.337-80.842 80.842v323.368c21.558-16.168 48.505-26.947 80.842-26.947 32.337 0 59.284 10.779 80.842 26.947V170.237"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

FaxIcon.defaultProps = {
  title: 'Fax Icon',
  decorative: true,
};

export {FaxIcon};
