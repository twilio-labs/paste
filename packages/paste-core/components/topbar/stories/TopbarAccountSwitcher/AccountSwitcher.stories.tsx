import * as React from 'react';
import type {StoryFn} from '@storybook/react';

import {
  TopbarAccountSwitcher,
  TopbarAccountSwitcherBadge,
  TopbarAccountSwitcherItem,
  useTopbarAccountSwitcherState,
} from '../../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Topbar/AccountSwitcher',
};

export const AccountSwitcherMenu: StoryFn = () => {
  const accountSwitcher = useTopbarAccountSwitcherState();
  return (
    <>
      <TopbarAccountSwitcherBadge {...accountSwitcher} i18nButtonLabel="Switch accounts">
        Account 1
      </TopbarAccountSwitcherBadge>
      <TopbarAccountSwitcher {...accountSwitcher} aria-label="Avaiable accounts">
        <TopbarAccountSwitcherItem {...accountSwitcher}>Account 1</TopbarAccountSwitcherItem>
        <TopbarAccountSwitcherItem {...accountSwitcher}>Account 2</TopbarAccountSwitcherItem>
        <TopbarAccountSwitcherItem {...accountSwitcher}>Account 3</TopbarAccountSwitcherItem>
      </TopbarAccountSwitcher>
    </>
  );
};
