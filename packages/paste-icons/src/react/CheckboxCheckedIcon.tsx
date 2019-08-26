/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface CheckboxCheckedIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const CheckboxCheckedIcon: React.FC<CheckboxCheckedIconProps> = ({title, decorative, ...props}) => (
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
            d="M967.111 56.889v910.222H56.889V56.889h910.222M1024 0H0v1024h1024V0M284.444 455.111h56.889l113.778 113.778 227.556-227.556h56.889v56.889L455.111 682.667 284.444 512v-56.889"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

CheckboxCheckedIcon.defaultProps = {
  title: 'Checkbox Checked Icon',
  decorative: true,
};

CheckboxCheckedIcon.displayName = 'CheckboxCheckedIcon';

export {CheckboxCheckedIcon};
