import { Paragraph } from '@twilio-paste/paragraph';
import { ProductFlexIcon } from '@twilio-paste/icons/esm/ProductFlexIcon';
import { Anchor } from '@twilio-paste/anchor';

import { ProjectCard, ProjectCardBody, ProjectHeading, ProjectLogo } from './ProjectCard';

export const FlexCard = (): JSX.Element => {
  return (
    <ProjectCard>
      <ProjectCardBody>
        <ProjectLogo>
          <ProductFlexIcon color="colorTextBrandHighlight" decorative={false} title="Flex" size="sizeIcon70" />
        </ProjectLogo>
        <ProjectHeading>Flex</ProjectHeading>
        <Paragraph>
          Designed specifically to work seamlessly with Flex, Paste and its components can be used to create any custom
          integration.
        </Paragraph>
      </ProjectCardBody>
      <Anchor href="https://www.twilio.com/flex" showExternal>
        Learn more about Flex
      </Anchor>
    </ProjectCard>
  );
};
