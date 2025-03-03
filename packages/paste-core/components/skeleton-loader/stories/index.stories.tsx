import type { StoryFn } from "@storybook/react";
import { Avatar } from "@twilio-paste/avatar";
import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { Card } from "@twilio-paste/card";
import { CustomizationProvider } from "@twilio-paste/customization";
import { Heading } from "@twilio-paste/heading";
import { CalendarIcon } from "@twilio-paste/icons/esm/CalendarIcon";
import { Paragraph } from "@twilio-paste/paragraph";
import { Stack } from "@twilio-paste/stack";
import { TBody, THead, Table, Td, Th, Tr } from "@twilio-paste/table";
import { Text } from "@twilio-paste/text";
import { useTheme } from "@twilio-paste/theme";
import * as React from "react";
import type { JSX } from "react";

import type { SkeletonLoaderProps } from "../src";
import { SkeletonLoader } from "../src";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/Skeleton Loader",
  component: SkeletonLoader,
};

export const Default: React.FC<React.PropsWithChildren<SkeletonLoaderProps>> = (props) => {
  return <SkeletonLoader data-testid="default-skeleton" {...props} />;
};

export const TextLoading = (): JSX.Element => {
  const [loaded, setLoaded] = React.useState(false);
  return (
    <>
      {loaded ? <Text as="span">Single line of text</Text> : <SkeletonLoader width="100px" />}
      <Box marginTop="space60">
        <Stack orientation="horizontal" spacing="space60">
          <Button variant="secondary" size="small" onClick={() => setLoaded(true)}>
            Load content
          </Button>
          <Button variant="secondary" size="small" onClick={() => setLoaded(false)}>
            Reset
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export const ParagraphLoading = (): JSX.Element => {
  const [loaded, setLoaded] = React.useState(false);
  return (
    <>
      {loaded ? (
        <Box width="500px">
          <Paragraph>
            Impossible is just a big word thrown around by small men who find it easier to live in the world they’ve
            been given than to explore the power they have to change it. Impossible is not a fact. It’s an opinion.
            Impossible is not a declaration. It&apos;s a dare. Impossible is potential. Impossible is temporary.
            Impossible is nothing.
          </Paragraph>
        </Box>
      ) : (
        <Box width="500px">
          <Stack orientation="vertical" spacing="space20">
            <SkeletonLoader />
            <SkeletonLoader />
            <SkeletonLoader />
            <SkeletonLoader />
            <SkeletonLoader width="150px" />
          </Stack>
        </Box>
      )}
      <Box marginTop="space60">
        <Stack orientation="horizontal" spacing="space60">
          <Button variant="secondary" size="small" onClick={() => setLoaded(true)}>
            Load content
          </Button>
          <Button variant="secondary" size="small" onClick={() => setLoaded(false)}>
            Reset
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export const HeadingLoading = (): JSX.Element => {
  const [loaded, setLoaded] = React.useState(false);
  return (
    <>
      {loaded ? (
        <Stack orientation="vertical" spacing="space60">
          <Heading as="h1" variant="heading10">
            Heading one
          </Heading>
          <Heading as="h2" variant="heading20">
            Heading two
          </Heading>
          <Heading as="h3" variant="heading30">
            Heading three
          </Heading>
          <Heading as="h4" variant="heading40">
            Heading four
          </Heading>
          <Heading as="h5" variant="heading50">
            Heading five
          </Heading>
          <Heading as="h6" variant="heading60">
            Heading six
          </Heading>
        </Stack>
      ) : (
        <Stack orientation="vertical" spacing="space60">
          <SkeletonLoader height="44px" width="100px" />
          <SkeletonLoader height="32px" width="100px" />
          <SkeletonLoader height="28px" width="100px" />
          <SkeletonLoader height="24px" width="100px" />
          <SkeletonLoader height="20px" width="100px" />
          <SkeletonLoader height="20px" width="100px" />
        </Stack>
      )}
      <Box marginTop="space60">
        <Stack orientation="horizontal" spacing="space60">
          <Button variant="secondary" size="small" onClick={() => setLoaded(true)}>
            Load content
          </Button>
          <Button variant="secondary" size="small" onClick={() => setLoaded(false)}>
            Reset
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export const ButtonsLoading = (): JSX.Element => {
  const [loaded, setLoaded] = React.useState(false);
  return (
    <>
      {loaded ? (
        <Stack orientation="horizontal" spacing="space40">
          <Button variant="primary">Button one</Button>
          <Button variant="secondary">Button two</Button>
          <Button variant="secondary">Button three</Button>
        </Stack>
      ) : (
        <Stack orientation="horizontal" spacing="space40">
          <SkeletonLoader width="98px" height="36px" />
          <SkeletonLoader width="98px" height="36px" />
          <SkeletonLoader width="108px" height="36px" />
        </Stack>
      )}
      <Box marginTop="space60">
        <Stack orientation="horizontal" spacing="space60">
          <Button variant="secondary" size="small" onClick={() => setLoaded(true)}>
            Load content
          </Button>
          <Button variant="secondary" size="small" onClick={() => setLoaded(false)}>
            Reset
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export const AvatarLoading = (): JSX.Element => {
  const [loaded, setLoaded] = React.useState(false);
  return (
    <>
      {loaded ? (
        <Avatar size="sizeIcon70" name="Paste Engineer" />
      ) : (
        <SkeletonLoader borderRadius="borderRadiusCircle" size="sizeIcon70" />
      )}
      <Box marginTop="space60">
        <Stack orientation="horizontal" spacing="space60">
          <Button variant="secondary" size="small" onClick={() => setLoaded(true)}>
            Load content
          </Button>
          <Button variant="secondary" size="small" onClick={() => setLoaded(false)}>
            Reset
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export const IconLoading = (): JSX.Element => {
  const [loaded, setLoaded] = React.useState(false);
  return (
    <>
      {loaded ? <CalendarIcon decorative={false} title="Calendar icon" /> : <SkeletonLoader size="sizeIcon30" />}
      <Box marginTop="space60">
        <Stack orientation="horizontal" spacing="space60">
          <Button variant="secondary" size="small" onClick={() => setLoaded(true)}>
            Load content
          </Button>
          <Button variant="secondary" size="small" onClick={() => setLoaded(false)}>
            Reset
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export const ThumbnailLoading = (): JSX.Element => {
  const [loaded, setLoaded] = React.useState(false);
  return (
    <>
      {loaded ? (
        <Box as="img" src="./avatars/avatar-sizeIcon110.png" />
      ) : (
        <SkeletonLoader borderRadius="borderRadius0" size="sizeIcon110" />
      )}
      <Box marginTop="space60">
        <Stack orientation="horizontal" spacing="space60">
          <Button variant="secondary" size="small" onClick={() => setLoaded(true)}>
            Load content
          </Button>
          <Button variant="secondary" size="small" onClick={() => setLoaded(false)}>
            Reset
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export const CardLoading = (): JSX.Element => {
  const [loaded, setLoaded] = React.useState(false);
  return (
    <>
      {loaded ? (
        <Box width="500px">
          <Card>
            <Heading as="h1" variant="heading10">
              Impossible
            </Heading>
            <Paragraph>
              Impossible is just a big word thrown around by small men who find it easier to live in the world they’ve
              been given than to explore the power they have to change it. Impossible is not a fact. It’s an opinion.
              Impossible is not a declaration. It&apos;s a dare. Impossible is potential. Impossible is temporary.
              Impossible is nothing.
            </Paragraph>
          </Card>
        </Box>
      ) : (
        <Box width="500px">
          <Card>
            <Box marginBottom="space80">
              <SkeletonLoader height="44px" width="100px" />
            </Box>
            <Stack orientation="vertical" spacing="space20">
              <SkeletonLoader />
              <SkeletonLoader />
              <SkeletonLoader />
              <SkeletonLoader />
            </Stack>
            <Box marginTop="space20" marginBottom="space80">
              <SkeletonLoader width="200px" />
            </Box>
          </Card>
        </Box>
      )}
      <Box marginTop="space60">
        <Stack orientation="horizontal" spacing="space60">
          <Button variant="secondary" size="small" onClick={() => setLoaded(true)}>
            Load content
          </Button>
          <Button variant="secondary" size="small" onClick={() => setLoaded(false)}>
            Reset
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export const TableLoading = (): JSX.Element => {
  const [loaded, setLoaded] = React.useState(false);
  return (
    <>
      <Table tableLayout="fixed">
        <THead>
          <Tr>
            <Th width="300px">Contacts</Th>
            <Th>Date Added</Th>
            <Th>Last Opened</Th>
          </Tr>
        </THead>
        <TBody>
          <Tr>
            <Td>{loaded ? <Text as="span">Adriana Lovelock</Text> : <SkeletonLoader width="50%" />}</Td>
            <Td>{loaded ? <Text as="span">2020-09-17</Text> : <SkeletonLoader width="35%" />}</Td>
            <Td>{loaded ? <Text as="span">2020-06-28</Text> : <SkeletonLoader width="35%" />}</Td>
          </Tr>
          <Tr>
            <Td>{loaded ? <Text as="span">Adam Brown</Text> : <SkeletonLoader width="35%" />}</Td>
            <Td>{loaded ? <Text as="span">2020-03-06</Text> : <SkeletonLoader width="35%" />}</Td>
            <Td>{loaded ? <Text as="span">2020-08-17</Text> : <SkeletonLoader width="35%" />}</Td>
          </Tr>
          <Tr>
            <Td>{loaded ? <Text as="span">Amanda Cutlack</Text> : <SkeletonLoader width="55%" />}</Td>
            <Td>{loaded ? <Text as="span">2020-02-11</Text> : <SkeletonLoader width="35%" />}</Td>
            <Td>{loaded ? <Text as="span">2020-12-27</Text> : <SkeletonLoader width="35%" />}</Td>
          </Tr>
          <Tr>
            <Td>{loaded ? <Text as="span">John Daily</Text> : <SkeletonLoader width="30%" />}</Td>
            <Td>{loaded ? <Text as="span">2020-04-92</Text> : <SkeletonLoader width="35%" />}</Td>
            <Td>{loaded ? <Text as="span">2020-09-17</Text> : <SkeletonLoader width="35%" />}</Td>
          </Tr>
        </TBody>
      </Table>
      <Box marginTop="space60">
        <Stack orientation="horizontal" spacing="space60">
          <Button variant="secondary" size="small" onClick={() => setLoaded(true)}>
            Load content
          </Button>
          <Button variant="secondary" size="small" onClick={() => setLoaded(false)}>
            Reset
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export const CustomizedSkeletonLoader: StoryFn = (_args, { parameters: { isTestEnvironment } }) => {
  const activeTheme = useTheme();
  return (
    <CustomizationProvider
      disableAnimations={isTestEnvironment}
      theme={activeTheme}
      elements={{
        SKELETON_LOADER: { backgroundColor: "colorBackgroundBrandHighlight", margin: "space100" },
        CUSTOM_SKELETON: { backgroundColor: "colorBackgroundBrand", padding: "space80" },
      }}
    >
      <Stack orientation="vertical" spacing="space50">
        <Heading as="h2" variant="heading20" marginBottom="space0">
          Customized Skeleton
        </Heading>
        <SkeletonLoader data-testid="default-skeleton" />
        <Heading as="h2" variant="heading20" marginBottom="space0">
          Custom Skeleton
        </Heading>
        <SkeletonLoader element="CUSTOM_SKELETON" data-testid="default-skeleton" />
      </Stack>
    </CustomizationProvider>
  );
};
CustomizedSkeletonLoader.parameters = {
  a11y: {
    // no need to a11y check customization
    disable: true,
  },
};
