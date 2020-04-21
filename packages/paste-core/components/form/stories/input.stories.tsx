import * as React from 'react';
import {useUID} from 'react-uid';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {withKnobs, boolean, text, select, array, number} from '@storybook/addon-knobs';
import {Anchor} from '@twilio-paste/anchor';
import {InformationIcon} from '@twilio-paste/icons/esm/InformationIcon';
import {
  FormInput,
  FormLabel,
  FormHelpText,
  FormHelpTextVariants,
  FormTextArea,
  Select,
  Option,
  OptionGroup,
} from '../src';
import {FormInputTypes} from '../src/shared/types';

import kebabCase from 'lodash/kebabCase';

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
              <InformationIcon decorative={false} title="Get more info" />
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
    const [value, setValue] = React.useState('Input - Placeholder');
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
  })
  .add('Textarea Options', () => {
    const hasError = boolean('hasError', false);
    const isDisabled = boolean('disabled', false);
    const isReadOnly = boolean('readOnly', false);
    const isRequired = boolean('required', false);
    const helpVariantValue = select('help variant', helpVariantOptions, 'default') as FormHelpTextVariants;
    return (
      <>
        <FormLabel htmlFor={text('htmlFor', 'textarea_field')} disabled={isDisabled} required={isRequired}>
          Label
        </FormLabel>
        <FormTextArea
          disabled={isDisabled}
          hasError={hasError}
          id={text('id', 'textarea_field')}
          name={text('name', '')}
          placeholder={text('placeholder', 'Placeholder')}
          readOnly={isReadOnly}
          required={isRequired}
          onChange={action('handleChange')}
          onFocus={action('handleFocus')}
          onBlur={action('handleBlur')}
        >
          Value of textarea
        </FormTextArea>
        <FormHelpText variant={helpVariantValue}>
          {text('help text', 'Info that helps a user with this field.')}
        </FormHelpText>
      </>
    );
  })
  .add('Textarea', () => {
    const uid = useUID();
    return (
      <>
        <FormLabel htmlFor={uid}>Label</FormLabel>
        <FormTextArea
          id={uid}
          placeholder="Placeholder"
          onChange={action('handleFocus')}
          onFocus={action('handleFocus')}
          onBlur={action('handleBlur')}
        />
        <FormHelpText>Info that helps a user with this field.</FormHelpText>
      </>
    );
  })
  .add('Textarea - Required', () => {
    const uid = useUID();
    return (
      <>
        <FormLabel htmlFor={uid} required>
          Label
        </FormLabel>
        <FormTextArea
          id={uid}
          placeholder="Placeholder"
          required
          onChange={action('handleFocus')}
          onFocus={action('handleFocus')}
          onBlur={action('handleBlur')}
        />
        <FormHelpText>Info that helps a user with this field.</FormHelpText>
      </>
    );
  })
  .add('Textarea - Error', () => {
    const uid = useUID();
    return (
      <>
        <FormLabel htmlFor={uid}>Label</FormLabel>
        <FormTextArea
          id={uid}
          placeholder="Placeholder"
          hasError
          onChange={action('handleFocus')}
          onFocus={action('handleFocus')}
          onBlur={action('handleBlur')}
        />
        <FormHelpText variant="error">Error info. Explains why the input has an error.</FormHelpText>
      </>
    );
  })
  .add('Textarea - Disabled', () => {
    const uid = useUID();
    return (
      <>
        <FormLabel htmlFor={uid} disabled>
          Label
        </FormLabel>
        <FormTextArea
          id={uid}
          placeholder="Placeholder"
          disabled
          onChange={action('handleFocus')}
          onFocus={action('handleFocus')}
          onBlur={action('handleBlur')}
        />
        <FormHelpText>Info that helps a user with this field.</FormHelpText>
      </>
    );
  })
  .add('Textarea - ReadOnly', () => {
    const uid = useUID();
    return (
      <>
        <FormLabel htmlFor={uid}>Label</FormLabel>
        <FormTextArea
          id={uid}
          placeholder="Placeholder"
          readOnly
          onChange={action('handleFocus')}
          onFocus={action('handleFocus')}
          onBlur={action('handleBlur')}
        />
        <FormHelpText>Info that helps a user with this field.</FormHelpText>
      </>
    );
  })
  .add('Textarea - insert before and after', () => {
    const uid = useUID();
    return (
      <>
        <FormLabel htmlFor={uid}>Label</FormLabel>
        <FormTextArea
          id={uid}
          placeholder="Placeholder"
          onChange={action('handleFocus')}
          onFocus={action('handleFocus')}
          onBlur={action('handleBlur')}
          insertBefore={<div>$10.99</div>}
          insertAfter={
            <Anchor href="#" display="flex">
              <InformationIcon decorative={false} title="Get more info" />
            </Anchor>
          }
        />
        <FormHelpText>Info that helps a user with this field.</FormHelpText>
      </>
    );
  })
  .add('Select Options', () => {
    const selectGroupId = 'select group';
    const optionGroup = (idx: Number) => `option group ${idx}`;
    const id = text('id', 'select_input_field', selectGroupId);
    const htmlFor = text('htmlFor', 'select_input_field', selectGroupId);
    const hasError = boolean('hasError', false, selectGroupId);
    const isDisabled = boolean('disabled', false, selectGroupId);
    const isRequired = boolean('required', false, selectGroupId);
    const isMultiple = boolean('multiple', false, selectGroupId);
    const multiSelectSize = number('multiselect list size', 3, {}, selectGroupId);
    const helpVariantValue = select(
      'help variant',
      helpVariantOptions,
      'default',
      selectGroupId
    ) as FormHelpTextVariants;
    const helpText = text('help text', 'Info that helps a user with this field.', selectGroupId);
    const [value, setValue] = React.useState('Select Options');
    const insertBefore = boolean('insertBefore', false, selectGroupId);
    const insertAfter = boolean('insertAfter', false, selectGroupId);

    const defaultOptions = ['Option 1', 'Option 2', 'Option 3'];
    const optionValues = array('option values', defaultOptions, ', ', selectGroupId);

    const KnobOption = ({idx, initialValue}) => {
      const optionGroupId = optionGroup(idx);
      const isDefault = boolean('default', false, optionGroupId);
      const isDisabled = boolean('disabled', false, optionGroupId);
      const isSelected = boolean('selected', false, optionGroupId);
      const value = text('value', initialValue || `option-value-${idx}`, optionGroupId);
      const label = text('label', `Option ${idx}`, optionGroupId);

      return (
        <>
          <Option value={value} selected={isSelected || isDefault} disabled={isDisabled}>
            {label}
          </Option>
        </>
      );
    };

    return (
      <>
        <FormLabel htmlFor={htmlFor} disabled={isDisabled} required={isRequired}>
          Label
        </FormLabel>
        <Select
          disabled={isDisabled}
          hasError={hasError}
          id={id}
          required={isRequired}
          value={value}
          onChange={event => {
            setValue(event.target.value);
            action('handleChange');
          }}
          onFocus={action('handleFocus')}
          onBlur={action('handleBlur')}
          multiple={isMultiple}
          size={isMultiple && multiSelectSize}
          insertBefore={insertBefore && <div>$10.99</div>}
          insertAfter={
            insertAfter && (
              <Anchor href="#" display="flex">
                <InformationIcon decorative={false} title="Get more info" />
              </Anchor>
            )
          }
        >
          {optionValues.map((value, idx) => (
            <KnobOption idx={idx + 1} initialValue={kebabCase(value)} key={idx} />
          ))}
        </Select>
        <FormHelpText variant={helpVariantValue}>{helpText}</FormHelpText>
      </>
    );
  })
  .add('Select - Required', () => {
    const uid = useUID();
    const [value, setValue] = React.useState('Select - Required');
    return (
      <>
        <FormLabel required htmlFor={uid}>
          Label
        </FormLabel>
        <Select
          id={uid}
          required
          onChange={event => {
            setValue(event.target.value);
            action('handleChange');
          }}
          onFocus={action('handleFocus')}
          onBlur={action('handleBlur')}
          value={value}
        >
          <Option value="option-1">Option 1</Option>
          <Option value="option-2">Option 2</Option>
          <Option value="option-3">Option 3</Option>
          <Option value="option-4">Option 4</Option>
        </Select>
        <FormHelpText>Info that helps a user with this field.</FormHelpText>
      </>
    );
  })
  .add('Select - Error', () => {
    const uid = useUID();
    const [value, setValue] = React.useState('Select - Error');
    return (
      <>
        <FormLabel required htmlFor={uid}>
          Label
        </FormLabel>
        <Select
          id={uid}
          hasError
          onChange={event => {
            setValue(event.target.value);
            action('handleChange');
          }}
          onFocus={action('handleFocus')}
          onBlur={action('handleBlur')}
          value={value}
        >
          <Option value="option-1">Option 1</Option>
          <Option value="option-2">Option 2</Option>
          <Option value="option-3">Option 3</Option>
          <Option value="option-4">Option 4</Option>
        </Select>
        <FormHelpText variant="error">Info that helps a user with this field.</FormHelpText>
      </>
    );
  })
  .add('Select - Disabled', () => {
    const uid = useUID();
    const [value, setValue] = React.useState('Select - Error');
    return (
      <>
        <FormLabel htmlFor={uid}>Label</FormLabel>
        <Select
          id={uid}
          disabled
          onChange={event => {
            setValue(event.target.value);
            action('handleChange');
          }}
          onFocus={action('handleFocus')}
          onBlur={action('handleBlur')}
          value={value}
        >
          <Option value="option-1">Option 1</Option>
          <Option value="option-2">Option 2</Option>
          <Option value="option-3">Option 3</Option>
          <Option value="option-4">Option 4</Option>
        </Select>
        <FormHelpText>Info that helps a user with this field.</FormHelpText>
      </>
    );
  })
  .add('Select - Multiple', () => {
    const uid = useUID();
    const [value, setValue] = React.useState('Select - Error');
    return (
      <>
        <FormLabel htmlFor={uid}>Label</FormLabel>
        <Select
          id={uid}
          multiple
          size={2}
          onChange={action('handleChange')}
          onFocus={action('handleFocus')}
          onBlur={action('handleBlur')}
        >
          <Option value="option-1">Option 1</Option>
          <Option value="option-2">Option 2</Option>
          <Option value="option-3">Option 3</Option>
          <Option value="option-4">Option 4</Option>
        </Select>
        <FormHelpText>Info that helps a user with this field.</FormHelpText>
      </>
    );
  })
  .add('Select - Default Value', () => {
    const uid = useUID();
    const [value, setValue] = React.useState('');
    return (
      <>
        <FormLabel htmlFor={uid}>Label</FormLabel>
        <Select
          id={uid}
          onChange={event => {
            setValue(event.target.value);
            action('handleChange');
          }}
          onFocus={action('handleFocus')}
          onBlur={action('handleBlur')}
          defaultValue="option-3"
          value={value}
        >
          <Option value="option-1">Option 1</Option>
          <Option value="option-2">Option 2</Option>
          <Option value="option-3">Option 3</Option>
          <Option value="option-4">Option 4</Option>
        </Select>
        <FormHelpText>Info that helps a user with this field.</FormHelpText>
      </>
    );
  })
  .add('Select - Insert before and after', () => {
    const uid = useUID();
    const [value, setValue] = React.useState('Select - Error');
    return (
      <>
        <FormLabel htmlFor={uid}>Label</FormLabel>
        <Select
          id={uid}
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
          value={value}
        >
          <Option value="option-1">Option 1</Option>
          <Option value="option-2">Option 2</Option>
          <Option value="option-3">Option 3</Option>
          <Option value="option-4">Option 4</Option>
        </Select>
        <FormHelpText>Info that helps a user with this field.</FormHelpText>
      </>
    );
  })
  .add('Select - Option Groups', () => {
    const uid = useUID();
    const [value, setValue] = React.useState('Select - Error');
    return (
      <>
        <FormLabel htmlFor={uid}>Label</FormLabel>
        <Select
          id={uid}
          onChange={event => {
            setValue(event.target.value);
            action('handleChange');
          }}
          onFocus={action('handleFocus')}
          onBlur={action('handleBlur')}
          value={value}
        >
          <OptionGroup label="Group 1">
            <Option value="option-1">Option 1</Option>
            <Option value="option-2">Option 2</Option>
          </OptionGroup>
          <OptionGroup label="Group 2">
            <Option value="option-3">Option 3</Option>
            <Option value="option-4">Option 4</Option>
          </OptionGroup>
        </Select>
        <FormHelpText>Info that helps a user with this field.</FormHelpText>
      </>
    );
  })
  .add('Select - Option Groups and Multiple', () => {
    const uid = useUID();
    const [value, setValue] = React.useState('Select - Error');
    return (
      <>
        <FormLabel htmlFor={uid}>Label</FormLabel>
        <Select
          id={uid}
          onChange={event => {
            setValue(event.target.value);
            action('handleChange');
          }}
          multiple
          size={4}
          onFocus={action('handleFocus')}
          onBlur={action('handleBlur')}
          value={value}
        >
          <OptionGroup label="Group 1">
            <Option value="option-1">Option 1</Option>
            <Option value="option-2">Option 2</Option>
          </OptionGroup>
          <OptionGroup label="Group 2">
            <Option value="option-3">Option 3</Option>
            <Option value="option-4">Option 4</Option>
          </OptionGroup>
        </Select>
        <FormHelpText>Info that helps a user with this field.</FormHelpText>
      </>
    );
  });
