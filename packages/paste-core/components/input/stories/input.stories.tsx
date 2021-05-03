import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';
import {action} from '@storybook/addon-actions';
import {withKnobs, boolean, text, select} from '@storybook/addon-knobs';
import {Anchor} from '@twilio-paste/anchor';
import {Box} from '@twilio-paste/box';
import {Text} from '@twilio-paste/text';
import {InformationIcon} from '@twilio-paste/icons/esm/InformationIcon';
import {Label} from '@twilio-paste/label';
import {HelpText} from '@twilio-paste/help-text';
import type {HelpTextVariants} from '@twilio-paste/help-text';
import {Input} from '../src';
import type {InputTypes} from '../src';

const inputTypeOptions = ['text', 'email', 'hidden', 'number', 'password', 'search', 'tel'];
const helpVariantOptions = ['default', 'error'];

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Input',
  decorators: [withKnobs],
  component: Input,
};

export const InputOptions = (): React.ReactNode => {
  const hasError = boolean('hasError', false);
  const isDisabled = boolean('disabled', false);
  const isReadOnly = boolean('readOnly', false);
  const isRequired = boolean('required', false);
  const inputTypeValue = select('type', inputTypeOptions, 'text') as InputTypes;
  const helpVariantValue = select('help variant', helpVariantOptions, 'default') as HelpTextVariants;
  const [value, setValue] = React.useState('Input Options');
  return (
    <>
      <Label htmlFor={text('htmlFor', 'input_field')} disabled={isDisabled} required={isRequired}>
        Label
      </Label>
      <Input
        disabled={isDisabled}
        hasError={hasError}
        id={text('id', 'input_field')}
        name={text('name', '')}
        placeholder={text('placeholder', 'Placeholder')}
        readOnly={isReadOnly}
        required={isRequired}
        type={inputTypeValue}
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
          action('handleChange');
        }}
        onFocus={action('handleFocus')}
        onBlur={action('handleBlur')}
      />
      <HelpText variant={helpVariantValue}>{text('help text', 'Info that helps a user with this field.')}</HelpText>
    </>
  );
};

export const DefaultInput = (): React.ReactNode => {
  const uid = useUID();
  const [value, setValue] = React.useState('Input');
  return (
    <>
      <Label htmlFor={uid}>Label</Label>
      <Input
        id={uid}
        type="text"
        placeholder="Placeholder"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
          action('handleChange');
        }}
        onFocus={action('handleFocus')}
        onBlur={action('handleBlur')}
      />
      <HelpText>Info that helps a user with this field.</HelpText>
    </>
  );
};

DefaultInput.story = {
  name: 'Input',
};

export const InputInverse = (): React.ReactNode => {
  const uid = useUID();
  const [value, setValue] = React.useState('Input');
  return (
    <Box backgroundColor="colorBackgroundBodyInverse" padding="space60">
      <Label htmlFor={uid} variant="inverse">
        Label
      </Label>
      <Input
        id={uid}
        type="text"
        placeholder="Placeholder"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
          action('handleChange');
        }}
        onFocus={action('handleFocus')}
        onBlur={action('handleBlur')}
        variant="inverse"
      />
      <HelpText variant="inverse">Info that helps a user with this field.</HelpText>
    </Box>
  );
};

InputInverse.story = {
  name: 'Input - Inverse',
};

export const InputRequired = (): React.ReactNode => {
  const uid = useUID();
  const [value, setValue] = React.useState('Input - Required');
  return (
    <>
      <Label htmlFor={uid} required>
        Label
      </Label>
      <Input
        id={uid}
        type="text"
        placeholder="Placeholder"
        required
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
          action('handleChange');
        }}
        onFocus={action('handleFocus')}
        onBlur={action('handleBlur')}
      />
      <HelpText>Info that helps a user with this field.</HelpText>
    </>
  );
};

InputRequired.story = {
  name: 'Input - Required',
};

export const InputRequiredInverse = (): React.ReactNode => {
  const uid = useUID();
  const [value, setValue] = React.useState('Input - Required');
  return (
    <Box backgroundColor="colorBackgroundBodyInverse" padding="space60">
      <Label htmlFor={uid} variant="inverse" required>
        Label
      </Label>
      <Input
        id={uid}
        type="text"
        placeholder="Placeholder"
        required
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
          action('handleChange');
        }}
        onFocus={action('handleFocus')}
        onBlur={action('handleBlur')}
        variant="inverse"
      />
      <HelpText variant="inverse">Info that helps a user with this field.</HelpText>
    </Box>
  );
};

