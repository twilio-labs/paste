import * as React from 'react';
import {useUID} from 'react-uid';
import {storiesOf} from '@storybook/react';
import {Anchor} from '@twilio-paste/anchor';
import {Stack} from '@twilio-paste/stack';
import {Text} from '@twilio-paste/text';
import {Checkbox, CheckboxGroup, CheckboxDisclaimer} from '../src';

storiesOf('Components|Checkbox', module)
  .add('Checkbox', () => {
    return (
      <Checkbox id={useUID()} value="1" name="foo">
        Label
      </Checkbox>
    );
  })
  .add('Checkbox - Checked', () => {
    const [checked, setChecked] = React.useState(true);
    return (
      <Checkbox
        id={useUID()}
        value="1"
        name="foo"
        checked={checked}
        onChange={event => {
          setChecked(event.target.checked);
        }}
      >
        Label
      </Checkbox>
    );
  })
  .add('Checkbox - Disabled', () => {
    return (
      <Checkbox id={useUID()} value="1" disabled name="foo">
        Label
      </Checkbox>
    );
  })
  .add('Checkbox - Disabled & Checked', () => {
    const [checked, setChecked] = React.useState(true);
    return (
      <Checkbox
        id={useUID()}
        value="1"
        disabled
        checked={checked}
        name="foo"
        onChange={event => {
          setChecked(event.target.checked);
        }}
      >
        Label
      </Checkbox>
    );
  })
  .add('Checkbox - Error', () => {
    return (
      <Checkbox id={useUID()} value="1" name="foo" hasError>
        Label
      </Checkbox>
    );
  })
  .add('Checkbox - Error & Checked', () => {
    const [checked, setChecked] = React.useState(true);
    return (
      <Checkbox
        id={useUID()}
        value="1"
        name="foo"
        hasError
        checked={checked}
        onChange={event => {
          setChecked(event.target.checked);
        }}
      >
        Label
      </Checkbox>
    );
  })
  .add('Checkbox - Help text string', () => {
    return (
      <Checkbox id={useUID()} value="1" name="foo" helpText="Some interesting help text">
        Label
      </Checkbox>
    );
  })
  .add('Checkbox - Help text children', () => {
    return (
      <Checkbox
        id={useUID()}
        value="1"
        name="foo"
        helpText={
          <>
            Some interesting help text with a <a href="http://www.google.com">link</a>
          </>
        }
      >
        Label
      </Checkbox>
    );
  })
  .add('Checkbox - Select all', () => {
    const [checked, setChecked] = React.useState(true);
    return (
      <Checkbox
        id={useUID()}
        value="1"
        name="foo"
        checked={checked}
        onChange={event => {
          setChecked(event.target.checked);
        }}
        isSelectAll
      >
        Select all
      </Checkbox>
    );
  })
  .add('Checkbox Group', () => {
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
            onChange={event => {
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
            onChange={event => {
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
            onChange={event => {
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
  })
  .add('Checkbox Group - Error', () => {
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
  })
  .add('Checkbox Group - Disabled', () => {
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
  })
  .add('Checkbox Group - Horizontal', () => {
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
  })
  .add('Checkbox Group - Horizontal disabled', () => {
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
  })
  .add('Checkbox Group - Horizontal error', () => {
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
  })
  .add('Checkbox - Indeterminate group', () => {
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
          onChange={e => setCheckedItems([e.target.checked, e.target.checked])}
        >
          Select all
        </Checkbox>
        <Checkbox
          id={useUID()}
          checked={checkedItems[0]}
          onChange={e => setCheckedItems([e.target.checked, checkedItems[1]])}
        >
          Snacks
        </Checkbox>
        <Checkbox
          id={useUID()}
          checked={checkedItems[1]}
          onChange={e => setCheckedItems([checkedItems[0], e.target.checked])}
        >
          Drinks
        </Checkbox>
      </CheckboxGroup>
    );
  })
  .add('Checkbox - Indeterminate group disabled', () => {
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
          <Checkbox
            id={useUID()}
            checked={allChecked}
            indeterminate={indeterminate}
            ref={checkboxRef}
            onChange={e => setCheckedItems([e.target.checked, e.target.checked])}
          >
            Select all
          </Checkbox>
          <Checkbox
            id={useUID()}
            checked={checkedItems[0]}
            onChange={e => setCheckedItems([e.target.checked, checkedItems[1]])}
          >
            Snacks
          </Checkbox>
          <Checkbox
            id={useUID()}
            checked={checkedItems[1]}
            onChange={e => setCheckedItems([checkedItems[0], e.target.checked])}
          >
            Drinks
          </Checkbox>
        </CheckboxGroup>
        <CheckboxGroup isSelectAll disabled name="bar" legend="Select your favourite">
          <Checkbox
            id={useUID()}
            checked={allChecked2}
            indeterminate={indeterminate2}
            onChange={e => setCheckedItems2([e.target.checked, e.target.checked])}
          >
            Select all
          </Checkbox>
          <Checkbox
            id={useUID()}
            checked={checkedItems2[0]}
            onChange={e => setCheckedItems2([e.target.checked, checkedItems2[1]])}
          >
            Snacks
          </Checkbox>
          <Checkbox
            id={useUID()}
            checked={checkedItems2[1]}
            onChange={e => setCheckedItems2([checkedItems2[0], e.target.checked])}
          >
            Drinks
          </Checkbox>
        </CheckboxGroup>
      </Stack>
    );
  })
  .add('Checkbox - Indeterminate horizontal group', () => {
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
          onChange={e => setCheckedItems([e.target.checked, e.target.checked])}
        >
          Select all
        </Checkbox>
        <Checkbox
          id={useUID()}
          checked={checkedItems[0]}
          onChange={e => setCheckedItems([e.target.checked, checkedItems[1]])}
        >
          Snacks
        </Checkbox>
        <Checkbox
          id={useUID()}
          checked={checkedItems[1]}
          onChange={e => setCheckedItems([checkedItems[0], e.target.checked])}
        >
          Drinks
        </Checkbox>
      </CheckboxGroup>
    );
  })
  .add('Checkbox Disclaimer', () => {
    return (
      <CheckboxDisclaimer id={useUID()} value="foo" name="foo">
        <Text as="span">
          I declare the information provided above is accurate. I acknowledge that Twilio will process the information
          provided above for the purpose of identity verification, and will be sharing it with my local telecomm
          providers or authorities where required by local law. I understand that Twilio phone numbers may be taken out
          of service for inaccurate or false information.
        </Text>
      </CheckboxDisclaimer>
    );
  })
  .add('Checkbox Disclaimer - Error', () => {
    return (
      <CheckboxDisclaimer errorText="This is the error text." id={useUID()} value="foo" name="foo">
        <Text as="span">
          I declare the information provided above is accurate. I acknowledge that Twilio will process the information
          provided above for the purpose of identity verification, and will be sharing it with my local telecomm
          providers or authorities where required by local law. I understand that Twilio phone numbers may be taken out
          of service for inaccurate or false information.
        </Text>
      </CheckboxDisclaimer>
    );
  })
  .add('Checkbox Disclaimer - Disabled', () => {
    return (
      <CheckboxDisclaimer disabled id={useUID()} value="foo" name="foo">
        I declare the information provided above is accurate. I acknowledge that Twilio will process the information
        provided above for the purpose of identity verification, and will be sharing it with my local telecomm providers
        or authorities where required by local law. I understand that Twilio phone numbers may be taken out of service
        for inaccurate or false information.
      </CheckboxDisclaimer>
    );
  });
