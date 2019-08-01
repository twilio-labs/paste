import * as React from 'react';
import {SiteWrapper} from '../components/site-wrapper';
import {PasteMDXProvider} from '../components/PasteMDXProvider';
import {Breadcrumb, BreadcrumbItem} from '../components/Breadcrumb';

interface ComponentLayoutProps {
  children?: React.ReactElement;
  data?: {};
  location?: {};
  pageContext?: {};
}

const ComponentLayout: React.FC<ComponentLayoutProps> = ({children, ...props}) => {
  console.log(props.pageResources.json.pageContext.frontmatter);
  return (
    <SiteWrapper>
      <PasteMDXProvider>
        <>
          <Breadcrumb>
            <BreadcrumbItem to="/">Home</BreadcrumbItem>
            <BreadcrumbItem to="/components">Components</BreadcrumbItem>
          </Breadcrumb>
          {children}
        </>
      </PasteMDXProvider>
    </SiteWrapper>
  );
};

export default ComponentLayout;
