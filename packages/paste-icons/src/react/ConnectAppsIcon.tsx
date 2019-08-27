/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface ConnectAppsIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const ConnectAppsIcon: React.FC<ConnectAppsIconProps> = ({title, decorative, ...props}) => (
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
            d="M237.376 1024c-50.223 0-100.447-22.322-139.51-55.804l-39.062-39.062C19.741 890.07 3 845.428 3 789.624c0-50.223 22.322-100.447 55.804-139.51l256.697-256.697c72.545-72.545 200.894-72.545 273.439 0l39.063 39.063c11.16 11.16 11.16 27.9 0 39.062-11.161 11.16-27.902 11.16-39.063 0l-39.063-39.062c-50.223-50.224-145.09-50.224-195.313 0L97.866 689.177c-27.901 27.902-39.062 61.384-39.062 100.447s16.741 72.545 39.062 100.447l39.063 39.063c50.224 50.223 145.09 50.223 195.314 0L510.815 750.56c11.16-11.16 27.902-11.16 39.062 0 11.161 11.16 11.161 27.902 0 39.063L371.305 968.196C337.823 1001.678 287.599 1024 237.376 1024m334.823-340.403c-50.224 0-100.447-22.322-139.51-55.804-11.16-11.161-11.16-27.902 0-39.063 11.161-11.161 27.902-11.161 39.063 0 50.223 50.224 145.09 50.224 195.313 0l256.698-256.697c55.804-55.804 55.804-145.09 0-195.314L884.7 97.657c-55.804-55.804-145.09-55.804-195.313 0L510.815 276.229c-11.161 11.16-27.902 11.16-39.063 0-11.161-11.161-11.161-27.902 0-39.063L650.324 58.594c78.126-78.125 200.894-78.125 273.439 0l39.063 39.063c78.125 78.125 78.125 200.893 0 273.438L706.128 627.793c-33.482 39.063-83.706 55.804-133.929 55.804"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

ConnectAppsIcon.defaultProps = {
  title: 'Connect Apps Icon',
  decorative: true,
};

ConnectAppsIcon.displayName = 'ConnectAppsIcon';

export {ConnectAppsIcon};
