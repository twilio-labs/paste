import * as React from 'react';
import type { StoryFn } from '@storybook/react';
import { useUID, useUIDSeed } from '@twilio-paste/uid-library';
import { action } from '@storybook/addon-actions';
import { useTheme } from '@twilio-paste/theme';
import { CustomizationProvider } from '@twilio-paste/customization';
import { Box } from '@twilio-paste/box';
import { Text } from '@twilio-paste/text';
import { Anchor } from '@twilio-paste/anchor';
import { InformationIcon } from '@twilio-paste/icons/esm/InformationIcon';
import { Label } from '@twilio-paste/label';
import { HelpText } from '@twilio-paste/help-text';

import { Select, Option, OptionGroup } from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Select',
  component: Select,
  subcomponents: { Option, OptionGroup },
};

export const DefaultSelect = (): React.ReactNode => {
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

DefaultSelect.storyName = 'Select';

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

SelectRequired.storyName = 'Select - Required';

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

SelectRequiredInverse.storyName = 'Select - Required inverse';

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

SelectError.storyName = 'Select - Error';

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

SelectErrorInverse.storyName = 'Select - Error inverse';

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

SelectDisabled.storyName = 'Select - Disabled';

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

SelectDisabledInverse.storyName = 'Select - Disabled inverse';

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
        onChange={({ target: options }) => {
          const update: [] = Object.keys(options).reduce((optionValues: [], key): [] => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore implicit any with key
            const { selected, value: optionValue } = options[key];
            if (selected) {
              return [...optionValues, optionValue] as unknown as [];
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

SelectMultiple.storyName = 'Select - Multiple';

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

SelectInsertBeforeAndAfter.storyName = 'Select - Insert before and after';

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

SelectDisabledInsertBeforeAndAfter.storyName = 'Select - Disabled insert before and after';

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
          <Text as="span" color="colorTextInverseWeak" lineHeight="lineHeight20" fontWeight="fontWeightSemibold">
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

SelectInsertBeforeAndAfterInverse.storyName = 'Select - Insert before and after inverse';

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
          <Text as="span" color="colorTextInverseWeak" lineHeight="lineHeight20" fontWeight="fontWeightSemibold">
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

SelectDisabedInsertBeforeAndAfterInverse.storyName = 'Select - Disabed insert before and after inverse';

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

SelectOptionGroups.storyName = 'Select - Option Groups';

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

SelectOptionGroupsInverse.storyName = 'Select - Option Groups inverse';

export const SelectOptionGroupsAndMultiple = (): React.ReactNode => {
  const uid = useUID();
  const [value, setValue] = React.useState([]);
  return (
    <>
      <Label htmlFor={uid}>Label</Label>
      <Select
        id={uid}
        onChange={({ target: options }) => {
          const update: [] = Object.keys(options).reduce((optionValues: [], key): [] => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore implicit any with key
            const { selected, value: optionValue } = options[key];
            if (selected) {
              return [...optionValues, optionValue] as unknown as [];
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

SelectOptionGroupsAndMultiple.storyName = 'Select - Option Groups and Multiple';

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
        onChange={({ target: options }) => {
          const update: [] = Object.keys(options).reduce((optionValues: [], key): [] => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore implicit any with key
            const { selected, value: optionValue } = options[key];
            if (selected) {
              return [...optionValues, optionValue] as unknown as [];
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

SelectOptionGroupsAndMultipleInverse.storyName = 'Select - Option Groups and Multiple inverse';

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

SelectOverflowLongValue.storyName = 'Select - overflow long value';

export const CustomizedSelect: StoryFn = (_args, { parameters: { isTestEnvironment } }) => {
  const currentTheme = useTheme();

  const seed = useUIDSeed();

  return (
    <CustomizationProvider
      disableAnimations={isTestEnvironment}
      theme={{
        ...currentTheme,
        shadows: {
          ...currentTheme.shadows,
          shadowFocus: '0 0 0 4px rgba(3, 154, 165, 0.9)',
        },
      }}
      elements={{
        SELECT_ELEMENT: {
          color: 'colorTextNew',
          variants: {
            inverse: {
              color: 'colorTextWarningStrong',
              fontWeight: 'fontWeightBold',
            },
          },
        },
        CUSTOM_SELECT_ELEMENT: {
          fontWeight: 'fontWeightSemibold',
          fontFamily: 'fontFamilyCode',
          variants: {
            inverse: {
              fontWeight: 'fontWeightMedium',
            },
          },
        },
        SELECT_WRAPPER: {
          boxShadow: 'shadowBorderPrimary',
          ':hover': { boxShadow: 'shadowBorderError' },
          ':focus-within': { boxShadow: 'shadowFocus' },
        },
        SELECT_CHEVRON_WRAPPER: {
          transform: 'rotate(90deg) translateX(-50%) translateY(-20%)',
        },
        CUSTOM_SELECT_ICON: {
          color: 'colorTextInverseWeak',
        },
      }}
    >
      <Box maxWidth="size40" paddingX="space40" paddingY="space80">
        <Label htmlFor={seed('default')}>Default variant</Label>
        <Select variant="default" id={seed('default')}>
          <OptionGroup element="CUSTOM_OPTION_GROUP" label="Group A">
            <Option value="option-1">Option 1</Option>
            <Option element="CUSTOM_OPTION" value="option-2">
              Option 2
            </Option>
          </OptionGroup>
          <OptionGroup label="Group B">
            <Option value="option-3">Option 3</Option>
            <Option value="option-4">Option 4</Option>
          </OptionGroup>
        </Select>
      </Box>

      <Box maxWidth="size40" paddingX="space40" paddingY="space80" backgroundColor="colorBackgroundBodyInverse">
        <Label variant="inverse" htmlFor={seed('inverse')}>
          Inverse variant
        </Label>
        <Select variant="inverse" element="CUSTOM_SELECT" id={seed('inverse')}>
          <OptionGroup label="Group C">
            <Option value="option-1">Option 1</Option>
            <Option value="option-2">Option 2</Option>
          </OptionGroup>
          <OptionGroup label="Group D">
            <Option value="option-3">Option 3</Option>
            <Option value="option-4">Option 4</Option>
          </OptionGroup>
        </Select>
      </Box>
    </CustomizationProvider>
  );
};

CustomizedSelect.storyName = 'Select - Customized';
CustomizedSelect.parameters = {
  a11y: {
    // no need to a11y check customization
    disable: true,
  },
};
