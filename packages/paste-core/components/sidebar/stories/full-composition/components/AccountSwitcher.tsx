import * as React from 'react';
import {
  AccountSwitcher,
  AccountSwitcherBadge,
  AccountSwitcherGroup,
  AccountSwitcherItem,
  AccountSwitcherItemRadio,
  AccountSwitcherSeparator,
  useAccountSwitcherState,
} from '@twilio-paste/account-switcher';

export const AccountSwitcherMenu: React.FC = () => {
  const accountSwitcher = useAccountSwitcherState();
  const [selectedAccount, setSelectedAccount] = React.useState('Owl Telehealth');
  return (
    <>
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
    </>
  );
};
