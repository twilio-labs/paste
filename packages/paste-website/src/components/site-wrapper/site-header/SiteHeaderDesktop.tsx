import {Box} from '@twilio-paste/box';
import {Topbar, TopbarActions} from '@twilio-paste/topbar';
import GitHubButton from 'react-github-button';
import 'react-github-button/assets/style.css';

import {SiteHeaderSearch} from './SiteHeaderSearch';
import {DarkModeToggle} from './DarkModeToggle';
import {FigmaButton} from './FigmaButton';
import {ContactUsMenu} from '../../ContactUsMenu';
import {PASTE_DOCS_TOPBAR} from '../../../constants';

const SiteHeaderDesktop = (): JSX.Element => {
  return (
    <Topbar id={PASTE_DOCS_TOPBAR}>
      <TopbarActions>
        <Box
          minWidth={['size20', 'size20', 'size20', 'size20']}
          data-cy="paste-docsearch-container"
          id="paste-docs-search-input"
        >
          <SiteHeaderSearch />
        </Box>
        <DarkModeToggle />
        <ContactUsMenu />
        <FigmaButton />
        <GitHubButton type="stargazers" namespace="twilio-labs" repo="paste" />
      </TopbarActions>
    </Topbar>
  );
};

export {SiteHeaderDesktop};
