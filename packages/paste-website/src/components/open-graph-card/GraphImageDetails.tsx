import * as React from 'react-16';
import {Box} from '@twilio-paste/box';
import {Text} from '@twilio-paste/text';
import {ComponentStatus} from './ComponentStatus';
import type {PackageData} from './types';

export type GraphImageDetailsProps = PackageData;

const GraphImageDetails: React.FC<GraphImageDetailsProps> = (packageData) => {
  return (
    <Box>
      <Text as="div" color="colorTextWeak" fontSize="fontSize60" lineHeight="lineHeight60">
        Status
      </Text>
      <ComponentStatus {...packageData} />
    </Box>
  );
};

export {GraphImageDetails};
