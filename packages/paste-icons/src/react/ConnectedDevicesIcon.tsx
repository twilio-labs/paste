/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface ConnectedDevicesIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const ConnectedDevicesIcon: React.FC<ConnectedDevicesIconProps> = ({title, decorative, ...props}) => (
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
            d="M435.6 512c0 59.136 64 96.051 115.2 66.509A76.805 76.805 0 00589.2 512c0-59.136-64-96.051-115.2-66.509A76.805 76.805 0 00435.6 512m435.2-51.2H672.144L563.6 345.088V0h307.2v460.8m-176.64-51.2H819.6V51.2H614.8v273.92l79.36 84.48M870.8 1024H563.6V683.52L676.24 563.2H870.8V1024m-256-51.2h204.8V614.4H698.256L614.8 703.488V972.8M461.2 1024H154V563.2h194.56L461.2 683.52V1024m-256-51.2H410V703.488L326.544 614.4H205.2v358.4m147.456-512H154V0h307.2v345.088L352.656 460.8M205.2 409.6h125.44L410 325.12V51.2H205.2v358.4"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

ConnectedDevicesIcon.defaultProps = {
  title: 'Connected Devices Icon',
  decorative: true,
};

ConnectedDevicesIcon.displayName = 'ConnectedDevicesIcon';

export {ConnectedDevicesIcon};
