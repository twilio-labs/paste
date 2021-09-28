import * as React from 'react';
import {Paragraph} from '@twilio-paste/paragraph';
import {ProductFlexIcon} from '@twilio-paste/icons/esm/ProductFlexIcon';

import {ProjectCard, ProjectCardBody, ProjectHeading, ProjectLogo} from './ProjectCard';

export const ReactCard: React.FC = () => {
  return (
    <ProjectCard>
      <ProjectCardBody>
        <ProjectLogo>
          <ProductFlexIcon decorative={false} title="Flex" size="sizeIcon70" color="colorTextIcon" />
        </ProjectLogo>
        <ProjectHeading>Any React-based UI</ProjectHeading>
        <Paragraph>You can add Paste to any React-based UI, including Next.js and Create React App.</Paragraph>
      </ProjectCardBody>
      <Paragraph marginBottom="space0">
        <em>Starter kits coming soon!</em>
      </Paragraph>
    </ProjectCard>
  );
};
