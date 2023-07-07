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
    />
  );
};

DefaultNumberInput.storyName = 'Number Input - Controlled';

export const UncontrolledNumberInput = (): React.ReactNode => {
  const uid = useUID();
  return <Input id={uid} type="number" max="50" min="-50" value="0" />;
};

UncontrolledNumberInput.storyName = 'Number Input - Uncontrolled';

export const ErrorNumberInput = (): React.ReactNode => {
  const uid = useUID();
  const [value, setValue] = React.useState('0');
  return (
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
  );
};

ErrorNumberInput.storyName = 'Number Input - Error';

export const DisabledNumberInput = (): React.ReactNode => {
  const uid = useUID();
  const [value, setValue] = React.useState('0');
  return (
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
  );
};

DisabledNumberInput.storyName = 'Number Input - Disabled';

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
