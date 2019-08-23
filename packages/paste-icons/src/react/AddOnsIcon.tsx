/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface AddOnsIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const AddOnsIcon: React.FC<AddOnsIconProps> = ({title, decorative, ...props}) => (
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
            d="M567.282 1024V574.464l385.996-220.109v449.536L567.282 1024m55.142-417.638v322.457l275.712-158.464V447.898L622.424 606.362M456.997 1024L71 803.891V267.418L536.408 0l409.19 234.957-488.601 280.627V1024M126.142 770.355l275.712 158.464V483.686l433.408-248.729L536.408 63.283 126.142 299.315v471.04"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

AddOnsIcon.defaultProps = {
  title: 'Add Ons Icon',
  decorative: true,
};

AddOnsIcon.displayName = 'AddOnsIcon';

export {AddOnsIcon};
