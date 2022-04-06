import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';
import {Box} from '@twilio-paste/box';
import {Label} from '@twilio-paste/label';
import {Option, Select} from '@twilio-paste/select';
import {Stack} from '@twilio-paste/stack';
import {Separator} from '@twilio-paste/separator';

import {ColorTokenInput} from './ColorTokenInput';
import {UnitTokenInput} from './UnitTokenInput';
import {DesignerContext} from './DesignerContext';
import {TextTokenInput} from './TextToken';

export const DesignerControls: React.FC = () => {
  const {tokens, updateToken} = React.useContext(DesignerContext);

  const [fontFamily, setFontFamily] = React.useState('Inter var experimental');

  React.useEffect(() => {
    if (tokens.fonts?.fontFamilyText !== fontFamily) {
      setFontFamily('Inter var experimental');
    }
  }, [tokens]);

  const fontFamilyId = useUID();

  return (
    <Box
      as="form"
      backgroundColor="colorBackground"
      borderTopRightRadius="borderRadius20"
      borderBottomRightRadius="borderRadius20"
      width="size30"
      padding="space70"
    >
      <Box as="fieldset" border="none" padding="space0" margin="space0">
        <Stack orientation="vertical" spacing="space40">
          <Label htmlFor="" as="legend" marginBottom="space0">
            Text styles
          </Label>
          <div>
            <Label htmlFor={fontFamilyId}>Font family</Label>
            <Select
              id={fontFamilyId}
              onChange={(e) => {
                if (updateToken != null) {
                  updateToken('fonts', 'fontFamilyText', e.currentTarget.value);
                }
                setFontFamily(e.currentTarget.value);
              }}
              value={fontFamily}
            >
              <Option value="Inter var experimental">Inter</Option>
              <Option value="Lato, 'Inter var experimental'">Lato</Option>
              <Option value="'Noto Sans Display', 'Inter var experimental'">Noto Sans Display</Option>
              <Option value="'Open Sans', 'Inter var experimental'">Open Sans</Option>
              <Option value="Poppins, 'Inter var experimental'">Poppins</Option>
            </Select>
          </div>
          <ColorTokenInput
            labelText="Standard text color"
            tokenName="colorText"
            tokenValue={tokens.textColors?.colorText}
            bucket="textColors"
            onChange={updateToken}
          />
          <ColorTokenInput
            labelText="Button text color"
            tokenName="colorTextWeakest"
            tokenValue={tokens.textColors?.colorTextWeakest}
            bucket="textColors"
            onChange={updateToken}
          />
          <ColorTokenInput
            labelText="Link text color"
            tokenName="colorTextLink"
            tokenValue={tokens.textColors?.colorTextLink}
            bucket="textColors"
            onChange={updateToken}
          />
          <ColorTokenInput
            labelText="Link Hover text color"
            tokenName="colorTextLinkStronger"
            tokenValue={tokens.textColors?.colorTextLinkStronger}
            bucket="textColors"
            onChange={updateToken}
          />
        </Stack>
      </Box>
      <Separator orientation="horizontal" verticalSpacing="space80" />
      <Box as="fieldset" border="none" padding="space0" margin="space0">
        <Stack orientation="vertical" spacing="space40">
          <Label htmlFor="" as="legend" marginBottom="space0">
            Background styles
          </Label>
          <ColorTokenInput
            labelText="Button color"
            tokenName="colorBackgroundPrimary"
            tokenValue={tokens.backgroundColors?.colorBackgroundPrimary}
            bucket="backgroundColors"
            onChange={updateToken}
          />
          <ColorTokenInput
            labelText="Button hover color"
            tokenName="colorBackgroundPrimaryStronger"
            tokenValue={tokens.backgroundColors?.colorBackgroundPrimaryStronger}
            bucket="backgroundColors"
            onChange={updateToken}
          />
          <ColorTokenInput
            labelText="Button active color"
            tokenName="colorBackgroundPrimaryStrongest"
            tokenValue={tokens.backgroundColors?.colorBackgroundPrimaryStrongest}
            bucket="backgroundColors"
            onChange={updateToken}
          />
        </Stack>
      </Box>
      <Separator orientation="horizontal" verticalSpacing="space80" />
      <Box as="fieldset" border="none" padding="space0" margin="space0">
        <Stack orientation="vertical" spacing="space40">
          <Label htmlFor="" as="legend" marginBottom="space0">
            Border styles
          </Label>
          <UnitTokenInput
            labelText="Standard border radius"
            tokenName="borderRadius20"
            tokenValue={tokens.radii?.borderRadius20}
            unit="px"
            bucket="radii"
            onChange={updateToken}
          />
          <TextTokenInput
            labelText="Input border"
            tokenName="shadowBorder"
            tokenValue={tokens.boxShadows?.shadowBorder}
            bucket="boxShadows"
            onChange={updateToken}
          />
          <TextTokenInput
            labelText="Input hover border"
            tokenName="shadowBorderPrimaryStrong"
            tokenValue={tokens.boxShadows?.shadowBorderPrimaryStrong}
            bucket="boxShadows"
            onChange={updateToken}
          />
          <TextTokenInput
            labelText="Focus shadow"
            tokenName="shadowFocus"
            tokenValue={tokens.boxShadows?.shadowFocus}
            bucket="boxShadows"
            onChange={updateToken}
          />
        </Stack>
      </Box>
    </Box>
  );
};
