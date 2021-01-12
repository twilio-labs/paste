import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';
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

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Select',
  decorators: [withKnobs],
};

export const DefaultSelect = (): React.ReactNode => {
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
        onChange={(event) => {
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
};

DefaultSelect.story = {
  name: 'Select',
};

export const SelectRequired = (): React.ReactNode => {
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
        onChange={(event) => {
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
};

SelectRequired.story = {
  name: 'Select - Required',
};

export const SelectRequiredInverse = (): React.ReactNode => {
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
        onChange={(event) => {
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
};

SelectRequiredInverse.story = {
  name: 'Select - Required inverse',
};

export const SelectError = (): React.ReactNode => {
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
        onChange={(event) => {
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
};

SelectError.story = {
  name: 'Select - Error',
};

export const SelectErrorInverse = (): React.ReactNode => {
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
        onChange={(event) => {
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
};

SelectErrorInverse.story = {
  name: 'Select - Error inverse',
};

export const SelectDisabled = (): React.ReactNode => {
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
        onChange={(event) => {
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
};

SelectDisabled.story = {
  name: 'Select - Disabled',
};

export const SelectDisabledInverse = (): React.ReactNode => {
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
        onChange={(event) => {
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
};

SelectDisabledInverse.story = {
  name: 'Select - Disabled inverse',
};

export const SelectMultiple = (): React.ReactNode => {
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
};

SelectMultiple.story = {
  name: 'Select - Multiple',
};

export const SelectInsertBeforeAndAfter = (): React.ReactNode => {
  const uid = useUID();
  const [value, setValue] = React.useState('Select');
  return (
    <>
      <Label htmlFor={uid}>Label</Label>
      <Select
        id={uid}
        onChange={(event) => {
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
};

SelectInsertBeforeAndAfter.story = {
  name: 'Select - Insert before and after',
};

export const SelectDisabledInsertBeforeAndAfter = (): React.ReactNode => {
  const uid = useUID();
  const [value, setValue] = React.useState('Select');
  return (
    <>
      <Label disabled htmlFor={uid}>
        Label
      </Label>
      <Select
        id={uid}
        onChange={(event) => {
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
};

SelectDisabledInsertBeforeAndAfter.story = {
  name: 'Select - Disabled insert before and after',
};

export const SelectInsertBeforeAndAfterInverse = (): React.ReactNode => {
  const uid = useUID();
  const [value, setValue] = React.useState('Select');
  return (
    <Box backgroundColor="colorBackgroundBodyInverse" padding="space60">
      <Label htmlFor={uid} variant="inverse">
        Label
      </Label>
      <Select
        id={uid}
        onChange={(event) => {
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
};

SelectInsertBeforeAndAfterInverse.story = {
  name: 'Select - Insert before and after inverse',
};

export const SelectDisabedInsertBeforeAndAfterInverse = (): React.ReactNode => {
  const uid = useUID();
  const [value, setValue] = React.useState('Select');
  return (
    <Box backgroundColor="colorBackgroundBodyInverse" padding="space60">
      <Label disabled htmlFor={uid} variant="inverse">
        Label
      </Label>
      <Select
        id={uid}
        onChange={(event) => {
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
};

SelectDisabedInsertBeforeAndAfterInverse.story = {
  name: 'Select - Disabed insert before and after inverse',
};

export const SelectOptionGroups = (): React.ReactNode => {
  const uid = useUID();
  const [value, setValue] = React.useState('Select - Error');
  return (
    <>
      <Label htmlFor={uid}>Label</Label>
      <Select
        id={uid}
        onChange={(event) => {
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
};

SelectOptionGroups.story = {
  name: 'Select - Option Groups',
};

export const SelectOptionGroupsInverse = (): React.ReactNode => {
  const uid = useUID();
  const [value, setValue] = React.useState('Select - Error');
  return (
    <Box backgroundColor="colorBackgroundBodyInverse" padding="space60">
      <Label htmlFor={uid} variant="inverse">
        Label
      </Label>
      <Select
        id={uid}
        onChange={(event) => {
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
};

SelectOptionGroupsInverse.story = {
  name: 'Select - Option Groups inverse',
};

export const SelectOptionGroupsAndMultiple = (): React.ReactNode => {
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
};

SelectOptionGroupsAndMultiple.story = {
  name: 'Select - Option Groups and Multiple',
};

export const SelectOptionGroupsAndMultipleInverse = (): React.ReactNode => {
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
};

SelectOptionGroupsAndMultipleInverse.story = {
  name: 'Select - Option Groups and Multiple inverse',
};

export const SelectOverflowLongValue = (): React.ReactNode => {
  const uid = useUID();
  const [value, setValue] = React.useState('option-1');
  return (
    <Box maxWidth="size40">
      <Label htmlFor={uid}>Label</Label>
      <Select
        id={uid}
        onChange={(event) => {
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
};

SelectOverflowLongValue.story = {
  name: 'Select - overflow long value',
};
