import {Box} from '@twilio-paste/core/box';
import {useUIDSeed} from '@twilio-paste/uid-library';
import {Input} from '@twilio-paste/core/input';
import {Label} from '@twilio-paste/core/label';
import {Stack} from '@twilio-paste/core/stack';
import {Disclosure, DisclosureHeading, DisclosureContent} from '@twilio-paste/core/disclosure';

import {getTokenBuckets} from './getTokenBuckets';

const collator = new Intl.Collator(undefined, {numeric: true, sensitivity: 'base'});

export const OptionsList = ({bucket, options, handleChange}) => {
  const seed = useUIDSeed();
  const sortedNames = Object.keys(options).sort(collator.compare);

  return (
    <Stack orientation="vertical" spacing="space60">
      {sortedNames.map(tokenName => {
        return (
          <Box key={tokenName}>
            <Label htmlFor={seed(tokenName)}>{tokenName}:</Label>
            <Input
              id={seed(tokenName)}
              type="text"
              value={options[tokenName]}
              onChange={event => {
                const {value} = event.target;
                // TODO validate
                if (value === '') return;
                handleChange(bucket, tokenName, event.target.value);
              }}
            />
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
