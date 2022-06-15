import get from 'lodash/get';
import type {GatsbyTokens} from '@twilio-paste/website__tokens-list';

import {isLightToken, getContrastRating} from '../../utils/color-contrast';

export const checkIsInverse = {
  'box-shadows': (name: GatsbyTokens.TokenDTO['name']): boolean => {
    return (
      name.includes('inverse') ||
      name.includes('light') ||
      name.includes('lighter') ||
      name.includes('weak') ||
      name.includes('weaker')
    );
  },
  'text-colors': (name: GatsbyTokens.TokenDTO['name'], value: GatsbyTokens.TokenDTO['value']): boolean =>
    isLightToken(name, value),
  'border-color': (name: GatsbyTokens.TokenDTO['name']): boolean => name.includes('inverse'),
};

export const getTokensFromTheme = (
  theme: GatsbyTokens.ThemeTokens,
  path = 'tokens'
): GatsbyTokens.ThemeTokens['tokens'] => get(theme, path, theme);

const getCategoryKeys = (theme: GatsbyTokens.ThemeTokens['tokens']): (keyof GatsbyTokens.ThemeTokens['tokens'])[] =>
  Object.keys(theme).map((key) => key as keyof GatsbyTokens.ThemeTokens['tokens']);

export const backgroundColors = (
  theme: GatsbyTokens.ThemeTokens['tokens']
): {'color-background-body': string; 'color-background-body-inverse': string} =>
  theme['background-colors']
    .filter(({name}) => Boolean(name === 'color-background-body' || name === 'color-background-body-inverse'))
    .reduce(
      (accum, {name, value}) => ({
        ...accum,
        [name]: value,
      }),
      {} as {'color-background-body': string; 'color-background-body-inverse': string}
    );

export const annotate = (theme: GatsbyTokens.ThemeTokens): GatsbyTokens.DecoratedThemeTokens => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const _theme = getTokensFromTheme(theme);

  return getCategoryKeys(_theme).reduce((accum, cat) => {
    const tokens = _theme[cat]

      .filter(({deprecated = false}) => !deprecated)
      .map(({name, value, ...rest}: GatsbyTokens.TokenDTO): Omit<
        GatsbyTokens.DecoratedToken,
        'backgroundColor' | 'contrastRating'
      > => {
        return {
          name,
          value,
          isInverse: checkIsInverse.hasOwnProperty(cat)
            ? checkIsInverse[cat as keyof typeof checkIsInverse](name, value)
            : false,
          ...rest,
        };
      })
      .map(({isInverse, ...rest}: Omit<GatsbyTokens.DecoratedToken, 'backgroundColor' | 'contrastRating'>) => {
        const key = isInverse ? 'color-background-body-inverse' : 'color-background-body';
        console.log(backgroundColors(_theme));
        const backgroundColor = backgroundColors(_theme)[key];
        return {...rest, isInverse, backgroundColor};
      })
      .map(({value, backgroundColor, ...rest}: Omit<GatsbyTokens.DecoratedToken, 'contrastRating'>) => {
        return {
          ...rest,
          value,
          backgroundColor,
          contrastRating: cat === 'text-colors' ? getContrastRating(value, backgroundColor) : null,
        };
      });

    console.log(tokens);

    return {...accum, [cat]: tokens};
  }, {} as GatsbyTokens.DecoratedThemeTokens);
};
