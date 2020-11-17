import * as React from 'react';
import {Card} from '@twilio-paste/core/card';

export const GetStartedCard: React.FC = ({children}) => {
  return <Card padding="space70">{children}</Card>;
};
