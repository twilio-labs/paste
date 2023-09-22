import { Text } from '@twilio-paste/text';
import * as React from 'react';

const NewComponentBannerText: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Text
      as="span"
      fontSize={['fontSize20', 'fontSize30']}
      fontWeight="fontWeightSemibold"
      lineHeight={['lineHeight20', 'lineHeight30']}
    >
      {children}
    </Text>
  );
};

export { NewComponentBannerText };