InputRequiredInverse.story = {
  name: 'Input - Required inverse',
};

export const InputError = (): React.ReactNode => {
  const uid = useUID();
  const [value, setValue] = React.useState('Input - Error');
  return (
    <>
      <Label htmlFor={uid}>Label</Label>
      <Input
        id={uid}
        type="text"
        placeholder="Placeholder"
        hasError
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
          action('handleChange');
        }}
        onFocus={action('handleFocus')}
        onBlur={action('handleBlur')}
      />
      <HelpText variant="error">Error info. Explains why the input has an error.</HelpText>
    </>
  );
};

InputError.story = {
  name: 'Input - Error',
};

export const InputReallyLongError = (): React.ReactNode => {
  const uid = useUID();
  const [value, setValue] = React.useState('Email address');
  return (
    <>
      <Label htmlFor={uid}>Label</Label>
      <Input
        id={uid}
        type="email"
        placeholder="Placeholder"
        hasError
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
          action('handleChange');
        }}
        onFocus={action('handleFocus')}
        onBlur={action('handleBlur')}
      />
      <HelpText variant="error">
        Please enter a valid email. Please enter a valid email. Please enter a valid email. Please enter a valid email.
        Please enter a valid email. Please enter a valid email. Please enter a valid email. Please enter a valid email.
        Please enter a valid email. Please enter a valid email. Please enter a valid email. Please enter a valid email.
        Please enter a valid email. Please enter a valid email. Please enter a valid email. Please enter a valid email.
      </HelpText>
    </>
  );
};

InputReallyLongError.story = {
  name: 'Input - Really Long Error',
};

export const InputErrorInverse = (): React.ReactNode => {
  const uid = useUID();
  const [value, setValue] = React.useState('Input');
  return (
    <Box backgroundColor="colorBackgroundBodyInverse" padding="space60">
      <Label htmlFor={uid} variant="inverse">
        Label
      </Label>
      <Input
        id={uid}
        type="text"
        placeholder="Placeholder"
        hasError
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
          action('handleChange');
        }}
        onFocus={action('handleFocus')}
        onBlur={action('handleBlur')}
        variant="inverse"
      />
      <HelpText variant="error_inverse">Info that helps a user with this field.</HelpText>
    </Box>
  );
};

InputErrorInverse.story = {
  name: 'Input - Error inverse',
};

export const InputReallyLongErrorInverse = (): React.ReactNode => {
  const uid = useUID();
  const [value, setValue] = React.useState('Email address');
  return (
    <Box backgroundColor="colorBackgroundBodyInverse" padding="space60">
      <Label htmlFor={uid} variant="inverse">
        Label
      </Label>
      <Input
        id={uid}
        type="email"
        placeholder="Placeholder"
        hasError
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
          action('handleChange');
        }}
        onFocus={action('handleFocus')}
        onBlur={action('handleBlur')}
        variant="inverse"
      />
      <HelpText variant="error_inverse">
        Please enter a valid email. Please enter a valid email. Please enter a valid email. Please enter a valid email.
        Please enter a valid email. Please enter a valid email. Please enter a valid email. Please enter a valid email.
        Please enter a valid email. Please enter a valid email. Please enter a valid email. Please enter a valid email.
        Please enter a valid email. Please enter a valid email. Please enter a valid email. Please enter a valid email.
      </HelpText>
    </Box>
  );
};

InputReallyLongErrorInverse.story = {
  name: 'Input - Really Long Error inverse',
};

export const InputDisabled = (): React.ReactNode => {
  const uid = useUID();
  const [value, setValue] = React.useState('Input - Disabled');
  return (
    <>
      <Label htmlFor={uid} disabled>
        Label
      </Label>
      <Input
        id={uid}
        type="text"
        disabled
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
          action('handleChange');
        }}
        onFocus={action('handleFocus')}
        onBlur={action('handleBlur')}
      />
      <HelpText>Info that helps a user with this field.</HelpText>
    </>
  );
};

InputDisabled.story = {
  name: 'Input - Disabled',
};

