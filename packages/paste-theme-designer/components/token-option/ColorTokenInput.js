import {Box} from '@twilio-paste/core/box';
import {useTheme} from '@twilio-paste/core/theme';
import {useUIDSeed} from '@twilio-paste/uid-library';
import {PopoverContainer, PopoverButton, Popover} from '@twilio-paste/core/popover';
import {Label} from '@twilio-paste/core/label';
import {ChromePicker} from 'react-color';
import {Input} from '@twilio-paste/core/input';
import {EditIcon} from '@twilio-paste/icons/cjs/EditIcon';

const isInRange = v => v >= 0 && v <= 255;

export const ColorTokenInput = ({bucket, tokenName, tokenValue, onChange}) => {
  const [localValue, setLocalValue] = React.useState(tokenValue);
  const theme = useTheme();
  const seed = useUIDSeed();

  const handleColorChange = color => {
    const {r, g, b, a} = color.rgb;
    const finalValue = a !== 1 ? `rgba(${r}, ${g}, ${b}, ${a})` : `rgb(${r}, ${g}, ${b})`;

    onChange(bucket, tokenName, finalValue);
    setLocalValue(finalValue);
  };

  const handleInputChange = event => {
    const {value} = event.target;
    const isRGB = value.startsWith('rgb(');
    const isRGBA = value.startsWith('rgba(');
    const valueParts = value.split(',');
    const partOne = Number.parseInt(valueParts[0].split('(')[1], 10);
    const partTwo = Number.parseInt(valueParts[1], 10);
    const partThree = Number.parseInt(valueParts[2].replace(')', ''), 10);
    const partFour = valueParts[3] ? Number.parseFloat(valueParts[3].replace(')', '')) : null;
    if (
      (isRGB || isRGBA) &&
      value.endsWith(')') &&
      (valueParts.length === 3 || valueParts.length === 4) &&
      isInRange(partOne) &&
      isInRange(partTwo) &&
      isInRange(partThree)
    ) {
      if (!partFour || (isRGBA && partFour <= 1 && partFour >= 0)) {
        onChange(bucket, tokenName, value);
      }
    }
    setLocalValue(value);
  };

  // For color picker styling see:
  // https://github.com/casesandberg/react-color/blob/master/src/components/chrome/Chrome.js#L11
  return (
    <Box key={tokenName} marginBottom="space60">
      <Label htmlFor={seed(tokenName)}>{tokenName}</Label>
      <PopoverContainer baseId={seed(`popover-${tokenName}`)}>
        <Input
          id={seed(tokenName)}
          name={tokenName}
          type="text"
          value={localValue}
          insertAfter={
            <PopoverButton variant="link" id={seed(`popover-${tokenName}`)}>
              <EditIcon decorative={false} size="sizeIcon20" title="Get more info" />
            </PopoverButton>
          }
          onChange={handleInputChange}
        />
        <Popover aria-label={`Change color for token: ${tokenName}.`}>
          <Box marginTop="space40" marginRight="space30">
            <ChromePicker
              onChangeComplete={handleColorChange}
              styles={{default: {picker: {boxShadow: 'none'}, saturation: {borderRadius: theme.radii.borderRadius10}}}}
              color={tokenValue}
              defaultView="rgb"
            />
          </Box>
        </Popover>
      </PopoverContainer>
    </Box>
  );
};
