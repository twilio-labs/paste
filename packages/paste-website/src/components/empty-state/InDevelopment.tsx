import { Anchor } from "@twilio-paste/anchor";
import { Box } from "@twilio-paste/box";
import { Heading } from "@twilio-paste/heading";
import { Paragraph } from "@twilio-paste/paragraph";
import * as React from "react";

import { SidebarCategoryRoutes } from "../../constants";
import { getHumanizedNameFromPackageName } from "../../utils/RouteUtils";
import { Breadcrumb, BreadcrumbItem } from "../breadcrumb";

interface InDevelopmentProps {
  type?: "component" | "primitive" | "layout";
  name: string;
  showBreadcrumb?: boolean;
}

const InDevelopment: React.FC<React.PropsWithChildren<InDevelopmentProps>> = ({
  type,
  showBreadcrumb = true,
  name,
}) => {
  return (
    <>
      {showBreadcrumb ? (
        <Breadcrumb>
          <BreadcrumbItem href="/">Home</BreadcrumbItem>
          <BreadcrumbItem href={SidebarCategoryRoutes.COMPONENTS}>Components</BreadcrumbItem>
        </Breadcrumb>
      ) : (
        <></>
      )}
      <Heading as="h1" variant="heading10">
        {getHumanizedNameFromPackageName(name)}
      </Heading>
      <Box>
        <Paragraph>This {type} is in active development, but we haven&apos;t gotten to the docs yet.</Paragraph>
        <Paragraph>
          Feel free to{" "}
          <Anchor showExternal href="https://github.com/twilio-labs/paste/discussions">
            start a discussion
          </Anchor>{" "}
          with details on how you want to use this {type} and we&apos;ll respond to you directly.
        </Paragraph>
      </Box>
    </>
  );
};

export { InDevelopment };
