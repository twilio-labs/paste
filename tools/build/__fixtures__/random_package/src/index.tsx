import * as React from 'react';
import TextareaAutosize from 'react-autosize-textarea';
import type {DesignToken, DesignTokensJSON} from '@twilio-paste/design-tokens/types';
import DefaultRawTokenJSON from '@twilio-paste/design-tokens/dist/tokens.raw.json';

export {useClipboard} from 'use-clipboard-copy';

import camelCase from 'lodash/camelCase';

export const DEPRECATE_TOKENS = Object.values(DefaultRawTokenJSON.props)
  // @ts-ignore
  .filter((token) => token.deprecated)
  .map((deprecatedToken) => camelCase(deprecatedToken.name));

export const convertRawTokenJSONToArray = (rawTokens: DesignTokensJSON): DesignToken[] => {
  const rawTokenNames = Object.keys(rawTokens);
  return rawTokenNames.reduce((tokens, token) => {
    return [rawTokens[token], ...tokens] as DesignToken[];
  }, [] as DesignToken[]);
};

export const getTokensWithTextContrastRequirements = (rawTokens: DesignTokensJSON): DesignToken[] =>
  convertRawTokenJSONToArray(rawTokens).filter(
    (token) => token.type === 'color' && token.text_contrast_pairing != null
  );

export const getContrastRatingsOfTokensWithTextContrastRequirements = (): void => {
  const defaultThemeRawJSON = DefaultRawTokenJSON.props;
  const tokenWithTextContrastRequirements = getTokensWithTextContrastRequirements(defaultThemeRawJSON);
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const RandomComponent = () => {
  return <TextareaAutosize />;
};
