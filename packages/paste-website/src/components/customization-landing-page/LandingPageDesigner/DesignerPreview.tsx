import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Heading} from '@twilio-paste/heading';
import {Label} from '@twilio-paste/label';
import {Input} from '@twilio-paste/input';
import {Stack} from '@twilio-paste/stack';
import {useUID} from '@twilio-paste/uid-library';
import {Checkbox} from '@twilio-paste/checkbox';
import {Column, Grid} from '@twilio-paste/grid';
import {Option, Select} from '@twilio-paste/select';
import {Button} from '@twilio-paste/button';
import {Anchor} from '@twilio-paste/anchor';
import {CustomizationProvider} from '@twilio-paste/customization';
import {generateThemeFromTokens} from '@twilio-paste/theme';

import {useDarkModeContext} from '../../../context/DarkModeContext';
import {DesignerContext} from './DesignerContext';

export const DesignerPreview: React.FC = () => {
  const {theme: currentThemeMode} = useDarkModeContext();
  const {tokens} = React.useContext(DesignerContext);
  // @ts-expect-error tokens from context are based on GenericTokenShape which states that sizing keys are as optional as the rest, but generateThemeFromTokens expects sizing keys to be required
  const customThemeFromTokens = generateThemeFromTokens(tokens);
  const phoneNumberInputId = useUID();
  const emailInputId = useUID();
  const firstNameInputId = useUID();
  const lastNameInputId = useUID();
  const addressInputId = useUID();
  const address2InputId = useUID();
  const cityInputId = useUID();
  const countryInputId = useUID();
  const stateInputId = useUID();
  const zipInputId = useUID();

  return (
    <Box
      as="form"
      backgroundColor="colorBackgroundBody"
      borderTopLeftRadius="borderRadius20"
      borderBottomLeftRadius="borderRadius20"
      flexGrow={1}
      padding="space70"
    >
      <Box
        padding="space100"
        borderWidth="borderWidth10"
        borderColor="colorBorderWeak"
        borderRadius="borderRadius30"
        borderStyle="dashed"
      >
        <CustomizationProvider baseTheme={currentThemeMode} theme={{...customThemeFromTokens}}>
          <Heading as="h3" variant="heading30">
            Contact information
          </Heading>
          <Box as="fieldset" border="none" padding="space0" margin="space0" marginBottom="space100">
            <Stack orientation="vertical" spacing="space80">
              <div>
                <Label htmlFor={phoneNumberInputId}>Phone number (optional)</Label>
                <Input id={phoneNumberInputId} type="tel" />
              </div>
              <div>
                <Label htmlFor={emailInputId}>Email address</Label>
                <Input id={emailInputId} type="email" />
              </div>
              <Checkbox id={useUID()}>Sign me up for emails with news and offers</Checkbox>
            </Stack>
          </Box>
          <Heading as="h3" variant="heading30">
            Shipping address
          </Heading>
          <Box as="fieldset" border="none" padding="space0" margin="space0" marginBottom="space100">
            <Stack orientation="vertical" spacing="space80">
              <Grid gutter="space30" vertical={[true, true, true, false, false]}>
                <Column>
                  <Label htmlFor={firstNameInputId}>First name</Label>
                  <Input id={firstNameInputId} type="text" />
                </Column>
                <Column>
                  <Label htmlFor={lastNameInputId}>Last name</Label>
                  <Input id={lastNameInputId} type="text" />
                </Column>
              </Grid>
              <div>
                <Label htmlFor={addressInputId}>Address</Label>
                <Input id={addressInputId} type="text" />
              </div>
              <div>
                <Label htmlFor={address2InputId}>Apartment, Suite, etc (Optional)</Label>
                <Input id={address2InputId} type="text" />
              </div>
              <div>
                <Label htmlFor={cityInputId}>City</Label>
                <Input id={cityInputId} type="text" />
              </div>
              <Grid gutter="space30" vertical={[true, true, true, false, false]}>
                <Column>
                  <Label htmlFor={countryInputId}>Country/region</Label>
                  <Select id="countryInputId">
                    <Option value="">Please select</Option>
                  </Select>
                </Column>
                <Column>
                  <Label htmlFor={stateInputId}>State</Label>
                  <Select id="stateInputId">
                    <Option value="">Please select</Option>
                  </Select>
                </Column>
                <Column>
                  <Label htmlFor={zipInputId}>Zip</Label>
                  <Input id={zipInputId} type="text" />
                </Column>
              </Grid>
            </Stack>
          </Box>
          <Stack orientation="horizontal" spacing="space70">
            <Button variant="primary">Continue</Button>
            <Anchor href="#">Return to cart</Anchor>
          </Stack>
        </CustomizationProvider>
      </Box>
    </Box>
  );
};
