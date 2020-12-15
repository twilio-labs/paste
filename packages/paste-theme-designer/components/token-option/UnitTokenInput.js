import {Box} from '@twilio-paste/core/box';
import {useUIDSeed} from '@twilio-paste/uid-library';
import {Input} from '@twilio-paste/core/input';
import {Label} from '@twilio-paste/core/label';
import {HelpText} from '@twilio-paste/core/help-text';

// Get a number value from a string like '10.23rem' => '10.23'
const getTokenNumberValue = value => Number.parseFloat(value.split(/(\d+\.?\d*)/).filter(Boolean)[0]);

function validateInput(value, unit) {
  if (value === '') {
    return 'Missing value.';
  }
  if (!value.includes(unit)) {
    return `Missing unit: ${unit}`;
  }

  const valueWithoutUnit = value.replace(unit, '');
  const numberifyInput = getTokenNumberValue(valueWithoutUnit);

  if (numberifyInput === Number.isNaN(numberifyInput)) {
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
            onChange(bucket, tokenName, value);
          }
          setLocalValue(value);
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
