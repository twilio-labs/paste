import * as React from 'react';
import {Theme} from '@twilio-paste/theme';
import {useRouter} from 'next/router';
import type {GetStaticProps, InferGetStaticPropsType} from 'next';

import {GraphImageWrapper} from '../../components/open-graph-card/GraphImageWrapper';
import {GraphImageHero} from '../../components/open-graph-card/GraphImageHero';
import {GraphImageDetails} from '../../components/open-graph-card/GraphImageDetails';
import type {PackageData} from '../../components/open-graph-card/types';
import {getHumanizedNameFromPackageName} from '../../utils/RouteUtils';
import {getNavigationData, getAllFeatures} from '../../utils/api';
import type {Feature, Package, PastePackages} from '../../utils/api';

/*
 * Some packages can't be found just by humanizing the package name,
 * so I need to manually map them.
 */
const ManualPackageNameMapping: Record<string, string> = {
  // This package needs to preserve one of the hyphens in the name.
  '@twilio-paste/non-modal-dialog-primitive': 'Non-modal Dialog Primitive',
};

const EMPTY_PACKAGE_DATA = {
  name: '',
  description: '',
  version: '',
  status: '',
  Feature: '',
  Figma: '',
  Documentation: false,
  'Design committee review': '',
  'Engineer committee review': '',
  Code: '',
  'Component Category': '',
  'Product suitability': '',
  type: '',
};

const OpenGraphCard = ({data}: InferGetStaticPropsType<typeof getStaticProps>): React.ReactElement => {
  const router = useRouter();
  const path = (router.query.path || '').toString();
  const [packageType, packageName] = path.split('/');

  if (!packageType || !packageName) {
    return <div>Invalid request</div>;
  }

  function mergeAirtableDataForNode(node: Package, type: string): PackageData {
    const {name, description, version} = node;

    /*
     * If this package is in our manual mapping list, use that.
     * otherwise, humanize the package name.
     */
    const humanizedName =
      ManualPackageNameMapping[name] != null ? ManualPackageNameMapping[name] : getHumanizedNameFromPackageName(name);

    // Find the airtable array entry for this node
    const itemAirtable = data.allAirtable.find((entry) => {
      return entry.Feature === humanizedName;
    });

    // Someone is requesting a package that doesn't exist.
    if (!itemAirtable) {
      return EMPTY_PACKAGE_DATA;
    }

    return {
      ...itemAirtable,
      name,
      description,
      type,
      version,
    };
  }

  let packageData: PackageData = EMPTY_PACKAGE_DATA;

  switch (packageType) {
    case 'components': {
      const entry = data.allPasteComponent.find((component) => {
        return component.name === `@twilio-paste/${packageName}`;
      });
      if (entry) {
        packageData = mergeAirtableDataForNode(entry, 'components');
      }
      break;
    }
    case 'primitives': {
      const entry = data.allPastePrimitive.find((primitive) => {
        return primitive.name === `@twilio-paste/${packageName}`;
      });
      if (entry) {
        packageData = mergeAirtableDataForNode(entry, 'primitives');
      }
      break;
    }
    case 'layout': {
      const entry = data.allPasteLayout.find((layout) => {
        return layout.name === `@twilio-paste/${packageName}`;
      });
      if (entry) {
        packageData = mergeAirtableDataForNode(entry, 'layout');
      }
      break;
    }
    default: {
      // Just keeps the default package data
      break;
    }
  }

  return (
    <div>
      <Theme.Provider theme="twilio" aria-label="Open Graph Template">
        <GraphImageWrapper>
          <GraphImageHero feature={packageData.Feature} description={packageData.description} />
          <GraphImageDetails {...packageData} />
        </GraphImageWrapper>
      </Theme.Provider>
    </div>
  );
};

export const getStaticProps: GetStaticProps<{data: PastePackages & {allAirtable: Feature[]}}> = async () => {
  const navigationData = await getNavigationData();
  const features = await getAllFeatures();

  return {
    props: {
      data: {
        ...navigationData,
        allAirtable: features,
      },
    },
  };
};

export default OpenGraphCard;
