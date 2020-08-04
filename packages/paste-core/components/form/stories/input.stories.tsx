import * as React from 'react';
import {useUID} from 'react-uid';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {withKnobs, boolean, text, select} from '@storybook/addon-knobs';
import {Anchor} from '@twilio-paste/anchor';
import {InformationIcon} from '@twilio-paste/icons/esm/InformationIcon';
import {FormInput, FormLabel, FormHelpText, FormHelpTextVariants} from '../src';
import {FormInputTypes} from '../src/shared/types';

const inputTypeOptions = ['text', 'email', 'hidden', 'number', 'password', 'search', 'tel'];
const helpVariantOptions = ['default', 'error'];

storiesOf('Forms|Input', module)
  .addDecorator(withKnobs)
  .add('Input Options', () => {
    const hasError = boolean('hasError', false);
    const isDisabled = boolean('disabled', false);
    const isReadOnly = boolean('readOnly', false);
    const isRequired = boolean('required', false);
    const inputTypeValue = select('type', inputTypeOptions, 'text') as FormInputTypes;
    const helpVariantValue = select('help variant', helpVariantOptions, 'default') as FormHelpTextVariants;
    const [value, setValue] = React.useState('Input Options');
    return (
      <>
        <FormLabel htmlFor={text('htmlFor', 'input_field')} disabled={isDisabled} required={isRequired}>
          Label
        </FormLabel>
        <FormInput
          disabled={isDisabled}
          hasError={hasError}
          id={text('id', 'input_field')}
          name={text('name', '')}
          placeholder={text('placeholder', 'Placeholder')}
          readOnly={isReadOnly}
          required={isRequired}
          type={inputTypeValue}
          value={value}
          onChange={event => {
            setValue(event.target.value);
            action('handleChange');
          }}
          onFocus={action('handleFocus')}
          onBlur={action('handleBlur')}
        />
        <FormHelpText variant={helpVariantValue}>
          {text('help text', 'Info that helps a user with this field.')}
        </FormHelpText>
      </>
    );
  })
  .add('Input', () => {
    const uid = useUID();
    const [value, setValue] = React.useState('Input');
    return (
      <>
        <FormLabel htmlFor={uid}>Label</FormLabel>
        <FormInput
          id={uid}
          type="text"
          placeholder="Placeholder"
          value={value}
          onChange={event => {
            setValue(event.target.value);
            action('handleChange');
          }}
          onFocus={action('handleFocus')}
          onBlur={action('handleBlur')}
        />
        <FormHelpText>Info that helps a user with this field.</FormHelpText>
      </>
    );
  })
  .add('Input - Required', () => {
    const uid = useUID();
    const [value, setValue] = React.useState('Input - Required');
    return (
      <>
        <FormLabel htmlFor={uid} required>
          Label
        </FormLabel>
        <FormInput
          id={uid}
          type="text"
          placeholder="Placeholder"
          required
          value={value}
          onChange={event => {
            setValue(event.target.value);
            action('handleChange');
          }}
          onFocus={action('handleFocus')}
          onBlur={action('handleBlur')}
        />
        <FormHelpText>Info that helps a user with this field.</FormHelpText>
      </>
    );
  })
  .add('Input - Error', () => {
    const uid = useUID();
    const [value, setValue] = React.useState('Input - Error');
    return (
      <>
        <FormLabel htmlFor={uid}>Label</FormLabel>
        <FormInput
          id={uid}
          type="text"
          placeholder="Placeholder"
          hasError
          value={value}
          onChange={event => {
            setValue(event.target.value);
            action('handleChange');
          }}
          onFocus={action('handleFocus')}
          onBlur={action('handleBlur')}
        />
        <FormHelpText variant="error">Error info. Explains why the input has an error.</FormHelpText>
      </>
    );
  })
  .add('Input - Disabled', () => {
    const uid = useUID();
    const [value, setValue] = React.useState('Input - Disabled');
    return (
      <>
        <FormLabel htmlFor={uid} disabled>
          Label
        </FormLabel>
        <FormInput
          id={uid}
          type="text"
          disabled
          value={value}
          onChange={event => {
            setValue(event.target.value);
            action('handleChange');
          }}
          onFocus={action('handleFocus')}
          onBlur={action('handleBlur')}
        />
        <FormHelpText>Info that helps a user with this field.</FormHelpText>
      </>
    );
  })
  .add('Input - ReadOnly', () => {
    const uid = useUID();
    const [value, setValue] = React.useState('Input - ReadOnly');
    return (
      <>
        <FormLabel htmlFor={uid}>Label</FormLabel>
        <FormInput
          id={uid}
          type="text"
          readOnly
          value={value}
          onChange={event => {
            setValue(event.target.value);
            action('handleChange');
          }}
          onFocus={action('handleFocus')}
          onBlur={action('handleBlur')}
        />
        <FormHelpText>Info that helps a user with this field.</FormHelpText>
      </>
    );
  })
  .add('Input - Hidden', () => {
    const uid = useUID();
    const [value, setValue] = React.useState('Input - Hidden');
    return (
      <>
        <FormInput
          id={uid}
          type="hidden"
          value={value}
          onChange={event => {
            setValue(event.target.value);
            action('handleChange');
          }}
          onFocus={action('handleFocus')}
          onBlur={action('handleBlur')}
        />
      </>
    );
  })
  .add('Input - insert before and after', () => {
    const uid = useUID();
    const [value, setValue] = React.useState('Input - ReadOnly');
    return (
      <>
        <FormLabel htmlFor={uid}>Label</FormLabel>
        <FormInput
          id={uid}
          type="text"
          value={value}
          onChange={event => {
            setValue(event.target.value);
            action('handleChange');
          }}
          onFocus={action('handleFocus')}
          onBlur={action('handleBlur')}
          insertBefore={<div>$10.99</div>}
          insertAfter={
            <Anchor href="#" display="flex">
              <InformationIcon decorative={false} size="sizeIcon20" title="Get more info" />
            </Anchor>
          }
        />
        <FormHelpText>Info that helps a user with this field.</FormHelpText>
      </>
    );
  })
  .add('Input - Number Error', () => {
    const uid = useUID();
    const [value, setValue] = React.useState('Input - Number Error');
    return (
      <>
        <FormLabel htmlFor={uid}>Label</FormLabel>
        <FormInput
          id={uid}
          type="number"
          placeholder="Placeholder"
          hasError
          value={value}
          onChange={event => {
            setValue(event.target.value);
            action('handleChange');
          }}
          onFocus={action('handleFocus')}
          onBlur={action('handleBlur')}
        />
        <FormHelpText variant="error">Not a number error. Should have no box-shadow.</FormHelpText>
      </>
    );
  })
  .add('Input - Placeholder', () => {
    const uid = useUID();
    const [value, setValue] = React.useState();
    return (
      <>
        <FormLabel htmlFor={uid}>Label</FormLabel>
        <FormInput
          id={uid}
          type="text"
          placeholder="Placeholder"
          value={value}
          onChange={event => {
            setValue(event.target.value);
            action('handleChange');
          }}
          onFocus={action('handleFocus')}
          onBlur={action('handleBlur')}
        />
      </>
    );
  });
