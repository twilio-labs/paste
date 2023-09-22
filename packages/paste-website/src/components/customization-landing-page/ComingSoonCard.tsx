import { Paragraph } from '@twilio-paste/paragraph';
import { LogoTwilioIcon } from '@twilio-paste/icons/esm/LogoTwilioIcon';
import { Badge } from '@twilio-paste/badge';
import { NewIcon } from '@twilio-paste/icons/esm/NewIcon';
import { Anchor } from '@twilio-paste/anchor';

import { ProjectCard, ProjectCardBody, ProjectHeading, ProjectLogo } from './ProjectCard';

export const ComingSoonCard = (): JSX.Element => {
  return (
    <ProjectCard>
      <ProjectCardBody>
        <ProjectLogo>
          <LogoTwilioIcon
            decorative={false}
            title="Twilio products"
            size="sizeIcon70"
            color="colorTextBrandHighlight"
          />
          <Badge as="span" variant="new">
            <NewIcon decorative={false} title="new" />
            Coming soon
          </Badge>
        </ProjectLogo>
        <ProjectHeading>Twilio apps</ProjectHeading>
        <Paragraph>
          Paste is a great addition to any Twilio based app. More will start supporting Paste out of the box, but for
          now why not add Paste to a Code Exchange app!
        </Paragraph>
      </ProjectCardBody>
      <Anchor href="https://www.twilio.com/code-exchange?q=&f=javascript" showExternal>
        Check out Code Exchange
      </Anchor>
    </ProjectCard>
  );
};
