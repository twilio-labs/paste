import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, boolean, select} from '@storybook/addon-knobs';
import {action} from '@storybook/addon-actions';
import {CustomizationProvider} from '@twilio-paste/theme';
import {Text} from '@twilio-paste/text';
import {Box} from '@twilio-paste/box';
import {Stack} from '@twilio-paste/stack';
import {Truncate} from '@twilio-paste/truncate';
import {Alert, AlertVariants} from '../src';

storiesOf('Components|Alert', module)
  .addDecorator(withKnobs)
  .add('All variant', () => {
    const isDismissable = boolean('onDismiss', true);
    const variantValule = select('variant', Object.keys(AlertVariants), AlertVariants.ERROR) as AlertVariants;
    return (
      <Alert onDismiss={isDismissable ? action('dismiss') : undefined} variant={variantValule}>
        <Text as="div">I am an alert</Text>
      </Alert>
    );
  })
  .add('Neutral', () => {
    return (
      <>
        <Alert variant="neutral">
          <Text as="div">I am an alert</Text>
        </Alert>
        <Alert variant="neutral" onDismiss={action('dismiss')}>
          <Text as="div">
            <strong>Alert title</strong> I am an alert
          </Text>
        </Alert>
        <Alert variant="neutral">
          <Text as="div">
            Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod. Praesent
            commodo cursus magna.
          </Text>
        </Alert>
        <Box width="size50">
          <Alert variant="neutral" onDismiss={action('dismiss')}>
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
          </Alert>
        </Box>
      </>
    );
  })
  .add('Error', () => {
    return (
      <>
        <Alert variant="error" onDismiss={action('dismiss')}>
          <Text as="div">I am an alert</Text>
        </Alert>
        <Alert variant="error">
          <Text as="div">
            <strong>Alert title</strong> I am an alert
          </Text>
        </Alert>
        <Alert variant="error" onDismiss={action('dismiss')}>
          <Text as="div">
            Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod. Praesent
            commodo cursus magna.
          </Text>
        </Alert>
        <Box width="size50">
          <Alert variant="error">
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
          </Alert>
        </Box>
      </>
    );
  })
  .add('Warning', () => {
    return (
      <>
        <Alert variant="warning">
          <Text as="div">I am an alert</Text>
        </Alert>
        <Alert variant="warning" onDismiss={action('dismiss')}>
          <Text as="div">
            <strong>Alert title</strong> I am an alert
          </Text>
        </Alert>
        <Alert variant="warning">
          <Text as="div">
            Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod. Praesent
            commodo cursus magna.
          </Text>
        </Alert>
        <Box width="size50">
          <Alert variant="warning" onDismiss={action('dismiss')}>
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
          </Alert>
        </Box>
      </>
    );
  })
  .add('Customization', () => {
    return (
      <CustomizationProvider
        elements={{
          ALERT: {
            borderRadius: '10px',
          },
          ALERT_FIGURE: {
            borderRadius: '10px',
          },
          ALERT_ICON: {
            backgroundColor: 'lightgrey',
          },
          ALERT_BODY: {
            padding: '10px',
          },
          ALERT_DISMISS: {
            backgroundColor: 'hotpink',
          },
        }}
      >
        <Stack orientation="vertical" spacing="space40">
          <Alert variant="warning">
            <Text as="div">I am an alert</Text>
          </Alert>
          <Alert variant="neutral">
            <Text as="div">I am an alert</Text>
          </Alert>
          <Alert variant="error" onDismiss={action('dismiss')}>
            <Text as="div">I am an alert</Text>
          </Alert>
        </Stack>
      </CustomizationProvider>
    );
  });
