import { Box } from "@twilio-paste/box";
import { SkeletonLoader } from "@twilio-paste/skeleton-loader";
import * as React from "react";

export const SearchResultsLoading: React.FC = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      rowGap="space40"
      flexDirection="column"
      width="100%"
      paddingY="space30"
    >
      <SkeletonLoader width="100%" height="60px" />
      <Box
        paddingLeft="space70"
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        rowGap="space40"
        flexDirection="column"
      >
        <SkeletonLoader width="100%" height="60px" />
        <SkeletonLoader width="100%" height="60px" />
        <SkeletonLoader width="100%" height="60px" />
      </Box>
      <SkeletonLoader width="100%" height="60px" />
      <SkeletonLoader width="100%" height="60px" />

      <Box
        paddingLeft="space70"
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        rowGap="space40"
        flexDirection="column"
      >
        <SkeletonLoader width="100%" height="60px" />
      </Box>
      <SkeletonLoader width="100%" height="60px" />
      <SkeletonLoader width="100%" height="60px" />
    </Box>
  );
};
