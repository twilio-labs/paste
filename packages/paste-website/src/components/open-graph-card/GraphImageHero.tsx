import * as React from 'react';
import { MediaObject, MediaBody, MediaFigure } from '@twilio-paste/media-object';
import { Text } from '@twilio-paste/text';

import { Logo } from '../../assets/Logo';
import type { PackageData } from './types';

export interface GraphImageHeroProps {
  feature: PackageData['Feature'];
  description: PackageData['description'];
}

const GraphImageHero: React.FC<React.PropsWithChildren<GraphImageHeroProps>> = ({ feature, description }) => {
  return (
    <MediaObject as="div" verticalAlign="center">
      <MediaBody as="div">
        <Text as="h1" fontSize="fontSize110" fontWeight="fontWeightBold" lineHeight="lineHeight110">
          {feature}
        </Text>
        <Text as="p" marginBottom="space50" lineHeight="lineHeight70" fontSize="fontSize70" color="colorTextWeak">
          {description}
        </Text>
      </MediaBody>
      <MediaFigure as="div" spacing="space180" align="end">
        <Logo decorative size={90} />
      </MediaFigure>
    </MediaObject>
  );
};

export { GraphImageHero };
