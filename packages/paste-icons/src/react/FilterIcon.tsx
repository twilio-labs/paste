/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface FilterIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const FilterIcon: React.FC<FilterIconProps> = ({title, decorative, ...props}) => (
  <IconWrapper {...props}>
    <UID>
      {uid => (
        <svg role="img" aria-hidden={decorative} aria-labelledby={uid} width="100%" height="100%" viewBox="0 0 14 14">
          <title id={uid}>{title}</title>
          <path
            fill="currentColor"
            d="M8.352 13.2H5.65a.618.618 0 01-.618-.619V6.69L.15 1.02A.617.617 0 01.618 0h12.764a.618.618 0 01.468 1.021L8.97 6.69v5.891a.616.616 0 01-.618.618zm-2.085-1.237h1.468V6.46a.62.62 0 01.15-.403l4.15-4.821H1.966l4.152 4.821c.097.112.15.255.15.403v5.503z"
            fillRule="nonzero"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

FilterIcon.defaultProps = {
  title: 'Filter Icon',
  decorative: true,
};

FilterIcon.displayName = 'FilterIcon';

export {FilterIcon};