export const InputDisabledInverse = (): React.ReactNode => {
  const uid = useUID();
  const [value, setValue] = React.useState('Input');
  return (
    <Box backgroundColor="colorBackgroundBodyInverse" padding="space60">
      <Label htmlFor={uid} variant="inverse" disabled>
        Label
      </Label>
      <Input
        id={uid}
        type="text"
        placeholder="Placeholder"
        disabled
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
          action('handleChange');
        }}
        onFocus={action('handleFocus')}
        onBlur={action('handleBlur')}
        variant="inverse"
      />
      <HelpText variant="inverse">Info that helps a user with this field.</HelpText>
    </Box>
  );
};

InputDisabledInverse.story = {
  name: 'Input - Disabled inverse',
};

export const InputReadOnly = (): React.ReactNode => {
  const uid = useUID();
  const [value, setValue] = React.useState('Input - ReadOnly');
  return (
    <>
      <Label htmlFor={uid}>Label</Label>
      <Input
        id={uid}
        type="text"
        readOnly
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
          action('handleChange');
        }}
        onFocus={action('handleFocus')}
        onBlur={action('handleBlur')}
      />
      <HelpText>Info that helps a user with this field.</HelpText>
    </>
  );
};

InputReadOnly.story = {
  name: 'Input - ReadOnly',
};

export const InputReadOnlyInverse = (): React.ReactNode => {
  const uid = useUID();
  const [value, setValue] = React.useState('Input');
  return (
    <Box backgroundColor="colorBackgroundBodyInverse" padding="space60">
      <Label htmlFor={uid} variant="inverse">
        Label
      </Label>
      <Input
        id={uid}
        type="text"
        placeholder="Placeholder"
        readOnly
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
          action('handleChange');
        }}
        onFocus={action('handleFocus')}
        onBlur={action('handleBlur')}
        variant="inverse"
      />
      <HelpText variant="inverse">Info that helps a user with this field.</HelpText>
    </Box>
  );
};

InputReadOnlyInverse.story = {
  name: 'Input - ReadOnly inverse',
};

export const InputHidden = (): React.ReactNode => {
  const uid = useUID();
  const [value, setValue] = React.useState('Input - Hidden');
  return (
    <>
      <Input
        id={uid}
        type="hidden"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
          action('handleChange');
        }}
        onFocus={action('handleFocus')}
        onBlur={action('handleBlur')}
      />
    </>
  );
};

InputHidden.story = {
  name: 'Input - Hidden',
};

export const InputHiddenInverse = (): React.ReactNode => {
  const uid = useUID();
  const [value, setValue] = React.useState('Input - Hidden');
  return (
    <>
      <Input
        id={uid}
        type="hidden"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
          action('handleChange');
        }}
        onFocus={action('handleFocus')}
        onBlur={action('handleBlur')}
        variant="inverse"
      />
    </>
  );
};

InputHiddenInverse.story = {
  name: 'Input - Hidden inverse',
};

export const InputInsertBeforeAndAfter = (): React.ReactNode => {
  const uid = useUID();
  const [value, setValue] = React.useState('Input - ReadOnly');
  return (
    <>
      <Label htmlFor={uid}>Label</Label>
      <Input
        id={uid}
        type="text"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
          action('handleChange');
        }}
        onFocus={action('handleFocus')}
        onBlur={action('handleBlur')}
        insertBefore={
          <Text as="span" fontWeight="fontWeightSemibold">
            $10.99
          </Text>
        }
        insertAfter={
          <Anchor href="#" display="flex">
            <InformationIcon decorative={false} size="sizeIcon20" title="Get more info" />
          </Anchor>
        }
      />
      <HelpText>Info that helps a user with this field.</HelpText>
    </>
  );
};

InputInsertBeforeAndAfter.story = {
  name: 'Input - insert before and after',
};

export const InputDisabledInsertBeforeAndAfter = (): React.ReactNode => {
  const uid = useUID();
  const [value, setValue] = React.useState('Input - ReadOnly');
  return (
    <>
      <Label htmlFor={uid} disabled>
        Label
      </Label>
      <Input
        id={uid}
        type="text"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
          action('handleChange');
        }}
        onFocus={action('handleFocus')}
        onBlur={action('handleBlur')}
        insertBefore={
          <Text as="span" fontWeight="fontWeightSemibold">
            $10.99
          </Text>
        }
        insertAfter={
          <Anchor href="#" display="flex">
            <InformationIcon decorative={false} size="sizeIcon20" title="Get more info" />
          </Anchor>
        }
        disabled
      />
      <HelpText>Info that helps a user with this field.</HelpText>
    </>
  );
};

