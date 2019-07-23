/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface PieChartIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const PieChartIcon: React.FC<PieChartIconProps> = ({title, decorative, ...props}) => (
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
            d="M875.315 151.608C597.585-127.605 121.788-1.44 18.838 378.675c-102.949 380.115 244.214 729.113 624.894 628.21 224.386-59.484 380.539-262.56 380.468-494.708.071-136.183-54.262-266.793-151.002-362.686l2.117 2.117M547.909 73.284c92.365 7.268 180.003 43.607 250.494 103.726L547.909 426.798V73.284m-35.28 879.904C173.157 947.613-32.883 576.67 141.686 285.463 213.588 165.508 338.13 86.762 477.348 73.283v438.894a35.259 35.259 0 0021.874 32.459c4.445.847 8.961.847 13.407 0a35.326 35.326 0 0024.696-10.584L847.796 229.93c217.824 259.667 72.82 657.775-261.007 716.553-24.485 4.375-49.252 6.562-74.16 6.704"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

PieChartIcon.defaultProps = {
  title: 'Pie Chart Icon',
  decorative: true,
};

export {PieChartIcon};
