import { Box } from "@twilio-paste/box";
import type { GenericTokensShape } from "@twilio-paste/design-tokens/types/GenericTokensShape";
import { ColorPickerIcon } from "@twilio-paste/icons/esm/ColorPickerIcon";
import { Input } from "@twilio-paste/input";
import { Label } from "@twilio-paste/label";
import { Popover, PopoverButton, PopoverContainer } from "@twilio-paste/popover";
import { useTheme } from "@twilio-paste/theme";
import { useUIDSeed } from "@twilio-paste/uid-library";
import * as React from "react";
import { ChromePicker } from "react-color";
import type { ColorChangeHandler, ColorResult } from "react-color";

import type { DesignerContextProps } from "./DesignerContext";

type ColorTokenInputProps = {
  bucket: keyof GenericTokensShape;
  labelText: string;
  tokenName: string;
  tokenValue: string;
  onChange: DesignerContextProps["updateToken"];
};

const isInRange = (v: number): boolean => v >= 0 && v <= 255;

export const ColorTokenInput: React.FC<React.PropsWithChildren<ColorTokenInputProps>> = ({
  bucket,
  tokenName,
  tokenValue,
  labelText,
  onChange,
}) => {
  const [localValue, setLocalValue] = React.useState(tokenValue);
  const theme = useTheme();
  const seed = useUIDSeed();

  React.useEffect(() => {
    setLocalValue(tokenValue);
  }, [tokenValue]);

  const handleColorChange: ColorChangeHandler = (color: ColorResult): void => {
    const { r, g, b, a } = color.rgb;
    const finalValue = a !== 1 ? `rgba(${r}, ${g}, ${b}, ${a})` : `rgb(${r}, ${g}, ${b})`;

    if (onChange != null) {
      onChange(bucket, tokenName, finalValue);
    }
    setLocalValue(finalValue);
  };

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (event): void => {
    const { value } = event.target;
    const isRGB = value.startsWith("rgb(");
    const isRGBA = value.startsWith("rgba(");
    const valueParts = value.split(",");
    const partOne = Number.parseInt(valueParts[0].split("(")[1], 10);
    const partTwo = Number.parseInt(valueParts[1], 10);
    const partThree = Number.parseInt(valueParts[2].replace(")", ""), 10);
    const partFour = valueParts[3] ? Number.parseFloat(valueParts[3].replace(")", "")) : null;

    // eslint-disable-next-line sonarjs/no-collapsible-if
    if (
      (isRGB || isRGBA) &&
      value.endsWith(")") &&
      (valueParts.length === 3 || valueParts.length === 4) &&
      isInRange(partOne) &&
      isInRange(partTwo) &&
      isInRange(partThree)
    ) {
      // eslint-disable-next-line sonarjs/no-collapsible-if
      if (!partFour || (isRGBA && partFour <= 1 && partFour >= 0)) {
        if (onChange != null) {
          onChange(bucket, tokenName, value);
        }
      }
    }
    setLocalValue(value);
  };

  /*
   * For color picker styling see:
   * https://github.com/casesandberg/react-color/blob/master/src/components/chrome/Chrome.js#L11
   */
  return (
    <Box key={tokenName}>
      <Label htmlFor={seed(tokenName)}>{labelText}</Label>
      <PopoverContainer baseId={seed(`popover-${tokenName}`)}>
        <Input
          id={seed(tokenName)}
          name={tokenName}
          type="text"
          value={localValue}
          insertAfter={
            <PopoverButton variant="link" id={seed(`popover-${tokenName}`)}>
              <ColorPickerIcon decorative={false} size="sizeIcon20" title={`Change ${labelText} color`} />
            </PopoverButton>
          }
          onChange={handleInputChange}
        />
        <Popover aria-label={`Change color for token: ${labelText}.`}>
          <Box marginTop="space40" marginRight="space30">
            <ChromePicker
              onChange={handleColorChange}
              styles={{
                default: { picker: { boxShadow: "none" }, saturation: { borderRadius: theme.radii.borderRadius10 } },
              }}
              color={tokenValue}
              // @ts-expect-error defaultView doesn't seem to be typed
              defaultView="rgb"
            />
          </Box>
        </Popover>
      </PopoverContainer>
    </Box>
  );
};
