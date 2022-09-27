import * as React from 'react';
import {useTheme} from '@twilio-paste/theme';
import {Box} from '@twilio-paste/box';
import {Text} from '@twilio-paste/text';

import HeartDoodleIcon from '../../icons/HeartDoodleIcon';

const SiteFooterHeader = (): JSX.Element => {
  const theme = useTheme();
  return (
    <Box
      alignItems="center"
      display="flex"
      flexDirection={['column', 'row']}
      marginBottom="space80"
      textAlign={['center', 'left']}
    >
      <HeartDoodleIcon
        css={{height: theme.heights.sizeIcon70, width: theme.widths.sizeIcon70}}
        color={theme.textColors.colorTextInverse}
        decorative
      />
      <Text
        as="h2"
        color="colorTextInverse"
        fontSize={['fontSize60', 'fontSize90']}
        fontWeight="fontWeightBold"
        lineHeight={['lineHeight60', 'lineHeight90']}
        marginLeft={['space0', 'space40']}
        marginTop={['space40', 'space0']}
      >
        Black lives matter.
      </Text>
    </Box>
  );
};

export {SiteFooterHeader};
