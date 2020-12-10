import {Box} from '@twilio-paste/core/box';
import {useUIDSeed} from '@twilio-paste/uid-library';
import {Input} from '@twilio-paste/core/input';
import {Label} from '@twilio-paste/core/label';

// TODO
export const FontTokenInput = ({bucket, tokenName, tokenValue, onChange}) => {
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
