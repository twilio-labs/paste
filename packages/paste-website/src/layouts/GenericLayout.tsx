import * as React from 'react';
import {PasteMDXProvider} from '../components/paste-mdx-provider';

interface ChangelogLayoutProps {
  children?: React.ReactElement;
}

const ChangelogLayout: React.FC<ChangelogLayoutProps> = ({children}) => {
  return <PasteMDXProvider>{children}</PasteMDXProvider>;
};

export default ChangelogLayout;
