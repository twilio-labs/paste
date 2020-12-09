import {Box} from '@twilio-paste/core/box';
import {useUIDSeed} from '@twilio-paste/uid-library';
import {Input} from '@twilio-paste/core/input';
import {Label} from '@twilio-paste/core/label';

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
