import ColorCombos from 'color-combos';
import type {ColorCombo} from 'color-combos';
import type {GenericTokensShape, AllGenericTokens} from '@twilio-paste/design-tokens/types/GenericTokensShape';
import type {DesignToken, DesignTokensJSON, TokenPairContrastRating} from '@twilio-paste/design-tokens/types';
import DefaultRawTokenJSON from '@twilio-paste/design-tokens/dist/tokens.raw.json';

const camelCase = require('lodash.camelcase');

/**
 * Filter out any ratings that are not at least aa for text color contrast requirements
 *
 * @param {TokenPairContrastRating[]} ratings token pair color contrast ratio rating
 * @return {*}  {number} total number of failing text contrast pairings
 */
export const getNumberOfTextFailures = (ratings: TokenPairContrastRating[]): number =>
  ratings.filter((rating) => {
    return !rating.aa;
  }).length;

/**
 * Filter out any ratings that are not at least aa for large text color contrast requirements
 * which is 3:1, also the same as the newer ui control contrast requirement
 *
 * @param {TokenPairContrastRating[]} ratings token pair color contrast ratio rating
 * @return {*}  {number} total number of failing ui control contrast pairings
 */
export const getNumberOfUIControlFailures = (ratings: TokenPairContrastRating[]): number =>
  ratings.filter((rating) => {
    return !rating.aaLarge;
  }).length;

/**
 * remove categorization of design tokens, return a flat list of design tokens
 * by name only
 *
 * @param {Partial<GenericTokensShape>} tokens all the design tokens and their values in the current theme
 * @return {*}  {AllGenericTokens} flatted object of design tokens
 */
export const flattenCategorizedTokens = (tokens: Partial<GenericTokensShape>): AllGenericTokens => {
  let flatTheme = {};
  Object.values(tokens).forEach((value) => {
    flatTheme = {...flatTheme, ...value};
  });
  return flatTheme;
};

/**
 * Convert the raw design tokens object into an array of design tokens
 *
 * @param {DesignTokensJSON} rawTokens original design tokens object from the design tokens package
 * @return {*}  {DesignToken[]} array of design tokens
 */
export const convertRawTokenJSONToArray = (rawTokens: DesignTokensJSON): DesignToken[] => {
  // grab taken names from the raw JSON
  const rawTokenNames = Object.keys(rawTokens);
  return (
    rawTokenNames
      // create an array of tokens by iterating over the names and pulling the corresponding object
      .reduce((tokens, token) => {
        return [rawTokens[token], ...tokens] as DesignToken[];
      }, [] as DesignToken[])
  );
};

/**
 * get all color tokens that have text contrast requirements
 *
 * @param {DesignTokensJSON} rawTokens original design tokens object from the design tokens package
 * @return {*}  {DesignToken[]} array of design tokens
 */
export const getTokensWithTextContrastRequirements = (rawTokens: DesignTokensJSON): DesignToken[] =>
  convertRawTokenJSONToArray(rawTokens)
    // filter by type and contrast pairing type
    .filter((token) => token.type === 'color' && token.text_contrast_pairing != null);

/**
 * get all color tokens that have ui control contrast requirements
 *
 * @param {DesignTokensJSON} rawTokens original design tokens object from the design tokens package
 * @return {*}  {DesignToken[]} array of design tokens
 */
export const getTokensWithUIControlContrastRequirements = (rawTokens: DesignTokensJSON): DesignToken[] =>
  convertRawTokenJSONToArray(rawTokens)
    // filter by type and contrast pairing type
    .filter((token) => token.type === 'color' && token.uicontrol_contrast_pairing != null);

/**
 * get all color tokens that have ui control contrast requirements
 *
 * @param {DesignTokensJSON} rawTokens original design tokens object from the design tokens package
 * @return {*}  {DesignToken[]} array of design tokens
 */
export const getTokensWithDataVisualizationContrastRequirements = (rawTokens: DesignTokensJSON): DesignToken[] =>
  convertRawTokenJSONToArray(rawTokens)
    // filter by type and contrast pairing type
    .filter((token) => token.type === 'color' && token.data_visualization_contrast_pairing != null);

/**
 * build an array of contrast results for each token pairing
 *
 * @param {DesignToken[]} filteredTokens array of token names that we know have contrast requirements
 * @param {AllGenericTokens} tokens all the design tokens and their values in the current theme
 * @param {('text_contrast_pairing' | 'uicontrol_contrast_pairing')} pairingKey the type of contrast checking we're doing
 * @return {*}  {TokenPairContrastRating[]}
 */
