import * as React from 'react';
import type {StoryFn} from '@storybook/react';
import {CustomizationProvider} from '@twilio-paste/customization';

import {
  AccountSwitcher,
  AccountSwitcherBadge,
  AccountSwitcherGroup,
  AccountSwitcherItem,
  AccountSwitcherItemRadio,
  AccountSwitcherSeparator,
  useAccountSwitcherState,
} from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/AccountSwitcher/Customization',
};

export const DefaultElementName: StoryFn = () => {
  const accountSwitcher = useAccountSwitcherState({visible: true});
  const [selectedAccount, setSelectedAccount] = React.useState('Owl Telehealth');
  return (
    <CustomizationProvider
      elements={{
        ACCOUNT_SWITCHER_BADGE: {backgroundColor: 'colorBackgroundPrimary', color: 'colorTextWeakest'},
        ACCOUNT_SWITCHER_BADGE_BUTTON: {backgroundColor: 'colorBackgroundError'},
        ACCOUNT_SWITCHER: {borderColor: 'colorBorderDestructiveStrong'},
        ACCOUNT_SWITCHER_ITEM: {backgroundColor: 'colorBackgroundPrimaryStrong', color: 'colorTextWeakest'},
        ACCOUNT_SWITCHER_ITEM_RADIO: {fontStyle: 'italic'},
        ACCOUNT_SWITCHER_GROUP: {borderColor: 'colorBorderSuccess', borderStyle: 'solid'},
        ACCOUNT_SWITCHER_SEPARATOR: {borderColor: 'colorBorderSuccess'},
      }}
    >
      <AccountSwitcherBadge {...accountSwitcher} i18nButtonLabel="Switch accounts">
        Owl Telehealth
      </AccountSwitcherBadge>
      <AccountSwitcher {...accountSwitcher} aria-label="Avaiable accounts">
        <AccountSwitcherGroup label="Recent accounts">
          <AccountSwitcherItemRadio
            name="recent_accounts"
            value="Owl Telehealth"
            checked={selectedAccount === 'Owl Telehealth'}
            onChange={() => setSelectedAccount('Owl Telehealth')}
            {...accountSwitcher}
          >
            Owl Telehealth
          </AccountSwitcherItemRadio>
          <AccountSwitcherItemRadio
            name="recent_accounts"
            value="Owl Health Demo"
            checked={selectedAccount === 'Owl Health Demo'}
            onChange={() => setSelectedAccount('Owl Health Demo')}
            {...accountSwitcher}
          >
            Owl Health Demo
          </AccountSwitcherItemRadio>
          <AccountSwitcherItemRadio
            name="recent_accounts"
            value="Owl Subway"
            checked={selectedAccount === 'Owl Subway'}
            onChange={() => setSelectedAccount('Owl Subway')}
            {...accountSwitcher}
          >
            Owl Subway
          </AccountSwitcherItemRadio>
        </AccountSwitcherGroup>
        <AccountSwitcherSeparator />
        <AccountSwitcherItem {...accountSwitcher} href="#">
          Account settings
        </AccountSwitcherItem>
        <AccountSwitcherSeparator />
        <AccountSwitcherItem {...accountSwitcher} href="#">
          View all accounts
        </AccountSwitcherItem>
        <AccountSwitcherItem {...accountSwitcher} href="#">
          View all subaccounts
        </AccountSwitcherItem>
        <AccountSwitcherSeparator />
        <AccountSwitcherItem {...accountSwitcher} href="#">
          Admin Center
        </AccountSwitcherItem>
      </AccountSwitcher>
    </CustomizationProvider>
  );
};

export const CustomElementName: StoryFn = () => {
  const accountSwitcher = useAccountSwitcherState({visible: true});
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
      <AccountSwitcherBadge {...accountSwitcher} element="FOO" i18nButtonLabel="Switch accounts">
        Owl Telehealth
      </AccountSwitcherBadge>
      <AccountSwitcher {...accountSwitcher} element="BAR" aria-label="Avaiable accounts">
        <AccountSwitcherGroup element="BAZ_GROUP" label="Recent accounts">
          <AccountSwitcherItemRadio
            element="BAZ_RADIO"
            name="recent_accounts"
            value="Owl Telehealth"
            checked={selectedAccount === 'Owl Telehealth'}
            onChange={() => setSelectedAccount('Owl Telehealth')}
            {...accountSwitcher}
          >
            Owl Telehealth
          </AccountSwitcherItemRadio>
          <AccountSwitcherItemRadio
            element="BAZ_RADIO"
            name="recent_accounts"
            value="Owl Health Demo"
            checked={selectedAccount === 'Owl Health Demo'}
            onChange={() => setSelectedAccount('Owl Health Demo')}
            {...accountSwitcher}
          >
            Owl Health Demo
          </AccountSwitcherItemRadio>
          <AccountSwitcherItemRadio
            element="BAZ_RADIO"
            name="recent_accounts"
            value="Owl Subway"
            checked={selectedAccount === 'Owl Subway'}
            onChange={() => setSelectedAccount('Owl Subway')}
            {...accountSwitcher}
          >
            Owl Subway
          </AccountSwitcherItemRadio>
        </AccountSwitcherGroup>
        <AccountSwitcherSeparator element="LINE" />
        <AccountSwitcherItem element="BAZ" {...accountSwitcher} href="#">
          Account settings
        </AccountSwitcherItem>
        <AccountSwitcherSeparator element="LINE" />
        <AccountSwitcherItem element="BAZ" {...accountSwitcher} href="#">
          View all accounts
        </AccountSwitcherItem>
        <AccountSwitcherItem element="BAZ" {...accountSwitcher} href="#">
          View all subaccounts
        </AccountSwitcherItem>
        <AccountSwitcherSeparator element="LINE" />
        <AccountSwitcherItem element="BAZ" {...accountSwitcher} href="#">
          Admin Center
        </AccountSwitcherItem>
      </AccountSwitcher>
    </CustomizationProvider>
  );
};
