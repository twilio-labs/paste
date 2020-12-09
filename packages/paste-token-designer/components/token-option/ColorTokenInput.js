import {Box} from '@twilio-paste/core/box';
import {useUIDSeed} from '@twilio-paste/uid-library';
import {PopoverContainer, PopoverButton, Popover} from '@twilio-paste/core/popover';
import {Label} from '@twilio-paste/core/label';
import {ChromePicker} from 'react-color';
import {Input} from '@twilio-paste/core/input';
import {EditIcon} from '@twilio-paste/icons/cjs/EditIcon';

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
        <Input
          id={seed(tokenName)}
          name={tokenName}
          type="text"
          value={tokenValue}
          insertAfter={
            <PopoverButton variant="link" id={seed(`popover-${tokenName}`)}>
              <EditIcon decorative={false} size="sizeIcon20" title="Get more info" />
            </PopoverButton>
          }
          onChange={handleChange}
        />
        <Popover aria-label={`Change color for token: ${tokenName}.`}>
          <Box marginTop="space40" marginRight="space30">
            <ChromePicker
              onChange={handleChange}
              styles={{default: {picker: {'box-shadow': 'none'}}}}
              color={tokenValue}
              defaultView="rgb"
            />
          </Box>
        </Popover>
      </PopoverContainer>
    </Box>
  );
};
