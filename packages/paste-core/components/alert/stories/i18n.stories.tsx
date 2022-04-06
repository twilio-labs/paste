import * as React from 'react';
import {action} from '@storybook/addon-actions';
import {Text} from '@twilio-paste/text';
import pseudoLocalization from 'pseudo-localization';
import {Alert} from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Alert/i18n',
  component: Alert,
};

const i18nStrings = {
  i18nDismissLabel: "Fermez l'alerte",
  i18nErrorLabel: '(erreur)',
  i18nWarningLabel: '(avertissement)',
  i18nNeutralLabel: '(information)',
};

export const I18nAlerts = (): React.ReactNode => {
  return (
    <>
      <Alert variant="error" {...i18nStrings} onDismiss={action('dismiss')}>
        <Text as="div">C&apos;est une alerte d&apos;erreur.</Text>
      </Alert>
      <Alert variant="warning" {...i18nStrings} onDismiss={action('dismiss')}>
        <Text as="div">C&apos;est une alerte d&apos;avertissement.</Text>
      </Alert>
      <Alert variant="neutral" {...i18nStrings} onDismiss={action('dismiss')}>
        <Text as="div">C&apos;est une alerte neutre.</Text>
      </Alert>
    </>
  );
};
I18nAlerts.storyName = 'i18n Alerts';

export const I18nAlertsPseudoLocalized = (): React.ReactNode => {
  React.useEffect(() => {
    pseudoLocalization.start();

    return () => {
      pseudoLocalization.stop();
    };
  }, []);

  return (
    <>
      <Alert variant="error" {...i18nStrings} onDismiss={action('dismiss')}>
        <Text as="div">C&apos;est une alerte d&apos;erreur.</Text>
      </Alert>
      <Alert variant="warning" {...i18nStrings} onDismiss={action('dismiss')}>
        <Text as="div">C&apos;est une alerte d&apos;avertissement.</Text>
      </Alert>
      <Alert variant="neutral" {...i18nStrings} onDismiss={action('dismiss')}>
        <Text as="div">C&apos;est une alerte neutre.</Text>
      </Alert>
    </>
  );
};
I18nAlertsPseudoLocalized.storyName = 'i18n Alerts - Pseudo-localized';
