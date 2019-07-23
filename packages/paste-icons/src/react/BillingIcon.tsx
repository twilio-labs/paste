/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface BillingIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const BillingIcon: React.FC<BillingIconProps> = ({title, decorative, ...props}) => (
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
            d="M512 1024C229.222 1024 0 794.778 0 512S229.222 0 512 0s512 229.222 512 512-229.222 512-512 512m0-51.2c254.515 0 460.8-206.285 460.8-460.8 0-254.515-206.285-460.8-460.8-460.8C257.485 51.2 51.2 257.485 51.2 512c0 254.515 206.285 460.8 460.8 460.8m58.214-703.949c26.676 4.659 49.306 11.981 67.226 20.634l-8.653 55.91c-18.637-11.315-41.933-21.299-67.84-27.289-.051 0-22.681 144.435-22.681 145.1 80.537 28.621 117.811 64.564 117.811 130.458 0 77.21-54.579 125.798-151.091 125.798h-5.991l-12.646 78.541-42.599-9.318c.052 0 11.367-73.216 11.367-73.216-36.608-5.325-68.557-15.975-90.522-27.29l7.987-55.91c27.956 15.974 57.908 27.955 91.802 33.945.051 0 25.344-162.406 24.678-162.406-79.206-27.955-113.817-57.242-113.817-121.805 0-77.875 58.573-117.811 141.773-117.811h8.652l7.936-49.92c.052 0 43.981 9.984 43.981 9.984l-7.321 44.595m-64.564 401.357h3.994c62.566 0 91.187-26.624 91.187-73.216 0-33.28-13.312-57.242-71.219-79.206l-23.962 152.422m13.312-357.427h-9.984c-53.248 0-79.872 24.627-79.872 63.897 0 34.612 16.64 52.583 68.557 72.551.666-.666 21.299-136.448 21.299-136.448"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

BillingIcon.defaultProps = {
  title: 'Billing Icon',
  decorative: true,
};

export {BillingIcon};
