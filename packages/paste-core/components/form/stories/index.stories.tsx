import * as React from 'react';
import type {StoryFn} from '@storybook/types';
import {CustomizationProvider} from '@twilio-paste/customization';
import {Button} from '@twilio-paste/button';
import {Callout, CalloutHeading, CalloutList, CalloutListItem} from '@twilio-paste/callout';
import {CheckboxGroup, Checkbox} from '@twilio-paste/checkbox';
import {Combobox} from '@twilio-paste/combobox';
import {Heading} from '@twilio-paste/heading';
import {HelpText} from '@twilio-paste/help-text';
import {InformationIcon} from '@twilio-paste/icons/esm/InformationIcon';
import {Input} from '@twilio-paste/input';
import {Label} from '@twilio-paste/label';
import {Paragraph} from '@twilio-paste/paragraph';
import {RadioGroup, Radio} from '@twilio-paste/radio-group';
import {Select, Option} from '@twilio-paste/select';
import {useTheme} from '@twilio-paste/theme';
import {useUIDSeed, useUID} from '@twilio-paste/uid-library';

import {
  Form,
  FormActions,
  FormControl,
  FormControlTwoColumn,
  FormSection,
  FormSectionDescription,
  FormSectionHeading,
} from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Form',
  component: Form,
};

const countriesList = [
  'Bangladesh',
  'Brazil',
  'China',
  'Ethiopia',
  'India',
  'Indonesia',
  'Japan',
  'Mexico',
  'Nigeria',
  'Pakistan',
  'Philippines',
  'United States',
];

const statesList = [
  {value: 'AK', name: 'Alaska'},
  {value: 'AL', name: 'Alabama'},
  {value: 'AR', name: 'Arkansas'},
  {value: 'AS', name: 'American Samoa'},
  {value: 'AZ', name: 'Arizona'},
  {value: 'CA', name: 'California'},
  {value: 'CO', name: 'Colorado'},
  {value: 'CT', name: 'Connecticut'},
  {value: 'DC', name: 'District of Columbia'},
  {value: 'DE', name: 'Delaware'},
  {value: 'FL', name: 'Florida'},
  {value: 'GA', name: 'Georgia'},
  {value: 'GU', name: 'Guam'},
  {value: 'HI', name: 'Hawaii'},
  {value: 'IA', name: 'Iowa'},
  {value: 'ID', name: 'Idaho'},
  {value: 'IL', name: 'Illinois'},
  {value: 'IN', name: 'Indiana'},
  {value: 'KS', name: 'Kansas'},
  {value: 'KY', name: 'Kentucky'},
  {value: 'LA', name: 'Louisiana'},
  {value: 'MA', name: 'Massachusetts'},
  {value: 'MD', name: 'Maryland'},
  {value: 'ME', name: 'Maine'},
  {value: 'MI', name: 'Michigan'},
  {value: 'MN', name: 'Minnesota'},
  {value: 'MO', name: 'Missouri'},
  {value: 'MS', name: 'Mississippi'},
  {value: 'MT', name: 'Montana'},
  {value: 'NC', name: 'North Carolina'},
  {value: 'ND', name: 'North Dakota'},
  {value: 'NE', name: 'Nebraska'},
  {value: 'NH', name: 'New Hampshire'},
  {value: 'NJ', name: 'New Jersey'},
  {value: 'NM', name: 'New Mexico'},
  {value: 'NV', name: 'Nevada'},
  {value: 'NY', name: 'New York'},
  {value: 'OH', name: 'Ohio'},
  {value: 'OK', name: 'Oklahoma'},
  {value: 'OR', name: 'Oregon'},
  {value: 'PA', name: 'Pennsylvania'},
  {value: 'PR', name: 'Puerto Rico'},
  {value: 'RI', name: 'Rhode Island'},
  {value: 'SC', name: 'South Carolina'},
  {value: 'SD', name: 'South Dakota'},
  {value: 'TN', name: 'Tennessee'},
  {value: 'TX', name: 'Texas'},
  {value: 'UT', name: 'Utah'},
  {value: 'VA', name: 'Virginia'},
  {value: 'VI', name: 'Virgin Islands'},
  {value: 'VT', name: 'Vermont'},
  {value: 'WA', name: 'Washington'},
  {value: 'WI', name: 'Wisconsin'},
  {value: 'WV', name: 'West Virginia'},
  {value: 'WY', name: 'Wyoming'},
];