export const getContrastRatingForTokenPairing = (
  filteredTokens: DesignToken[],
  tokens: AllGenericTokens,
  pairingKey: 'text_contrast_pairing' | 'uicontrol_contrast_pairing' | 'data_visualization_contrast_pairing'
): TokenPairContrastRating[] => {
  return filteredTokens.reduce((tokenRatings: TokenPairContrastRating[], token: DesignToken) => {
    /** array of tokens that are paired with this token for the type of contrast checking we're doing */
    const tokensToCompare = token[pairingKey];

    if (tokensToCompare !== undefined) {
      /** ratings of the color contrast ratios for each of the tokens is is paired with */
      const ratings = tokensToCompare
        .map((tokenToCompare) => {
          /** name and value of the current token */
          const baseTokenName = camelCase(token.name) as keyof AllGenericTokens;
          /** value of current token derived from the full token list from the theme */
          const baseTokenValue = tokens[baseTokenName];
          /** name and value of the token we're comparing to */
          const tokenToCompareName = camelCase(tokenToCompare) as keyof AllGenericTokens;
          /** value of the token we're comparing to based on finding it by it's name in the full token list */
          const tokenToCompareValue = tokens[tokenToCompareName];
          /** accessibility rating as per ColorCombos */
          let comboRating = {aa: false, aaLarge: false, aaa: false, aaaLarge: false};
          /** color contrast ratio of the two colors */
          let comboContrast = 0;
          /** color combinations of the two colors */
          let combos: false | ColorCombo[] = false;

          if (baseTokenValue != null && tokenToCompareValue != null) {
            combos = ColorCombos([baseTokenValue, tokenToCompareValue]);
          }

          if (combos !== false && combos[0].combinations[0] !== undefined) {
            comboRating = combos[0].combinations[0].accessibility;
            comboContrast = combos[0].combinations[0].contrast;
          }

          return {
            foreground: token.name,
            foregroundValue: baseTokenValue,
            background: tokenToCompare,
            backgroundValue: tokenToCompareValue,
            contrast: comboContrast,
            ...comboRating,
          };
        })
        // of those ratings, filter out any pairings where the values are undefined because a token is missing from the theme
        .filter((rating) => {
          if (rating.foregroundValue === undefined || rating.backgroundValue === undefined) {
            return false;
          }
          return true;
        });
      // add to the newly created array of ratings with the latest set of ratings for the current token
      return [...tokenRatings, ...ratings];
    }
    // no tokens to compare for this token? just return the current set
    return tokenRatings;
  }, []);
};

/**
 * Takes all design tokens in an object and determines which ones
 * have a text color contrast ratio requirement against another token
 * based on the annotations made in the raw design token files. Those token
 * pairs then have the contrast ratio between them checked and rated.
 * The result of which is returned as an array of ratings
 *
 * @param {Partial<GenericTokensShape>} tokens
 * @return {*}  {TokenPairContrastRating[]}
 */
export const getContrastRatingsOfTokensWithTextContrastRequirements = (
  tokens: Partial<GenericTokensShape>
): TokenPairContrastRating[] => {
  // always use the Default raw JSON to get the pairings as other themes won't inherit them automatically
  const defaultThemeRawJSON = DefaultRawTokenJSON.props;
  const tokenWithTextContrastRequirements = getTokensWithTextContrastRequirements(defaultThemeRawJSON);
  const flattenedTokens = flattenCategorizedTokens(tokens);
  return getContrastRatingForTokenPairing(tokenWithTextContrastRequirements, flattenedTokens, 'text_contrast_pairing');
};

/**
 * Takes all design tokens in an object and determines which ones
 * have a ui control color contrast ratio requirement against another token
 * based on the annotations made in the raw design token files. Those token
 * pairs then have the contrast ratio between them checked and rated.
 * The result of which is returned as an array of ratings
 *
 * @param {Partial<GenericTokensShape>} tokens
 * @return {*}  {TokenPairContrastRating[]}
 */
export const getContrastRatingsOfTokensWithUIControlContrastRequirements = (
  tokens: Partial<GenericTokensShape>
): TokenPairContrastRating[] => {
  // always use the Default raw JSON to get the pairings as other themes won't inherit them automatically
  const defaultThemeRawJSON = DefaultRawTokenJSON.props;
  const tokenWithUIControlContrastRequirements = getTokensWithUIControlContrastRequirements(defaultThemeRawJSON);
  const flattenedTokens = flattenCategorizedTokens(tokens);
  return getContrastRatingForTokenPairing(
    tokenWithUIControlContrastRequirements,
    flattenedTokens,
    'uicontrol_contrast_pairing'
  );
};

/**
 * Takes all design tokens in an object and determines which ones
 * have a data visualization contrast ratio requirement against another token
 * based on the annotations made in the raw design token files. Those token
 * pairs then have the contrast ratio between them checked and rated.
 * The result of which is returned as an array of ratings
 *
 * @param {Partial<GenericTokensShape>} tokens
 * @return {*}  {TokenPairContrastRating[]}
 */
export const getContrastRatingsOfTokensWithDataVisualizationContrastRequirements = (
  tokens: Partial<GenericTokensShape>
): TokenPairContrastRating[] => {
  // always use the Default raw JSON to get the pairings as other themes won't inherit them automatically
  const defaultThemeRawJSON = DefaultRawTokenJSON.props;
  const tokenWithDataVisualizationContrastRequirements =
    getTokensWithDataVisualizationContrastRequirements(defaultThemeRawJSON);
  const flattenedTokens = flattenCategorizedTokens(tokens);
  return getContrastRatingForTokenPairing(
    tokenWithDataVisualizationContrastRequirements,
    flattenedTokens,
    'data_visualization_contrast_pairing'
  );
};
