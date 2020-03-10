import * as React from 'react';
import {useUID} from 'react-uid';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {withKnobs, boolean, text, select} from '@storybook/addon-knobs';
import {Anchor} from '@twilio-paste/anchor';
import {InformationIcon} from '@twilio-paste/icons/esm/InformationIcon';
import {FormInput, FormLabel, FormHelperText, FormHelperTextVariants, FormInputTypes} from '../src';

const inputTypeOptions = ['text', 'email', 'hidden', 'number', 'password', 'search', 'tel'];
const helperVariantOptions = ['default', 'error'];

storiesOf('Components|Form', module)
  .addDecorator(withKnobs)
  .add('Input Options', () => {
    const hasError = boolean('hasError', false);
    const isDisabled = boolean('disabled', false);
    const isReadOnly = boolean('readOnly', false);
    const isRequired = boolean('required', false);
    const inputTypeValue = select('type', inputTypeOptions, 'text') as FormInputTypes;
    const helperVariantValue = select('helper variant', helperVariantOptions, 'default') as FormHelperTextVariants;
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
        <FormHelperText variant={helperVariantValue}>
          {text('helper text', 'Info that helps a user with this field.')}
        </FormHelperText>
      </>
    );
  })
  .add('Input', () => {
    const uid = useUID();
    const [value, setValue] = React.useState('Input');
    return (
      <>
        <FormLabel htmlFor={uid}>Label Text</FormLabel>
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
        <FormHelperText>Info that helps a user with this field.</FormHelperText>
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
        <FormHelperText>Info that helps a user with this field.</FormHelperText>
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
        <FormHelperText variant="error">Error info. Explains why the input has an error.</FormHelperText>
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
        <FormHelperText>Info that helps a user with this field.</FormHelperText>
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
        <FormHelperText>Info that helps a user with this field.</FormHelperText>
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
              <InformationIcon decorative={false} title="Get more info" />
            </Anchor>
          }
        />
        <FormHelperText>Info that helps a user with this field.</FormHelperText>
      </>
    );
  });
