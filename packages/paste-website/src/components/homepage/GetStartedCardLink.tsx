import * as React from 'react';
import {Text} from '@twilio-paste/text';

import type {SiteLinkProps} from '../SiteLink';
import {SiteLink} from '../SiteLink';

interface GetStartedCardLinkProps {
  to: SiteLinkProps['to'];
  onClick?: () => void;
}
export const GetStartedCardLink: React.FC<React.PropsWithChildren<GetStartedCardLinkProps>> = ({
  children,
  onClick,
  to,
}) => {
  return (
    <Text as="p" fontWeight="fontWeightSemibold">
      <SiteLink to={to} onClick={onClick}>
        {children}
      </SiteLink>
    </Text>
  );
};
