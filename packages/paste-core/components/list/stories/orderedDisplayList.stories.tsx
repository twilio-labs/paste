import { CustomizationProvider } from "@twilio-paste/customization";
import { Separator } from "@twilio-paste/separator";
import * as React from "react";

import { OrderedDisplayList, OrderedDisplayListHeading, OrderedDisplayListItem } from "../src";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/List/OrderedDisplayList",
  component: OrderedDisplayList,
  subcomponents: { OrderedDisplayListItem, OrderedDisplayListHeading },
};

export const LongList = (): React.ReactNode => {
  return (
    <OrderedDisplayList variant="heading40">
      <OrderedDisplayListItem>
        <OrderedDisplayListHeading as="div">Hipster Ipsum</OrderedDisplayListHeading>
        Raw denim YOLO flexitarian small batch drinking vinegar. Dolor solarpunk snackwave single-origin coffee do
        ullamco master cleanse polaroid. Hexagon listicle fugiat, asymmetrical godard art party nulla hella JOMO
        activated charcoal chicharrones eiusmod migas. Seitan kogi lorem vexillologist enamel pin do.
      </OrderedDisplayListItem>
      <OrderedDisplayListItem>
        Dolore fugiat cillum blackbird spyplane whatever hoodie. Lorem everyday carry big mood tacos marxism. Cray
        dreamcatcher shaman subway tile meh. Cillum taxidermy prism tempor pork belly vaporware trust fund DSA. Keffiyeh
        fam shabby chic, distillery selfies esse organic slow-carb you probably havent heard of them lorem ea lyft
        chillwave knausgaard.
      </OrderedDisplayListItem>
      <OrderedDisplayListItem>
        Lomo mixtape williamsburg pitchfork swag tousled, ullamco dolore ipsum adipisicing microdosing man braid officia
        raw denim. Sus etsy qui woke bitters 8-bit. Messenger bag aliqua asymmetrical, sartorial la croix austin pug
        vaporware knausgaard fit eu health goth. Whatever pickled shabby chic consectetur next level try-hard edison
        bulb migas voluptate deep v schlitz unicorn beard hammock. Single-origin coffee gluten-free selvage pabst
        eiusmod. Jawn est selvage, tumeric quinoa vibecession bicycle rights retro.
      </OrderedDisplayListItem>
      <OrderedDisplayListItem>
        Commodo stumptown ad quinoa locavore ut kitsch keytar pop-up hammock sunt poutine. Microdosing chicharrones
        voluptate solarpunk, kogi small batch quinoa. Cupping freegan franzen palo santo tonx, officia ascot. Blue
        bottle tumblr thundercats, intelligentsia poke prism narwhal cupping Brooklyn chia tbh church-key hashtag.
        Artisan viral vape, dreamcatcher pitchfork snackwave literally. Vibecession offal ullamco exercitation before
        they sold out, fixie blackbird spyplane scenester copper mug biodiesel four loko solarpunk quinoa consectetur.
        Food truck lorem unicorn vibecession gastropub proident wayfarers gluten-free next level banjo dolore
        chicharrones meditation.
      </OrderedDisplayListItem>
      <OrderedDisplayListItem>
        VHS ut flannel, art party deserunt freegan banh mi mukbang est neutra cupidatat copper mug hella gastropub cloud
        bread. Normcore marfa distillery selvage chicharrones heirloom meggings. Jawn green juice you probably havent
        heard of them, selfies vice scenester keytar officia heirloom reprehenderit aliqua bodega boys vibecession. 90s
        slow-carb neutra fanny pack. Narwhal ethical lo-fi bespoke gentrify. Stumptown poke sus VHS, hashtag seitan
        vice. DIY pabst fugiat ugh, fashion axe craft beer subway tile same blue bottle qui chicharrones aliquip.
      </OrderedDisplayListItem>
      <OrderedDisplayListItem>
        <OrderedDisplayListHeading as="div">Hipster Ipsum</OrderedDisplayListHeading>
        Raw denim YOLO flexitarian small batch drinking vinegar. Dolor solarpunk snackwave single-origin coffee do
        ullamco master cleanse polaroid. Hexagon listicle fugiat, asymmetrical godard art party nulla hella JOMO
        activated charcoal chicharrones eiusmod migas. Seitan kogi lorem vexillologist enamel pin do.
      </OrderedDisplayListItem>

      <OrderedDisplayListItem>
        Dolore fugiat cillum blackbird spyplane whatever hoodie. Lorem everyday carry big mood tacos marxism. Cray
        dreamcatcher shaman subway tile meh. Cillum taxidermy prism tempor pork belly vaporware trust fund DSA. Keffiyeh
        fam shabby chic, distillery selfies esse organic slow-carb you probably haven&apos;t heard of them lorem ea lyft
        chillwave knausgaard.
      </OrderedDisplayListItem>
      <OrderedDisplayListItem>
        Lomo mixtape williamsburg pitchfork swag tousled, ullamco dolore ipsum adipisicing microdosing man braid officia
        raw denim. Sus etsy qui woke bitters 8-bit. Messenger bag aliqua asymmetrical, sartorial la croix austin pug
        vaporware knausgaard fit eu health goth. Whatever pickled shabby chic consectetur next level try-hard edison
        bulb migas voluptate deep v schlitz unicorn beard hammock. Single-origin coffee gluten-free selvage pabst
        eiusmod. Jawn est selvage, tumeric quinoa vibecession bicycle rights retro.
      </OrderedDisplayListItem>
      <OrderedDisplayListItem>
        Commodo stumptown ad quinoa locavore ut kitsch keytar pop-up hammock sunt poutine. Microdosing chicharrones
        voluptate solarpunk, kogi small batch quinoa. Cupping freegan franzen palo santo tonx, officia ascot. Blue
        bottle tumblr thundercats, intelligentsia poke prism narwhal cupping Brooklyn chia tbh church-key hashtag.
        Artisan viral vape, dreamcatcher pitchfork snackwave literally. Vibecession offal ullamco exercitation before
        they sold out, fixie blackbird spyplane scenester copper mug biodiesel four loko solarpunk quinoa consectetur.
        Food truck lorem unicorn vibecession gastropub proident wayfarers gluten-free next level banjo dolore
        chicharrones meditation.
      </OrderedDisplayListItem>
      <OrderedDisplayListItem>
        VHS ut flannel, art party deserunt freegan banh mi mukbang est neutra cupidatat copper mug hella gastropub cloud
        bread. Normcore marfa distillery selvage chicharrones heirloom meggings. Jawn green juice you probably
        haven&apos;t heard of them, selfies vice scenester keytar officia heirloom reprehenderit aliqua bodega boys
        vibecession. 90&apos;s slow-carb neutra fanny pack. Narwhal ethical lo-fi bespoke gentrify. Stumptown poke sus
        VHS, hashtag seitan vice. DIY pabst fugiat ugh, fashion axe craft beer subway tile same blue bottle qui
        chicharrones aliquip.
      </OrderedDisplayListItem>
    </OrderedDisplayList>
  );
};

