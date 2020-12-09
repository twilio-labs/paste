import {Box} from '@twilio-paste/core/box';
import {useUIDSeed} from '@twilio-paste/uid-library';
import {Input} from '@twilio-paste/core/input';
import {Label} from '@twilio-paste/core/label';
import {getTokenNumberValue} from './utils';

export const FontSizeTokenInput = ({bucket, tokenName, tokenValue, onChange}) => {
  const [localValue, setLocalValue] = React.useState(tokenValue);
  const seed = useUIDSeed();

  return (
    <Box key={tokenName} marginBottom="space60">
      <Label htmlFor={seed(tokenName)}>{tokenName}:</Label>
      <Input
        id={seed(tokenName)}
        type="number"
        value={localValue}
        onChange={event => {
          setLocalValue(event.target.value);
        }}
        onBlur={event => {
          const {value} = event.target;
          if (value === '') return;
          const numberInValue = getTokenNumberValue(value);
          if (numberInValue === '' || Number.isNaN(numberInValue)) return;

          const finalValue = `${numberInValue}rem`;
          // if no changes, do nothing
          if (tokenValue == finalValue) return;

          setLocalValue(finalValue);
          onChange(bucket, tokenName, finalValue);
        }}
      />
    </Box>
  );
};
