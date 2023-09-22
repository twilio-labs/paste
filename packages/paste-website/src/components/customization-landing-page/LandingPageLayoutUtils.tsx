import { Box } from '@twilio-paste/box';
import type { BoxProps } from '@twilio-paste/box';
import * as React from 'react';

import { SITE_CONTENT_MAX_WIDTH } from '../../constants';

export const LandingPageSection: React.FC<React.PropsWithChildren<BoxProps>> = ({ children, ...props }) => {
  return (
    <Box
      as="section"
      element="LANDING_PAGE_SECTION"
      paddingX={['space90', 'space120', 'space190']}
      paddingY={['space90', 'space120', 'space200']}
      position="relative"
      {...props}
    >
      {children}
    </Box>
  );
};

const ContentVariants = {
  default: {
    maxWidth: SITE_CONTENT_MAX_WIDTH,
  },
  narrow: {
    maxWidth: 'size90',
  },
} as const;

type LandingPageSectionContentProps = {
  variant: keyof typeof ContentVariants;
} & BoxProps;
export const LandingPageSectionContent: React.FC<React.PropsWithChildren<LandingPageSectionContentProps>> = ({
  children,
  variant = 'default',
  ...props
}) => {
  return (
    <Box
      element="LANDING_PAGE_SECTION_CONTENT"
      marginX="auto"
      position="relative"
      {...ContentVariants[variant]}
      {...props}
    >
      {children}
    </Box>
  );
};
