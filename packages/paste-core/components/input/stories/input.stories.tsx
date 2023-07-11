import * as React from 'react';
import type {StoryFn} from '@storybook/react';
import {useUID} from '@twilio-paste/uid-library';
import {action} from '@storybook/addon-actions';
import {Anchor} from '@twilio-paste/anchor';
import {useTheme} from '@twilio-paste/theme';
import {Box} from '@twilio-paste/box';
import {Text} from '@twilio-paste/text';
import {InformationIcon} from '@twilio-paste/icons/esm/InformationIcon';
import {Label} from '@twilio-paste/label';
import {HelpText} from '@twilio-paste/help-text';
import {Stack} from '@twilio-paste/stack';
import {CustomizationProvider} from '@twilio-paste/customization';

import {Input} from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Input',
  component: Input,
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

DefaultInput.storyName = 'Input';

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

InputInverse.storyName = 'Input - Inverse';

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

InputRequired.storyName = 'Input - Required';

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

InputRequiredInverse.storyName = 'Input - Required inverse';

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

InputError.storyName = 'Input - Error';

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

InputReallyLongError.storyName = 'Input - Really Long Error';

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

InputErrorInverse.storyName = 'Input - Error inverse';

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

InputReallyLongErrorInverse.storyName = 'Input - Really Long Error inverse';

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

InputDisabled.storyName = 'Input - Disabled';

