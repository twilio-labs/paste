import * as React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import {
  SiteNav,
  SiteNavList,
  SiteNavNestList,
  SiteNavItem,
  SiteNavAnchor,
  SiteNavButton,
  SiteNavAnchorArrow,
} from './styles';

interface NavigationProps {
  children?: React.ReactNode;
}

interface SiteWrapperPageQuery {
  allPasteComponent: {
    edges: [
      {
        node: {
          name: string;
        };
      }
    ];
  };
  allPasteUtility: {
    edges: [
      {
        node: {
          name: string;
        };
      }
    ];
  };
}

const pageQuery = graphql`
  {
    allSitePage(filter: {path: {ne: "/dev-404-page/"}}) {
      edges {
        node {
          path
          componentChunkName
          componentPath
          id
          component
          internalComponentName
          isCreatedByStatefulCreatePages
          pluginCreatorId
        }
      }
    }
    allPasteComponent(sort: {order: ASC, fields: name}) {
      edges {
        node {
          name
          version
        }
      }
    }
    allPasteUtility(sort: {order: ASC, fields: name}) {
      edges {
        node {
          version
          name
        }
      }
    }
  }
`;

const Navigation: React.FC<NavigationProps> = () => {
  const data: SiteWrapperPageQuery = useStaticQuery(pageQuery);

  const [componentsOpen, setComponentsOpen] = React.useState(false);
  const [utilitiesOpen, setutilitiesOpen] = React.useState(false);
  const [gettingStartedOpen, setGettingStartedOpen] = React.useState(false);

  return (
    <SiteNav>
      <SiteNavList>
        <SiteNavItem>
          <SiteNavAnchor to="/">Home</SiteNavAnchor>
        </SiteNavItem>
        {/* <SiteNavItem>
          <SiteNavAnchor to="/getting-started">Getting Started</SiteNavAnchor>
        </SiteNavItem> */}
        <SiteNavItem>
          <SiteNavButton onClick={() => setGettingStartedOpen(!gettingStartedOpen)} isOpen={gettingStartedOpen}>
            Getting Started
            <SiteNavAnchorArrow isOpen={gettingStartedOpen} />
          </SiteNavButton>
          <SiteNavNestList isOpen={gettingStartedOpen}>
            <SiteNavItem>
              <SiteNavAnchor to="/getting-started">General Guidelines</SiteNavAnchor>
            </SiteNavItem>
            <SiteNavItem>
              <SiteNavAnchor to="/getting-started/design">Design Guidelines</SiteNavAnchor>
            </SiteNavItem>
          </SiteNavNestList>
        </SiteNavItem>
        <SiteNavItem>
          <SiteNavAnchor to="/tokens">Tokens</SiteNavAnchor>
        </SiteNavItem>
        <SiteNavItem>
          <SiteNavButton onClick={() => setComponentsOpen(!componentsOpen)} isOpen={componentsOpen}>
            Components
            <SiteNavAnchorArrow isOpen={componentsOpen} />
          </SiteNavButton>
          <SiteNavNestList isOpen={componentsOpen}>
            <SiteNavItem>
              <SiteNavAnchor to="/components">Overview</SiteNavAnchor>
            </SiteNavItem>
            {data.allPasteComponent.edges.map(({node}) => {
              return (
                <SiteNavItem key={node.name}>
                  <SiteNavAnchor to={`/components/${node.name.replace('@twilio-paste/', '')}`}>
                    {node.name.replace('@twilio-paste/', '')}
                  </SiteNavAnchor>
                </SiteNavItem>
              );
            })}
          </SiteNavNestList>
        </SiteNavItem>
        <SiteNavItem>
          <SiteNavButton onClick={() => setutilitiesOpen(!utilitiesOpen)} isOpen={utilitiesOpen}>
            Utilities
            <SiteNavAnchorArrow isOpen={utilitiesOpen} />
          </SiteNavButton>
          <SiteNavNestList isOpen={utilitiesOpen}>
            <SiteNavAnchor to="/utilities">Overview</SiteNavAnchor>
            {data.allPasteUtility.edges.map(({node}) => {
              return (
                <SiteNavItem key={node.name}>
                  <SiteNavAnchor to={`/utilities/${node.name.replace('@twilio-paste/', '')}`}>
                    {node.name.replace('@twilio-paste/', '')}
                  </SiteNavAnchor>
                </SiteNavItem>
              );
            })}
          </SiteNavNestList>
        </SiteNavItem>
      </SiteNavList>
    </SiteNav>
  );
};

export {Navigation};
