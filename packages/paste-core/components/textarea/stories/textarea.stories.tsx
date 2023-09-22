import * as React from 'react';
import type { Story } from '@storybook/react';
import { useUID } from '@twilio-paste/uid-library';
import { action } from '@storybook/addon-actions';
import { Anchor } from '@twilio-paste/anchor';
import { Button } from '@twilio-paste/button';
import { Box } from '@twilio-paste/box';
import { Text } from '@twilio-paste/text';
import { InformationIcon } from '@twilio-paste/icons/esm/InformationIcon';
import { Label } from '@twilio-paste/label';
import { HelpText } from '@twilio-paste/help-text';
import { useTheme } from '@twilio-paste/theme';
import { CustomizationProvider } from '@twilio-paste/customization';
import { Stack } from '@twilio-paste/stack';

import { TextArea } from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Textarea',
  component: TextArea,
};

export const Textarea = (): React.ReactElement => {
  const uid = useUID();
  return (
    <>
      <Label htmlFor={uid}>Label</Label>
      <TextArea
        id={uid}
        aria-describedby={`help-text-${uid}`}
        placeholder="Placeholder"
        onChange={action('handleFocus')}
        onFocus={action('handleFocus')}
        onBlur={action('handleBlur')}
      />
      <HelpText id={`help-text-${uid}`}>Info that helps a user with this field.</HelpText>
    </>
  );
};

export const MultipleTextareas = (): React.ReactElement => {
  const [shouldDisplayTextareas, setShouldDisplayTextareas] = React.useState(true);
  const [textareas, setTextareas] = React.useState<React.ReactNode[]>([]);

  const push = (): void => {
    setTextareas([...textareas, <Textarea key={textareas.length + 1} />]);
  };

  const pop = (): void => {
    const updated = [...textareas];
    updated.shift();
    setTextareas(updated);
  };

  React.useEffect(() => {
    push();
  }, []);

  return (
    <>
      {shouldDisplayTextareas && (
        <Box display="flex" flexDirection="column" rowGap="space50" paddingBottom="space100">
          {textareas.map((textarea, i) => (
            <Box key={i}>{textarea}</Box>
          ))}
        </Box>
      )}
      <Box display="flex" columnGap="space100" flexDirection="row">
        <Button
          variant="secondary"
          onClick={() => {
            setShouldDisplayTextareas(!shouldDisplayTextareas);
          }}
        >
          Toggle textarea visibility
        </Button>
        <Button variant="secondary" onClick={push}>
          Push textarea
        </Button>
        <Button variant="secondary" onClick={pop}>
          Pop textarea
        </Button>
      </Box>
    </>
  );
};

MultipleTextareas.parameters = {
  chromatic: { disableSnapshot: true },
};

export const TextareaInverse = (): React.ReactNode => {
  const uid = useUID();
  return (
    <Box backgroundColor="colorBackgroundBodyInverse" padding="space60">
      <Label htmlFor={uid} variant="inverse">
        Label
      </Label>
      <TextArea
        id={uid}
        placeholder="Placeholder"
        aria-describedby={`help-text-${uid}`}
        onChange={action('handleFocus')}
        onFocus={action('handleFocus')}
        onBlur={action('handleBlur')}
        variant="inverse"
      />
      <HelpText variant="inverse" id={`help-text-${uid}`}>
        Info that helps a user with this field.
      </HelpText>
    </Box>
  );
};

TextareaInverse.storyName = 'Textarea - inverse';

export const TextareaResizeVertical = (): React.ReactNode => {
  const uid = useUID();
  return (
    <>
      <Label htmlFor={uid} required>
        Label
      </Label>
      <TextArea
        id={uid}
        placeholder="Placeholder"
        aria-describedby={`help-text-${uid}`}
        resize="vertical"
        onChange={action('handleFocus')}
        onFocus={action('handleFocus')}
        onBlur={action('handleBlur')}
      />
      <HelpText id={`help-text-${uid}`}>Info that helps a user with this field.</HelpText>
    </>
  );
};

TextareaResizeVertical.storyName = 'Textarea - Resize Vertical';

