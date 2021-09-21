import * as React from 'react';
import {Box} from '@twilio-paste/core/box';
import {useUIDSeed} from '@twilio-paste/uid-library';
import {Input} from '@twilio-paste/core/input';
import {Label} from '@twilio-paste/core/label';
import type {GenericTokensShape} from '@twilio-paste/design-tokens/types/GenericTokensShape';
import type {TokenContextProps} from '../../context/TokenContext';

type FontTokenInputProps = {
  bucket: keyof GenericTokensShape;
  tokenName: string;
  tokenValue: string;
  onChange: TokenContextProps['updateToken'];
};

// TODO
export const FontTokenInput: React.FC<FontTokenInputProps> = ({bucket, tokenName, tokenValue, onChange}) => {
  const seed = useUIDSeed();

  return (
    <Box key={tokenName} marginBottom="space60">
      <Label htmlFor={seed(tokenName)}>{tokenName}:</Label>
      <Input
        id={seed(tokenName)}
        type="text"
        value={tokenValue}
        onChange={(event) => {
          const {value} = event.target;
          // TODO validate
          if (value === '') return;
          if (onChange != null) {
            onChange(bucket, tokenName, event.target.value);
          }
        }}
      />
    </Box>
  );
};
