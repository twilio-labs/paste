import { Box } from "@twilio-paste/box";
import React from "react";

const Window: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Box display="grid" gridTemplateColumns="400px 1fr" height="100svh" width="100%">
      {children}
    </Box>
  );
};

const Canvas: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Box display="grid" gridTemplateRows="1fr auto" overflow="hidden" height="100svh">
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
      height="100svh"
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
      backgroundColor="colorBackgroundBody"
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
