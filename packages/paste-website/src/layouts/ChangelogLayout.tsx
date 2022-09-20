import * as React from 'react';

import {PasteMDXProvider} from '../components/paste-mdx-provider';

interface ChangelogLayoutProps {
  children?: React.ReactElement;
}

// Don't display the H1 in Changelogs
const componentOverrides = {
  h1: () => null,
};

const ChangelogLayout: React.FC<React.PropsWithChildren<ChangelogLayoutProps>> = ({children}) => {
  return <PasteMDXProvider componentOverrides={componentOverrides}>{children}</PasteMDXProvider>;
};

export default ChangelogLayout;
