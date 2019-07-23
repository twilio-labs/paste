/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface DropdownIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const DropdownIcon: React.FC<DropdownIconProps> = ({title, decorative, ...props}) => (
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
            d="M516.031 798.472L0 282.441 56.441 226l459.59 451.527L967.559 226 1024 282.441 516.031 798.472"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

DropdownIcon.defaultProps = {
  title: 'Dropdown Icon',
  decorative: true,
};

export {DropdownIcon};