export const Default: StoryFn = () => {
  const seed = useUIDSeed();

  return (
    <Form aria-labelledby={seed('form-heading')}>
      <Heading id={seed('form-heading')} as="h2" variant="heading20" marginBottom="space0">
        {/* Added UID to the heading because forms are HTML Landmarks. Axe was failing because in the stacked view, there were 4 forms with the same name and landmarks have to have unique names. */}
        Profile settings {useUID()}
      </Heading>
      <Paragraph marginBottom="space0">Please add information to your Twilio profile.</Paragraph>
      <FormSection>
        <FormSectionHeading>Contact information</FormSectionHeading>
        <FormSectionDescription>Please add the details of your contact information.</FormSectionDescription>
        <FormControl>
          <Label htmlFor={seed('phone-number')}>Phone number</Label>
          <Input id={seed('phone-number')} type="tel" insertAfter={<InformationIcon decorative />} />
        </FormControl>
        <FormControl>
          <Label htmlFor={seed('email')}>Email address</Label>
          <Input id={seed('email')} type="email" />
        </FormControl>
      </FormSection>
      <FormSection>
        <FormSectionHeading>Shipping address</FormSectionHeading>
        <FormControlTwoColumn>
          <FormControl>
            <Label htmlFor={seed('first-name')}>First name</Label>
            <Input id={seed('first-name')} type="text" />
          </FormControl>
          <FormControl>
            <Label htmlFor={seed('last-name')}>Last name</Label>
            <Input id={seed('last-name')} type="text" />
          </FormControl>
        </FormControlTwoColumn>
        <FormControl>
          <Label htmlFor={seed('address')}>Address</Label>
          <Input id={seed('address')} type="text" />
        </FormControl>
        <FormControl>
          <Label htmlFor={seed('address-2')}>Apartment, suite, etc. (Optional)</Label>
          <Input id={seed('address-2')} type="text" />
        </FormControl>
        <FormControl>
          <Label htmlFor={seed('city')}>City</Label>
          <Input id={seed('city')} type="text" />
        </FormControl>
        <FormControl>
          <Combobox labelText="Country" placeholder="Please select a country" items={countriesList} />
        </FormControl>
        <FormControlTwoColumn>
          <FormControl>
            <Label htmlFor={seed('state')}>State</Label>
            <Select id={seed('state')}>
              {statesList.map(({value, name}) => (
                <Option value={value} key={value}>
                  {name}
                </Option>
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <Label htmlFor={seed('zip')}>Zip code</Label>
            <Input id={seed('zip')} type="text" />
          </FormControl>
        </FormControlTwoColumn>
      </FormSection>
      <FormActions>
        <Button variant="primary">Save</Button>
        <Button variant="secondary">Cancel</Button>
      </FormActions>
    </Form>
  );
};

export const HorizontalForm: StoryFn = () => {
  const seed = useUIDSeed();
  return (
    <Form aria-labelledby={seed('form-heading')}>
      <Heading id={seed('form-heading')} as="h3" variant="heading30" marginBottom="space0">
        {/* Added UID to the heading because forms are HTML Landmarks. Axe was failing because in the stacked view, there were 4 forms with the same name and landmarks have to have unique names. */}
        Choose Network Access Profile {useUID()}
      </Heading>
      <Paragraph marginBottom="space0">
        Network Access Profile specifies what networks your SIM&apos;s would connect to and how you will be billed.
      </Paragraph>
      <FormControl>
        <CheckboxGroup name="number-type" legend="Select number type" orientation="horizontal">
          <Checkbox>Local</Checkbox>
          <Checkbox>Mobile</Checkbox>
          <Checkbox>Toll-free</Checkbox>
        </CheckboxGroup>
      </FormControl>
      <FormControl>
        <RadioGroup name="payment-method" legend="Select payment method" orientation="horizontal">
          <Radio>Credit card</Radio>
          <Radio>PayPal</Radio>
          <Radio>Direct deposit</Radio>
        </RadioGroup>
      </FormControl>
      <FormActions>
        <Button variant="primary">Save</Button>
        <Button variant="secondary">Cancel</Button>
      </FormActions>
    </Form>
  );
};

export const ErrorForm: StoryFn = () => {
  const seed = useUIDSeed();

  return (
    <Form aria-labelledby={seed('form-heading')}>
      <Heading id={seed('form-heading')} variant="heading30" as="h3">
        {/* Added UID to the heading because forms are HTML Landmarks. Axe was failing because in the stacked view, there were 4 forms with the same name and landmarks have to have unique names. */}
        Settings {useUID()}
      </Heading>
      <Callout variant="error">
        <CalloutHeading as="h4">Please fix the issues with these fields</CalloutHeading>
        <CalloutList as="ul">
          <CalloutListItem>Street address</CalloutListItem>
          <CalloutListItem>Email address</CalloutListItem>
        </CalloutList>
      </Callout>
      <FormControl>
        <Label htmlFor={seed('street-address')} required>
          Street address
        </Label>
        <Input id={seed('street-address')} type="text" hasError required />
        <HelpText variant="error">Please add a valid street address.</HelpText>
      </FormControl>
      <FormControlTwoColumn>
        <FormControl>
          <Label htmlFor={seed('state')}>State</Label>
          <Select id={seed('state')}>
            {statesList.map(({value, name}) => (
              <Option value={value} key={value}>
                {name}
              </Option>
            ))}
          </Select>
        </FormControl>
        <FormControl>
          <Label htmlFor={seed('zip')}>Zip code</Label>
          <Input id={seed('zip')} type="text" />
        </FormControl>
      </FormControlTwoColumn>
      <FormControl>
        <Label htmlFor={seed('email')} required>
          Email address
        </Label>
        <Input id={seed('email')} type="email" hasError required />
        <HelpText variant="error">Please add a valid email address.</HelpText>
      </FormControl>
      <FormActions>
        <Button variant="primary">Save</Button>
        <Button variant="secondary">Cancel</Button>
      </FormActions>
    </Form>
  );
};

export const FixedWidthForm: StoryFn = () => {
  const seed = useUIDSeed();

  return (
    <Form maxWidth="size30" aria-labelledby={seed('form-heading')}>
      <Heading id={seed('form-heading')} as="h2" variant="heading20" marginBottom="space0">
        {/* Added UID to the heading because forms are HTML Landmarks. Axe was failing because in the stacked view, there were 4 forms with the same name and landmarks have to have unique names. */}
        Profile settings {useUID()}
      </Heading>
      <Paragraph marginBottom="space0">Please add information to your Twilio profile.</Paragraph>
      <FormSection>
        <FormSectionHeading>Contact information</FormSectionHeading>
        <FormSectionDescription>Please add the details of your contact information.</FormSectionDescription>
        <FormControl>
          <Label htmlFor={seed('phone-number')}>Phone number</Label>
          <Input id={seed('phone-number')} type="tel" insertAfter={<InformationIcon decorative />} />
        </FormControl>
        <FormControl>
          <Label htmlFor={seed('email')}>Email address</Label>
          <Input id={seed('email')} type="email" />
        </FormControl>
      </FormSection>
      <FormSection>
        <FormSectionHeading>Shipping address</FormSectionHeading>
        <FormControlTwoColumn>
          <FormControl>
            <Label htmlFor={seed('first-name')}>First name</Label>
            <Input id={seed('first-name')} type="text" />
          </FormControl>
          <FormControl>
            <Label htmlFor={seed('last-name')}>Last name</Label>
            <Input id={seed('last-name')} type="text" />
          </FormControl>
        </FormControlTwoColumn>
        <FormControl>
          <Label htmlFor={seed('address')}>Address</Label>
          <Input id={seed('address')} type="text" />
        </FormControl>
        <FormControl>
          <Label htmlFor={seed('address-2')}>Apartment, suite, etc. (Optional)</Label>
          <Input id={seed('address-2')} type="text" />
        </FormControl>
        <FormControl>
          <Label htmlFor={seed('city')}>City</Label>
          <Input id={seed('city')} type="text" />
        </FormControl>
        <FormControl>
          <Combobox labelText="Country" placeholder="Please select a country" items={countriesList} />
        </FormControl>
        <FormControlTwoColumn>
          <FormControl>
            <Label htmlFor={seed('state')}>State</Label>
            <Select id={seed('state')}>
              {statesList.map(({value, name}) => (
                <Option value={value} key={value}>
                  {name}
                </Option>
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <Label htmlFor={seed('zip')}>Zip code</Label>
            <Input id={seed('zip')} type="text" />
          </FormControl>
        </FormControlTwoColumn>
      </FormSection>
      <FormControl>
        <RadioGroup name="payment-method" legend="Select payment method" orientation="horizontal">
          <Radio>Credit card</Radio>
          <Radio>PayPal</Radio>
          <Radio>Direct deposit</Radio>
        </RadioGroup>
      </FormControl>
      <FormActions>
        <Button variant="primary">Save</Button>
        <Button variant="secondary">Cancel</Button>
      </FormActions>
    </Form>
  );
};

export const CustomizedForm: StoryFn = () => {
  const theme = useTheme();
  const seed = useUIDSeed();

  return (
    <CustomizationProvider
      theme={theme}
      elements={{
        FORM: {rowGap: 'space20'},
        FORM_ACTIONS: {justifyContent: 'center'},
        FORM_CONTROL: {padding: 'space40'},
        FORM_CONTROL_TWO_COLUMNS: {columnGap: 'space20'},
        FORM_SECTION: {borderWidth: 'borderWidth10', borderStyle: 'solid', borderColor: 'colorBorder'},
        FORM_SECTION_DESCRIPTION: {fontWeight: 'fontWeightBold'},
        FORM_SECTION_HEADING: {backgroundColor: 'colorBackgroundErrorWeakest'},
      }}
    >
      {/* Added UID to the heading because forms are HTML Landmarks. Axe was failing because in the stacked view, there were 4 forms with the same name and landmarks have to have unique names. */}
      <Form aria-label={`Customized form ${useUID()}`}>
        <FormSection>
          <FormSectionHeading>Shipping address</FormSectionHeading>
          <FormControlTwoColumn>
            <FormControl>
              <Label htmlFor={seed('first-name')}>First name</Label>
              <Input id={seed('first-name')} type="text" />
            </FormControl>
            <FormControl>
              <Label htmlFor={seed('last-name')}>Last name</Label>
              <Input id={seed('last-name')} type="text" />
            </FormControl>
          </FormControlTwoColumn>
          <FormControl>
            <Label htmlFor={seed('address')}>Address</Label>
            <Input id={seed('address')} type="text" />
          </FormControl>
          <FormControl>
            <Label htmlFor={seed('address-2')}>Apartment, suite, etc. (Optional)</Label>
            <Input id={seed('address-2')} type="text" />
          </FormControl>
          <FormControl>
            <Label htmlFor={seed('city')}>City</Label>
            <Input id={seed('city')} type="text" />
          </FormControl>
          <FormControl>
            <Combobox labelText="Country" placeholder="Please select a country" items={countriesList} />
          </FormControl>
          <FormControlTwoColumn>
            <FormControl>
              <Label htmlFor={seed('state')}>State</Label>
              <Select id={seed('state')}>
                {statesList.map(({value, name}) => (
                  <Option value={value} key={value}>
                    {name}
                  </Option>
                ))}
              </Select>
            </FormControl>
            <FormControl>
              <Label htmlFor={seed('zip')}>Zip code</Label>
              <Input id={seed('zip')} type="text" />
            </FormControl>
          </FormControlTwoColumn>
        </FormSection>
        <FormActions>
          <Button variant="primary">Save</Button>
          <Button variant="secondary">Cancel</Button>
        </FormActions>
      </Form>
    </CustomizationProvider>
  );
};
