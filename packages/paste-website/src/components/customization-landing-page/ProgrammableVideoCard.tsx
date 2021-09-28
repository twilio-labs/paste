import * as React from 'react';
import {Paragraph} from '@twilio-paste/paragraph';
import {ProductVideoIcon} from '@twilio-paste/icons/esm/ProductVideoIcon';
import {Badge} from '@twilio-paste/badge';
import {NewIcon} from '@twilio-paste/icons/esm/NewIcon';
import {Anchor} from '@twilio-paste/anchor';

import {ProjectCard, ProjectCardBody, ProjectHeading, ProjectLogo} from './ProjectCard';

export const ProgrammableVoiceCard: React.FC = () => {
  return (
    <ProjectCard>
      <ProjectCardBody>
        <ProjectLogo>
          <ProductVideoIcon decorative={false} title="Programmable Voice" size="sizeIcon70" color="colorTextIcon" />
          <Badge as="span" variant="new">
            <NewIcon decorative={false} title="new" />
            Coming soon
          </Badge>
        </ProjectLogo>
        <ProjectHeading>Programmable Video</ProjectHeading>
        <Paragraph>
          Customize the look and feel of your Twilio Programmable Video starter app to create a seamless video
          experience.
        </Paragraph>
      </ProjectCardBody>
      <Anchor href="https://www.twilio.com/flex" showExternal>
        Learn more about Twilio Video
      </Anchor>
    </ProjectCard>
  );
};
