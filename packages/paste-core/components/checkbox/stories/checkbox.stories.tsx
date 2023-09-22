import { Anchor } from '@twilio-paste/anchor';
import { Stack } from '@twilio-paste/stack';
import { Text } from '@twilio-paste/text';
import { useUID } from '@twilio-paste/uid-library';
import * as React from 'react';

import { Checkbox, CheckboxDisclaimer, CheckboxGroup } from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  subcomponents: { CheckboxGroup, CheckboxDisclaimer },
};

export const DefaultCheckbox = (): React.ReactNode => {
  return (
    <Checkbox id={useUID()} value="label" name="foo">
      Label
    </Checkbox>
  );
};
DefaultCheckbox.storyName = 'Checkbox';

export const CheckboxChecked = (): React.ReactNode => {
  const [checked, setChecked] = React.useState(true);
  return (
    <Checkbox
      id={useUID()}
      value="1"
      name="foo"
      checked={checked}
      onChange={(event) => {
        setChecked(event.target.checked);
      }}
    >
      Label
    </Checkbox>
  );
};

CheckboxChecked.storyName = 'Checkbox - Checked';

export const CheckboxWithNoID = (): React.ReactNode => {
  const [checked, setChecked] = React.useState(true);
  return (
    <Checkbox
      value="1"
      name="foo"
      checked={checked}
      onChange={(event) => {
        setChecked(event.target.checked);
      }}
    >
      Label
    </Checkbox>
  );
};

CheckboxWithNoID.storyName = 'Checkbox - With no ID';

export const CheckboxDefaultChecked = (): React.ReactNode => {
  return (
    <Checkbox id={useUID()} value="label" name="foo" defaultChecked>
      Label
    </Checkbox>
  );
};
CheckboxDefaultChecked.storyName = 'Checkbox - defaultChecked';

export const CheckboxRequired = (): React.ReactNode => {
  return (
    <Checkbox id={useUID()} value="label" name="foo" helpText="Some interesting help text" required>
      Label
    </Checkbox>
  );
};

CheckboxRequired.storyName = 'Checkbox - Required';

export const CheckboxDisabled = (): React.ReactNode => {
  return (
    <Checkbox id={useUID()} value="1" disabled name="foo">
      Label
    </Checkbox>
  );
};

CheckboxDisabled.storyName = 'Checkbox - Disabled';

export const CheckboxDisabledChecked = (): React.ReactNode => {
  const [checked, setChecked] = React.useState(true);
  return (
    <Checkbox
      id={useUID()}
      value="1"
      disabled
      checked={checked}
      name="foo"
      onChange={(event) => {
        setChecked(event.target.checked);
      }}
    >
      Label
    </Checkbox>
  );
};

CheckboxDisabledChecked.storyName = 'Checkbox - Disabled & Checked';

export const CheckboxError = (): React.ReactNode => {
  return (
    <Checkbox id={useUID()} value="1" name="foo" hasError>
      Label
    </Checkbox>
  );
};

CheckboxError.storyName = 'Checkbox - Error';

export const CheckboxErrorChecked = (): React.ReactNode => {
  const [checked, setChecked] = React.useState(true);
  return (
    <Checkbox
      id={useUID()}
      value="1"
      name="foo"
      hasError
      checked={checked}
      onChange={(event) => {
        setChecked(event.target.checked);
      }}
    >
      Label
    </Checkbox>
  );
};

CheckboxErrorChecked.storyName = 'Checkbox - Error & Checked';

export const CheckboxErrorDisabled = (): React.ReactNode => {
  return (
    <Checkbox id={useUID()} value="1" name="foo" hasError disabled>
      Label
    </Checkbox>
  );
};

CheckboxErrorDisabled.storyName = 'Checkbox - Error & Disabled';

export const CheckboxErrorDisabledChecked = (): React.ReactNode => {
  return (
    <Checkbox id={useUID()} value="1" name="foo" hasError disabled checked>
      Label
    </Checkbox>
  );
};

CheckboxErrorDisabledChecked.storyName = 'Checkbox - Error & Disabled & Checked';

export const CheckboxHelpTextString = (): React.ReactNode => {
  return (
    <Checkbox id={useUID()} value="1" name="foo" helpText="Some interesting help text">
      Label
    </Checkbox>
  );
};

CheckboxHelpTextString.storyName = 'Checkbox - Help text string';

export const CheckboxHelpTextChildren = (): React.ReactNode => {
  return (
    <Checkbox
      id={useUID()}
      value="1"
      name="foo"
      helpText={
        <>
          Some interesting help text with a <Anchor href="http://www.google.com">link</Anchor>
        </>
      }
    >
      Label
    </Checkbox>
  );
};

CheckboxHelpTextChildren.storyName = 'Checkbox - Help text children';