export const TextareaRequired = (): React.ReactNode => {
  const uid = useUID();
  return (
    <>
      <Label htmlFor={uid} required>
        Label
      </Label>
      <TextArea
        id={uid}
        placeholder="Placeholder"
        required
        aria-describedby={`help-text-${uid}`}
        onChange={action('handleFocus')}
        onFocus={action('handleFocus')}
        onBlur={action('handleBlur')}
      />
      <HelpText id={`help-text-${uid}`}>Info that helps a user with this field.</HelpText>
    </>
  );
};

TextareaRequired.storyName = 'Textarea - Required';

export const TextareaRequiredInverse = (): React.ReactNode => {
  const uid = useUID();
  return (
    <Box backgroundColor="colorBackgroundBodyInverse" padding="space60">
      <Label htmlFor={uid} required variant="inverse">
        Label
      </Label>
      <TextArea
        id={uid}
        placeholder="Placeholder"
        required
        aria-describedby={`help-text-${uid}`}
        onChange={action('handleFocus')}
        onFocus={action('handleFocus')}
        onBlur={action('handleBlur')}
        variant="inverse"
      />
      <HelpText variant="inverse" id={`help-text-${uid}`}>
        Info that helps a user with this field.
      </HelpText>
    </Box>
  );
};

TextareaRequiredInverse.storyName = 'Textarea - Required inverse';

export const TextareaError = (): React.ReactNode => {
  const uid = useUID();
  return (
    <>
      <Label htmlFor={uid}>Label</Label>
      <TextArea
        id={uid}
        placeholder="Placeholder"
        hasError
        aria-describedby={`help-text-${uid}`}
        onChange={action('handleFocus')}
        onFocus={action('handleFocus')}
        onBlur={action('handleBlur')}
      />
      <HelpText variant="error" id={`help-text-${uid}`}>
        Error info. Explains why the input has an error.
      </HelpText>
    </>
  );
};

TextareaError.storyName = 'Textarea - Error';

export const TextareaErrorInverse = (): React.ReactNode => {
  const uid = useUID();
  return (
    <Box backgroundColor="colorBackgroundBodyInverse" padding="space60">
      <Label htmlFor={uid} variant="inverse">
        Label
      </Label>
      <TextArea
        id={uid}
        placeholder="Placeholder"
        hasError
        aria-describedby={`help-text-${uid}`}
        onChange={action('handleFocus')}
        onFocus={action('handleFocus')}
        onBlur={action('handleBlur')}
        variant="inverse"
      />
      <HelpText variant="error_inverse" id={`help-text-${uid}`}>
        Error info. Explains why the input has an error.
      </HelpText>
    </Box>
  );
};

TextareaErrorInverse.storyName = 'Textarea - Error inverse';

export const TextareaDisabled = (): React.ReactNode => {
  const uid = useUID();
  return (
    <>
      <Label htmlFor={uid} disabled>
        Label
      </Label>
      <TextArea
        id={uid}
        placeholder="Placeholder"
        aria-describedby={`help-text-${uid}`}
        value="Disabled text content..."
        disabled
        onChange={action('handleFocus')}
        onFocus={action('handleFocus')}
        onBlur={action('handleBlur')}
      />
      <HelpText id={`help-text-${uid}`}>Info that helps a user with this field.</HelpText>
    </>
  );
};

TextareaDisabled.storyName = 'Textarea - Disabled';

export const TextareaDisabledInverse = (): React.ReactNode => {
  const uid = useUID();
  return (
    <Box backgroundColor="colorBackgroundBodyInverse" padding="space60">
      <Label htmlFor={uid} disabled variant="inverse">
        Label
      </Label>
      <TextArea
        id={uid}
        placeholder="Placeholder"
        aria-describedby={`help-text-${uid}`}
        value="Disabled text content..."
        disabled
        onChange={action('handleFocus')}
        onFocus={action('handleFocus')}
        onBlur={action('handleBlur')}
        variant="inverse"
      />
      <HelpText variant="inverse" id={`help-text-${uid}`}>
        Info that helps a user with this field.
      </HelpText>
    </Box>
  );
};

TextareaDisabledInverse.storyName = 'Textarea - Disabled inverse';

