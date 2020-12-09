import {Box} from '@twilio-paste/core/box';
import {useUIDSeed} from '@twilio-paste/uid-library';
import {Input} from '@twilio-paste/core/input';
import {Label} from '@twilio-paste/core/label';
import {getTokenNumberValue} from './utils';

export const UnitTokenInput = ({bucket, tokenName, tokenValue, onChange, unit = 'rem'}) => {
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
          // TODO show empty error
          if (value === '') return;

          // Only preserve alpha numeric values
          const sanitizedValue = value.replace(/[^0-9a-z\.]/gi, '');
          const numberInValue = getTokenNumberValue(sanitizedValue);
          // TODO show error
          if (numberInValue === '' || Number.isNaN(numberInValue)) return;

          const finalValue = `${numberInValue}${unit}`;
          // if no changes, do nothing
          if (tokenValue == finalValue) return;

          setLocalValue(finalValue);
          onChange(bucket, tokenName, finalValue);
        }}
      />
    </Box>
  );
};
