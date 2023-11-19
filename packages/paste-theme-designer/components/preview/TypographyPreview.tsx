import { Heading } from "@twilio-paste/core/heading";
import { ListItem, OrderedList, UnorderedList } from "@twilio-paste/core/list";
import { Paragraph } from "@twilio-paste/core/paragraph";
import * as React from "react";

const TypographyPreview = (): JSX.Element => {
  return (
    <>
      <Heading as="h1" variant="heading10">
        Black lives matter
      </Heading>
      <Heading as="h2" variant="heading20">
        Black lives matter
      </Heading>
      <Heading as="h3" variant="heading30">
        Black lives matter
      </Heading>
      <Heading as="h4" variant="heading40">
        Black lives matter
      </Heading>
      <Heading as="h5" variant="heading50">
        Black lives matter
      </Heading>
      <Heading as="h6" variant="heading60">
        Black lives matter
      </Heading>
      <Paragraph>
        Impossible is just a big word thrown around by small men who find it easier to live in the world they&rsquo;ve
        been given than to explore the power they have to change it. Impossible is not a fact. It&rsquo;s an opinion.
        Impossible is not a declaration. It&apos;s a dare. Impossible is potential. Impossible is temporary. Impossible
        is nothing.
      </Paragraph>
      <UnorderedList>
        <ListItem>Tamir Rice</ListItem>
        <ListItem>Philando Castile</ListItem>
        <ListItem>Trayvon Martin</ListItem>
        <ListItem>Breonna Taylor</ListItem>
        <ListItem>Shantel Davis</ListItem>
        <ListItem>Walter Scott</ListItem>
      </UnorderedList>
      <Paragraph>
        We have inherited a fear of memories of slavery. It is as if to remember and acknowledge slavery would amount to
        our being consumed by it. As a matter of fact, in the popular black imagination, it is easier for us to
        construct ourselves as children of Africa, as the sons and daughters of kings and queens, and thereby ignore the
        Middle Passage and centuries of enforced servitude in the Americas. Although some of us might indeed be the
        descendants of African royalty, most of us are probably descendants of their subjects, the daughters and sons of
        African peasants or workers.
      </Paragraph>
      <OrderedList>
        <ListItem>Tamir Rice</ListItem>
        <ListItem>Philando Casitle</ListItem>
        <ListItem>Trayvon Martin</ListItem>
        <ListItem>Breonna Taylor</ListItem>
        <ListItem>Shantel Davis</ListItem>
        <ListItem>Walter Scott</ListItem>
      </OrderedList>
    </>
  );
};

export { TypographyPreview };
