import * as React from 'react';
import {action} from '@storybook/addon-actions';
import {loremIpsum} from 'lorem-ipsum';
import {Box} from '@twilio-paste/box';
import {Stack} from '@twilio-paste/stack';
import {Button} from '@twilio-paste/button';
import {Text} from '@twilio-paste/text';
import {Truncate} from '@twilio-paste/truncate';
import {useUID} from '@twilio-paste/uid-library';
import {Input} from '@twilio-paste/input';
import {Label} from '@twilio-paste/label';
import {RadioGroup, Radio} from '@twilio-paste/radio-group';
import type {ToastVariants} from '../src';
import {Toast, ToastContainer, Toaster, useToaster} from '../src';
import {ToastVariantObject} from '../src/constants';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Toast',
  component: Toast,
  subcomponents: {Toaster, ToastContainer},
};

export const Neutral = (): React.ReactNode => {
  return (
    <Box minHeight="size90">
      <ToastContainer>
        <Toast variant="neutral">
          <Text as="div">I am a toast</Text>
        </Toast>
        <Toast variant="neutral" onDismiss={action('dismiss')}>
          <Text as="div">
            <strong>Toast title</strong> I am a toast
          </Text>
        </Toast>
        <Toast variant="neutral">
          <Text as="div">
            Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod. Praesent
            commodo cursus magna.
          </Text>
        </Toast>
        <Toast variant="neutral" onDismiss={action('dismiss')}>
          <Text as="div">
            Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod. Praesent
            commodo cursus magna, vel scelerisque nisl consectetur et. Duis mollis, est non commodo luctus, nisi erat
            porttitor ligula, eget lacinia odio sem nec elit. Donec ullamcorper nulla non metus auctor fringilla. Nulla
            vitae elit libero, a pharetra augue. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem
            malesuada magna mollis euismod. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Duis
            mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec
            ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.
          </Text>
          <Text as="p">
            <Truncate title="http://www.extremelylongurlthatmightbreakthelayout.com">
              http://www.extremelylongurlthatmightbreakthelayout.com
            </Truncate>
          </Text>
        </Toast>
      </ToastContainer>
    </Box>
  );
};

export const Success = (): React.ReactNode => {
  return (
    <Box minHeight="size90">
      <ToastContainer>
        <Toast variant="success">
          <Text as="div">I am a toast</Text>
        </Toast>
        <Toast variant="success" onDismiss={action('dismiss')}>
          <Text as="div">
            <strong>Toast title</strong> I am a toast
          </Text>
        </Toast>
        <Toast variant="success">
          <Text as="div">
            Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod. Praesent
            commodo cursus magna.
          </Text>
        </Toast>
        <Toast variant="success" onDismiss={action('dismiss')}>
          <Text as="div">
            Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod. Praesent
            commodo cursus magna, vel scelerisque nisl consectetur et. Duis mollis, est non commodo luctus, nisi erat
            porttitor ligula, eget lacinia odio sem nec elit. Donec ullamcorper nulla non metus auctor fringilla. Nulla
            vitae elit libero, a pharetra augue. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem
            malesuada magna mollis euismod. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Duis
            mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec
            ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.
          </Text>
          <Text as="p">
            <Truncate title="http://www.extremelylongurlthatmightbreakthelayout.com">
              http://www.extremelylongurlthatmightbreakthelayout.com
            </Truncate>
          </Text>
        </Toast>
      </ToastContainer>
    </Box>
  );
};

export const Error = (): React.ReactNode => {
  return (
    <Box minHeight="size90">
      <ToastContainer>
        <Toast variant="error">
          <Text as="div">I am a toast</Text>
        </Toast>
        <Toast variant="error" onDismiss={action('dismiss')}>
          <Text as="div">
            <strong>Toast title</strong> I am a toast
          </Text>
        </Toast>
        <Toast variant="error">
          <Text as="div">
            Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod. Praesent
            commodo cursus magna.
          </Text>
        </Toast>
        <Toast variant="error" onDismiss={action('dismiss')}>
          <Text as="div">
            Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod. Praesent
            commodo cursus magna, vel scelerisque nisl consectetur et. Duis mollis, est non commodo luctus, nisi erat
            porttitor ligula, eget lacinia odio sem nec elit. Donec ullamcorper nulla non metus auctor fringilla. Nulla
            vitae elit libero, a pharetra augue. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem
            malesuada magna mollis euismod. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Duis
            mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec
            ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.
          </Text>
          <Text as="p">
            <Truncate title="http://www.extremelylongurlthatmightbreakthelayout.com">
              http://www.extremelylongurlthatmightbreakthelayout.com
            </Truncate>
          </Text>
        </Toast>
      </ToastContainer>
    </Box>
  );
};

