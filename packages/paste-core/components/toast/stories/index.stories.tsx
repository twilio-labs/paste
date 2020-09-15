import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs} from '@storybook/addon-knobs';
import {action} from '@storybook/addon-actions';
import {Box} from '@twilio-paste/box';
import {Button} from '@twilio-paste/button';
import {Text} from '@twilio-paste/text';
import {Truncate} from '@twilio-paste/truncate';
import {Toast, ToastContainer} from '../src';

storiesOf('Components|Toast', module)
  .addDecorator(withKnobs)
  .add('Neutral', () => {
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
              Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.
              Praesent commodo cursus magna.
            </Text>
          </Toast>
          <Toast variant="neutral" onDismiss={action('dismiss')}>
            <Text as="div">
              Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.
              Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Duis mollis, est non commodo luctus,
              nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec ullamcorper nulla non metus auctor
              fringilla. Nulla vitae elit libero, a pharetra augue. Donec ullamcorper nulla non metus auctor fringilla.
              Etiam porta sem malesuada magna mollis euismod. Praesent commodo cursus magna, vel scelerisque nisl
              consectetur et. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec
              elit. Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.
            </Text>
            <Text as="p">
              <Truncate>http://www.extremelylongurlthatmightbreakthelayout.com</Truncate>
            </Text>
          </Toast>
        </ToastContainer>
      </Box>
    );
  })
  .add('Success', () => {
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
              Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.
              Praesent commodo cursus magna.
            </Text>
          </Toast>
          <Toast variant="success" onDismiss={action('dismiss')}>
            <Text as="div">
              Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.
              Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Duis mollis, est non commodo luctus,
              nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec ullamcorper nulla non metus auctor
              fringilla. Nulla vitae elit libero, a pharetra augue. Donec ullamcorper nulla non metus auctor fringilla.
              Etiam porta sem malesuada magna mollis euismod. Praesent commodo cursus magna, vel scelerisque nisl
              consectetur et. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec
              elit. Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.
            </Text>
            <Text as="p">
              <Truncate>http://www.extremelylongurlthatmightbreakthelayout.com</Truncate>
            </Text>
          </Toast>
        </ToastContainer>
      </Box>
    );
  })
  .add('Error', () => {
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
              Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.
              Praesent commodo cursus magna.
            </Text>
          </Toast>
          <Toast variant="error" onDismiss={action('dismiss')}>
            <Text as="div">
              Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.
              Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Duis mollis, est non commodo luctus,
              nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec ullamcorper nulla non metus auctor
              fringilla. Nulla vitae elit libero, a pharetra augue. Donec ullamcorper nulla non metus auctor fringilla.
              Etiam porta sem malesuada magna mollis euismod. Praesent commodo cursus magna, vel scelerisque nisl
              consectetur et. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec
              elit. Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.
            </Text>
            <Text as="p">
              <Truncate>http://www.extremelylongurlthatmightbreakthelayout.com</Truncate>
            </Text>
          </Toast>
        </ToastContainer>
      </Box>
    );
  })
  .add('Warning', () => {
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
              Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.
              Praesent commodo cursus magna.
            </Text>
          </Toast>
          <Toast variant="warning" onDismiss={action('dismiss')}>
            <Text as="div">
              Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod.
              Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Duis mollis, est non commodo luctus,
              nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec ullamcorper nulla non metus auctor
              fringilla. Nulla vitae elit libero, a pharetra augue. Donec ullamcorper nulla non metus auctor fringilla.
              Etiam porta sem malesuada magna mollis euismod. Praesent commodo cursus magna, vel scelerisque nisl
              consectetur et. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec
              elit. Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.
            </Text>
            <Text as="p">
              <Truncate>http://www.extremelylongurlthatmightbreakthelayout.com</Truncate>
            </Text>
          </Toast>
        </ToastContainer>
      </Box>
    );
  })
  .add('Toast on Click', () => {
    const [visible, setVisible] = React.useState(true);
    return (
      <>
        <Button variant="primary" onClick={() => setVisible(false)}>
          Click for Toast
        </Button>
        <ToastContainer>
          <Toast hidden={visible} variant="success" onDismiss={() => setVisible(true)}>
            <Text as="div">I am a toast</Text>
          </Toast>
        </ToastContainer>
      </>
    );
  });