export const TextareaReadOnly = (): React.ReactNode => {
  const uid = useUID();
  return (
    <>
      <Label htmlFor={uid}>Label</Label>
      <TextArea
        id={uid}
        placeholder="Placeholder"
        readOnly
        aria-describedby={`help-text-${uid}`}
        onChange={action('handleFocus')}
        onFocus={action('handleFocus')}
        onBlur={action('handleBlur')}
      />
      <HelpText id={`help-text-${uid}`}>Info that helps a user with this field.</HelpText>
    </>
  );
};

TextareaReadOnly.storyName = 'Textarea - ReadOnly';

export const TextareaReadOnlyInverse = (): React.ReactNode => {
  const uid = useUID();
  return (
    <Box backgroundColor="colorBackgroundBodyInverse" padding="space60">
      <Label htmlFor={uid} variant="inverse">
        Label
      </Label>
      <TextArea
        id={uid}
        placeholder="Placeholder"
        readOnly
        aria-describedby={`help-text-${uid}`}
        onChange={action('handleFocus')}
        onFocus={action('handleFocus')}
        onBlur={action('handleBlur')}
        variant="inverse"
      />
      <HelpText variant="inverse" id={`help-text-${uid}`}>
        Info that helps a user with this field.
      </HelpText>
    </Box>
  );
};

TextareaReadOnlyInverse.storyName = 'Textarea - ReadOnly inverse';

export const TextareaInsertBeforeAndAfter = (): React.ReactNode => {
  const uid = useUID();
  return (
    <>
      <Label htmlFor={uid}>Label</Label>
      <TextArea
        id={uid}
        placeholder="Placeholder"
        aria-describedby={`help-text-${uid}`}
        onChange={action('handleFocus')}
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
      <HelpText id={`help-text-${uid}`}>Info that helps a user with this field.</HelpText>
    </>
  );
};

TextareaInsertBeforeAndAfter.storyName = 'Textarea - insert before and after';

export const TextareaDisabledInsertBeforeAndAfter = (): React.ReactNode => {
  const uid = useUID();
  return (
    <>
      <Label disabled htmlFor={uid}>
        Label
      </Label>
      <TextArea
        id={uid}
        placeholder="Placeholder"
        aria-describedby={`help-text-${uid}`}
        onChange={action('handleFocus')}
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
      <HelpText id={`help-text-${uid}`}>Info that helps a user with this field.</HelpText>
    </>
  );
};

TextareaDisabledInsertBeforeAndAfter.storyName = 'Textarea - Disabled insert before and after';

export const TextareaInsertBeforeAndAfterInverse = (): React.ReactNode => {
  const uid = useUID();
  return (
    <Box backgroundColor="colorBackgroundBodyInverse" padding="space60">
      <Label htmlFor={uid} variant="inverse">
        Label
      </Label>
      <TextArea
        id={uid}
        placeholder="Placeholder"
        aria-describedby={`help-text-${uid}`}
        onChange={action('handleFocus')}
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
        variant="inverse"
      />
      <HelpText variant="inverse" id={`help-text-${uid}`}>
        Info that helps a user with this field.
      </HelpText>
    </Box>
  );
};

TextareaInsertBeforeAndAfterInverse.storyName = 'Textarea - insert before and after inverse';

export const TextareaDisabledInsertBeforeAndAfterInverse = (): React.ReactNode => {
  const uid = useUID();
  return (
    <Box backgroundColor="colorBackgroundBodyInverse" padding="space60">
      <Label htmlFor={uid} disabled variant="inverse">
        Label
      </Label>
      <TextArea
        id={uid}
        placeholder="Placeholder"
        aria-describedby={`help-text-${uid}`}
        onChange={action('handleFocus')}
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
        variant="inverse"
        disabled
      />
      <HelpText variant="inverse" id={`help-text-${uid}`}>
        Info that helps a user with this field.
      </HelpText>
    </Box>
  );
};

TextareaDisabledInsertBeforeAndAfterInverse.storyName = 'Textarea - Disabled insert before and after inverse';

