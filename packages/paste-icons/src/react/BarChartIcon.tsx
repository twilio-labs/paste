/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface BarChartIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const BarChartIcon: React.FC<BarChartIconProps> = ({title, decorative, ...props}) => (
  <IconWrapper {...props}>
    <UID>
      {uid => (
        <svg role="img" aria-hidden={decorative} aria-labelledby={uid} width="100%" height="100%" viewBox="0 0 16 16">
          <title id={uid}>{title}</title>
          <path
            fill="currentColor"
            d="M14 4h1v12h-4V4h3zm0 11V5h-2v10h2zM7 0h3v16H6V0h1zm2 15V1H7v14h2zM2 9h3v7H1V9h1zm2 6v-5H2v5h2z"
            fillRule="evenodd"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

BarChartIcon.defaultProps = {
  title: 'Bar Chart Icon',
  decorative: true,
};

export {BarChartIcon};
