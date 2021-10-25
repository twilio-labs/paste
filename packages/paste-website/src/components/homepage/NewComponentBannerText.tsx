import * as React from 'react-16';
import {Text} from '@twilio-paste/text';

const NewComponentBannerText: React.FC = ({children}) => {
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

export {NewComponentBannerText};
