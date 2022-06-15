import * as React from 'react';
// import {useTheme} from '@twilio-paste/theme';
import camelCase from 'lodash/camelCase';
import {TokenCard} from '../src/components/tokens-list/token-card';
import type {DecoratorFn, StoryFn} from '@storybook/react';
import {ThemeTokens as themeTokens} from '../src/components/tokens-list/tokenData';

type ThemeTokensType = typeof themeTokens['default'];

export default {
  title: 'Website/Token Card',
  component: TokenCard,
  decorators: [
    ((Story, context) => {
      const {globals, args} = context;

      const {theme} = globals;

      const tokens = themeTokens[theme as keyof typeof themeTokens];
      context.args = {...args, tokens};

      return <Story tokens={tokens} />;
    }) as DecoratorFn,
  ],
};

interface Token {
  name: string;
}

type TokenCardProps = React.ComponentProps<typeof TokenCard>;
const Template: StoryFn<{name: TokenCardProps['name']; category: TokenCardProps['category']; tokens: ThemeTokensType}> =
  ({name, category, tokens}) => {
    const categoryTokens = tokens[category];

    const result = categoryTokens.find((token: Token) => {
      return token.name === name;
    });

    const {comment, value, contrastRating} = result;

    return (
      <TokenCard
        category={category}
        name={camelCase(name)}
        value={value}
        comment={comment}
        contrastRating={contrastRating}
      />
    );
  };

export const BackgroundColorToken = Template.bind({});
BackgroundColorToken.args = {
  category: 'background-colors',
  name: 'color-background-available',
};

export const BackgroundColorTokenWithBorder = Template.bind({});
BackgroundColorTokenWithBorder.args = {
  category: 'background-colors',
  name: 'color-background-body',
};

export const BackgroundColorTokenInverse = Template.bind({});
BackgroundColorTokenInverse.args = {
  category: 'background-colors',
  name: 'color-background-inverse',
};

export const BorderColorToken = Template.bind({});
BorderColorToken.args = {
  category: 'border-colors',
  name: 'color-border',
};

export const BorderColorInverseToken = Template.bind({});
BorderColorInverseToken.args = {
  category: 'border-colors',
  name: 'color-border-inverse',
};

export const BorderWidthToken = Template.bind({});
BorderWidthToken.args = {
  category: 'border-widths',
  name: 'border-width-20',
};

export const BorderRadiusToken = Template.bind({});
BorderRadiusToken.args = {
  category: 'radii',
  name: 'border-radius-circle',
};

export const BoxShadowToken = Template.bind({});
BoxShadowToken.args = {
  category: 'box-shadows',
  name: 'shadow',
};

export const FontFamilyToken = Template.bind({});
FontFamilyToken.args = {
  category: 'fonts',
  name: 'font-family-code',
};

export const FontSizeToken = Template.bind({});
FontSizeToken.args = {
  category: 'font-sizes',
  name: 'font-size-110',
};

export const FontWeightToken = Template.bind({});
FontWeightToken.args = {
  category: 'font-weights',
  name: 'font-weight-bold',
};

export const LineHeightTokenLarge = Template.bind({});
LineHeightTokenLarge.args = {
  category: 'line-heights',
  name: 'line-height-110',
};

export const LineHeightTokenSmall = Template.bind({});
LineHeightTokenSmall.args = {
  category: 'line-heights',
  name: 'line-height-10',
};

export const SizingToken = Template.bind({});
SizingToken.args = {
  category: 'sizings',
  name: 'size-110',
};

export const SizingTokenIcon = Template.bind({});
SizingTokenIcon.args = {
  category: 'sizings',
  name: 'size-icon-110',
};

export const SizingTokenSquare = Template.bind({});
SizingTokenSquare.args = {
  category: 'sizings',
  name: 'size-square-200',
};

export const SpacingToken = Template.bind({});
SpacingToken.args = {
  category: 'spacings',
  name: 'space-150',
};

export const SpacingTokenNegative = Template.bind({});
SpacingTokenNegative.args = {
  category: 'spacings',
  name: 'space-negative-50',
};

export const SpacingTokenZero = Template.bind({});
SpacingTokenZero.args = {
  category: 'spacings',
  name: 'space-0',
};

export const TextColorToken = Template.bind({});
TextColorToken.args = {
  category: 'text-colors',
  name: 'color-text-brand-highlight',
};

export const ZIndexToken = Template.bind({});
ZIndexToken.args = {
  category: 'z-indices',
  name: 'z-index-90',
};
