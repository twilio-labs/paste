import * as React from 'react';
import type {StoryFn} from '@storybook/react';
import {CustomizationProvider} from '@twilio-paste/customization';

import {
  TopbarAccountSwitcher,
  TopbarAccountSwitcherBadge,
  TopbarAccountSwitcherGroup,
  TopbarAccountSwitcherItem,
  TopbarAccountSwitcherItemRadio,
  TopbarAccountSwitcherSeparator,
  useTopbarAccountSwitcherState,
} from '../../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Topbar/AccountSwitcher/Customization',
};

export const DefaultElementName: StoryFn = () => {
  const accountSwitcher = useTopbarAccountSwitcherState({visible: true});
  const [selectedAccount, setSelectedAccount] = React.useState('Owl Telehealth');
  return (
    <CustomizationProvider
      elements={{
        TOPBAR_ACCOUNT_SWITCHER_BADGE: {backgroundColor: 'colorBackgroundPrimary', color: 'colorTextWeakest'},
        TOPBAR_ACCOUNT_SWITCHER_BADGE_BUTTON: {backgroundColor: 'colorBackgroundError'},
        TOPBAR_ACCOUNT_SWITCHER: {borderColor: 'colorBorderDestructiveStrong'},
        TOPBAR_ACCOUNT_SWITCHER_ITEM: {backgroundColor: 'colorBackgroundPrimaryStrong', color: 'colorTextWeakest'},
        TOPBAR_ACCOUNT_SWITCHER_ITEM_RADIO: {fontStyle: 'italic'},
        TOPBAR_ACCOUNT_SWITCHER_GROUP: {borderColor: 'colorBorderSuccess', borderStyle: 'solid'},
        TOPBAR_ACCOUNT_SWITCHER_SEPARATOR: {borderColor: 'colorBorderSuccess'},
      }}
    >
      <TopbarAccountSwitcherBadge {...accountSwitcher} i18nButtonLabel="Switch accounts">
        Owl Telehealth
      </TopbarAccountSwitcherBadge>
      <TopbarAccountSwitcher {...accountSwitcher} aria-label="Avaiable accounts">
        <TopbarAccountSwitcherGroup label="Recent accounts">
          <TopbarAccountSwitcherItemRadio
            name="recent_accounts"
            value="Owl Telehealth"
            checked={selectedAccount === 'Owl Telehealth'}
            onChange={() => setSelectedAccount('Owl Telehealth')}
            {...accountSwitcher}
          >
            Owl Telehealth
          </TopbarAccountSwitcherItemRadio>
          <TopbarAccountSwitcherItemRadio
            name="recent_accounts"
            value="Owl Health Demo"
            checked={selectedAccount === 'Owl Health Demo'}
            onChange={() => setSelectedAccount('Owl Health Demo')}
            {...accountSwitcher}
          >
            Owl Health Demo
          </TopbarAccountSwitcherItemRadio>
          <TopbarAccountSwitcherItemRadio
            name="recent_accounts"
            value="Owl Subway"
            checked={selectedAccount === 'Owl Subway'}
            onChange={() => setSelectedAccount('Owl Subway')}
            {...accountSwitcher}
          >
            Owl Subway
          </TopbarAccountSwitcherItemRadio>
        </TopbarAccountSwitcherGroup>
        <TopbarAccountSwitcherSeparator />
        <TopbarAccountSwitcherItem {...accountSwitcher} href="#">
          Account settings
        </TopbarAccountSwitcherItem>
        <TopbarAccountSwitcherSeparator />
        <TopbarAccountSwitcherItem {...accountSwitcher} href="#">
          View all accounts
        </TopbarAccountSwitcherItem>
        <TopbarAccountSwitcherItem {...accountSwitcher} href="#">
          View all subaccounts
        </TopbarAccountSwitcherItem>
        <TopbarAccountSwitcherSeparator />
        <TopbarAccountSwitcherItem {...accountSwitcher} href="#">
          Admin Center
        </TopbarAccountSwitcherItem>
      </TopbarAccountSwitcher>
    </CustomizationProvider>
  );
};

export const CustomElementName: StoryFn = () => {
  const accountSwitcher = useTopbarAccountSwitcherState({visible: true});
  const [selectedAccount, setSelectedAccount] = React.useState('Owl Telehealth');
  return (
    <CustomizationProvider
      elements={{
        FOO: {backgroundColor: 'colorBackgroundPrimary', color: 'colorTextWeakest'},
        FOO_BUTTON: {backgroundColor: 'colorBackgroundError'},
        BAR: {borderColor: 'colorBorderDestructiveStrong'},
        BAZ: {backgroundColor: 'colorBackgroundPrimaryStrong', color: 'colorTextWeakest'},
        BAZ_RADIO: {fontStyle: 'italic'},
        BAZ_GROUP: {borderColor: 'colorBorderSuccess', borderStyle: 'solid'},
        LINE: {borderColor: 'colorBorderSuccess'},
      }}
    >
      <TopbarAccountSwitcherBadge {...accountSwitcher} element="FOO" i18nButtonLabel="Switch accounts">
        Owl Telehealth
      </TopbarAccountSwitcherBadge>
      <TopbarAccountSwitcher {...accountSwitcher} element="BAR" aria-label="Avaiable accounts">
        <TopbarAccountSwitcherGroup element="BAZ_GROUP" label="Recent accounts">
          <TopbarAccountSwitcherItemRadio
            element="BAZ_RADIO"
            name="recent_accounts"
            value="Owl Telehealth"
            checked={selectedAccount === 'Owl Telehealth'}
            onChange={() => setSelectedAccount('Owl Telehealth')}
            {...accountSwitcher}
          >
            Owl Telehealth
          </TopbarAccountSwitcherItemRadio>
          <TopbarAccountSwitcherItemRadio
            element="BAZ_RADIO"
            name="recent_accounts"
            value="Owl Health Demo"
            checked={selectedAccount === 'Owl Health Demo'}
            onChange={() => setSelectedAccount('Owl Health Demo')}
            {...accountSwitcher}
          >
            Owl Health Demo
          </TopbarAccountSwitcherItemRadio>
          <TopbarAccountSwitcherItemRadio
            element="BAZ_RADIO"
            name="recent_accounts"
            value="Owl Subway"
            checked={selectedAccount === 'Owl Subway'}
            onChange={() => setSelectedAccount('Owl Subway')}
            {...accountSwitcher}
          >
            Owl Subway
          </TopbarAccountSwitcherItemRadio>
        </TopbarAccountSwitcherGroup>
        <TopbarAccountSwitcherSeparator element="LINE" />
        <TopbarAccountSwitcherItem element="BAZ" {...accountSwitcher} href="#">
          Account settings
        </TopbarAccountSwitcherItem>
        <TopbarAccountSwitcherSeparator element="LINE" />
        <TopbarAccountSwitcherItem element="BAZ" {...accountSwitcher} href="#">
          View all accounts
        </TopbarAccountSwitcherItem>
        <TopbarAccountSwitcherItem element="BAZ" {...accountSwitcher} href="#">
          View all subaccounts
        </TopbarAccountSwitcherItem>
        <TopbarAccountSwitcherSeparator element="LINE" />
        <TopbarAccountSwitcherItem element="BAZ" {...accountSwitcher} href="#">
          Admin Center
        </TopbarAccountSwitcherItem>
      </TopbarAccountSwitcher>
    </CustomizationProvider>
  );
};
