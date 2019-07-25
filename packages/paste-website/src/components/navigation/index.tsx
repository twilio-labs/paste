import * as React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import {SiteNav, SiteNavList, SiteNavNestList, SiteNavItem, SiteNavAnchor, SiteNavAnchorArrow} from './styles';

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

const Navigation: React.FC<NavigationProps> = props => {
  const data: SiteWrapperPageQuery = useStaticQuery(pageQuery);
  console.log('SiteWrapper Query', data);
  return (
    <SiteNav>
      <SiteNavList>
        <SiteNavItem>
          <SiteNavAnchor to="/" activeClassName="is-active">
            Home
          </SiteNavAnchor>
        </SiteNavItem>
        <SiteNavItem>
          <SiteNavAnchor to="/getting-started" activeClassName="is-active">
            Getting Started
          </SiteNavAnchor>
        </SiteNavItem>
        <SiteNavItem>
          <SiteNavAnchor to="/tokens" activeClassName="is-active">
            Tokens
          </SiteNavAnchor>
        </SiteNavItem>
        <SiteNavItem>
          <SiteNavAnchor to="/components" activeClassName="is-active">
            Components
            <SiteNavAnchorArrow />
          </SiteNavAnchor>
          <SiteNavNestList>
            {data.allPasteComponent.edges.map(({node}) => {
              return (
                <SiteNavItem key={node.name}>
                  <SiteNavAnchor to={`/components/${node.name.replace('@paste/', '')}`} activeClassName="is-active">
                    {node.name.replace('@paste/', '')}
                  </SiteNavAnchor>
                </SiteNavItem>
              );
            })}
          </SiteNavNestList>
        </SiteNavItem>
        <SiteNavItem>
          <SiteNavAnchor to="/utilities" activeClassName="is-active">
            Utilities
            <SiteNavAnchorArrow />
          </SiteNavAnchor>
          <SiteNavNestList>
            {data.allPasteUtility.edges.map(({node}) => {
              return (
                <SiteNavItem key={node.name}>
                  <SiteNavAnchor to={`/utilities/${node.name.replace('@paste/', '')}`} activeClassName="is-active">
                    {node.name.replace('@paste/', '')}
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
