import { Box } from '@twilio-paste/box';
import Image from 'next/image';
import type { ImageProps } from 'next/image';
import * as React from 'react';

const ResponsiveImage: React.FC<ImageProps> = (props) => {
  return (
    <Box display="flex" justifyContent="center" marginBottom="space70">
      <Image placeholder="blur" style={{ height: '100%', maxWidth: '100%' }} {...props} />
    </Box>
  );
};

export { ResponsiveImage };
