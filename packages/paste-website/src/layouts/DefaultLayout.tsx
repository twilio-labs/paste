import * as React from 'react';
import {SiteWrapper} from '../components/site-wrapper';
import {PasteMDXProvider} from '../components/paste-mdx-provider';

interface DefaultLayoutProps {
  children?: React.ReactElement;
  data?: {};
  location?: {};
  pageContext?: {};
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({children}) => {
  return (
    <SiteWrapper>
      <PasteMDXProvider>{children}</PasteMDXProvider>
    </SiteWrapper>
  );
};

export default DefaultLayout;
