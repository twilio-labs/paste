import {Box} from '@twilio-paste/core/box';
import {useUIDSeed} from '@twilio-paste/uid-library';
import {Input} from '@twilio-paste/core/input';
import {Label} from '@twilio-paste/core/label';
import {Stack} from '@twilio-paste/core/stack';
import {Disclosure, DisclosureHeading, DisclosureContent} from '@twilio-paste/core/disclosure';
import {TokenContext} from '../../../context/TokenContext';
import {getTokenBuckets} from '../../../utils/getTokenBuckets';

const collator = new Intl.Collator(undefined, {numeric: true, sensitivity: 'base'});

const TokenItem = ({bucket, tokenName, tokenValue, onChange}) => {
  const seed = useUIDSeed();

  return (
    <Box key={tokenName} marginBottom="space60">
      <Label htmlFor={seed(tokenName)}>{tokenName}:</Label>
      <Input
        id={seed(tokenName)}
        type="text"
        value={tokenValue}
        onChange={event => {
          const {value} = event.target;
          // TODO validate
          if (value === '') return;
          onChange(bucket, tokenName, event.target.value);
        }}
      />
    </Box>
  );
};

export const OptionsList = ({bucket, options, handleChange}) => {
  const sortedNames = Object.keys(options).sort(collator.compare);

  return (
    <>
      {sortedNames.map(tokenName => (
        <TokenItem
          bucket={bucket}
          key={tokenName}
          tokenName={tokenName}
          tokenValue={options[tokenName]}
          onChange={handleChange}
        />
      ))}
    </>
  );
};

export default function EditPane() {
  const {tokens, updateTokens} = React.useContext(TokenContext);
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
              <OptionsList bucket={name} options={options} handleChange={updateTokens} />
            </DisclosureContent>
          </Disclosure>
        );
      })}
    </Box>
  );
}
