import * as React from 'react';
import {graphql} from 'gatsby';
import {Theme} from '@twilio-paste/theme';
import {Box} from '@twilio-paste/box';
import {Heading} from '@twilio-paste/heading';
import {Text} from '@twilio-paste/text';
import {ComponentStatus} from '../../components/open-graph-card/ComponentStatus';
import type {PackageData} from '../../components/open-graph-card/types';
import {getHumanizedNameFromPackageName} from '../../utils/RouteUtils';

export const pageQuery = graphql`
  {
    allAirtable(sort: {fields: [data___Feature]}, filter: {data: {status: {nin: [null, "in development"]}}}) {
      edges {
        node {
          data {
            Feature
            Documentation
            Figma
            Design_committee_review
            Engineer_committee_review
            Code
            status
          }
        }
      }
    }
    allPasteComponent {
      edges {
        node {
          name
          description
        }
      }
    }
    allPastePrimitive {
      edges {
        node {
          name
          description
        }
      }
    }
    allPasteLayout {
      edges {
        node {
          name
          description
        }
      }
    }
  }
`;

// Some packages can't be found just by humanizing the package name,
// so I need to manually map them.
const ManualPackageNameMapping: Record<string, string> = {
  // This package needs to preserve one of the hyphens in the name.
  '@twilio-paste/non-modal-dialog-primitive': 'Non-modal Dialog Primitive',
};

type NodeGQL = {
  name: string;
  description: string;
};
type ComponentNodeGQL = {
  node: NodeGQL;
};
type AirtableEdgeGQL = {
  node: {
    data: PackageData;
  };
};

type Edge = Array<ComponentNodeGQL>;
interface OpenGraphCardProps {
  location: {search: string};
  data: {
    allAirtable: {
      edges: Array<AirtableEdgeGQL>;
    };
    allPasteComponent: {edges: Edge};
    allPastePrimitive: {edges: Edge};
    allPasteLayout: {edges: Edge};
  };
}

const EMPTY_PACKAGE_DATA = {
  name: '',
  description: '',
  type: '',
  Feature: '',
  Figma: '',
  Documentation: false,
  Design_committee_review: '',
  Engineer_committee_review: '',
  Code: '',
};

const OpenGraphCard: React.FC<OpenGraphCardProps> = ({location, data}): React.ReactElement => {
  const queryString = location.search;
  const urlParams = new URLSearchParams(queryString);
  const path = urlParams.get('path') || '';
  const [packageType, packageName] = path.split('/');

  if (!packageType || !packageName) {
    return <div>Invalid request</div>;
  }

  function mergeAirtableDataForNode(node: NodeGQL, type: string): PackageData {
    const {name, description} = node;

    // If this package is in our manual mapping list, use that.
    // otherwise, humanize the package name.
    const humanizedName =
      ManualPackageNameMapping[name] != null ? ManualPackageNameMapping[name] : getHumanizedNameFromPackageName(name);

    // Find the airtable array entry for this node
    const itemAirtable = data.allAirtable.edges.find((edge) => {
      return edge.node.data.Feature === humanizedName;
    });

    // Someone is requesting a package that doesn't exist.
    if (!itemAirtable) {
      console.log('No Airtable data found for:', name);
      return EMPTY_PACKAGE_DATA;
    }

    return {
      ...itemAirtable.node.data,
      name,
      description,
      type,
    };
  }

  let packageData: PackageData = EMPTY_PACKAGE_DATA;

  switch (packageType) {
    case 'components': {
      const edge = data.allPasteComponent.edges.find(({node}: ComponentNodeGQL) => {
        return node.name === `@twilio-paste/${packageName}`;
      });
      if (edge) {
        packageData = mergeAirtableDataForNode(edge.node, 'components');
      }
      break;
    }
    case 'primitives': {
      const edge = data.allPastePrimitive.edges.find(({node}: ComponentNodeGQL) => {
        return node.name === `@twilio-paste/${packageName}`;
      });
      if (edge) {
        packageData = mergeAirtableDataForNode(edge.node, 'primitives');
      }
      break;
    }
    case 'layout': {
      const edge = data.allPasteLayout.edges.find(({node}: ComponentNodeGQL) => {
        return node.name === `@twilio-paste/${packageName}`;
      });
      if (edge) {
        packageData = mergeAirtableDataForNode(edge.node, 'layout');
      }
      break;
    }
    default: {
      // Just keeps the default package data
      break;
    }
  }

  console.log(packageData);

  return (
    <Theme.Provider theme="default">
      <Box
        marginX="space40"
        marginY="space20"
        position="relative"
        width="560px"
        minHeight="150px"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Box>
          <img alt="" src="/logo.svg" width="32px" height="32px" style={{position: 'absolute', top: 6, right: 6}} />
          <Heading as="h1" variant="heading10" marginBottom="space0">
            {packageData.Feature}
          </Heading>
          <Text as="p" marginBottom="space50" lineHeight={'lineHeight40'} fontSize={'fontSize40'}>
            {packageData.description}
          </Text>
        </Box>
        <Box>
          <Text as="span" display="inline-block" color="colorTextWeak" css={{width: '80px'}}>
            Status
          </Text>
          <ComponentStatus {...packageData} />
        </Box>
      </Box>
    </Theme.Provider>
  );
};

export default OpenGraphCard;
