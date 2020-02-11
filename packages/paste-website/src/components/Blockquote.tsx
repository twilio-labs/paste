import * as React from 'react';
import {Anchor} from '@twilio-paste/anchor';
import {Box} from '@twilio-paste/box';
import {Text} from '@twilio-paste/text';

interface Props {
  name?: string;
  source?: string;
  sourceUrl?: string;
}

const Citation: React.FC<Props> = ({name, source, sourceUrl}) => {
  return (
    <Text as="footer" fontWeight="fontWeightSemibold" marginTop="space40">
      &mdash; {name}
      {source && ', '}
      {source && (
        <cite>{sourceUrl ? <Anchor href={sourceUrl}>{source}</Anchor> : <Text as="span">{source}</Text>}</cite>
      )}
    </Text>
  );
};

export const Blockquote: React.FC<Props> = ({children, name, source, sourceUrl}) => {
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
      {name && <Citation name={name} source={source} sourceUrl={sourceUrl} />}
    </Box>
  );
};