export const CheckboxSelectAll = (): React.ReactNode => {
  const [checked, setChecked] = React.useState(true);
  return (
    <Checkbox
      id={useUID()}
      value="1"
      name="foo"
      checked={checked}
      onChange={(event) => {
        setChecked(event.target.checked);
      }}
      isSelectAll
    >
      Select all
    </Checkbox>
  );
};

CheckboxSelectAll.storyName = 'Checkbox - Select all';

export const CheckboxControlled = (): React.ReactNode => {
  const [checked1, setChecked1] = React.useState(true);
  const [checked2, setChecked2] = React.useState(false);
  const [checked3, setChecked3] = React.useState(true);
  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>): void => setChecked1(event.target.checked);
  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>): void => setChecked2(event.target.checked);
  const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>): void => setChecked3(event.target.checked);
  return (
    <>
      <Checkbox
        checked={checked1 === true}
        helpText="This is some help text."
        id={useUID()}
        name="foo"
        onChange={handleChange1}
        value="1"
      >
        First
      </Checkbox>
      <Checkbox
        checked={checked2 === true}
        helpText="This is some help text."
        id={useUID()}
        name="foo"
        onChange={handleChange2}
        value="2"
      >
        Second
      </Checkbox>
      <Checkbox
        checked={checked3 === true}
        helpText="This is some help text."
        id={useUID()}
        name="foo"
        onChange={handleChange3}
        value="3"
      >
        Third
      </Checkbox>
    </>
  );
};

CheckboxControlled.storyName = 'Checkbox - Controlled';

export const DefaultCheckboxGroup = (): React.ReactNode => {
  const [checked1, setChecked1] = React.useState(true);
  const [checked2, setChecked2] = React.useState(false);
  const [checked3, setChecked3] = React.useState(true);
  return (
    <>
      <CheckboxGroup
        name="bar"
        legend={
          <Text as="span" color="currentColor">
            This is some help text with a <Anchor href="http://paste.twilio.com">link</Anchor>.
          </Text>
        }
        helpText="Help text should go here."
        required
      >
        <Checkbox
          id={useUID()}
          value="1"
          checked={checked1}
          onChange={(event) => {
            setChecked1(event.currentTarget.checked);
          }}
          helpText={
            <Text as="span" color="currentColor">
              This is some help text with a <Anchor href="http://paste.twilio.com">link</Anchor>.
            </Text>
          }
        >
          First
        </Checkbox>
        <Checkbox
          checked={checked2}
          onChange={(event) => {
            setChecked2(event.currentTarget.checked);
          }}
          id={useUID()}
          value="2"
          helpText="This is some help text."
        >
          Second
        </Checkbox>
        <Checkbox
          checked={checked3}
          onChange={(event) => {
            setChecked3(event.currentTarget.checked);
          }}
          id={useUID()}
          value="3"
          helpText="This is some help text."
        >
          Third
        </Checkbox>
      </CheckboxGroup>
    </>
  );
};

DefaultCheckboxGroup.storyName = 'CheckboxGroup';

export const CheckboxGroupError = (): React.ReactNode => {
  return (
    <CheckboxGroup name="bar" legend="This is the legend text" errorText="This is the error text." required>
      <Checkbox id={useUID()} value="1" helpText="This is some help text.">
        First
      </Checkbox>
      <Checkbox id={useUID()} value="2" helpText="This is some help text.">
        Second
      </Checkbox>
      <Checkbox id={useUID()} value="3" helpText="This is some help text.">
        Third
      </Checkbox>
    </CheckboxGroup>
  );
};

CheckboxGroupError.storyName = 'Checkbox Group - Error';

export const CheckboxGroupDisabled = (): React.ReactNode => {
  return (
    <CheckboxGroup name="bar" legend="This is the legend text" required disabled>
      <Checkbox id={useUID()} value="1" helpText="This is some help text.">
        First
      </Checkbox>
      <Checkbox id={useUID()} value="2" helpText="This is some help text.">
        Second
      </Checkbox>
      <Checkbox id={useUID()} value="3" helpText="This is some help text.">
        Third
      </Checkbox>
    </CheckboxGroup>
  );
};

CheckboxGroupDisabled.storyName = 'Checkbox Group - Disabled';

export const CheckboxGroupOverrideDisabled = (): React.ReactNode => {
  return (
    <CheckboxGroup name="bar" legend="This is the legend text" required>
      <Checkbox id={useUID()} value="1" helpText="This is some help text.">
        First
      </Checkbox>
      <Checkbox id={useUID()} value="2" helpText="This is some help text.">
        Second
      </Checkbox>
      <Checkbox id={useUID()} value="3" helpText="This is some help text." disabled>
        Third
      </Checkbox>
    </CheckboxGroup>
  );
};

CheckboxGroupOverrideDisabled.storyName = 'Checkbox Group - Override Disabled';

