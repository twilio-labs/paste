import * as React from 'react';
import {useUID} from 'react-uid';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {withKnobs, boolean, text, select} from '@storybook/addon-knobs';
import {Anchor} from '@twilio-paste/anchor';
import {Box} from '@twilio-paste/box';
import {Text} from '@twilio-paste/text';
import {InformationIcon} from '@twilio-paste/icons/esm/InformationIcon';
import {Label} from '@twilio-paste/label';
import {HelpText, HelpTextVariants} from '@twilio-paste/help-text';
import {Input, InputTypes} from '../src';

const inputTypeOptions = ['text', 'email', 'hidden', 'number', 'password', 'search', 'tel'];
const helpVariantOptions = ['default', 'error'];

storiesOf('Components|Input', module)
  .addDecorator(withKnobs)
  .add('Input Options', () => {
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
          onChange={event => {
            setValue(event.target.value);
            action('handleChange');
          }}
          onFocus={action('handleFocus')}
          onBlur={action('handleBlur')}
        />
        <HelpText variant={helpVariantValue}>{text('help text', 'Info that helps a user with this field.')}</HelpText>
      </>
    );
  })
  .add('Input', () => {
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
          onChange={event => {
            setValue(event.target.value);
            action('handleChange');
          }}
          onFocus={action('handleFocus')}
          onBlur={action('handleBlur')}
        />
        <HelpText>Info that helps a user with this field.</HelpText>
      </>
    );
  })
  .add('Input - Inverse', () => {
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
          onChange={event => {
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
  })
  .add('Input - Required', () => {
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
          onChange={event => {
            setValue(event.target.value);
            action('handleChange');
          }}
          onFocus={action('handleFocus')}
          onBlur={action('handleBlur')}
        />
        <HelpText>Info that helps a user with this field.</HelpText>
      </>
    );
  })
  .add('Input - Required inverse', () => {
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
          onChange={event => {
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
  })
  .add('Input - Error', () => {
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
          onChange={event => {
            setValue(event.target.value);
            action('handleChange');
          }}
          onFocus={action('handleFocus')}
          onBlur={action('handleBlur')}
        />
        <HelpText variant="error">Error info. Explains why the input has an error.</HelpText>
      </>
    );
  })
  .add('Input - Error inverse', () => {
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
          onChange={event => {
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
  })
  .add('Input - Disabled', () => {
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
          onChange={event => {
            setValue(event.target.value);
            action('handleChange');
          }}
          onFocus={action('handleFocus')}
          onBlur={action('handleBlur')}
        />
        <HelpText>Info that helps a user with this field.</HelpText>
      </>
    );
  })
  .add('Input - Disabled inverse', () => {
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
          onChange={event => {
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
  })
  .add('Input - ReadOnly', () => {
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
          onChange={event => {
            setValue(event.target.value);
            action('handleChange');
          }}
          onFocus={action('handleFocus')}
          onBlur={action('handleBlur')}
        />
        <HelpText>Info that helps a user with this field.</HelpText>
      </>
    );
  })
  .add('Input - ReadOnly inverse', () => {
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
          onChange={event => {
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
  })
  .add('Input - Hidden', () => {
    const uid = useUID();
    const [value, setValue] = React.useState('Input - Hidden');
    return (
      <>
        <Input
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
  .add('Input - Hidden inverse', () => {
    const uid = useUID();
    const [value, setValue] = React.useState('Input - Hidden');
    return (
      <>
        <Input
          id={uid}
          type="hidden"
          value={value}
          onChange={event => {
            setValue(event.target.value);
            action('handleChange');
          }}
          onFocus={action('handleFocus')}
          onBlur={action('handleBlur')}
          variant="inverse"
        />
      </>
    );
  })
  .add('Input - insert before and after', () => {
    const uid = useUID();
    const [value, setValue] = React.useState('Input - ReadOnly');
    return (
      <>
        <Label htmlFor={uid}>Label</Label>
        <Input
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
        <HelpText>Info that helps a user with this field.</HelpText>
      </>
    );
  })
  .add('Input - Disabled insert before and after', () => {
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
          disabled
        />
        <HelpText>Info that helps a user with this field.</HelpText>
      </>
    );
  })
  .add('Input - insert before and after inverse', () => {
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
          onChange={event => {
            setValue(event.target.value);
            action('handleChange');
          }}
          onFocus={action('handleFocus')}
          onBlur={action('handleBlur')}
          variant="inverse"
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
        />
        <HelpText variant="inverse">Info that helps a user with this field.</HelpText>
      </Box>
    );
  })
  .add('Input - Disabled insert before and after inverse', () => {
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
          onChange={event => {
            setValue(event.target.value);
            action('handleChange');
          }}
          onFocus={action('handleFocus')}
          onBlur={action('handleBlur')}
          variant="inverse"
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
          disabled
        />
        <HelpText variant="inverse">Info that helps a user with this field.</HelpText>
      </Box>
    );
  })
  .add('Input - Number Error', () => {
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
          onChange={event => {
            setValue(event.target.value);
            action('handleChange');
          }}
          onFocus={action('handleFocus')}
          onBlur={action('handleBlur')}
        />
        <HelpText variant="error">Not a number error. Should have no box-shadow.</HelpText>
      </>
    );
  })
  .add('Input - Placeholder', () => {
    const uid = useUID();
    const [value, setValue] = React.useState();
    return (
      <>
        <Label htmlFor={uid}>Label</Label>
        <Input
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
  .add('Input - Placeholder inverse', () => {
    const uid = useUID();
    const [value, setValue] = React.useState();
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
          onChange={event => {
            setValue(event.target.value);
            action('handleChange');
          }}
          onFocus={action('handleFocus')}
          onBlur={action('handleBlur')}
          variant="inverse"
        />
      </Box>
    );
  });
