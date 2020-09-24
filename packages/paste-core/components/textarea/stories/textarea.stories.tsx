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
import {TextArea} from '../src';

const helpVariantOptions = ['default', 'error'];

storiesOf('Components|Textarea', module)
  .addDecorator(withKnobs)
  .add('Textarea Options', () => {
    const hasError = boolean('hasError', false);
    const isDisabled = boolean('disabled', false);
    const isReadOnly = boolean('readOnly', false);
    const isRequired = boolean('required', false);
    const helpVariantValue = select('help variant', helpVariantOptions, 'default') as HelpTextVariants;
    return (
      <>
        <Label htmlFor={text('htmlFor', 'textarea_field')} disabled={isDisabled} required={isRequired}>
          Label
        </Label>
        <TextArea
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
        </TextArea>
        <HelpText variant={helpVariantValue}>{text('help text', 'Info that helps a user with this field.')}</HelpText>
      </>
    );
  })
  .add('Textarea', () => {
    const uid = useUID();
    return (
      <>
        <Label htmlFor={uid}>Label</Label>
        <TextArea
          id={uid}
          placeholder="Placeholder"
          onChange={action('handleFocus')}
          onFocus={action('handleFocus')}
          onBlur={action('handleBlur')}
        />
        <HelpText>Info that helps a user with this field.</HelpText>
      </>
    );
  })
  .add('Textarea - inverse', () => {
    const uid = useUID();
    return (
      <Box backgroundColor="colorBackgroundBodyInverse" padding="space60">
        <Label htmlFor={uid} variant="inverse">
          Label
        </Label>
        <TextArea
          id={uid}
          placeholder="Placeholder"
          onChange={action('handleFocus')}
          onFocus={action('handleFocus')}
          onBlur={action('handleBlur')}
          variant="inverse"
        />
        <HelpText variant="inverse">Info that helps a user with this field.</HelpText>
      </Box>
    );
  })
  .add('Textarea - Required', () => {
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
          onChange={action('handleFocus')}
          onFocus={action('handleFocus')}
          onBlur={action('handleBlur')}
        />
        <HelpText>Info that helps a user with this field.</HelpText>
      </>
    );
  })
  .add('Textarea - Required inverse', () => {
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
          onChange={action('handleFocus')}
          onFocus={action('handleFocus')}
          onBlur={action('handleBlur')}
          variant="inverse"
        />
        <HelpText variant="inverse">Info that helps a user with this field.</HelpText>
      </Box>
    );
  })
  .add('Textarea - Error', () => {
    const uid = useUID();
    return (
      <>
        <Label htmlFor={uid}>Label</Label>
        <TextArea
          id={uid}
          placeholder="Placeholder"
          hasError
          onChange={action('handleFocus')}
          onFocus={action('handleFocus')}
          onBlur={action('handleBlur')}
        />
        <HelpText variant="error">Error info. Explains why the input has an error.</HelpText>
      </>
    );
  })
  .add('Textarea - Error inverse', () => {
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
          onChange={action('handleFocus')}
          onFocus={action('handleFocus')}
          onBlur={action('handleBlur')}
          variant="inverse"
        />
        <HelpText variant="error_inverse">Error info. Explains why the input has an error.</HelpText>
      </Box>
    );
  })
  .add('Textarea - Disabled', () => {
    const uid = useUID();
    return (
      <>
        <Label htmlFor={uid} disabled>
          Label
        </Label>
        <TextArea
          id={uid}
          placeholder="Placeholder"
          disabled
          onChange={action('handleFocus')}
          onFocus={action('handleFocus')}
          onBlur={action('handleBlur')}
        />
        <HelpText>Info that helps a user with this field.</HelpText>
      </>
    );
  })
  .add('Textarea - Disabled inverse', () => {
    const uid = useUID();
    return (
      <Box backgroundColor="colorBackgroundBodyInverse" padding="space60">
        <Label htmlFor={uid} disabled variant="inverse">
          Label
        </Label>
        <TextArea
          id={uid}
          placeholder="Placeholder"
          disabled
          onChange={action('handleFocus')}
          onFocus={action('handleFocus')}
          onBlur={action('handleBlur')}
          variant="inverse"
        />
        <HelpText variant="inverse">Info that helps a user with this field.</HelpText>
      </Box>
    );
  })
  .add('Textarea - ReadOnly', () => {
    const uid = useUID();
    return (
      <>
        <Label htmlFor={uid}>Label</Label>
        <TextArea
          id={uid}
          placeholder="Placeholder"
          readOnly
          onChange={action('handleFocus')}
          onFocus={action('handleFocus')}
          onBlur={action('handleBlur')}
        />
        <HelpText>Info that helps a user with this field.</HelpText>
      </>
    );
  })
  .add('Textarea - ReadOnly inverse', () => {
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
          onChange={action('handleFocus')}
          onFocus={action('handleFocus')}
          onBlur={action('handleBlur')}
          variant="inverse"
        />
        <HelpText variant="inverse">Info that helps a user with this field.</HelpText>
      </Box>
    );
  })
  .add('Textarea - insert before and after', () => {
    const uid = useUID();
    return (
      <>
        <Label htmlFor={uid}>Label</Label>
        <TextArea
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
        <HelpText>Info that helps a user with this field.</HelpText>
      </>
    );
  })
  .add('Textarea - Disabled insert before and after', () => {
    const uid = useUID();
    return (
      <>
        <Label disabled htmlFor={uid}>
          Label
        </Label>
        <TextArea
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
        <HelpText>Info that helps a user with this field.</HelpText>
      </>
    );
  })
  .add('Textarea - insert before and after inverse', () => {
    const uid = useUID();
    return (
      <Box backgroundColor="colorBackgroundBodyInverse" padding="space60">
        <Label htmlFor={uid} variant="inverse">
          Label
        </Label>
        <TextArea
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
        <HelpText variant="inverse">Info that helps a user with this field.</HelpText>
      </Box>
    );
  })
  .add('Textarea - Disabled insert before and after inverse', () => {
    const uid = useUID();
    return (
      <Box backgroundColor="colorBackgroundBodyInverse" padding="space60">
        <Label htmlFor={uid} disabled variant="inverse">
          Label
        </Label>
        <TextArea
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
        <HelpText variant="inverse">Info that helps a user with this field.</HelpText>
      </Box>
    );
  });
