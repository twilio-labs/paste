import * as React from 'react';
import type {StoryFn} from '@storybook/react';

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
  title: 'Components/Topbar/AccountSwitcher',
};

export const AccountSwitcherMenu: StoryFn = () => {
  const accountSwitcher = useTopbarAccountSwitcherState({visible: true});
  const [selectedAccount, setSelectedAccount] = React.useState('Owl Telehealth');
  return (
    <>
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
    </>
  );
};
