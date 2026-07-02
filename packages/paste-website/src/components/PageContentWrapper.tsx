import { Alert } from "@twilio-paste/alert";
import { Anchor } from "@twilio-paste/anchor";
import { Box } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

export const PageContentWrapper: React.FC<React.PropsWithChildren<HTMLPasteProps<"div">>> = ({
  children,
  ...props
}) => {
  return (
    <Box
      element="PAGE_CONTENT_WRAPPER"
      paddingTop={["space100", "space140", "space200"]}
      paddingX={["space70", "space200", "space200"]}
      backgroundColor="colorBackgroundBody"
      marginX="auto"
      maxWidth="size100"
      boxSizing="content-box"
      {...props}
    >
      <Box maxWidth="size70" paddingBottom={["space70", "space70", "space140"]}>
        <Alert variant="warning">
          The <strong>paste.twilio.design</strong> website will be retired on <strong>July 31, 2026</strong>.<br/>After this date, you can continue to use <strong>Paste</strong>. Our documentation will remain available in the <Anchor href="https://github.com/twilio-labs/paste">GitHub project</Anchor>.
        </Alert>
      </Box>
      {children}
    </Box>
  );
};
