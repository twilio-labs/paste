import {Box} from '@twilio-paste/core/box';
import {Text} from '@twilio-paste/core/text';

const TopBar = () => {
  return (
    <Box
      as="header"
      alignItems="center"
      display="flex"
      backgroundColor="colorBackgroundPrimaryDarkest"
      paddingX="space60"
      paddingY="space80"
      position="sticky"
      top={0}
      zIndex="zIndex10"
    >
      <Text as="h1" color="colorTextInverse" fontWeight="fontWeightSemibold" fontSize="fontSize60">
        Paste Theme Designer
      </Text>
    </Box>
  );
};

export {TopBar};
