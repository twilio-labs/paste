import * as React from 'react';
import {SiteWrapper} from '../components/default-site-wrapper';
import {PasteMDX} from '../components/mdx';

interface DefaultLayoutProps {
  children?: React.ReactElement;
  data?: {};
  location?: {};
  pageContext?: {};
}

const DefaultLayout: React.FC<DefaultLayoutProps> = (props: DefaultLayoutProps): React.ReactElement => {
  return (
    <SiteWrapper>
      <PasteMDX>{props.children}</PasteMDX>
    </SiteWrapper>
  );
};
export default DefaultLayout;