export const InputDisabledInverse = (): React.ReactNode => {
  const uid = useUID();
  const [value, setValue] = React.useState('Input - Disabled');
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

InputDisabledInverse.storyName = 'Input - Disabled inverse';

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

InputReadOnly.storyName = 'Input - ReadOnly';

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

InputReadOnlyInverse.storyName = 'Input - ReadOnly inverse';

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

InputHidden.storyName = 'Input - Hidden';

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

InputHiddenInverse.storyName = 'Input - Hidden inverse';

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
          <Text color="colorTextWeak" as="span" fontWeight="fontWeightSemibold">
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

InputInsertBeforeAndAfter.storyName = 'Input - insert before and after';

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
          <Text color="colorTextWeak" as="span" fontWeight="fontWeightSemibold">
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

InputDisabledInsertBeforeAndAfter.storyName = 'Input - Disabled insert before and after';

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
          <Text as="span" color="colorTextInverseWeak" lineHeight="lineHeight20" fontWeight="fontWeightSemibold">
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

InputInsertBeforeAndAfterInverse.storyName = 'Input - insert before and after inverse';

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
          <Text as="span" color="colorTextInverseWeak" lineHeight="lineHeight20" fontWeight="fontWeightSemibold">
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

InputDisabledInsertBeforeAndAfterInverse.storyName = 'Input - Disabled insert before and after inverse';

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

InputNumberError.storyName = 'Input - Number Error';

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

InputPlaceholder.storyName = 'Input - Placeholder';

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

InputPlaceholderInverse.storyName = 'Input - Placeholder inverse';

export const DefaultNumberInput = (): React.ReactNode => {
  const uid = useUID();
  const [value, setValue] = React.useState('0');
  return (
    <Box>
      <Label htmlFor={uid} variant="default">
        Label
      </Label>
      <Input
        id={uid}
        type="number"
        max="50"
        min="-50"
        step={5}
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
    </Box>
  );
};

DefaultNumberInput.storyName = 'Number Input - Controlled';

export const TestNumberInput = (): React.ReactNode => {
  const uid = useUID();
  const [value, setValue] = React.useState('0');
  const [minValue, setMinValue] = React.useState('-10');
  const [maxValue, setMaxValue] = React.useState('10');
  const [stepValue, setStepValue] = React.useState('1');
  return (
    <>
      <Box display="flex" flexDirection="row" columnGap="space40">
        <Box maxWidth="size10">
          <Label htmlFor="min">Min</Label>
          <Input type="text" id="min" value={minValue} onChange={(evt) => setMinValue(evt.target.value)} />
        </Box>
        <Box maxWidth="size10">
          <Label htmlFor="max">Max</Label>
          <Input type="text" id="max" value={maxValue} onChange={(evt) => setMaxValue(evt.target.value)} />
        </Box>
        <Box maxWidth="size10">
          <Label htmlFor="step">Step</Label>
          <Input type="text" id="step" value={stepValue} onChange={(evt) => setStepValue(evt.target.value)} />
        </Box>
        <Box width="size20">
          <Label htmlFor={uid} variant="default">
            Number Input
          </Label>
          <Input
            id={uid}
            type="number"
            max={maxValue}
            min={minValue}
            step={stepValue}
            value={value}
            onChange={(event) => {
              setValue(event.target.value);
            }}
          />
        </Box>
      </Box>
      <Box paddingY="space50" maxWidth="size50">
        <strong>Note:</strong> this story is for testing the functionality of the Number Input logic (specifically the
        increment and decrement buttons). Min, max, and step inputs are type=text just for the purpose of testing the
        one type=number input in a controlled way, but please only put number values in those fields. <br /> <br /> The
        expected behavior is that a console error will be thrown if the min/max values do not line up with the step
        value (e.g. min=0; max=10; step=6). Valid min/max/step values are only when the step value brings the value from
        the min to the max without any remainders (e.g. min=0; max=10; step=2). <br /> <br /> The increment and
        decrement buttons should not appear if the value is hitting the min or max. Arrow keys (up/down) and clicking
        the stepper buttons should have the same effect.
      </Box>
    </>
  );
};

TestNumberInput.storyName = 'Number Input - Test';

export const UncontrolledNumberInput = (): React.ReactNode => {
  const uid = useUID();
  return (
    <>
      <Label htmlFor={uid}>number input</Label>
      <Input id={uid} type="number" max="50" min="-50" />
    </>
  );
};

UncontrolledNumberInput.storyName = 'Number Input - Uncontrolled';

export const ErrorNumberInput = (): React.ReactNode => {
  const uid = useUID();
  const [value, setValue] = React.useState('0');
  return (
    <Box>
      <Label htmlFor={uid} variant="default">
        Label
      </Label>
      <Input
        id={uid}
        type="number"
        max="50"
        min="-50"
        step={3}
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
        hasError
      />
    </Box>
  );
};

ErrorNumberInput.storyName = 'Number Input - Error';

export const DisabledNumberInput = (): React.ReactNode => {
  const uid = useUID();
  const [value, setValue] = React.useState('0');
  return (
    <Box>
      <Label htmlFor={uid} variant="default">
        Label
      </Label>
      <Input
        id={uid}
        type="number"
        max="50"
        min="-50"
        step={3}
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
        disabled
      />
    </Box>
  );
};

DisabledNumberInput.storyName = 'Number Input - Disabled';

export const I18nNumberInput = (): React.ReactNode => {
  const uid = useUID();
  const [value, setValue] = React.useState('0');
  return (
    <Box>
      <Label htmlFor={uid} variant="default">
        Número
      </Label>
      <Input
        id={uid}
        type="number"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
        i18nStepUpLabel="incrementar"
        i18nStepDownLabel="decrementar"
      />
    </Box>
  );
};

I18nNumberInput.storyName = 'Number Input - i18n';

export const CustomizedNumberInput = (): React.ReactNode => {
  const theme = useTheme();
  const uid1 = useUID();
  const uid2 = useUID();
  const [value1, setValue1] = React.useState('0');
  const [value2, setValue2] = React.useState('0');
  return (
    <Box>
      <Box margin="space60">
        <Label htmlFor={uid1} variant="default">
          Label
        </Label>
        <Input
          id={uid1}
          type="number"
          max="50"
          min="-50"
          value={value1}
          onChange={(event) => {
            setValue1(event.target.value);
          }}
        />
      </Box>
      <CustomizationProvider
        theme={theme}
        elements={{
          INPUT: {backgroundColor: 'colorBackgroundPrimaryWeakest'},
          INPUT_ELEMENT: {
            padding: 'space50',
          },
          INPUT_STEP_WRAPPER: {backgroundColor: 'colorBackgroundBrandHighlightWeakest', paddingLeft: 'space30'},
          INPUT_INCREMENT_BUTTON: {
            borderRadius: 'borderRadiusCircle',
            backgroundColor: 'colorBackgroundDestructiveWeak',
          },
          INPUT_INCREMENT_ICON: {size: 'sizeIcon20'},
          INPUT_DECREMENT_BUTTON: {
            borderRadius: 'borderRadiusCircle',
            backgroundColor: 'colorBackgroundDestructiveWeak',
          },
          INPUT_DECREMENT_ICON: {size: 'sizeIcon20'},
        }}
      >
        <Box margin="space60">
          <Label htmlFor={uid2} variant="inverse">
            Label
          </Label>
          <Input
            id={uid2}
            type="number"
            max="50"
            min="-50"
            value={value2}
            onChange={(event) => {
              setValue2(event.target.value);
            }}
          />
        </Box>
      </CustomizationProvider>
    </Box>
  );
};

export const MinNumberInput = (): React.ReactNode => {
  const uid = useUID();
  return (
    <>
      <Label htmlFor={uid}>number input</Label>
      <Input id={uid} type="number" defaultValue="-50" max="50" min="-50" />
    </>
  );
};

MinNumberInput.storyName = 'Number Input - Min number matched';

export const MaxNumberInput = (): React.ReactNode => {
  const uid = useUID();
  return (
    <>
      <Label htmlFor={uid}>number input</Label>
      <Input id={uid} type="number" defaultValue="50" max="50" min="-50" />
    </>
  );
};

MaxNumberInput.storyName = 'Number Input - Max number matched';

CustomizedNumberInput.storyName = 'Number Input - Customized';

export const CustomInput: StoryFn = (_args, {parameters: {isTestEnvironment}}) => {
  const uidOne = useUID();
  const uidTwo = useUID();
  const uidTwoVariant = useUID();
  const uidThree = useUID();
  const uidThreeVariant = useUID();
  const [valueOne, setValueOne] = React.useState('');
  const [valueTwo, setValueTwo] = React.useState('');
  const [valueTwoVariant, setValueTwoVariant] = React.useState('');
  const [valueThree, setValueThree] = React.useState('');
  const [valueThreeVariant, setValueThreeVariant] = React.useState('');
  const theme = useTheme();
  return (
    <Stack orientation="vertical" spacing="space60">
      <Box>
        <Label htmlFor={uidOne}>Label</Label>
        <Input
          id={uidOne}
          type="text"
          placeholder="Default"
          value={valueOne}
          onChange={(event) => {
            setValueOne(event.target.value);
            action('handleChange');
          }}
          onFocus={action('handleFocus')}
          onBlur={action('handleBlur')}
          insertBefore={
            <Text color="colorTextWeak" as="span" fontWeight="fontWeightSemibold">
              $10.99
            </Text>
          }
          insertAfter={
            <Anchor href="#" display="flex">
              <InformationIcon decorative={false} size="sizeIcon20" title="Get more info" />
            </Anchor>
          }
        />
      </Box>
      <CustomizationProvider
        disableAnimations={isTestEnvironment}
        theme={theme}
        elements={{
          INPUT: {
            backgroundColor: 'colorBackgroundPrimaryWeakest',
            borderRadius: 'borderRadius30',
            boxShadow: 'none',
            borderStyle: 'solid',
            borderWidth: 'borderWidth10',
            borderColor: 'colorBorderPrimary',
            variants: {
              default: {
                backgroundColor: 'colorBackgroundPrimaryWeakest',
              },
              inverse: {
                backgroundColor: 'colorBackgroundDestructiveWeakest',
                borderColor: 'colorBorderDestructive',
              },
            },
          },
          INPUT_ELEMENT: {
            color: 'colorTextLinkStronger',
            padding: 'space50',
            '::placeholder': {
              color: 'colorTextLink',
            },
            variants: {
              default: {
                backgroundColor: 'colorBackgroundPrimaryWeakest',
              },
              inverse: {
                backgroundColor: 'colorBackgroundDestructiveWeakest',
              },
            },
          },
          INPUT_PREFIX: {
            backgroundColor: 'colorBackgroundPrimaryWeakest',
            borderTopLeftRadius: 'borderRadius30',
            borderBottomLeftRadius: 'borderRadius30',
            borderRightColor: 'colorBorderPrimary',
            padding: 'space50',
            variants: {
              default: {
                backgroundColor: 'colorBackgroundPrimaryWeakest',
                borderRightColor: 'colorBorderDestructive',
              },
              inverse: {
                backgroundColor: 'colorBackgroundDestructiveWeakest',
                borderRightColor: 'colorBorderDestructive',
              },
            },
          },
          INPUT_SUFFIX: {
            backgroundColor: 'colorBackgroundPrimaryWeakest',
            borderTopRightRadius: 'borderRadius30',
            borderBottomRightRadius: 'borderRadius30',
            borderLeftColor: 'colorBorderPrimary',
            padding: 'space50',
            variants: {
              default: {
                backgroundColor: 'colorBackgroundPrimaryWeakest',
                borderLeftColor: 'colorBorderDestructive',
              },
              inverse: {
                backgroundColor: 'colorBackgroundDestructiveWeakest',
                borderLeftColor: 'colorBorderDestructive',
              },
            },
          },
        }}
      >
        <Stack orientation="vertical" spacing="space60">
          <Box>
            <Label htmlFor={uidTwo}>Label</Label>
            <Input
              id={uidTwo}
              type="text"
              placeholder="Customized"
              value={valueTwo}
              onChange={(event) => {
                setValueTwo(event.target.value);
                action('handleChange');
              }}
              onFocus={action('handleFocus')}
              onBlur={action('handleBlur')}
              insertBefore={
                <Text color="colorTextWeak" as="span" fontWeight="fontWeightSemibold">
                  $10.99
                </Text>
              }
              insertAfter={
                <Anchor href="#" display="flex">
                  <InformationIcon decorative={false} size="sizeIcon20" title="Get more info" />
                </Anchor>
              }
            />
          </Box>
          <Box>
            <Label htmlFor={uidTwoVariant}>Label</Label>
            <Input
              id={uidTwoVariant}
              type="text"
              placeholder="Customized variant"
              value={valueTwoVariant}
              variant="inverse"
              onChange={(event) => {
                setValueTwoVariant(event.target.value);
                action('handleChange');
              }}
              onFocus={action('handleFocus')}
              onBlur={action('handleBlur')}
              insertBefore={
                <Text color="colorTextWeak" as="span" fontWeight="fontWeightSemibold">
                  $10.99
                </Text>
              }
              insertAfter={
                <Anchor href="#" display="flex">
                  <InformationIcon decorative={false} size="sizeIcon20" title="Get more info" />
                </Anchor>
              }
            />
          </Box>
        </Stack>
      </CustomizationProvider>
      <CustomizationProvider
        disableAnimations={isTestEnvironment}
        theme={theme}
        elements={{
          NEW_INPUT: {
            backgroundColor: 'colorBackgroundDestructiveWeakest',
            borderRadius: 'borderRadius30',
            boxShadow: 'none',
            borderStyle: 'solid',
            borderWidth: 'borderWidth20',
            borderColor: 'colorBorderDestructive',
            variants: {
              default: {
                backgroundColor: 'colorBackgroundDestructiveWeakest',
              },
              inverse: {
                backgroundColor: 'colorBackgroundPrimaryWeakest',
                borderColor: 'colorBorderPrimary',
              },
            },
          },
          NEW_INPUT_ELEMENT: {
            color: 'colorTextLinkDestructive',
            padding: 'space70',
            '::placeholder': {
              color: 'colorTextLinkDestructive',
            },
            variants: {
              default: {
                backgroundColor: 'colorBackgroundDestructiveWeakest',
              },
              inverse: {
                backgroundColor: 'colorBackgroundPrimaryWeakest',
                borderRadius: 'borderRadius30',
              },
            },
          },
          NEW_INPUT_PREFIX: {
            backgroundColor: 'colorBackgroundDestructiveWeakest',
            borderTopLeftRadius: 'borderRadius30',
            borderBottomLeftRadius: 'borderRadius30',
            borderRightColor: 'colorBorderDestructive',
            borderWidth: 'borderWidth20',
            padding: 'space70',
            variants: {
              default: {
                backgroundColor: 'colorBackgroundDestructiveWeakest',
                borderRightColor: 'colorBorderDestructive',
              },
              inverse: {
                backgroundColor: 'colorBackgroundPrimaryWeakest',
                borderRightColor: 'colorBorderPrimary',
              },
            },
          },
          NEW_INPUT_SUFFIX: {
            backgroundColor: 'colorBackgroundDestructiveWeakest',
            borderTopRightRadius: 'borderRadius30',
            borderBottomRightRadius: 'borderRadius30',
            borderLeftColor: 'colorBorderDestructive',
            borderWidth: 'borderWidth20',
            padding: 'space70',
            variants: {
              default: {
                backgroundColor: 'colorBackgroundDestructiveWeakest',
                borderLeftColor: 'colorBorderDestructive',
              },
              inverse: {
                backgroundColor: 'colorBackgroundPrimaryWeakest',
                borderLeftColor: 'colorBorderPrimary',
              },
            },
          },
        }}
      >
        <Stack orientation="vertical" spacing="space60">
          <Box>
            <Label htmlFor={uidThree}>Label</Label>
            <Input
              id={uidThree}
              type="text"
              placeholder="Customized element"
              value={valueThree}
              element="NEW_INPUT"
              onChange={(event) => {
                setValueThree(event.target.value);
                action('handleChange');
              }}
              onFocus={action('handleFocus')}
              onBlur={action('handleBlur')}
              insertBefore={
                <Text color="colorTextWeak" as="span" fontWeight="fontWeightSemibold">
                  $10.99
                </Text>
              }
              insertAfter={
                <Anchor href="#" display="flex">
                  <InformationIcon decorative={false} size="sizeIcon20" title="Get more info" />
                </Anchor>
              }
            />
          </Box>
          <Box>
            <Label htmlFor={uidThreeVariant}>Label</Label>
            <Input
              id={uidThreeVariant}
              type="text"
              placeholder="Customized element variant"
              value={valueThreeVariant}
              element="NEW_INPUT"
              variant="inverse"
              onChange={(event) => {
                setValueThreeVariant(event.target.value);
                action('handleChange');
              }}
              onFocus={action('handleFocus')}
              onBlur={action('handleBlur')}
              insertBefore={
                <Text color="colorTextWeak" as="span" fontWeight="fontWeightSemibold">
                  $10.99
                </Text>
              }
              insertAfter={
                <Anchor href="#" display="flex">
                  <InformationIcon decorative={false} size="sizeIcon20" title="Get more info" />
                </Anchor>
              }
            />
          </Box>
        </Stack>
      </CustomizationProvider>
    </Stack>
  );
};
CustomInput.parameters = {
  a11y: {
    // no need to a11y check customization
    disable: true,
  },
};
