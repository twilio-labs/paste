import {Box} from '@twilio-paste/core/box';
import {useUIDSeed} from '@twilio-paste/uid-library';
import {PopoverContainer, PopoverButton, Popover} from '@twilio-paste/core/popover';
import {Label} from '@twilio-paste/core/label';
import {ChromePicker} from 'react-color';
import {getTokenNumberValue} from './utils';

export const ColorTokenInput = ({bucket, tokenName, tokenValue, onChange}) => {
  const seed = useUIDSeed();

  const handleChange = color => {
    console.log(color);
    const {r, g, b, a} = color.rgb;
    const finalValue = a !== 1 ? `rgba(${r}, ${g}, ${b}, ${a})` : `rgb(${r}, ${g}, ${b})`;

    onChange(bucket, tokenName, finalValue);
  };

  return (
    <Box key={tokenName} marginBottom="space60">
      <Label htmlFor={seed(tokenName)}>{tokenName}</Label>
      <PopoverContainer baseId={seed(`popover-${tokenName}`)}>
        <PopoverButton variant="secondary" id={seed(tokenName)}>
          {tokenValue}
        </PopoverButton>
        <Popover aria-label={`Change color for token: ${tokenName}.`}>
          <ChromePicker color={tokenValue} onChange={handleChange} />
        </Popover>
      </PopoverContainer>
    </Box>
  );
};