export const Variants = (): React.ReactNode => {
  return (
    <>
      <OrderedDisplayList variant="heading20">
        <OrderedDisplayListItem>
          <OrderedDisplayListHeading as="div">Heading20</OrderedDisplayListHeading>
          Text beneath heading
        </OrderedDisplayListItem>
        <OrderedDisplayListItem>
          <OrderedDisplayListHeading as="div">Heading20</OrderedDisplayListHeading>
          Text beneath heading
        </OrderedDisplayListItem>
        <OrderedDisplayListItem>Text beneath heading</OrderedDisplayListItem>
        <OrderedDisplayListItem>Text beneath heading</OrderedDisplayListItem>
      </OrderedDisplayList>
      <Separator orientation="horizontal" verticalSpacing="space60" />
      <OrderedDisplayList variant="heading30">
        <OrderedDisplayListItem>
          <OrderedDisplayListHeading as="div">Heading30</OrderedDisplayListHeading>
          Text beneath heading
        </OrderedDisplayListItem>
        <OrderedDisplayListItem>
          <OrderedDisplayListHeading as="div">Heading30</OrderedDisplayListHeading>
          Text beneath heading
        </OrderedDisplayListItem>
        <OrderedDisplayListItem>Text beneath heading</OrderedDisplayListItem>
        <OrderedDisplayListItem>Text beneath heading</OrderedDisplayListItem>
      </OrderedDisplayList>
      <Separator orientation="horizontal" verticalSpacing="space60" />
      <OrderedDisplayList variant="heading40">
        <OrderedDisplayListItem>
          <OrderedDisplayListHeading as="div">Heading40</OrderedDisplayListHeading>
          Text beneath heading
        </OrderedDisplayListItem>
        <OrderedDisplayListItem>
          <OrderedDisplayListHeading as="div">Heading40</OrderedDisplayListHeading>
          Text beneath heading
        </OrderedDisplayListItem>
        <OrderedDisplayListItem>Text beneath heading</OrderedDisplayListItem>
        <OrderedDisplayListItem>Text beneath heading</OrderedDisplayListItem>
      </OrderedDisplayList>
      <Separator orientation="horizontal" verticalSpacing="space60" />
      <OrderedDisplayList variant="heading50">
        <OrderedDisplayListItem>
          <OrderedDisplayListHeading as="div">Heading50</OrderedDisplayListHeading>
          Text beneath heading
        </OrderedDisplayListItem>
        <OrderedDisplayListItem>
          <OrderedDisplayListHeading as="div">Heading50</OrderedDisplayListHeading>
          Text beneath heading
        </OrderedDisplayListItem>
        <OrderedDisplayListItem>Text beneath heading</OrderedDisplayListItem>
        <OrderedDisplayListItem>Text beneath heading</OrderedDisplayListItem>
      </OrderedDisplayList>
      <Separator orientation="horizontal" verticalSpacing="space60" />
      <OrderedDisplayList variant="heading60">
        <OrderedDisplayListItem>
          <OrderedDisplayListHeading as="div">Heading60</OrderedDisplayListHeading>
          Text beneath heading
        </OrderedDisplayListItem>
        <OrderedDisplayListItem>
          <OrderedDisplayListHeading as="div">Heading60</OrderedDisplayListHeading>
          Text beneath heading
        </OrderedDisplayListItem>
        <OrderedDisplayListItem>Text beneath heading</OrderedDisplayListItem>
        <OrderedDisplayListItem>Text beneath heading</OrderedDisplayListItem>
      </OrderedDisplayList>
    </>
  );
};

