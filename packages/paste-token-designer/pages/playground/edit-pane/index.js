import {Box} from '@twilio-paste/core/box';
import {Input} from '@twilio-paste/core/input';
import {Label} from '@twilio-paste/core/label';
import {Stack} from '@twilio-paste/core/stack';
import {Disclosure, DisclosureHeading, DisclosureContent} from '@twilio-paste/core/disclosure';

import {getTokenBuckets} from './getTokenBuckets';

export const OptionsList = ({bucket, options, handleChange}) => {
  return (
    <Stack orientation="vertical" spacing="space60">
      {Object.keys(options).map(key => {
        return (
          <Box key={key}>
            <Label>{key}:</Label>
            <Input type="text" value={options[key]} onChange={e => handleChange(bucket, key, e.target.value)} />
          </Box>
        );
      })}
    </Stack>
  );
};

export function EditPane({tokens, handleChange}) {
  const tokenBuckets = getTokenBuckets(tokens);
  return (
    <Box maxWidth="size50" width="100%" overflow="scroll" padding="space60">
      {tokenBuckets.map(([name, options]) => {
        return (
          <Disclosure key={name}>
            <DisclosureHeading as="h2" variant="heading20">
              {name}
            </DisclosureHeading>
            <DisclosureContent>
              <OptionsList bucket={name} options={options} handleChange={handleChange} />
            </DisclosureContent>
          </Disclosure>
        );
      })}
    </Box>
  );
}