export const CheckboxGroupHorizontal = (): React.ReactNode => {
  return (
    <CheckboxGroup
      name="bar"
      legend="This is the legend text"
      helpText="Help text should go here."
      orientation="horizontal"
      required
    >
      <Checkbox id={useUID()} value="1" helpText="This is some help text.">
        First
      </Checkbox>
      <Checkbox id={useUID()} value="2" helpText="This is some help text.">
        Second
      </Checkbox>
      <Checkbox id={useUID()} value="3" helpText="This is some help text.">
        Third
      </Checkbox>
    </CheckboxGroup>
  );
};

CheckboxGroupHorizontal.storyName = 'Checkbox Group - Horizontal';

export const CheckboxGroupHorizontalDisabled = (): React.ReactNode => {
  return (
    <CheckboxGroup name="bar" legend="This is the legend text" orientation="horizontal" required disabled>
      <Checkbox id={useUID()} value="1" helpText="This is some help text.">
        First
      </Checkbox>
      <Checkbox id={useUID()} value="2" helpText="This is some help text.">
        Second
      </Checkbox>
      <Checkbox id={useUID()} value="3" helpText="This is some help text.">
        Third
      </Checkbox>
    </CheckboxGroup>
  );
};

CheckboxGroupHorizontalDisabled.storyName = 'Checkbox Group - Horizontal disabled';

export const CheckboxGroupHorizontalError = (): React.ReactNode => {
  return (
    <CheckboxGroup
      name="bar"
      legend="This is the legend text"
      errorText="This is the error text."
      orientation="horizontal"
      required
    >
      <Checkbox id={useUID()} value="1" helpText="This is some help text.">
        First
      </Checkbox>
      <Checkbox id={useUID()} value="2" helpText="This is some help text.">
        Second
      </Checkbox>
      <Checkbox id={useUID()} value="3" helpText="This is some help text.">
        Third
      </Checkbox>
      <Checkbox id={useUID()} value="4" helpText="This is some help text.">
        Forth
      </Checkbox>
      <Checkbox id={useUID()} value="5" helpText="This is some help text.">
        Fifth
      </Checkbox>
    </CheckboxGroup>
  );
};

CheckboxGroupHorizontalError.storyName = 'Checkbox Group - Horizontal error';

export const CheckboxIndeterminateGroup = (): React.ReactNode => {
  const [checkedItems, setCheckedItems] = React.useState([true, false]);

  const allChecked = checkedItems.every(Boolean);
  const indeterminate = checkedItems.some(Boolean) && !allChecked;

  const checkboxRef: React.RefObject<HTMLInputElement> = React.createRef();

  return (
    <CheckboxGroup isSelectAll name="bar" legend="Select your favourite">
      <Checkbox
        id={useUID()}
        checked={allChecked}
        indeterminate={indeterminate}
        ref={checkboxRef}
        onChange={(e) => setCheckedItems([e.target.checked, e.target.checked])}
      >
        Select all
      </Checkbox>
      <Checkbox
        id={useUID()}
        checked={checkedItems[0]}
        onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])}
      >
        Snacks
      </Checkbox>
      <Checkbox
        id={useUID()}
        checked={checkedItems[1]}
        onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])}
      >
        Drinks
      </Checkbox>
    </CheckboxGroup>
  );
};

CheckboxIndeterminateGroup.storyName = 'Checkbox - Indeterminate group';

export const CheckboxIndeterminateGroupDisabled = (): React.ReactNode => {
  const [checkedItems, setCheckedItems] = React.useState([true, false]);
  const [checkedItems2, setCheckedItems2] = React.useState([false, false]);

  const allChecked = checkedItems.every(Boolean);
  const allChecked2 = checkedItems2.every(Boolean);
  const indeterminate = checkedItems.some(Boolean) && !allChecked;
  const indeterminate2 = checkedItems2.some(Boolean) && !allChecked2;

  const checkboxRef: React.RefObject<HTMLInputElement> = React.createRef();

  return (
    <Stack orientation="horizontal" spacing="space70">
      <CheckboxGroup isSelectAll disabled name="bar" legend="Select your favourite">
        <Checkbox id={useUID()} checked ref={checkboxRef}>
          Select all
        </Checkbox>
        <Checkbox id={useUID()} checked onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])}>
          Snacks
        </Checkbox>
        <Checkbox id={useUID()} checked onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])}>
          Drinks
        </Checkbox>
      </CheckboxGroup>
      <CheckboxGroup isSelectAll disabled name="bar" legend="Select your favourite">
        <Checkbox
          id={useUID()}
          checked={allChecked}
          indeterminate={indeterminate}
          ref={checkboxRef}
          onChange={(e) => setCheckedItems([e.target.checked, e.target.checked])}
        >
          Select all
        </Checkbox>
        <Checkbox
          id={useUID()}
          checked={checkedItems[0]}
          onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])}
        >
          Snacks
        </Checkbox>
        <Checkbox
          id={useUID()}
          checked={checkedItems[1]}
          onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])}
        >
          Drinks
        </Checkbox>
      </CheckboxGroup>
      <CheckboxGroup isSelectAll disabled name="bar" legend="Select your favourite">
        <Checkbox
          id={useUID()}
          checked={allChecked2}
          indeterminate={indeterminate2}
          onChange={(e) => setCheckedItems2([e.target.checked, e.target.checked])}
        >
          Select all
        </Checkbox>
        <Checkbox
          id={useUID()}
          checked={checkedItems2[0]}
          onChange={(e) => setCheckedItems2([e.target.checked, checkedItems2[1]])}
        >
          Snacks
        </Checkbox>
        <Checkbox
          id={useUID()}
          checked={checkedItems2[1]}
          onChange={(e) => setCheckedItems2([checkedItems2[0], e.target.checked])}
        >
          Drinks
        </Checkbox>
      </CheckboxGroup>
    </Stack>
  );
};

