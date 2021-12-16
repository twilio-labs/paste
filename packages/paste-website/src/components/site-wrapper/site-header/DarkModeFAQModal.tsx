import * as React from 'react';
import {Heading} from '@twilio-paste/heading';
import {Paragraph} from '@twilio-paste/paragraph';
import {Anchor} from '@twilio-paste/anchor';
import {SiteLink} from '../../SiteLink';

export const DarkModeFAQModal: React.FC = () => {
  return (
    <>
      <Paragraph>
        We&rsquo;re excited to show you an <strong>early preview</strong> of Dark Mode for Paste! We&rsquo;re doing this
        work in partnership with
        <Anchor href="https://www.twilio.com/flex" showExternal>
          Flex
        </Anchor>
        . While we still have some work to do to see this widely across Twilio, we thought you might have some questions
        and hope this FAQ helps! Have more questions,{' '}
        <Anchor href="https://github.com/twilio-labs/paste/discussions/1527" showExternal>
          join our discussion on GitHub
        </Anchor>
        .
      </Paragraph>
      <Heading variant="heading20" as="h2">
        Can I use Dark Mode in my product?
      </Heading>
      <Paragraph>
        Eventually, yes! For now, this is an <strong>early preview</strong> and adoption of Dark Mode relies on a little
        preparation:
      </Paragraph>
      <Paragraph>
        A great way to be an early adopter of dark mode is to ensure that the <strong>entire</strong> surface area of
        your product UI is styled using Paste (whether that is components or design tokens). Once you&rsquo;ve done
        this, you are ready for Dark Mode!
      </Paragraph>
      <Paragraph>
        If there are any parts of your UI that are <strong>not styled with Paste</strong>, you{' '}
        <strong>should not</strong> adopt. Dark Mode adoption requires complete Paste and Default theme usage. There is
        no support for mixed UI states. In these cases, using dark mode may cause UI errors that will lead to a less
        optimal customer experience.
      </Paragraph>
      <Paragraph>
        Secondly, if you are a GA Twilio product, you <strong>should not</strong> use Paste Dark Mode yet. It&rsquo;s{' '}
        <strong>not quite</strong> baked for prime time. Pilot or Beta products might be suitable if you are all in on
        Paste.
      </Paragraph>
      <Heading variant="heading20" as="h2">
        My interface isn&rsquo;t 100% Paste, can I use Dark Mode?
      </Heading>
      <Paragraph>
        If you try to adopt Dark Mode in a UI that is only partially using Paste and its Default theme, the areas that
        are not using Paste will not be affected by the change in Mode. This will lead to visual inconsistencies within
        your page.
      </Paragraph>
      <Paragraph>
        As an example, if you have built a form but are using a multi-select dropdown from another library, when you
        switch into Dark Mode, that one component will remain light and look very much out of place.
      </Paragraph>
      <Heading variant="heading20" as="h2">
        What is the difference between Light/Dark Mode and Themes?
      </Heading>
      <Paragraph>
        Light/Dark Mode is a user preference that can be set at the operating system level, and which we can honour in
        the browser. In both Light and Dark Mode we get to choose what theme we use in each Mode.
      </Paragraph>
      <Paragraph>
        Themes are an implementation of design language. Paste, by default, uses the new design language that was
        specifically designed to unify all Twilio products. Paste also comes with the ability to support legacy design
        languages.
      </Paragraph>
      <Paragraph>
        The new, default design language is the only design language that supports Light and Dark Mode via the
        &ldquo;default&rdquo; and &ldquo;dark&rdquo; themes. The Legacy SendGrid design language{' '}
        <strong>does not support</strong> Light and Dark Modes.
      </Paragraph>
      <Heading variant="heading20" as="h2">
        Has this been researched with customers?
      </Heading>
      <Paragraph>
        Customer research on Dark Mode is on our backlog. Since this is an <strong>early preview</strong>, our first
        iteration was done in collaboration with the Flex BU to address their customer needs. We think the Flex team has
        done an excellent job but acknowledge that we should talk to customers across our user base to ensure that
        we&rsquo;re shipping a lovable project.
      </Paragraph>
      <Paragraph>
        When we do get to it, our research plan will be similar to the thorough and rigorous work which was done for the
        <Anchor
          showExternal
          href="https://docs.google.com/presentation/d/1X6SVjNPIlqcAnlsdiEXDAP953fquZRBMMx6qr5lSuDQ/edit#slide=id.p4"
        >
          UDL project
        </Anchor>
        .
      </Paragraph>
      <Heading variant="heading20" as="h2">
        Does it pass our accessibility standards?
      </Heading>
      <Paragraph>
        The early preview does not pass our accessibility standards yet. There are some gaps that we will be working on
        in the coming weeks that will get the theme to being accessible in our most common use cases. When we graduate
        from early preview, we expect dark mode to live up to the rest of our accessibility and inclusive design
        benchmarks.
      </Paragraph>
      <Heading variant="heading20" as="h2">
        Why are you releasing an unfinished dark mode?
      </Heading>
      <Paragraph>
        In the spirit of <SiteLink to="/principles#think-big-and-take-small-steps">taking small steps</SiteLink> we are
        releasing a solution that keeps us on track to meeting our long term goals (support Flex and our Programmable
        Applications for Twilio customers) and giving us an opportunity to{' '}
        <Anchor href="https://github.com/twilio-labs/paste/discussions/1527" showExternal>
          seek early feedback
        </Anchor>{' '}
        from you, our consumers.
      </Paragraph>
      <Heading variant="heading20" as="h2">
        Are there Figma libraries for Dark Mode?
      </Heading>
      <Paragraph>
        The early preview does not have Figma library support. Figma support, as well as documentation on using Dark
        Mode for new and existing design work, is coming soon. Stay tuned!
      </Paragraph>
      <Heading variant="heading20" as="h2">
        What about icons?
      </Heading>
      <Paragraph>Paste icons are designed to work in both Light and Dark modes. </Paragraph>
      <Heading variant="heading20" as="h2">
        What about illustrations?
      </Heading>
      <Paragraph>
        Our illustrations are designed for Light Mode. They don&rsquo;t adapt to dark backgrounds and as such they
        don&rsquo;t look as good as we would like them to. To make illustrations work best in both Light and Dark Modes,
        we will likely have to rethink how illustrations are built. We will share more details on that in the future and
        will have guidance when we graduate from an early preview.
      </Paragraph>
    </>
  );
};
