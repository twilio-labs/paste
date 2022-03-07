import * as React from "react";
import { Heading } from "@twilio-paste/heading";
import { Paragraph } from "@twilio-paste/paragraph";
import { Anchor } from "@twilio-paste/anchor";
import { SiteLink } from "../../SiteLink";

export const DarkModeFAQModal: React.FC = () => {
  return (
    <>
      <Paragraph>
        We’re excited to release Dark theme in Paste! We’ve done this work in
        partnership with
        <Anchor href="https://www.twilio.com/flex" showExternal>
          Flex
        </Anchor>
        . While we still have some work to do to see this widely across Twilio,
        we thought you might have some questions and hope this FAQ helps! Have
        more questions,{" "}
        <Anchor
          href="https://github.com/twilio-labs/paste/discussions/1527"
          showExternal
        >
          join our discussion on GitHub
        </Anchor>
        .
      </Paragraph>
      <Heading variant="heading20" as="h2">
        Why did we make a Dark theme?
      </Heading>
      <Paragraph>
        Because Dark theme unlocks dark mode for our UIs, and dark mode is cool!
        Additionally, dark mode reduces eye strain and improves readability for
        many people. Giving our users the ability to use Twilio products in dark
        mode is key to building lovable products that support each of our users.
      </Paragraph>
      <Paragraph>
        And with Paste’s Dark theme, it’s simple to enable dark mode in your
        products if your UIs are built completely with Paste.
      </Paragraph>
      <Heading variant="heading20" as="h2">
        But wait, what’s the difference between “dark mode” and the “Dark theme”
        in Paste?
      </Heading>
      <Paragraph>
        We’re so glad you asked! Light/dark mode is a user preference that can
        be set at the operating system, browser, or application level, and which
        we can honor in our UIs. In both light and dark mode, you get to choose
        what Paste theme is used for the UI. Paste’s Dark theme allows you, our
        consumers, to enable light/dark mode in your products with ease.
      </Paragraph>
      <Heading variant="heading20" as="h2">
        When can I start using Dark theme?
      </Heading>
      <Paragraph>
        You can start using the Dark theme today, as long as your UIs are built
        fully with Paste and the Default theme. You should not use the Dark
        theme if there are any surface areas within your product that aren’t
        using Paste.
      </Paragraph>
      <Paragraph>
        As an example, if you have built a form but are using a multi-select
        dropdown from another library, when you switch into dark mode, that one
        component will remain light and look very much out of place.
      </Paragraph>
      <Heading variant="heading20" as="h2">
        How can I start using Dark theme?
      </Heading>
      <Paragraph>
        Using the Dark theme should be a{" "}
        <SiteLink to="/core/changing-theme">
          one-line update to the Theme Provider
        </SiteLink>
        . Simply change it from “default” to “dark”.
      </Paragraph>
      <Heading variant="heading20" as="h2">
        How can I start using Dark theme in Figma?
      </Heading>
      <Paragraph>
        We have a
        <Anchor
          href="https://www.figma.com/file/TZMBaCxXkX8u5aVRVYboid/Paste-Dark-Theme"
          showExternal
        >
          Dark theme library
        </Anchor>
        in Figma that you can turn on in your projects, which will give you
        access to all layer styles, text styles, and effects in the Dark theme.
      </Paragraph>
      <Paragraph>
        We are planning to provide documentation around the best way to use the
        Dark theme library in your work very soon, but in the meantime, feel
        free to test out Figma’s
        <Anchor
          href="https://help.figma.com/hc/en-us/articles/4404856784663-Swap-style-and-component-libraries"
          showExternal
        >
          library swap feature
        </Anchor>
        , and swap your screens from the “Paste Default Theme” to the “Paste
        Dark Theme”. We’ve tested it out a bit on our side, and it works great
        as long as every part of your UI (even the white background fill on your
        frames) is referencing tokens from the “Paste Default Theme” library in
        Figma. The library swap won’t work for raw hex codes, because Figma
        won’t know what to swap them to.
      </Paragraph>
      <Heading variant="heading20" as="h2">
        Where can I see the Dark theme in action?
      </Heading>
      <Paragraph>
        Currently, you can see Dark theme in the Paste documentation site, Flex
        UI 2.0, and the new Billing interface, Billio.
      </Paragraph>
      <Heading variant="heading20" as="h2">
        When do we get to see Dark theme in Twilio Console?
      </Heading>
      <Paragraph>
        Once all Twilio Console UIs are migrated to the new Console repo. Only
        then will we be able to unlock dark mode in Console via Paste’s Dark
        theme. Get migrating, Twilions!
      </Paragraph>
      <Heading variant="heading20" as="h2">
        Does it pass our accessibility standards?
      </Heading>
      <Paragraph>
        Dark theme now lives up to our inclusive design benchmarks and is fully
        accessible.
      </Paragraph>
      <Heading variant="heading20" as="h2">
        Where do I go with feedback?
      </Heading>
      <Paragraph>
        You can leave thoughts, questions, and feedback in our
        <Anchor
          href="https://help.figma.com/hc/en-us/articles/4404856784663-Swap-style-and-component-libraries"
          showExternal
        >
          GitHub discussion
        </Anchor>
        .
      </Paragraph>
    </>
  );
};
