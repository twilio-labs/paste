import * as React from 'react';
import {Text} from '@twilio-paste/text';
import {SiteLink, SiteLinkProps} from '../SiteLink';

interface GetStartedCardLinkProps {
  to: SiteLinkProps['to'];
}
export const GetStartedCardLink: React.FC<GetStartedCardLinkProps> = ({children, to}) => {
  return (
    <Text as="p" fontWeight="fontWeightSemibold">
      <SiteLink to={to}>{children}</SiteLink>
    </Text>
  );
};
