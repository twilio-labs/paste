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
): GatsbyTokens.ThemeTokens['tokens'] => theme[path as 'tokens'];

const getCategoryKeys = (theme: GatsbyTokens.ThemeTokens['tokens']): (keyof GatsbyTokens.ThemeTokens['tokens'])[] =>
  Object.keys(theme).map((key) => key as keyof GatsbyTokens.ThemeTokens['tokens']);

export const backgroundColors = (
  theme: GatsbyTokens.ThemeTokens['tokens']
): {'color-background-body': string; 'color-background-body-inverse': string} => {
  return theme['background-colors']
    .filter(({name, ...rest}) => {
      console.log({name, rest});
      return Boolean(name === 'color-background-body' || name === 'color-background-body-inverse');
    })
    .reduce(
      (accum, {name, value}) => ({
        ...accum,
        [name]: value,
      }),
      {} as {'color-background-body': string; 'color-background-body-inverse': string}
    );
};

type DecoratedToken = GatsbyTokens.DecoratedToken<string, string | number>;

export const annotate = (theme: GatsbyTokens.ThemeTokens): GatsbyTokens.DecoratedThemeTokens => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const _theme = getTokensFromTheme(theme);

  return getCategoryKeys(_theme).reduce((accum, cat) => {
    console.log({cat});
    const tokens = _theme[cat]
      .filter(({deprecated = false}) => !deprecated)
      .map(({name, value, ...rest}: GatsbyTokens.TokenDTO): Omit<
        DecoratedToken,
        'backgroundColor' | 'contrastRating'
      > => {
        return {
          ...rest,
          category: cat,
          name,
          value,
          isInverse: checkIsInverse.hasOwnProperty(cat)
            ? checkIsInverse[cat as keyof typeof checkIsInverse](name, value)
            : false,
        };
      })
      .map(({isInverse, ...rest}: Omit<DecoratedToken, 'backgroundColor' | 'contrastRating'>) => {
        const key = isInverse ? 'color-background-body-inverse' : 'color-background-body';

        const backgroundColor = backgroundColors(_theme)[key];
        return {...rest, isInverse, backgroundColor};
      })
      .map(({value, backgroundColor, ...rest}: Omit<DecoratedToken, 'contrastRating'>) => {
        return {
          ...rest,
          value,
          backgroundColor,
          contrastRating: cat === 'text-colors' ? getContrastRating(value as string, backgroundColor) : null,
        };
      })
      .sort((a, b) => {
        const collator = new Intl.Collator(undefined, {numeric: true, sensitivity: 'base'});
        if (cat === 'font-weights') {
          return collator.compare(a.value as string, b.value as string);
        }
        return collator.compare(a.name, b.name);
      });

    return {...accum, [cat]: tokens};
  }, {} as GatsbyTokens.DecoratedThemeTokens);
};