CheckboxIndeterminateGroupDisabled.storyName = 'Checkbox - Indeterminate group disabled';

export const CheckboxIndeterminateHorizontalGroup = (): React.ReactNode => {
  const [checkedItems, setCheckedItems] = React.useState([true, false]);

  const allChecked = checkedItems.every(Boolean);
  const indeterminate = checkedItems.some(Boolean) && !allChecked;

  const checkboxRef: React.RefObject<HTMLInputElement> = React.createRef();

  return (
    <CheckboxGroup isSelectAll orientation="horizontal" name="bar" legend="Select your favourite">
      <Checkbox
        id={useUID()}
        checked={allChecked}
        indeterminate={indeterminate}
        ref={checkboxRef}
        onChange={(e) => setCheckedItems([e.target.checked, e.target.checked])}
      >
        Select all
      </Checkbox>
      <Checkbox
        id={useUID()}
        checked={checkedItems[0]}
        onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])}
      >
        Snacks
      </Checkbox>
      <Checkbox
        id={useUID()}
        checked={checkedItems[1]}
        onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])}
      >
        Drinks
      </Checkbox>
    </CheckboxGroup>
  );
};

CheckboxIndeterminateHorizontalGroup.storyName = 'Checkbox - Indeterminate horizontal group';

export const DefaultCheckboxDisclaimer = (): React.ReactNode => {
  return (
    <CheckboxDisclaimer id={useUID()} value="foo" name="foo">
      <Text as="span">
        I declare the information provided above is accurate. I acknowledge that Twilio will process the information
        provided above for the purpose of identity verification, and will be sharing it with my local telecomm providers
        or authorities where required by local law. I understand that Twilio phone numbers may be taken out of service
        for inaccurate or false information.
      </Text>
    </CheckboxDisclaimer>
  );
};

DefaultCheckboxDisclaimer.storyName = 'Checkbox Disclaimer';

export const CheckboxDisclaimerRequired = (): React.ReactNode => {
  return (
    <CheckboxDisclaimer id={useUID()} value="foo" name="foo" required>
      <Text as="span">
        I declare the information provided above is accurate. I acknowledge that Twilio will process the information
        provided above for the purpose of identity verification, and will be sharing it with my local telecomm providers
        or authorities where required by local law. I understand that Twilio phone numbers may be taken out of service
        for inaccurate or false information.
      </Text>
    </CheckboxDisclaimer>
  );
};

CheckboxDisclaimerRequired.storyName = 'Checkbox Disclaimer - Required';

export const CheckboxDisclaimerError = (): React.ReactNode => {
  return (
    <CheckboxDisclaimer errorText="This is the error text." id={useUID()} value="foo" name="foo">
      <Text as="span">
        I declare the information provided above is accurate. I acknowledge that Twilio will process the information
        provided above for the purpose of identity verification, and will be sharing it with my local telecomm providers
        or authorities where required by local law. I understand that Twilio phone numbers may be taken out of service
        for inaccurate or false information.
      </Text>
    </CheckboxDisclaimer>
  );
};

CheckboxDisclaimerError.storyName = 'Checkbox Disclaimer - Error';

export const CheckboxDisclaimerDisabled = (): React.ReactNode => {
  return (
    <CheckboxDisclaimer disabled id={useUID()} value="foo" name="foo">
      I declare the information provided above is accurate. I acknowledge that Twilio will process the information
      provided above for the purpose of identity verification, and will be sharing it with my local telecomm providers
      or authorities where required by local law. I understand that Twilio phone numbers may be taken out of service for
      inaccurate or false information.
    </CheckboxDisclaimer>
  );
};

CheckboxDisclaimerDisabled.storyName = 'Checkbox Disclaimer - Disabled';
