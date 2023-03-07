import * as React from 'react';
import {action} from '@storybook/addon-actions';
import type {StoryFn} from '@storybook/react';
import {Box} from '@twilio-paste/box';
import {Truncate} from '@twilio-paste/truncate';
import {CustomizationProvider} from '@twilio-paste/customization';
import {useTheme} from '@twilio-paste/theme';

import {Alert} from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Alert',
  component: Alert,
};

export const Neutral = (): React.ReactNode => {
  return (
    <>
      <Alert variant="neutral">I am an alert</Alert>
      <Alert variant="neutral" onDismiss={action('dismiss')}>
        <strong>Alert title</strong> I am an alert
      </Alert>
      <Alert variant="neutral">
        Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod. Praesent
        commodo cursus magna.
      </Alert>
      <Box width="size50">
        <Alert variant="neutral" onDismiss={action('dismiss')}>
          Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod. Praesent
          commodo cursus magna, vel scelerisque nisl consectetur et. Duis mollis, est non commodo luctus, nisi erat
          porttitor ligula, eget lacinia odio sem nec elit. Donec ullamcorper nulla non metus auctor fringilla. Nulla
          vitae elit libero, a pharetra augue. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem
          malesuada magna mollis euismod. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Duis
          mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec ullamcorper
          nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.
          <Truncate title="http://www.extremelylongurlthatmightbreakthelayout.com">
            http://www.extremelylongurlthatmightbreakthelayout.com
          </Truncate>
        </Alert>
      </Box>
    </>
  );
};

export const Error = (): React.ReactNode => {
  return (
    <>
      <Alert variant="error" onDismiss={action('dismiss')}>
        I am an alert
      </Alert>
      <Alert variant="error">
        <strong>Alert title</strong> I am an alert
      </Alert>
      <Alert variant="error" onDismiss={action('dismiss')}>
        Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod. Praesent
        commodo cursus magna.
      </Alert>
      <Box width="size50">
        <Alert variant="error">
          Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod. Praesent
          commodo cursus magna, vel scelerisque nisl consectetur et. Duis mollis, est non commodo luctus, nisi erat
          porttitor ligula, eget lacinia odio sem nec elit. Donec ullamcorper nulla non metus auctor fringilla. Nulla
          vitae elit libero, a pharetra augue. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem
          malesuada magna mollis euismod. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Duis
          mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec ullamcorper
          nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.
          <Truncate title="http://www.extremelylongurlthatmightbreakthelayout.com">
            http://www.extremelylongurlthatmightbreakthelayout.com
          </Truncate>
        </Alert>
      </Box>
    </>
  );
};

export const Warning = (): React.ReactNode => {
  return (
    <>
      <Alert variant="warning">I am an alert</Alert>
      <Alert variant="warning" onDismiss={action('dismiss')}>
        <strong>Alert title</strong> I am an alert
      </Alert>
      <Alert variant="warning">
        Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod. Praesent
        commodo cursus magna.
      </Alert>
      <Box width="size50">
        <Alert variant="warning" onDismiss={action('dismiss')}>
          Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod. Praesent
          commodo cursus magna, vel scelerisque nisl consectetur et. Duis mollis, est non commodo luctus, nisi erat
          porttitor ligula, eget lacinia odio sem nec elit. Donec ullamcorper nulla non metus auctor fringilla. Nulla
          vitae elit libero, a pharetra augue. Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem
          malesuada magna mollis euismod. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Duis
          mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec ullamcorper
          nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.
          <Truncate title="http://www.extremelylongurlthatmightbreakthelayout.com">
            http://www.extremelylongurlthatmightbreakthelayout.com
          </Truncate>
        </Alert>
      </Box>
    </>
  );
};

export const CustomAlert: StoryFn = (_args, {parameters: {isTestEnvironment = false}}) => {
  const currentTheme = useTheme();
  return (
    <CustomizationProvider
      disableAnimations={isTestEnvironment}
      theme={currentTheme}
      elements={{
        ALERT: {
          paddingY: 'space100',
          borderWidth: 'borderWidth40',
          variants: {
            neutral: {
              backgroundColor: 'colorBackgroundSuccessWeakest',
              borderColor: 'colorBorderSuccess',
              padding: 'space30',

              '[data-paste-element="ALERT_ICON"]': {
                color: 'colorTextIconSuccess',
              },
            },
            warning: {
              backgroundColor: 'colorBackgroundNew',
            },
          },
        },
        ALERT_DISMISS_BUTTON: {
          backgroundColor: 'colorBackgroundBodyInverse',
          borderRadius: 'borderRadius20',
        },
        ALERT_DISMISS_ICON: {
          color: 'colorTextInverse',
        },
      }}
    >
      <Alert variant="neutral">I am a custom neutral alert</Alert>

      <Alert variant="warning">I am a custom warning alert</Alert>

      <Alert variant="error">I am a custom error alert</Alert>

      <Alert variant="neutral" onDismiss={action('dismiss')}>
        <strong>Dismissable:</strong> I am a dismissable custom alert
      </Alert>

      <Alert variant="error" onDismiss={action('dismiss')}>
        <strong>Dismissable:</strong> I am a dismissable custom alert
      </Alert>
    </CustomizationProvider>
  );
};
CustomAlert.parameters = {
  a11y: {
    // no need to a11y check customization
    disable: true,
  },
};

export const I18nAlerts = (): React.ReactNode => {
  const i18nStrings = {
    i18nDismissLabel: "Fermez l'alerte",
    i18nErrorLabel: '(erreur)',
    i18nWarningLabel: '(avertissement)',
    i18nNeutralLabel: '(information)',
  };
  return (
    <>
      <Alert variant="error" {...i18nStrings} onDismiss={action('dismiss')}>
        C&apos;est une alerte d&apos;erreur.
      </Alert>
      <Alert variant="warning" {...i18nStrings} onDismiss={action('dismiss')}>
        C&apos;est une alerte d&apos;avertissement.
      </Alert>
      <Alert variant="neutral" {...i18nStrings} onDismiss={action('dismiss')}>
        C&apos;est une alerte neutre.
      </Alert>
    </>
  );
};

I18nAlerts.storyName = 'i18n Alerts';
