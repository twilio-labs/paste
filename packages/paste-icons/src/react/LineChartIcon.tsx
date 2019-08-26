/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface LineChartIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const LineChartIcon: React.FC<LineChartIconProps> = ({title, decorative, ...props}) => (
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
            d="M381.074 473.234l261.852 205.532L1024 379.611V286.72L642.926 585.874 381.074 380.343 73.143 621.714V0H0v1024h1024v-73.143H73.143v-235.52l307.931-242.103"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

LineChartIcon.defaultProps = {
  title: 'Line Chart Icon',
  decorative: true,
};

LineChartIcon.displayName = 'LineChartIcon';

export {LineChartIcon};
