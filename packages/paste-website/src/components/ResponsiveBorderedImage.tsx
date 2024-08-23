import { Box } from "@twilio-paste/box";
import Image from "next/image";
import type { ImageProps } from "next/image";
import * as React from "react";

const ResponsiveBorderedImage: React.FC<ImageProps> = (props) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      marginBottom="space70"
      borderColor="colorBorderWeaker"
      borderStyle="solid"
      borderWidth="borderWidth10"
      borderRadius="borderRadius20"
      overflow="hidden"
    >
      <Image placeholder="blur" style={{ height: "100%", minWidth: "100%" }} {...props} />
    </Box>
  );
};

export { ResponsiveBorderedImage };
