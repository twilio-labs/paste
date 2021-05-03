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
import {TextArea} from '../src';

const helpVariantOptions = ['default', 'error'];

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Textarea',
  decorators: [withKnobs],
  component: TextArea,
};

export const TextareaOptions = (): React.ReactNode => {
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
};

export const Textarea = (): React.ReactNode => {
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
        onChange={action('handleFocus')}
        onFocus={action('handleFocus')}
        onBlur={action('handleBlur')}
        variant="inverse"
      />
      <HelpText variant="inverse">Info that helps a user with this field.</HelpText>
    </Box>
  );
};

TextareaInverse.story = {
  name: 'Textarea - inverse',
};

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
        onChange={action('handleFocus')}
        onFocus={action('handleFocus')}
        onBlur={action('handleBlur')}
      />
      <HelpText>Info that helps a user with this field.</HelpText>
    </>
  );
};

TextareaRequired.story = {
  name: 'Textarea - Required',
};

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
        onChange={action('handleFocus')}
        onFocus={action('handleFocus')}
        onBlur={action('handleBlur')}
        variant="inverse"
      />
      <HelpText variant="inverse">Info that helps a user with this field.</HelpText>
    </Box>
  );
};

TextareaRequiredInverse.story = {
  name: 'Textarea - Required inverse',
};

export const TextareaError = (): React.ReactNode => {
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
};

TextareaError.story = {
  name: 'Textarea - Error',
};

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
        onChange={action('handleFocus')}
        onFocus={action('handleFocus')}
        onBlur={action('handleBlur')}
        variant="inverse"
      />
      <HelpText variant="error_inverse">Error info. Explains why the input has an error.</HelpText>
    </Box>
  );
};

TextareaErrorInverse.story = {
  name: 'Textarea - Error inverse',
};

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
        disabled
        onChange={action('handleFocus')}
        onFocus={action('handleFocus')}
        onBlur={action('handleBlur')}
      />
      <HelpText>Info that helps a user with this field.</HelpText>
    </>
  );
};

TextareaDisabled.story = {
  name: 'Textarea - Disabled',
};

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
        disabled
        onChange={action('handleFocus')}
        onFocus={action('handleFocus')}
        onBlur={action('handleBlur')}
        variant="inverse"
      />
      <HelpText variant="inverse">Info that helps a user with this field.</HelpText>
    </Box>
  );
};

TextareaDisabledInverse.story = {
  name: 'Textarea - Disabled inverse',
};

export const TextareaReadOnly = (): React.ReactNode => {
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
};

TextareaReadOnly.story = {
  name: 'Textarea - ReadOnly',
};

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
        onChange={action('handleFocus')}
        onFocus={action('handleFocus')}
        onBlur={action('handleBlur')}
        variant="inverse"
      />
      <HelpText variant="inverse">Info that helps a user with this field.</HelpText>
    </Box>
  );
};

TextareaReadOnlyInverse.story = {
  name: 'Textarea - ReadOnly inverse',
};

export const TextareaInsertBeforeAndAfter = (): React.ReactNode => {
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

TextareaInsertBeforeAndAfter.story = {
  name: 'Textarea - insert before and after',
};

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
        onChange={action('handleFocus')}
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

TextareaDisabledInsertBeforeAndAfter.story = {
  name: 'Textarea - Disabled insert before and after',
};

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
        onChange={action('handleFocus')}
        onFocus={action('handleFocus')}
        onBlur={action('handleBlur')}
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
        variant="inverse"
      />
      <HelpText variant="inverse">Info that helps a user with this field.</HelpText>
    </Box>
  );
};

TextareaInsertBeforeAndAfterInverse.story = {
  name: 'Textarea - insert before and after inverse',
};

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
        onChange={action('handleFocus')}
        onFocus={action('handleFocus')}
        onBlur={action('handleBlur')}
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
        variant="inverse"
        disabled
      />
      <HelpText variant="inverse">Info that helps a user with this field.</HelpText>
    </Box>
  );
};

TextareaDisabledInsertBeforeAndAfterInverse.story = {
  name: 'Textarea - Disabled insert before and after inverse',
};
