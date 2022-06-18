import * as React from 'react';
import Tokens from '@twilio-paste/design-tokens/dist/tokens.generic';
import {useTheme} from '@twilio-paste/theme';
import camelCase from 'lodash/camelCase';
import {TokenCard} from '../src/components/tokens-list/token-card';

import type {ComponentStory, ComponentMeta} from '@storybook/react';

import type {DecoratedToken} from '../src/components/tokens-list/types';

const defaultThemeTokens = Tokens.tokens;

export default {
  title: 'Website/Token Card',
  component: TokenCard,
  argTypes: {
    backgroundColor: {
      control: false,
    },
    contrastRating: {
      control: false,
    },
    comment: {
      control: false,
    },
    name: {
      control: false,
    },
    category: {
      control: false,
    },
    value: {control: false},
  },
} as ComponentMeta<typeof TokenCard>;

const Template: ComponentStory<typeof TokenCard> = ({name, category}) => {
  const theme = useTheme();
  const categoryTokens = defaultThemeTokens[category];

  const {comment} =
    ((categoryTokens as unknown) as DecoratedToken[]).find((token) => {
      return token.name === name;
    }) || {};
  let themeCategory: string;

  // todo: what is the mapping between pure tokens and theme tokens? category names are diff in some cases.
  switch (category) {
    case 'box-shadows':
      themeCategory = 'shadows';
      break;
    case 'spacings':
      themeCategory = 'space';
      break;
    default:
      themeCategory = camelCase(category);
      break;
  }

  const themeCategoryTokens = theme[themeCategory as keyof typeof theme];
  type CategoryTokens = typeof themeCategoryTokens;
  const themeTokenValue = themeCategoryTokens[(camelCase(name) as unknown) as keyof CategoryTokens];

  const backgroundColor = name.toLowerCase().includes('inverse') ? 'colorBackgroundBodyInverse' : 'colorBackgroundBody';
  const contrastRating = category === 'text-colors' ? 'AAA' : null;
  return (
    <TokenCard
      category={category}
      name={camelCase(name)}
      value={themeTokenValue}
      comment={comment}
      backgroundColor={backgroundColor}
      contrastRating={contrastRating}
    />
  );
};

export const BackgroundColorToken = Template.bind({});

BackgroundColorToken.args = {
  category: 'background-colors',
  name: 'color-background-available',
};
BackgroundColorToken.parameters = {controls: {expanded: true}};

export const BackgroundColorTokenWithBorder = Template.bind({});
BackgroundColorTokenWithBorder.args = {
  category: 'background-colors',
  name: 'color-background-body',
};

BackgroundColorTokenWithBorder.parameters = {controls: {expanded: true}};

export const BackgroundColorTokenInverse = Template.bind({});
BackgroundColorTokenInverse.args = {
  category: 'background-colors',
  name: 'color-background-inverse',
};
BackgroundColorTokenInverse.parameters = {controls: {expanded: true}};

export const BorderColorToken = Template.bind({});
BorderColorToken.args = {
  category: 'border-colors',
  name: 'color-border',
};
BorderColorToken.parameters = {controls: {expanded: true}};

export const BorderColorInverseToken = Template.bind({});
BorderColorInverseToken.args = {
  category: 'border-colors',
  name: 'color-border-inverse',
};
BorderColorInverseToken.parameters = {controls: {expanded: true}};

export const BorderWidthToken = Template.bind({});
BorderWidthToken.args = {
  category: 'border-widths',
  name: 'border-width-20',
};
BorderWidthToken.parameters = {controls: {expanded: true}};

export const BorderRadiusToken = Template.bind({});
BorderRadiusToken.args = {
  category: 'radii',
  name: 'border-radius-circle',
};
BorderRadiusToken.parameters = {controls: {expanded: true}};

export const BoxShadowToken = Template.bind({});
BoxShadowToken.args = {
  category: 'box-shadows',
  name: 'shadow',
};
BoxShadowToken.parameters = {controls: {expanded: true}};

export const FontFamilyToken = Template.bind({});
FontFamilyToken.args = {
  category: 'fonts',
  name: 'font-family-code',
};
FontFamilyToken.parameters = {controls: {expanded: true}};

export const FontSizeToken = Template.bind({});
FontSizeToken.args = {
  category: 'font-sizes',
  name: 'font-size-110',
};
FontSizeToken.parameters = {controls: {expanded: true}};

export const FontWeightToken = Template.bind({});
FontWeightToken.args = {
  category: 'font-weights',
  name: 'font-weight-bold',
};
FontWeightToken.parameters = {controls: {expanded: true}};

export const LineHeightTokenLarge = Template.bind({});
LineHeightTokenLarge.args = {
  category: 'line-heights',
  name: 'line-height-110',
};
LineHeightTokenLarge.parameters = {controls: {expanded: true}};

export const LineHeightTokenSmall = Template.bind({});
LineHeightTokenSmall.args = {
  category: 'line-heights',
  name: 'line-height-10',
};
LineHeightTokenSmall.parameters = {controls: {expanded: true}};

export const SizingToken = Template.bind({});
SizingToken.args = {
  category: 'sizings',
  name: 'size-110',
};
SizingToken.parameters = {controls: {expanded: true}};

export const SizingTokenIcon = Template.bind({});
SizingTokenIcon.args = {
  category: 'sizings',
  name: 'size-icon-110',
};
SizingTokenIcon.parameters = {controls: {expanded: true}};

export const SizingTokenSquare = Template.bind({});
SizingTokenSquare.args = {
  category: 'sizings',
  name: 'size-square-200',
};
SizingTokenSquare.parameters = {controls: {expanded: true}};

export const SpacingToken = Template.bind({});
SpacingToken.args = {
  category: 'spacings',
  name: 'space-150',
};
SpacingToken.parameters = {controls: {expanded: true}};

export const SpacingTokenNegative = Template.bind({});
SpacingTokenNegative.args = {
  category: 'spacings',
  name: 'space-negative-50',
};
SpacingTokenNegative.parameters = {controls: {expanded: true}};

export const SpacingTokenZero = Template.bind({});
SpacingTokenZero.args = {
  category: 'spacings',
  name: 'space-0',
};
SpacingTokenZero.parameters = {controls: {expanded: true}};

export const TextColorToken = Template.bind({});
TextColorToken.args = {
  category: 'text-colors',
  name: 'color-text-brand-highlight',
};
TextColorToken.parameters = {controls: {expanded: true}};

export const ZIndexToken = Template.bind({});
ZIndexToken.args = {
  category: 'z-indices',
  name: 'z-index-90',
};
ZIndexToken.parameters = {controls: {expanded: true}};
