import * as React from 'react-16';
import {Box} from '@twilio-paste/box';
import {Text} from '@twilio-paste/text';

const NewComponentBannerBadge: React.FC = ({children}) => {
  return (
    <Box
      as="span"
      backgroundColor="colorBackgroundNew"
      borderRadius="borderRadius10"
      marginRight="space30"
      paddingX="space30"
    >
      <Text
        as="span"
        color="colorTextNew"
        fontSize="fontSize20"
        fontWeight="fontWeightSemibold"
        lineHeight="lineHeight20"
      >
        {children}
      </Text>
    </Box>
  );
};

export {NewComponentBannerBadge};
