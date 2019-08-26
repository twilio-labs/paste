/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface AccountProfileIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const AccountProfileIcon: React.FC<AccountProfileIconProps> = ({title, decorative, ...props}) => (
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
            d="M512.346 472.615c-133.908 0-236.308-102.4-236.308-236.307C276.038 102.4 378.438 0 512.346 0s236.308 102.4 236.308 236.308c0 133.907-102.4 236.307-236.308 236.307m0-393.846c-86.646 0-157.538 70.893-157.538 157.539 0 86.646 70.892 157.538 157.538 157.538 86.646 0 157.539-70.892 157.539-157.538 0-86.646-70.893-157.539-157.539-157.539M906.192 1024h-78.769c0-173.292-141.785-315.077-315.077-315.077S197.269 850.708 197.269 1024H118.5c0-220.554 173.292-393.846 393.846-393.846S906.192 803.446 906.192 1024"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

AccountProfileIcon.defaultProps = {
  title: 'Account Profile Icon',
  decorative: true,
};

AccountProfileIcon.displayName = 'AccountProfileIcon';

export {AccountProfileIcon};