export const Custom = (): React.ReactNode => {
  return (
    <CustomizationProvider
      baseTheme="default"
      elements={{
        ORDERED_DISPLAY_LIST: {
          backgroundColor: "colorBackgroundPrimaryWeakest",
        },
        ORDERED_DISPLAY_LIST_HEADING: {
          fontWeight: "fontWeightExtrabold",
        },
        ORDERED_DISPLAY_LIST_ITEM: {
          margin: "space40",
        },
      }}
    >
      <OrderedDisplayList variant="heading20">
        <OrderedDisplayListItem>
          <OrderedDisplayListHeading as="div">Heading20</OrderedDisplayListHeading>
          Text beneath heading
        </OrderedDisplayListItem>
        <OrderedDisplayListItem>
          <OrderedDisplayListHeading as="div">Heading20</OrderedDisplayListHeading>
          Text beneath heading
        </OrderedDisplayListItem>
      </OrderedDisplayList>
      <Separator orientation="horizontal" verticalSpacing="space60" />
      <OrderedDisplayList variant="heading30">
        <OrderedDisplayListItem>
          <OrderedDisplayListHeading as="div">Heading30</OrderedDisplayListHeading>
          Text beneath heading
        </OrderedDisplayListItem>
        <OrderedDisplayListItem>
          <OrderedDisplayListHeading as="div">Heading30</OrderedDisplayListHeading>
          Text beneath heading
        </OrderedDisplayListItem>
      </OrderedDisplayList>
      <Separator orientation="horizontal" verticalSpacing="space60" />
      <OrderedDisplayList variant="heading40">
        <OrderedDisplayListItem>
          <OrderedDisplayListHeading as="div">Heading40</OrderedDisplayListHeading>
          Text beneath heading
        </OrderedDisplayListItem>
        <OrderedDisplayListItem>
          <OrderedDisplayListHeading as="div">Heading40</OrderedDisplayListHeading>
          Text beneath heading
        </OrderedDisplayListItem>
      </OrderedDisplayList>
      <Separator orientation="horizontal" verticalSpacing="space60" />
      <OrderedDisplayList variant="heading50">
        <OrderedDisplayListItem>
          <OrderedDisplayListHeading as="div">Heading50</OrderedDisplayListHeading>
          Text beneath heading
        </OrderedDisplayListItem>
        <OrderedDisplayListItem>
          <OrderedDisplayListHeading as="div">Heading50</OrderedDisplayListHeading>
          Text beneath heading
        </OrderedDisplayListItem>
      </OrderedDisplayList>
      <Separator orientation="horizontal" verticalSpacing="space60" />
      <OrderedDisplayList variant="heading60">
        <OrderedDisplayListItem>
          <OrderedDisplayListHeading as="div">Heading60</OrderedDisplayListHeading>
          Text beneath heading
        </OrderedDisplayListItem>
        <OrderedDisplayListItem>
          <OrderedDisplayListHeading as="div">Heading60</OrderedDisplayListHeading>
          Text beneath heading
        </OrderedDisplayListItem>
      </OrderedDisplayList>
    </CustomizationProvider>
  );
};
