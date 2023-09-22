import { Box } from '@twilio-paste/box';
import type { GenericTokensShape } from '@twilio-paste/design-tokens/types/GenericTokensShape';
import { generateTokensFromTheme, useTheme } from '@twilio-paste/theme';
import Head from 'next/head';
import * as React from 'react';

import { DesignerContext } from './DesignerContext';
import { DesignerControls } from './DesignerControls';
import { DesignerPreview } from './DesignerPreview';

export const LandingPageDesigner = (): JSX.Element => {
  const theme = useTheme();
  const initialTokens = generateTokensFromTheme(theme);
  const [tokens, setTokens] = React.useState<Partial<GenericTokensShape>>(initialTokens);

  // when the theme changes for dark mode, reset the tokens for the designer
  React.useEffect(() => {
    setTokens(generateTokensFromTheme(theme));
  }, [theme]);

  const updateToken = React.useCallback((bucket: keyof GenericTokensShape, key: any, value: any) => {
    setTokens((currentTokens) => ({
      ...currentTokens,
      [key]: value, // update the root key
      [bucket]: { ...currentTokens[bucket], [key]: value }, // update the bucketed key
    }));
  }, []);

  return (
    <Box
      borderColor="colorBorderWeak"
      borderStyle="solid"
      borderWidth="borderWidth10"
      borderRadius="borderRadius20"
      boxShadow="shadowCard"
      display="flex"
    >
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" cross-origin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;500;600;700&family=Noto+Sans+Display:wght@400;500;600;700&family=Open+Sans:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <DesignerContext.Provider value={{ tokens, updateToken }}>
        <DesignerPreview />
        <DesignerControls />
      </DesignerContext.Provider>
    </Box>
  );
};
