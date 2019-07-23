/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface HelpIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const HelpIcon: React.FC<HelpIconProps> = ({title, decorative, ...props}) => (
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
            d="M421.271 948.04c0 58.4 63.177 94.88 113.765 65.68 23.435-13.576 37.921-38.604 37.921-65.68 0-58.399-63.177-94.88-113.765-65.68-23.435 13.576-37.921 38.604-37.921 65.68m113.765-242.698h-75.844c0-159.27 75.844-235.114 136.518-295.789 53.09-45.506 91.012-91.012 91.012-159.27 0-98.597-75.843-174.44-174.439-174.44-98.597 0-174.44 75.843-174.44 174.44H262C262 113.765 375.765 0 512.283 0 648.8 0 762.565 113.765 762.565 250.283c0 98.596-53.09 159.27-113.765 212.361-53.09 60.674-113.764 121.35-113.764 242.698"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

HelpIcon.defaultProps = {
  title: 'Help Icon',
  decorative: true,
};

export {HelpIcon};
