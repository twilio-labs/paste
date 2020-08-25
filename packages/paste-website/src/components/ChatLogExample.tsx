import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Text} from '@twilio-paste/text';

export const ChatLog: React.FC<{}> = ({element = 'CHATLOG', children}) => {
  return <Box element={element}>{children}</Box>;
};

export const ChatList: React.FC<{}> = ({element = 'CHAT_LIST', children}) => {
  return (
    <Box as="ol" element={element} margin="space0" padding="space0" listStyleType="none">
      {children}
    </Box>
  );
};

export const ChatListItem: React.FC<{}> = ({element = 'CHAT_LIST_ITEM', variant = 'outbound', children}) => {
  return (
    <Box
      as="li"
      display="flex"
      element={element}
      justifyContent={variant !== 'inbound' ? 'flex-start' : 'flex-end'}
      margin="space0"
      marginBottom="space40"
      padding="space0"
    >
      {children}
    </Box>
  );
};

export const ChatBubble: React.FC<{}> = ({
  element = 'CHAT_BUBBLE',
  name,
  timeStamp,
  variant = 'outbound',
  children,
}) => {
  return (
    <Box
      backgroundColor={variant !== 'inbound' ? 'colorBackground' : 'colorBackgroundPrimary'}
      borderRadius="borderRadius20"
      element={element}
      padding="space50"
      paddingBottom="space30"
      paddingTop="space30"
      variant={variant}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box display="flex" marginRight="space30">
          <Text
            as="span"
            color={variant !== 'inbound' ? 'colorText' : 'colorTextInverse'}
            fontSize="fontSize20"
            lineHeight="lineHeight20"
            fontWeight="fontWeightSemibold"
          >
            {name}
          </Text>
        </Box>
        <Text
          as="span"
          color={variant !== 'inbound' ? 'colorText' : 'colorTextInverse'}
          fontSize="fontSize10"
          lineHeight="lineHeight20"
        >
          {timeStamp}
        </Text>
      </Box>
      <Text as="div" color={variant !== 'inbound' ? 'colorText' : 'colorTextInverse'}>
        {children}
      </Text>
    </Box>
  );
};