export const CustomizedTextarea: Story = () => {
  const activeTheme = useTheme();
  const uidTwo = useUID();
  const uidTwoVariant = useUID();
  const uidThree = useUID();
  const uidThreeVariant = useUID();
  return (
    <CustomizationProvider
      disableAnimations={true}
      theme={activeTheme}
      elements={{
        TEXTAREA: {
          backgroundColor: 'colorBackgroundPrimaryWeakest',
          borderRadius: 'borderRadius30',
          boxShadow: 'none',
          borderStyle: 'solid',
          borderWidth: 'borderWidth10',
          borderColor: 'colorBorderPrimary',
        },
        TEXTAREA_ELEMENT: {
          color: 'colorTextLinkStronger',
          padding: 'space50',
          '::placeholder': {
            color: 'colorTextLink',
          },
        },
        TEXTAREA_PREFIX: {
          backgroundColor: 'colorBackgroundPrimaryWeakest',
          borderTopLeftRadius: 'borderRadius30',
          borderBottomLeftRadius: 'borderRadius30',
          borderRightColor: 'colorBorderPrimary',
          padding: 'space50',
        },
        TEXTAREA_SUFFIX: {
          backgroundColor: 'colorBackgroundPrimaryWeakest',
          borderTopRightRadius: 'borderRadius30',
          borderBottomRightRadius: 'borderRadius30',
          borderLeftColor: 'colorBorderPrimary',
          padding: 'space50',
        },
        TEXTAREA_VARIANT: {
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
        TEXTAREA_VARIANT_ELEMENT: {
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
        TEXTAREA_VARIANT_PREFIX: {
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
        TEXTAREA_VARIANT_SUFFIX: {
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
        NEW_TEXTAREA: {
          backgroundColor: 'colorBackgroundDestructiveWeakest',
          borderRadius: 'borderRadius30',
          boxShadow: 'none',
          borderStyle: 'solid',
          borderWidth: 'borderWidth20',
          borderColor: 'colorBorderDestructive',
        },
        NEW_TEXTAREA_ELEMENT: {
          color: 'colorTextLinkDestructive',
          padding: 'space70',
          '::placeholder': {
            color: 'colorTextLinkDestructive',
          },
        },
        NEW_TEXTAREA_PREFIX: {
          backgroundColor: 'colorBackgroundDestructiveWeakest',
          borderTopLeftRadius: 'borderRadius30',
          borderBottomLeftRadius: 'borderRadius30',
          borderRightColor: 'colorBorderDestructive',
          borderWidth: 'borderWidth20',
          padding: 'space70',
        },
        NEW_TEXTAREA_SUFFIX: {
          backgroundColor: 'colorBackgroundDestructiveWeakest',
          borderTopRightRadius: 'borderRadius30',
          borderBottomRightRadius: 'borderRadius30',
          borderLeftColor: 'colorBorderDestructive',
          borderWidth: 'borderWidth20',
          padding: 'space70',
        },
        NEW_TEXTAREA_VARIANT: {
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
        NEW_TEXTAREA_VARIANT_ELEMENT: {
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
        NEW_TEXTAREA_VARIANT_PREFIX: {
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
        NEW_TEXTAREA_VARIANT_SUFFIX: {
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
          <Label htmlFor={uidTwo}>Label</Label>
          <TextArea
            id={uidTwo}
            data-testid="default-textarea"
            placeholder="Customized"
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
        </Box>
        <Box backgroundColor="colorBackgroundBodyInverse" padding="space60">
          <Label variant="inverse" htmlFor={uidTwoVariant}>
            Label
          </Label>
          <TextArea
            id={uidTwoVariant}
            variant="inverse"
            placeholder="Customized"
            data-testid="inverse-textarea"
            element="TEXTAREA_VARIANT"
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
        </Box>
        <Box>
          <Label htmlFor={uidThree}>Label</Label>
          <TextArea
            id={uidThree}
            element="NEW_TEXTAREA"
            placeholder="Customized Element"
            data-testid="custom-default-textarea"
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
        </Box>
        <Box backgroundColor="colorBackgroundBodyInverse" padding="space60">
          <Label variant="inverse" htmlFor={uidThreeVariant}>
            Label
          </Label>
          <TextArea
            id={uidThreeVariant}
            element="NEW_TEXTAREA_VARIANT"
            placeholder="Customized Element"
            data-testid="custom-inverse-textarea"
            variant="inverse"
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
        </Box>
      </Stack>
    </CustomizationProvider>
  );
};
CustomizedTextarea.parameters = {
  a11y: {
    // no need to a11y check customization
    disable: true,
  },
};
