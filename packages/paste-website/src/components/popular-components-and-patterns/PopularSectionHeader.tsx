import * as React from 'react';
import {Box} from '@twilio-paste/core/box';

const PopularSectionHeader: React.FC = () => {
  return (
    <Box
      as="h4"
      color="colorTextWeak"
      fontWeight="fontWeightBold"
      marginBottom="space110"
      marginTop="space0"
      position="relative"
      _after={{
        borderTopColor: 'colorBorderLight',
        borderTopStyle: 'solid',
        borderTopWidth: 'borderWidth10',
        content: `""`,
        display: 'block',
        height: '1px',
        marginLeft: 'space160',
        position: 'absolute',
        top: '50%',
        width: 'calc(100% - 3.75rem)', // 100% - space160
      }}
    >
      Popular
    </Box>
  );
};

export {PopularSectionHeader};
