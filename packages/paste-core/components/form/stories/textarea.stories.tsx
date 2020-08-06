import * as React from 'react';
import {useUID} from 'react-uid';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {withKnobs, boolean, text, select} from '@storybook/addon-knobs';
import {Anchor} from '@twilio-paste/anchor';
import {Box} from '@twilio-paste/box';
import {Text} from '@twilio-paste/text';
import {InformationIcon} from '@twilio-paste/icons/esm/InformationIcon';
import {FormLabel, FormHelpText, FormHelpTextVariants, FormTextArea} from '../src';

const helpVariantOptions = ['default', 'error'];

storiesOf('Forms|Textarea', module)
  .addDecorator(withKnobs)
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
  .add('Textarea - inverse', () => {
    const uid = useUID();
    return (
      <Box backgroundColor="colorBackgroundBodyInverse" padding="space60">
        <FormLabel htmlFor={uid} variant="inverse">
          Label
        </FormLabel>
        <FormTextArea
          id={uid}
          placeholder="Placeholder"
          onChange={action('handleFocus')}
          onFocus={action('handleFocus')}
          onBlur={action('handleBlur')}
          variant="inverse"
        />
        <FormHelpText variant="inverse">Info that helps a user with this field.</FormHelpText>
      </Box>
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
  .add('Textarea - Required inverse', () => {
    const uid = useUID();
    return (
      <Box backgroundColor="colorBackgroundBodyInverse" padding="space60">
        <FormLabel htmlFor={uid} required variant="inverse">
          Label
        </FormLabel>
        <FormTextArea
          id={uid}
          placeholder="Placeholder"
          required
          onChange={action('handleFocus')}
          onFocus={action('handleFocus')}
          onBlur={action('handleBlur')}
          variant="inverse"
        />
        <FormHelpText variant="inverse">Info that helps a user with this field.</FormHelpText>
      </Box>
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
  .add('Textarea - Error inverse', () => {
    const uid = useUID();
    return (
      <Box backgroundColor="colorBackgroundBodyInverse" padding="space60">
        <FormLabel htmlFor={uid} variant="inverse">
          Label
        </FormLabel>
        <FormTextArea
          id={uid}
          placeholder="Placeholder"
          hasError
          onChange={action('handleFocus')}
          onFocus={action('handleFocus')}
          onBlur={action('handleBlur')}
          variant="inverse"
        />
        <FormHelpText variant="error_inverse">Error info. Explains why the input has an error.</FormHelpText>
      </Box>
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
  .add('Textarea - Disabled inverse', () => {
    const uid = useUID();
    return (
      <Box backgroundColor="colorBackgroundBodyInverse" padding="space60">
        <FormLabel htmlFor={uid} disabled variant="inverse">
          Label
        </FormLabel>
        <FormTextArea
          id={uid}
          placeholder="Placeholder"
          disabled
          onChange={action('handleFocus')}
          onFocus={action('handleFocus')}
          onBlur={action('handleBlur')}
          variant="inverse"
        />
        <FormHelpText variant="inverse">Info that helps a user with this field.</FormHelpText>
      </Box>
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
  .add('Textarea - ReadOnly inverse', () => {
    const uid = useUID();
    return (
      <Box backgroundColor="colorBackgroundBodyInverse" padding="space60">
        <FormLabel htmlFor={uid} variant="inverse">
          Label
        </FormLabel>
        <FormTextArea
          id={uid}
          placeholder="Placeholder"
          readOnly
          onChange={action('handleFocus')}
          onFocus={action('handleFocus')}
          onBlur={action('handleBlur')}
          variant="inverse"
        />
        <FormHelpText variant="inverse">Info that helps a user with this field.</FormHelpText>
      </Box>
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
              <InformationIcon decorative={false} size="sizeIcon20" title="Get more info" />
            </Anchor>
          }
        />
        <FormHelpText>Info that helps a user with this field.</FormHelpText>
      </>
    );
  })
  .add('Textarea - Disabled insert before and after', () => {
    const uid = useUID();
    return (
      <>
        <FormLabel disabled htmlFor={uid}>
          Label
        </FormLabel>
        <FormTextArea
          id={uid}
          placeholder="Placeholder"
          onChange={action('handleFocus')}
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
        <FormHelpText>Info that helps a user with this field.</FormHelpText>
      </>
    );
  })
  .add('Textarea - insert before and after inverse', () => {
    const uid = useUID();
    return (
      <Box backgroundColor="colorBackgroundBodyInverse" padding="space60">
        <FormLabel htmlFor={uid} variant="inverse">
          Label
        </FormLabel>
        <FormTextArea
          id={uid}
          placeholder="Placeholder"
          onChange={action('handleFocus')}
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
          variant="inverse"
        />
        <FormHelpText variant="inverse">Info that helps a user with this field.</FormHelpText>
      </Box>
    );
  })
  .add('Textarea - Disabled insert before and after inverse', () => {
    const uid = useUID();
    return (
      <Box backgroundColor="colorBackgroundBodyInverse" padding="space60">
        <FormLabel htmlFor={uid} disabled variant="inverse">
          Label
        </FormLabel>
        <FormTextArea
          id={uid}
          placeholder="Placeholder"
          onChange={action('handleFocus')}
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
          variant="inverse"
          disabled
        />
        <FormHelpText variant="inverse">Info that helps a user with this field.</FormHelpText>
      </Box>
    );
  });
