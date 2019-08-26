import * as React from 'react';
import {StaticQuery, graphql} from 'gatsby';
import {Box} from '@twilio-paste/box';

const ComponentChangelog: React.FC<{}> = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          file(sourceInstanceName: {eq: "packages"}, relativePath: {regex: "/anchor/"}, name: {eq: "CHANGELOG"}) {
            id
            childMarkdownRemark {
              html
              rawMarkdownBody
            }
          }
        }
      `}
      render={data => (
        <>
          <Box key={data.file.id} marginTop="space120">
            <Box dangerouslySetInnerHTML={{__html: `${data.file.childMarkdownRemark.html}`}} />
          </Box>
        </>
      )}
    />
  );
};

export {ComponentChangelog};
