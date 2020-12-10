import {Box} from '@twilio-paste/core/box';
import {useUIDSeed} from '@twilio-paste/uid-library';
import {Input} from '@twilio-paste/core/input';
import {Label} from '@twilio-paste/core/label';
import {HelpText} from '@twilio-paste/core/help-text';

const getTokenNumberValue = value => Number.parseFloat(value.split(/(\d+\.?\d*)/).filter(Boolean)[0]);

function validateInput(input, unit) {
  if (!input.includes(unit)) {
    return `Missing unit: ${unit}`;
  }

  const inputWithoutUnit = input.replace(unit, '');
  const numberifyInput = parseFloat(inputWithoutUnit);
  if (Number.isNaN(numberifyInput)) {
    return 'Invalid input.';
  }

  return '';
}

export const UnitTokenInput = ({bucket, tokenName, tokenValue, onChange, unit = 'rem'}) => {
  const [errorText, setErrorText] = React.useState('');
  const [localValue, setLocalValue] = React.useState(tokenValue === '0' ? `${tokenValue}${unit}` : tokenValue);
  const seed = useUIDSeed();
  const inputId = seed(tokenName);
  const errorId = seed(`error-${tokenName}`);

  return (
    <Box key={tokenName} marginBottom="space60">
      <Label htmlFor={inputId}>{tokenName}:</Label>
      <Input
        id={inputId}
        aria-describedby={errorText ? errorId : undefined}
        type="number"
        value={localValue}
        onChange={event => {
          const {value} = event.target;
          const error = validateInput(value, unit);
          if (error) {
            setErrorText(error);
          } else {
            setErrorText('');
          }
          setLocalValue(value);
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
      {errorText ? (
        <HelpText id={errorId} variant="error">
          {errorText}
        </HelpText>
      ) : null}
    </Box>
  );
};
