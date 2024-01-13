import { Box } from "@twilio-paste/box";
import React from "react";

const Window: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Box display="grid" gridTemplateColumns="400px 1fr" height="100vh" width="100%">
      {children}
    </Box>
  );
};

const Canvas: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Box display="grid" gridTemplateRows="1fr auto" overflow="hidden" height="100vh">
      {children}
    </Box>
  );
};

const Threads: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Box
      display="grid"
      gridTemplateRows="auto 1fr"
      borderRightStyle="solid"
      borderRightColor="colorBorderWeaker"
      borderRightWidth="borderWidth10"
      backgroundColor="colorBackgroundWeak"
      height="100vh"
      overflowY="auto"
    >
      {children}
    </Box>
  );
};
const ThreadsHeader: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      paddingX="space60"
      paddingY="space40"
      backgroundColor="colorBackgroundBody"
      borderBottomStyle="solid"
      borderBottomColor="colorBorderWeaker"
      borderBottomWidth="borderWidth10"
      position="sticky"
      top="0"
      zIndex="zIndex10"
    >
      {children}
    </Box>
  );
};

export const Composer: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Box
      borderStyle="solid"
      borderWidth="borderWidth0"
      borderTopWidth="borderWidth10"
      borderColor="colorBorderWeak"
      backgroundColor="colorBackgroundBody"
      display="flex"
      flexDirection="row"
      columnGap="space30"
      paddingX="space70"
      paddingY="space50"
      position="sticky"
      bottom="0"
      zIndex="zIndex10"
    >
      {children}
    </Box>
  );
};

export const AsssistantLayout = { Window, Threads, ThreadsHeader, Canvas, Composer };
