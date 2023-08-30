import * as React from 'react';
import {Box} from '@twilio-paste/core/box';
import {useUIDSeed} from '@twilio-paste/core/uid-library';
import {Input} from '@twilio-paste/core/input';
import {Label} from '@twilio-paste/core/label';
import {HelpText} from '@twilio-paste/core/help-text';
import type {GenericTokensShape} from '@twilio-paste/design-tokens/types/GenericTokensShape';

import type {TokenContextProps} from '../../context/TokenContext';

type UnitTokenInputProps = {
  bucket: keyof GenericTokensShape;
  tokenName: string;
  tokenValue: string;
  onChange: TokenContextProps['updateToken'];
  unit: string;
};

// Get a number value from a string like '10.23rem' => '10.23'
// eslint-disable-next-line consistent-return
const getTokenNumberValue = (value: string): number | undefined => {
  const numbersFromValue = value.split(/(\d+\.?\d*)/).find(Boolean);
  if (numbersFromValue != null) {
    return Number.parseFloat(numbersFromValue);
  }
};

function validateInput(value: string, unit: string): string {
  if (value === '') {
    return 'Missing value.';
  }
  if (!value.endsWith(unit)) {
    return `Value must end with unit: "${unit}"`;
  }

  const valueWithoutUnit = value.replace(unit, '');
  const numberifyInput = getTokenNumberValue(valueWithoutUnit);

  if (Number.isNaN(numberifyInput)) {
    return 'Invalid input.';
  }

  return '';
}

export const UnitTokenInput: React.FC<React.PropsWithChildren<UnitTokenInputProps>> = ({
  bucket,
  tokenName,
  tokenValue,
  onChange,
  unit = 'rem',
}) => {
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
        type="text"
        value={localValue}
        onChange={(event) => {
          const {value} = event.target;
          const error = validateInput(value, unit);
          if (error) {
            setErrorText(error);
          } else {
            setErrorText('');
            if (onChange != null) {
              onChange(bucket, tokenName, value);
            }
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
