/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface PluginIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const PluginIcon: React.FC<PluginIconProps> = ({title, decorative, ...props}) => (
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
            d="M235.351 276.757v138.378c0 76.44 61.939 138.379 138.379 138.379h276.756c76.441 0 138.379-61.939 138.379-138.379V276.757H235.351m608.865-55.352v193.73c0 106.994-86.735 193.73-193.73 193.73H373.73c-106.994 0-193.73-86.736-193.73-193.73v-193.73h664.216m-498.162-55.351h-55.351V0h55.351v166.054m387.46 0h-55.352V0h55.352v166.054M512.108 581.189c0-15.277 12.399-27.675 27.676-27.675s27.675 12.398 27.675 27.675v55.352c0 45.83-37.196 83.027-83.027 83.027H318.378c-15.277 0-27.675 12.398-27.675 27.675 0 15.277 12.398 27.676 27.675 27.676h387.46c45.831 0 83.027 37.196 83.027 83.027s-37.196 83.027-83.027 83.027H539.784c-15.277 0-27.676 12.399-27.676 27.676v27.675c0 15.277-12.399 27.676-27.676 27.676s-27.675-12.399-27.675-27.676v-27.675c0-45.831 37.196-83.027 83.027-83.027h166.054c15.277 0 27.676-12.399 27.676-27.676s-12.399-27.676-27.676-27.676h-387.46c-45.831 0-83.027-37.196-83.027-83.027s37.196-83.027 83.027-83.027h166.054c15.277 0 27.676-12.398 27.676-27.675v-55.352"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

PluginIcon.defaultProps = {
  title: 'Plugin Icon',
  decorative: true,
};

PluginIcon.displayName = 'PluginIcon';

export {PluginIcon};
