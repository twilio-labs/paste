import * as React from 'react';
import type {StoryFn} from '@storybook/react';
import {CustomizationProvider} from '@twilio-paste/customization';

import {
  TopbarAccountSwitcher,
  TopbarAccountSwitcherBadge,
  TopbarAccountSwitcherItem,
  useTopbarAccountSwitcherState,
} from '../../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Topbar/AccountSwitcher/Customization',
};

export const DefaultElementName: StoryFn = () => {
  const accountSwitcher = useTopbarAccountSwitcherState({visible: true});
  return (
    <CustomizationProvider
      elements={{
        TOPBAR_ACCOUNT_SWITCHER_BADGE: {backgroundColor: 'colorBackgroundPrimary', color: 'colorTextWeakest'},
        TOPBAR_ACCOUNT_SWITCHER_BADGE_BUTTON: {backgroundColor: 'colorBackgroundError'},
        TOPBAR_ACCOUNT_SWITCHER: {borderColor: 'colorBorderDestructiveStrong'},
        TOPBAR_ACCOUNT_SWITCHER_ITEM: {textDecoration: 'underline'},
      }}
    >
      <TopbarAccountSwitcherBadge {...accountSwitcher} i18nButtonLabel="Switch accounts">
        Account 1
      </TopbarAccountSwitcherBadge>
      <TopbarAccountSwitcher {...accountSwitcher} aria-label="Avaiable accounts">
        <TopbarAccountSwitcherItem {...accountSwitcher}>Account 1</TopbarAccountSwitcherItem>
        <TopbarAccountSwitcherItem {...accountSwitcher}>Account 2</TopbarAccountSwitcherItem>
        <TopbarAccountSwitcherItem {...accountSwitcher}>Account 3</TopbarAccountSwitcherItem>
      </TopbarAccountSwitcher>
    </CustomizationProvider>
  );
};

export const CustomElementName: StoryFn = () => {
  const accountSwitcher = useTopbarAccountSwitcherState({visible: true});
  return (
    <CustomizationProvider
      elements={{
        FOO: {backgroundColor: 'colorBackgroundPrimary', color: 'colorTextWeakest'},
        FOO_BUTTON: {backgroundColor: 'colorBackgroundError'},
        BAR: {borderColor: 'colorBorderDestructiveStrong'},
        BAZ: {textDecoration: 'underline'},
      }}
    >
      <TopbarAccountSwitcherBadge element="FOO" {...accountSwitcher} i18nButtonLabel="Switch accounts">
        Account 1
      </TopbarAccountSwitcherBadge>
      <TopbarAccountSwitcher element="BAR" {...accountSwitcher} aria-label="Avaiable accounts">
        <TopbarAccountSwitcherItem element="BAZ" {...accountSwitcher}>
          Account 1
        </TopbarAccountSwitcherItem>
        <TopbarAccountSwitcherItem element="BAZ" {...accountSwitcher}>
          Account 2
        </TopbarAccountSwitcherItem>
        <TopbarAccountSwitcherItem element="BAZ" {...accountSwitcher}>
          Account 3
        </TopbarAccountSwitcherItem>
      </TopbarAccountSwitcher>
    </CustomizationProvider>
  );
};