export const Warning = (): React.ReactNode => {
  return (
    <Box minHeight="size90">
      <ToastContainer>
        <Toast variant="warning">
          <Text as="div">I am a toast</Text>
        </Toast>
        <Toast variant="warning" onDismiss={action('dismiss')}>
          <Text as="div">
            <strong>Toast title</strong> I am a toast
          </Text>
        </Toast>
        <Toast variant="warning">
          <Text as="div">
            Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod. Praesent
            commodo cursus magna.
          </Text>
        </Toast>
        <Toast variant="warning" onDismiss={action('dismiss')}>
          <Text as="div">
            Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod. Praesent
            commodo cursus magna, vel scelerisque nisl consectetur et. Duis mollis, est non commodo luctus, nisi erat
            porttitor ligula, eget lacinia odio sem nec elit. Donec ullamcorper nulla non metus auctor fringilla. Nulla
            vitae elit libero, a pharetra augue. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem
            malesuada magna mollis euismod. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Duis
            mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec
            ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.
          </Text>
          <Text as="p">
            <Truncate title="http://www.extremelylongurlthatmightbreakthelayout.com">
              http://www.extremelylongurlthatmightbreakthelayout.com
            </Truncate>
          </Text>
        </Toast>
      </ToastContainer>
    </Box>
  );
};

interface ToastContainerExample {
  variant: ToastVariants;
  message: string;
}
export const ToastContainerStory = (): React.ReactNode => {
  const variants = Object.values(ToastVariantObject);
  const [toasts, setToasts] = React.useState<ToastContainerExample[]>([]);
  return (
    <Box height="300px">
      <Button
        variant="primary"
        onClick={() =>
          // eslint-disable-next-line @typescript-eslint/no-shadow
          setToasts((toasts) => [
            ...toasts,
            {variant: variants[Math.floor(Math.random() * 3 + 0)], message: loremIpsum()},
          ])
        }
      >
        Add toast
      </Button>
      <ToastContainer>
        <Toast variant="success" onDismiss={() => {}}>
          <Text as="div">I am a toast</Text>
        </Toast>
        {toasts.map((toast) => (
          <Toast variant={toast.variant} onDismiss={() => {}}>
            <Text as="div">{toast.message}</Text>
          </Toast>
        ))}
      </ToastContainer>
    </Box>
  );
};

ToastContainerStory.story = {
  name: 'Toast container',
};

export const ToasterStory = (): React.ReactNode => {
  const toaster = useToaster();
  const messageID = useUID();
  const dismissAfterID = useUID();
  const [messageText, setMessageText] = React.useState(
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius perferendis veniam, et deleniti sequi est ut aliquam suscipit autem explicabo quod, mollitia pariatur facere aut ab quidem enim molestiae magni.'
  );
  const [variant, setVariant] = React.useState<ToastVariants>('success');
  const [toastTimeout, setToastTimeout] = React.useState('');

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    toaster.push({
      variant,
      message: messageText,
      ...(toastTimeout !== '0' && {dismissAfter: Number.parseInt(toastTimeout, 10)}),
      onDismiss: () => {
        console.log('dismissed!');
      },
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Stack orientation="vertical" spacing="space80">
          <div>
            <Label htmlFor={messageID} required>
              Message
            </Label>
            <Input
              id={messageID}
              value={messageText}
              type="text"
              onChange={(e) => setMessageText(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor={dismissAfterID}>Dismiss after (milliseconds)</Label>
            <Input
              id={dismissAfterID}
              value={toastTimeout}
              type="number"
              onChange={(e) => setToastTimeout(e.target.value)}
              placeholder="7000"
            />
          </div>
          <div>
            <RadioGroup
              name="variant"
              legend="Variant"
              onChange={(value) => setVariant(value as ToastVariants)}
              value={variant}
              orientation="horizontal"
              required
            >
              <Radio id={useUID()} required value="error">
                Error
              </Radio>
              <Radio id={useUID()} required value="neutral">
                Neutral
              </Radio>
              <Radio id={useUID()} required value="success">
                Success
              </Radio>
              <Radio id={useUID()} required value="warning">
                Warning
              </Radio>
            </RadioGroup>
          </div>
          <Button type="submit" variant="secondary">
            Add toast
          </Button>
        </Stack>
      </form>
      <Toaster {...toaster} />
    </div>
  );
};

ToasterStory.story = {
  name: 'Toaster',
};
