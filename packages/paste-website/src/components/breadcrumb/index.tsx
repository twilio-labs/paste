import { Box } from "@twilio-paste/box";
import { css, styled } from "@twilio-paste/styling-library";
import { Text } from "@twilio-paste/text";
import * as React from "react";

import { SiteLink } from "../SiteLink";

const CrumbSlash = (): JSX.Element => (
  <Box display="inline" paddingLeft="space20" paddingRight="space20">
    <Text as="span" color="colorTextWeak">
      /
    </Text>
  </Box>
);

const Breadcrumb: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <nav aria-label="breadcrumb">
      <Box
        as="ol"
        display="flex"
        margin="space0"
        padding="space0"
        css={{
          listStyle: "none",
        }}
      >
        {React.Children.map(children, (child) => (
          <Box as="li" margin="space0" padding="space0">
            {child}
            <CrumbSlash />
          </Box>
        ))}
      </Box>
    </nav>
  );
};

const BreadcrumbItem = styled(SiteLink)(
  css({
    fontSize: "fontSize30",
    lineHeight: "lineHeight30",
    letterSpacing: "normal",
  }),
);

export { Breadcrumb, BreadcrumbItem };
