import * as React from 'react';
import { Box } from '@twilio-paste/box';
import { Text } from '@twilio-paste/text';
interface Props {
  name: string;
  source: string;
}
export const Blockquote: React.FC<Props> = ({ children, name, source }) => {
  return (
    <Box
      borderLeftWidth="borderWidth20"
      borderColor="colorBorderPrimaryLight"
      borderLeftStyle="solid"
      paddingLeft="space60"
      paddingTop="space30"
      paddingBottom="space30"
      marginTop="space60"
      marginBottom="space60"
    >
      <Text as="p" fontSize="fontSize40" lineHeight="lineHeight50">
        {children}
      </Text>
      {name && (
        <Text as="footer" fontWeight="fontWeightSemibold" marginTop="space40">
          &mdash; {name}
          {source && <cite>, {source}</cite>}
        </Text>
      )}
    </Box>
  );
};
