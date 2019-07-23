import * as React from 'react';
import {graphql, useStaticQuery, Link} from 'gatsby';
import {Global, css} from '@emotion/core';
import styled from '@emotion/styled';
import {themeGet} from 'styled-system';
import {Theme} from '@paste/theme';
import {Header} from '../header';

interface SiteWrapperProps {
  children: React.ReactNode;
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

const globalStyles = css`
  body {
    margin: 0;
  }
`;

const SiteBody = styled.div`
  display: flex;
`;

const SiteHeader = styled.header`
  background-color: ${themeGet('backgroundColors.colorBackground')};
  ${themeGet('borderTypes.Light')};
  border-width: 0 1px 0 0;
  display: flex;
  flex-direction: column;
  padding: ${themeGet('space.space40')};
  position: fixed;
  bottom: 0;
  top: 0;
  width: ${themeGet('maxWidths.size30')};
`;

const SiteMain = styled.main`
  margin-left: ${themeGet('widths.size30')};
  padding: ${themeGet('space.space80')};
`;

const SiteNav = styled.nav``;

const SiteNavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SiteNavNestList = styled(SiteNavList)`
  margin-left: ${themeGet('space.space30')};
`;

const SiteNavItem = styled.li``;

const SiteNavAnchor = styled(Link)`
  color: ${themeGet('textColors.colorText')};
  display: block;
  width: 100%;
`;

const SiteWrapper: React.FC<SiteWrapperProps> = props => {
  const data: SiteWrapperPageQuery = useStaticQuery(pageQuery);
  console.log('SiteWrapper Query', data);
  return (
    <Theme.Provider>
      <Global styles={globalStyles} />
      <SiteBody>
        <SiteHeader>
          <Header siteTitle="DSYS Docs" />
          <SiteNav>
            <SiteNavList>
              <SiteNavItem>
                <SiteNavAnchor to="/getting-started">Getting Started</SiteNavAnchor>
              </SiteNavItem>
              <SiteNavItem>
                <SiteNavAnchor to="/tokens">Tokens</SiteNavAnchor>
              </SiteNavItem>
              <SiteNavItem>
                <SiteNavAnchor to="/components">Components</SiteNavAnchor>
                <SiteNavNestList>
                  {data.allPasteComponent.edges.map(({node}) => {
                    return (
                      <SiteNavItem key={node.name}>
                        <SiteNavAnchor to={`/components/${node.name.replace('@paste/', '')}`}>
                          {node.name.replace('@paste/', '')}
                        </SiteNavAnchor>
                      </SiteNavItem>
                    );
                  })}
                </SiteNavNestList>
              </SiteNavItem>
              <SiteNavItem>
                <SiteNavAnchor to="/components">Utilities</SiteNavAnchor>
                <SiteNavNestList>
                  {data.allPasteUtility.edges.map(({node}) => {
                    return (
                      <SiteNavItem key={node.name}>
                        <SiteNavAnchor to={`/components/${node.name.replace('@paste/', '')}`}>
                          {node.name.replace('@paste/', '')}
                        </SiteNavAnchor>
                      </SiteNavItem>
                    );
                  })}
                </SiteNavNestList>
              </SiteNavItem>
            </SiteNavList>
          </SiteNav>
        </SiteHeader>
        <SiteMain>{props.children}</SiteMain>
      </SiteBody>
    </Theme.Provider>
  );
};

export {SiteWrapper};
