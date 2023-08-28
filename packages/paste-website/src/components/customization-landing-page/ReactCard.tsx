import {Paragraph} from '@twilio-paste/paragraph';
import {Anchor} from '@twilio-paste/anchor';

import {ReactLogoIcon} from '../icons/ReactLogoIcon';
import {ProjectCard, ProjectCardBody, ProjectHeading, ProjectLogo} from './ProjectCard';

export const ReactCard = (): JSX.Element => {
  return (
    <ProjectCard>
      <ProjectCardBody>
        <ProjectLogo>
          <ReactLogoIcon decorative={false} title="React" size="sizeIcon70" color="colorTextIcon" />
        </ProjectLogo>
        <ProjectHeading>Any React-based UI</ProjectHeading>
        <Paragraph>You can add Paste to any React-based UI, including Next.js and Create React App.</Paragraph>
      </ProjectCardBody>
      <Paragraph marginBottom="space0">
        <Anchor href="https://github.com/twilio-labs/paste/tree/main/templates/paste-nextjs-template" showExternal>
          Try our Next.js Starter Kit
        </Anchor>
      </Paragraph>
    </ProjectCard>
  );
};
