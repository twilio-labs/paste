/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface FlexIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const FlexIcon: React.FC<FlexIconProps> = ({title, decorative, ...props}) => (
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
            d="M54.425 402.184C35.216 382.976 0 395.781 0 424.595V715.93c0 9.604 3.201 16.007 9.604 22.41l275.327 275.326c19.209 19.21 54.425 6.403 54.425-22.41V699.921c0-9.604-3.202-16.007-9.604-22.41L54.425 402.184M32.015 2C16.007 2 0 18.008 0 34.015v211.297c0 9.605 3.201 16.008 9.604 22.411L480.221 738.34c6.403 6.403 12.806 9.604 22.41 9.604h326.55c28.813 0 41.619-35.216 22.41-54.425L576.265 414.99c-6.403-6.403-12.806-9.604-22.411-9.604H374.572c-16.007 0-32.015-12.806-32.015-32.015 0-16.007 12.806-32.015 32.015-32.015h617.884c28.813 0 41.619-35.216 22.41-54.425L739.54 11.605C733.137 5.202 723.532 2 717.13 2H32.015"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

FlexIcon.defaultProps = {
  title: 'Flex Icon',
  decorative: true,
};

export {FlexIcon};
