import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {withKnobs, boolean, text, select, array, number} from '@storybook/addon-knobs';
import {Box} from '@twilio-paste/box';
import {Text} from '@twilio-paste/text';
import {Anchor} from '@twilio-paste/anchor';
import {InformationIcon} from '@twilio-paste/icons/esm/InformationIcon';
import {Label} from '@twilio-paste/label';
import {HelpText, HelpTextVariants} from '@twilio-paste/help-text';
import {Select, Option, OptionGroup} from '../src';

const kebabCase = require('lodash/kebabCase');

const helpVariantOptions = ['default', 'error'];
const optionGroup = (idx: number): string => `option group ${idx}`;

storiesOf('Components|Select', module)
  .addDecorator(withKnobs)
  .add('Select', () => {
    const selectGroupId = 'select group';
    const id = text('id', 'select_input_field', selectGroupId);
    const htmlFor = text('htmlFor', 'select_input_field', selectGroupId);
    const hasError = boolean('hasError', false, selectGroupId);
    const isDisabled = boolean('disabled', false, selectGroupId);
    const isRequired = boolean('required', false, selectGroupId);
    const isMultiple = boolean('multiple', false, selectGroupId);
    const multiSelectSize = number('multiselect list size', 3, {}, selectGroupId);
    const helpVariantValue = select('help variant', helpVariantOptions, 'default', selectGroupId) as HelpTextVariants;
    const helpText = text('help text', 'Info that helps a user with this field.', selectGroupId);
    const insertBefore = boolean('insertBefore', false, selectGroupId);
    const insertAfter = boolean('insertAfter', false, selectGroupId);

    const defaultOptions = ['Option 1', 'Option 2', 'Option 3'];
    const optionValues = array('option values', defaultOptions, ', ', selectGroupId);

    const KnobOption: React.FC<{idx: number; initialValue: string}> = ({idx, initialValue}) => {
      const optionGroupId = optionGroup(idx);
      const disabled = boolean('disabled', false, optionGroupId);
      const optionValue = text('value', initialValue || `option-value-${idx}`, optionGroupId);
      const label = text('label', `Option ${idx}`, optionGroupId);

      return (
        <>
          <Option value={optionValue} disabled={disabled}>
            {label}
          </Option>
        </>
      );
    };

    const [value, setValue] = React.useState(isMultiple ? [] : 'Select | Options');

    return (
      <>
        <Label htmlFor={htmlFor} disabled={isDisabled} required={isRequired}>
          Label
        </Label>
        <Select
          ref={React.createRef()}
          disabled={isDisabled}
          hasError={hasError}
          id={id}
          required={isRequired}
          value={value}
          onChange={event => {
            const {
              target: {value: targetValue, options},
            } = event;
            if (isMultiple) {
              const update: string[] = Object.keys(options).reduce((optionTargetValues, key) => {
                const {selected, value: optionValue} = options[key];
                if (selected) {
                  return [...optionTargetValues, optionValue];
                }
                return optionTargetValues;
              }, []);
              setValue(update);
            } else {
              setValue(targetValue);
            }
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
                <InformationIcon decorative={false} size="sizeIcon20" title="Get more info" />
              </Anchor>
            )
          }
        >
          {optionValues.map((option, idx) => (
            <KnobOption idx={idx + 1} initialValue={kebabCase(option)} key={useUID()} />
          ))}
        </Select>
        <HelpText variant={helpVariantValue}>{helpText}</HelpText>
      </>
    );
  })
  .add('Select - Required', () => {
    const uid = useUID();
    const [value, setValue] = React.useState('Select - Required');
    return (
      <>
        <Label required htmlFor={uid}>
          Label
        </Label>
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
        <HelpText>Info that helps a user with this field.</HelpText>
      </>
    );
  })
  .add('Select - Required inverse', () => {
    const uid = useUID();
    const [value, setValue] = React.useState('Select - Required');
    return (
      <Box backgroundColor="colorBackgroundBodyInverse" padding="space60">
        <Label required htmlFor={uid} variant="inverse">
          Label
        </Label>
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
          variant="inverse"
        >
          <Option value="option-1">Option 1</Option>
          <Option value="option-2">Option 2</Option>
          <Option value="option-3">Option 3</Option>
          <Option value="option-4">Option 4</Option>
        </Select>
        <HelpText variant="inverse">Info that helps a user with this field.</HelpText>
      </Box>
    );
  })
  .add('Select - Error', () => {
    const uid = useUID();
    const [value, setValue] = React.useState('Select - Error');
    return (
      <>
        <Label required htmlFor={uid}>
          Label
        </Label>
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
        <HelpText variant="error">Info that helps a user with this field.</HelpText>
      </>
    );
  })
  .add('Select - Error inverse', () => {
    const uid = useUID();
    const [value, setValue] = React.useState('Select - Error');
    return (
      <Box backgroundColor="colorBackgroundBodyInverse" padding="space60">
        <Label required htmlFor={uid} variant="inverse">
          Label
        </Label>
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
          variant="inverse"
          hasError
        >
          <Option value="option-1">Option 1</Option>
          <Option value="option-2">Option 2</Option>
          <Option value="option-3">Option 3</Option>
          <Option value="option-4">Option 4</Option>
        </Select>
        <HelpText variant="error_inverse">Info that helps a user with this field.</HelpText>
      </Box>
    );
  })
  .add('Select - Disabled', () => {
    const uid = useUID();
    const [value, setValue] = React.useState('Select - Disabled');
    return (
      <>
        <Label htmlFor={uid} disabled>
          Label
        </Label>
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
        <HelpText>Info that helps a user with this field.</HelpText>
      </>
    );
  })
  .add('Select - Disabled inverse', () => {
    const uid = useUID();
    const [value, setValue] = React.useState('Select - Disabled');
    return (
      <Box backgroundColor="colorBackgroundBodyInverse" padding="space60">
        <Label disabled htmlFor={uid} variant="inverse">
          Label
        </Label>
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
          variant="inverse"
        >
          <Option value="option-1">Option 1</Option>
          <Option value="option-2">Option 2</Option>
          <Option value="option-3">Option 3</Option>
          <Option value="option-4">Option 4</Option>
        </Select>
        <HelpText variant="inverse">Info that helps a user with this field.</HelpText>
      </Box>
    );
  })
  .add('Select - Multiple', () => {
    const uid = useUID();
    const [value, setValue] = React.useState([]);

    return (
      <>
        <Label htmlFor={uid}>Label</Label>
        <Select
          id={uid}
          multiple
          size={2}
          onChange={({target: options}) => {
            const update: string[] = Object.keys(options).reduce((optionValues, key) => {
              const {selected, value: optionValue} = options[key];
              if (selected) {
                return [...optionValues, optionValue];
              }
              return optionValues;
            }, []);
            setValue(update);
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
        <HelpText>Info that helps a user with this field.</HelpText>
      </>
    );
  })
  .add('Select - Insert before and after', () => {
    const uid = useUID();
    const [value, setValue] = React.useState('Select');
    return (
      <>
        <Label htmlFor={uid}>Label</Label>
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
              <InformationIcon decorative={false} size="sizeIcon20" title="Get more info" />
            </Anchor>
          }
          value={value}
        >
          <Option value="option-1">Option 1</Option>
          <Option value="option-2">Option 2</Option>
          <Option value="option-3">Option 3</Option>
          <Option value="option-4">Option 4</Option>
        </Select>
        <HelpText>Info that helps a user with this field.</HelpText>
      </>
    );
  })
  .add('Select - Disabled insert before and after', () => {
    const uid = useUID();
    const [value, setValue] = React.useState('Select');
    return (
      <>
        <Label disabled htmlFor={uid}>
          Label
        </Label>
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
              <InformationIcon decorative={false} size="sizeIcon20" title="Get more info" />
            </Anchor>
          }
          value={value}
          disabled
        >
          <Option value="option-1">Option 1</Option>
          <Option value="option-2">Option 2</Option>
          <Option value="option-3">Option 3</Option>
          <Option value="option-4">Option 4</Option>
        </Select>
        <HelpText>Info that helps a user with this field.</HelpText>
      </>
    );
  })
  .add('Select - Insert before and after inverse', () => {
    const uid = useUID();
    const [value, setValue] = React.useState('Select');
    return (
      <Box backgroundColor="colorBackgroundBodyInverse" padding="space60">
        <Label htmlFor={uid} variant="inverse">
          Label
        </Label>
        <Select
          id={uid}
          onChange={event => {
            setValue(event.target.value);
            action('handleChange');
          }}
          onFocus={action('handleFocus')}
          onBlur={action('handleBlur')}
          insertBefore={
            <Text as="span" color="colorTextInverse" lineHeight="lineHeight20">
              $10.99
            </Text>
          }
          insertAfter={
            <Anchor href="#" display="flex">
              <InformationIcon color="colorTextInverse" decorative={false} size="sizeIcon20" title="Get more info" />
            </Anchor>
          }
          value={value}
          variant="inverse"
        >
          <Option value="option-1">Option 1</Option>
          <Option value="option-2">Option 2</Option>
          <Option value="option-3">Option 3</Option>
          <Option value="option-4">Option 4</Option>
        </Select>
        <HelpText variant="inverse">Info that helps a user with this field.</HelpText>
      </Box>
    );
  })
  .add('Select - Disabed insert before and after inverse', () => {
    const uid = useUID();
    const [value, setValue] = React.useState('Select');
    return (
      <Box backgroundColor="colorBackgroundBodyInverse" padding="space60">
        <Label disabled htmlFor={uid} variant="inverse">
          Label
        </Label>
        <Select
          id={uid}
          onChange={event => {
            setValue(event.target.value);
            action('handleChange');
          }}
          onFocus={action('handleFocus')}
          onBlur={action('handleBlur')}
          insertBefore={
            <Text as="span" color="colorTextInverse" lineHeight="lineHeight20">
              $10.99
            </Text>
          }
          insertAfter={
            <Anchor href="#" display="flex">
              <InformationIcon color="colorTextInverse" decorative={false} size="sizeIcon20" title="Get more info" />
            </Anchor>
          }
          value={value}
          variant="inverse"
          disabled
        >
          <Option value="option-1">Option 1</Option>
          <Option value="option-2">Option 2</Option>
          <Option value="option-3">Option 3</Option>
          <Option value="option-4">Option 4</Option>
        </Select>
        <HelpText variant="inverse">Info that helps a user with this field.</HelpText>
      </Box>
    );
  })
  .add('Select - Option Groups', () => {
    const uid = useUID();
    const [value, setValue] = React.useState('Select - Error');
    return (
      <>
        <Label htmlFor={uid}>Label</Label>
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
        <HelpText>Info that helps a user with this field.</HelpText>
      </>
    );
  })
  .add('Select - Option Groups inverse', () => {
    const uid = useUID();
    const [value, setValue] = React.useState('Select - Error');
    return (
      <Box backgroundColor="colorBackgroundBodyInverse" padding="space60">
        <Label htmlFor={uid} variant="inverse">
          Label
        </Label>
        <Select
          id={uid}
          onChange={event => {
            setValue(event.target.value);
            action('handleChange');
          }}
          onFocus={action('handleFocus')}
          onBlur={action('handleBlur')}
          value={value}
          variant="inverse"
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
        <HelpText variant="inverse">Info that helps a user with this field.</HelpText>
      </Box>
    );
  })
  .add('Select - Option Groups and Multiple', () => {
    const uid = useUID();
    const [value, setValue] = React.useState([]);
    return (
      <>
        <Label htmlFor={uid}>Label</Label>
        <Select
          id={uid}
          onChange={({target: options}) => {
            const update: string[] = Object.keys(options).reduce((optionValues, key) => {
              const {selected, value: optionValue} = options[key];
              if (selected) {
                return [...optionValues, optionValue];
              }
              return optionValues;
            }, []);
            setValue(update);
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
        <HelpText>Info that helps a user with this field.</HelpText>
      </>
    );
  })
  .add('Select - Option Groups and Multiple inverse', () => {
    const uid = useUID();
    const [value, setValue] = React.useState([]);
    return (
      <Box backgroundColor="colorBackgroundBodyInverse" padding="space60">
        <Label htmlFor={uid} variant="inverse">
          Label
        </Label>
        <Select
          id={uid}
          onChange={({target: options}) => {
            const update: string[] = Object.keys(options).reduce((optionValues, key) => {
              const {selected, value: optionValue} = options[key];
              if (selected) {
                return [...optionValues, optionValue];
              }
              return optionValues;
            }, []);
            setValue(update);
            action('handleChange');
          }}
          multiple
          size={4}
          onFocus={action('handleFocus')}
          onBlur={action('handleBlur')}
          value={value}
          variant="inverse"
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
        <HelpText variant="inverse">Info that helps a user with this field.</HelpText>
      </Box>
    );
  })
  .add('Select - overflow long value', () => {
    const uid = useUID();
    const [value, setValue] = React.useState('option-1');
    return (
      <Box maxWidth="size40">
        <Label htmlFor={uid}>Label</Label>
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
          <Option value="option-1">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt eveniet exercitationem nisi temporibus
          </Option>
          <Option value="option-2">Option 2</Option>
          <Option value="option-3">Option 3</Option>
          <Option value="option-4">Option 4</Option>
        </Select>
      </Box>
    );
  });