InputDisabledInsertBeforeAndAfter.story = {
  name: 'Input - Disabled insert before and after',
};

export const InputInsertBeforeAndAfterInverse = (): React.ReactNode => {
  const uid = useUID();
  const [value, setValue] = React.useState('Input');
  return (
    <Box backgroundColor="colorBackgroundBodyInverse" padding="space60">
      <Label htmlFor={uid} variant="inverse">
        Label
      </Label>
      <Input
        id={uid}
        type="text"
        placeholder="Placeholder"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
          action('handleChange');
        }}
        onFocus={action('handleFocus')}
        onBlur={action('handleBlur')}
        variant="inverse"
        insertBefore={
          <Text as="span" color="colorTextInverse" lineHeight="lineHeight20" fontWeight="fontWeightSemibold">
            $10.99
          </Text>
        }
        insertAfter={
          <Anchor href="#" display="flex">
            <InformationIcon color="colorTextInverse" decorative={false} size="sizeIcon20" title="Get more info" />
          </Anchor>
        }
      />
      <HelpText variant="inverse">Info that helps a user with this field.</HelpText>
    </Box>
  );
};

InputInsertBeforeAndAfterInverse.story = {
  name: 'Input - insert before and after inverse',
};

export const InputDisabledInsertBeforeAndAfterInverse = (): React.ReactNode => {
  const uid = useUID();
  const [value, setValue] = React.useState('Input');
  return (
    <Box backgroundColor="colorBackgroundBodyInverse" padding="space60">
      <Label htmlFor={uid} variant="inverse" disabled>
        Label
      </Label>
      <Input
        id={uid}
        type="text"
        placeholder="Placeholder"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
          action('handleChange');
        }}
        onFocus={action('handleFocus')}
        onBlur={action('handleBlur')}
        variant="inverse"
        insertBefore={
          <Text as="span" color="colorTextInverse" lineHeight="lineHeight20" fontWeight="fontWeightSemibold">
            $10.99
          </Text>
        }
        insertAfter={
          <Anchor href="#" display="flex">
            <InformationIcon color="colorTextInverse" decorative={false} size="sizeIcon20" title="Get more info" />
          </Anchor>
        }
        disabled
      />
      <HelpText variant="inverse">Info that helps a user with this field.</HelpText>
    </Box>
  );
};

InputDisabledInsertBeforeAndAfterInverse.story = {
  name: 'Input - Disabled insert before and after inverse',
};

export const InputNumberError = (): React.ReactNode => {
  const uid = useUID();
  const [value, setValue] = React.useState('Input - Number Error');
  return (
    <>
      <Label htmlFor={uid}>Label</Label>
      <Input
        id={uid}
        type="number"
        placeholder="Placeholder"
        hasError
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
          action('handleChange');
        }}
        onFocus={action('handleFocus')}
        onBlur={action('handleBlur')}
      />
      <HelpText variant="error">Not a number error. Should have no box-shadow.</HelpText>
    </>
  );
};

InputNumberError.story = {
  name: 'Input - Number Error',
};

export const InputPlaceholder = (): React.ReactNode => {
  const uid = useUID();
  const [value, setValue] = React.useState('');
  return (
    <>
      <Label htmlFor={uid}>Label</Label>
      <Input
        id={uid}
        type="text"
        placeholder="Placeholder"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
          action('handleChange');
        }}
        onFocus={action('handleFocus')}
        onBlur={action('handleBlur')}
      />
    </>
  );
};

InputPlaceholder.story = {
  name: 'Input - Placeholder',
};

export const InputPlaceholderInverse = (): React.ReactNode => {
  const uid = useUID();
  const [value, setValue] = React.useState('');
  return (
    <Box backgroundColor="colorBackgroundBodyInverse" padding="space60">
      <Label htmlFor={uid} variant="inverse">
        Label
      </Label>
      <Input
        id={uid}
        type="text"
        placeholder="Placeholder"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
          action('handleChange');
        }}
        onFocus={action('handleFocus')}
        onBlur={action('handleBlur')}
        variant="inverse"
      />
    </Box>
  );
};

InputPlaceholderInverse.story = {
  name: 'Input - Placeholder inverse',
};
