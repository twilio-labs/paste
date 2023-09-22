import { Box } from "@twilio-paste/box";
import type { BoxStyleProps } from "@twilio-paste/box";
import { Heading } from "@twilio-paste/heading";
import type { HeadingProps } from "@twilio-paste/heading";
import { LinkIcon } from "@twilio-paste/icons/esm/LinkIcon";
import * as React from "react";

import { slugify } from "../utils/RouteUtils";

const anchoredHeadingSpacing: Partial<{
  [key in HeadingProps["variant"]]: Partial<BoxStyleProps>;
}> = {
  heading10: {
    marginBottom: "space70",
  },
  heading20: {
    marginBottom: "space60",
  },
  heading30: {
    marginBottom: "space50",
  },
  heading40: {
    marginBottom: "space40",
  },
  heading50: {
    marginBottom: "space30",
  },
  heading60: {
    marginBottom: "space30",
  },
};

const StyledAnchorHyperlink: React.FC<React.PropsWithChildren<{ href: string }>> = ({ children, ...props }) => {
  return (
    <Box
      {...props}
      textDecoration="none"
      marginLeft="space30"
      color="colorTextIcon"
      borderRadius="borderRadius10"
      outline="none"
      display="inline-block"
      verticalAlign="text-bottom"
      _hover={{ color: "colorTextLinkStronger" }}
      _focus={{ boxShadow: "shadowFocus", color: "colorTextLinkStronger" }}
      as="a"
    >
      {children}
    </Box>
  );
};

type AnchoredHeadingProps = HeadingProps & {
  existingSlug?: string;
};

const AnchoredHeading: React.FC<React.PropsWithChildren<AnchoredHeadingProps>> = ({
  variant,
  as,
  existingSlug,
  ...props
}) => {
  // Only generate slugs for headings where children is 'string'
  if (typeof props.children === "string") {
    const id = slugify(props.children);

    // keeps the existingSlug if one is given (like in Roadmap)
    const slug = existingSlug || id;

    return (
      <Box alignItems="start" {...anchoredHeadingSpacing[variant]}>
        <Heading display="inline" variant={variant} as={as} {...props} id={slug}>
          {props.children}
        </Heading>
        <StyledAnchorHyperlink data-cy={`anchored-heading-${as}`} href={`#${slug}`}>
          <LinkIcon decorative={false} title={`${props.children} page anchor`} size="sizeIcon30" />
        </StyledAnchorHyperlink>
      </Box>
    );
  }

  return <Heading variant={variant} as={as} {...props} />;
};

export { AnchoredHeading, StyledAnchorHyperlink };
