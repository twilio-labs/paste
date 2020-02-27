import styled from '@emotion/styled';
import {css, SerializedStyles} from '@emotion/core';
import {buttonStyle} from 'styled-system';
import {themeGet} from '@styled-system/theme-get';
import {Absolute} from '@twilio-paste/absolute';
import {ButtonWrapperProps, ButtonChildrenProps} from './types';

/*
 * Sizes
 */
const sizeReset = css`
  font-size: 100%;
  padding: 0;
`;
const sizeIcon = (props: ButtonWrapperProps): SerializedStyles => css`
  padding: ${themeGet('space.space30')(props)};
  border-radius: ${themeGet('radii.borderRadius20')(props)};
  font-size: 100%;
  /* To fix abnormal button padding-bottom */
  line-height: unset;
`;
const sizeSmall = (props: ButtonWrapperProps): SerializedStyles => css`
  padding: ${themeGet('space.space10')(props)} ${themeGet('space.space30')(props)};
  border-radius: ${themeGet('radii.borderRadius10')(props)};
  font-size: ${themeGet('fontSizes.fontSize30')(props)};
  line-height: ${themeGet('lineHeights.lineHeight30')(props)};
`;
const sizeDefault = (props: ButtonWrapperProps): SerializedStyles => css`
  padding: ${themeGet('space.space30')(props)} ${themeGet('space.space50')(props)};
  border-radius: ${themeGet('radii.borderRadius20')(props)};
  font-size: ${themeGet('fontSizes.fontSize30')(props)};

  line-height: ${themeGet('lineHeights.lineHeight30')(props)};
`;

/*
 * Base
 */
const baseButtonWrapper = (props: ButtonWrapperProps): SerializedStyles => css`
  /* Hide default browser styles */
  appearance: none;
  border: none;
  display: inline-block;
  outline: none;
  background: none;
  transition: background-color 100ms ease-in, box-shadow 100ms ease-in;
  font-family: ${themeGet('fonts.fontFamilyText')(props)};
  font-weight: ${themeGet('fontWeights.fontWeightSemibold')(props)};

  /* Remove extra black dotted border FF adds */
  &::-moz-focus-inner {
    border: none;
  }
`;
const baseEnabled = (props: ButtonWrapperProps): SerializedStyles =>
  css([
    baseButtonWrapper(props),
    css`
      text-decoration: none;
      cursor: pointer;

      &:focus,
      &:active {
        box-shadow: ${themeGet('shadows.shadowFocus')(props)};
      }

      /*
        defensively resetting from over zealous legacy global
        styles "a {...}" when button is set as an anchor
      */
      &:hover,
      &:focus,
      &:active {
        text-decoration: none;
      }
    `,
  ]);
const baseLoading = (props: ButtonWrapperProps): SerializedStyles =>
  css([
    baseButtonWrapper(props),
    css`
      cursor: wait;
    `,
  ]);
const baseDisabled = (props: ButtonWrapperProps): SerializedStyles =>
  css([
    baseButtonWrapper(props),
    css`
      cursor: not-allowed;
    `,
  ]);

/*
 * Variants
 */
// Primary
const variantPrimaryBase = (props: ButtonWrapperProps): SerializedStyles => css`
  color: ${themeGet('textColors.colorTextInverse')(props)};

  /*
    defensively resetting from over zealous legacy global
    styles "a {...}" when button is set as an anchor
  */
  &:hover,
  &:focus,
  &:active {
    color: ${themeGet('textColors.colorTextInverse')(props)};
  }
`;

const variantPrimaryEnabled = (props: ButtonWrapperProps): SerializedStyles =>
  css([
    baseEnabled(props),
    variantPrimaryBase(props),
    css`
      background-color: ${themeGet('backgroundColors.colorBackgroundPrimary')(props)};
      box-shadow: inset 0 0 0 ${themeGet('space.space10')(props)}
        ${themeGet('backgroundColors.colorBackgroundPrimary')(props)};

      &:hover {
        background-color: ${themeGet('backgroundColors.colorBackgroundPrimaryDarker')(props)};
        box-shadow: inset 0 0 0 ${themeGet('space.space10')(props)}
          ${themeGet('backgroundColors.colorBackgroundPrimaryDarker')(props)};
      }
      &:focus {
        background-color: ${themeGet('backgroundColors.colorBackgroundPrimary')(props)};
        box-shadow: inset 0 0 0 ${themeGet('space.space10')(props)}
            ${themeGet('backgroundColors.colorBackgroundPrimaryDarker')(props)},
          ${themeGet('shadows.shadowFocus')(props)};
      }
      &:active {
        background-color: ${themeGet('backgroundColors.colorBackgroundPrimaryDark')(props)};
        box-shadow: inset 0 0 0 ${themeGet('space.space10')(props)}
            ${themeGet('backgroundColors.colorBackgroundPrimaryDarker')(props)},
          ${themeGet('shadows.shadowFocus')(props)};
      }
    `,
  ]);
const variantPrimaryLoading = (props: ButtonWrapperProps): SerializedStyles =>
  css([
    baseLoading(props),
    variantPrimaryBase(props),
    css`
      &,
      &:hover,
      &:active,
      &:focus {
        background-color: ${themeGet('backgroundColors.colorBackgroundPrimaryDarker')(props)};
        box-shadow: inset 0 0 0 ${themeGet('space.space10')(props)}
          ${themeGet('backgroundColors.colorBackgroundPrimaryDarker')(props)};
      }
    `,
  ]);
const variantPrimaryDisabled = (props: ButtonWrapperProps): SerializedStyles =>
  css([
    baseDisabled(props),
    variantPrimaryBase(props),
    css`
      background-color: ${themeGet('backgroundColors.colorBackgroundPrimaryLight')(props)};
      box-shadow: inset 0 0 0 ${themeGet('space.space10')(props)}
        ${themeGet('backgroundColors.colorBackgroundPrimaryLight')(props)};

      &:hover,
      &:active {
        background-color: ${themeGet('backgroundColors.colorBackgroundPrimaryLight')(props)};
        box-shadow: inset 0 0 0 ${themeGet('space.space10')(props)}
          ${themeGet('backgroundColors.colorBackgroundPrimaryLight')(props)};
      }
    `,
  ]);

// Secondary
const variantSecondaryBase = (props: ButtonWrapperProps): SerializedStyles => css`
  background-color: ${themeGet('backgroundColors.colorBackgroundBody')(props)};
`;
const variantSecondaryEnabled = (props: ButtonWrapperProps): SerializedStyles =>
  css([
    baseEnabled(props),
    variantSecondaryBase(props),
    css`
      color: ${themeGet('textColors.colorTextLink')(props)};
      background-color: ${themeGet('backgroundColors.colorBackgroundBody')(props)};
      box-shadow: inset 0 0 0 ${themeGet('space.space10')(props)} ${themeGet('borderColors.colorBorderPrimary')(props)};

      &:hover {
        color: ${themeGet('textColors.colorTextLinkDarker')(props)};
        background-color: ${themeGet('backgroundColors.colorBackgroundPrimaryLightest')(props)};
        box-shadow: inset 0 0 0 ${themeGet('space.space10')(props)}
          ${themeGet('borderColors.colorBorderPrimaryDarker')(props)};
      }

      &:focus {
        color: ${themeGet('textColors.colorTextLinkDarker')(props)};
        background-color: ${themeGet('backgroundColors.colorBackgroundPrimaryLightest')(props)};
        box-shadow: inset 0 0 0 ${themeGet('space.space10')(props)}
            ${themeGet('borderColors.colorBorderPrimaryDarker')(props)},
          ${themeGet('shadows.shadowFocus')(props)};
      }

      &:active {
        color: ${themeGet('textColors.colorTextLinkDarker')(props)};
        background-color: ${themeGet('backgroundColors.colorBackgroundPrimaryLighter')(props)};
        box-shadow: inset 0 0 0 ${themeGet('space.space10')(props)}
            ${themeGet('borderColors.colorBorderPrimaryDarker')(props)},
          ${themeGet('shadows.shadowFocus')(props)};
      }
    `,
  ]);
const variantSecondaryLoading = (props: ButtonWrapperProps): SerializedStyles =>
  css([
    baseLoading(props),
    variantSecondaryBase(props),
    css`
      color: ${themeGet('textColors.colorTextLinkDarker')(props)};
      background-color: ${themeGet('backgroundColors.colorBackgroundPrimaryLighter')(props)};
      box-shadow: inset 0 0 0 ${themeGet('space.space10')(props)}
        ${themeGet('borderColors.colorBorderPrimaryLighter')(props)};
    `,
  ]);
const variantSecondaryDisabled = (props: ButtonWrapperProps): SerializedStyles =>
  css([
    baseDisabled(props),
    variantSecondaryBase(props),
    css`
      color: ${themeGet('textColors.colorTextLinkLight')(props)};
      box-shadow: inset 0 0 0 ${themeGet('space.space10')(props)}
        ${themeGet('borderColors.colorBorderPrimaryLight')(props)};
    `,
  ]);

// Destructive
const variantDestructiveBase = (props: ButtonWrapperProps): SerializedStyles => css`
  background-color: ${themeGet('backgroundColors.colorBackgroundDestructive')(props)};
  color: ${themeGet('textColors.colorTextInverse')(props)};
  box-shadow: inset 0 0 0 ${themeGet('space.space10')(props)}
    ${themeGet('backgroundColors.colorBackgroundDestructive')(props)};

  /*
    defensively resetting from over zealous legacy global
    styles "a {...}" when button is set as an anchor
  */
  &:hover,
  &:focus,
  &:active {
    color: ${themeGet('textColors.colorTextInverse')(props)};
  }
`;

const variantDestructiveEnabled = (props: ButtonWrapperProps): SerializedStyles =>
  css([
    baseEnabled(props),
    variantDestructiveBase(props),
    css`
      &:hover {
        background-color: ${themeGet('backgroundColors.colorBackgroundDestructiveDarker')(props)};
        box-shadow: inset 0 0 0 ${themeGet('space.space10')(props)}
          ${themeGet('backgroundColors.colorBackgroundDestructiveDarker')(props)};
      }

      &:focus {
        background-color: ${themeGet('backgroundColors.colorBackgroundDestructive')(props)};
        box-shadow: inset 0 0 0 ${themeGet('space.space10')(props)}
            ${themeGet('backgroundColors.colorBackgroundDestructiveDarker')(props)},
          ${themeGet('shadows.shadowFocus')(props)};
      }

      &:active {
        background-color: ${themeGet('backgroundColors.colorBackgroundDestructiveDark')(props)};
        box-shadow: inset 0 0 0 ${themeGet('space.space10')(props)}
            ${themeGet('backgroundColors.colorBackgroundDestructiveDarker')(props)},
          ${themeGet('shadows.shadowFocus')(props)};
      }
    `,
  ]);
const variantDestructiveLoading = (props: ButtonWrapperProps): SerializedStyles =>
  css([
    baseLoading(props),
    variantDestructiveBase(props),
    css`
      background-color: ${themeGet('backgroundColors.colorBackgroundDestructiveDarker')(props)};
      box-shadow: inset 0 0 0 ${themeGet('space.space10')(props)}
        ${themeGet('backgroundColors.colorBackgroundDestructiveDarker')(props)};
    `,
  ]);
const variantDestructiveDisabled = (props: ButtonWrapperProps): SerializedStyles =>
  css([
    baseDisabled(props),
    variantDestructiveBase(props),
    css`
      background-color: ${themeGet('backgroundColors.colorBackgroundDestructiveLight')(props)};
      box-shadow: inset 0 0 0 ${themeGet('space.space10')(props)}
        ${themeGet('backgroundColors.colorBackgroundDestructiveLight')(props)};
    `,
  ]);

// Destructive Link
const variantDestructiveLinkBase = css`
  background: none;
`;
const variantDestructiveLinkEnabled = (props: ButtonWrapperProps): SerializedStyles =>
  css([
    baseEnabled(props),
    variantDestructiveLinkBase,
    css`
      color: ${themeGet('textColors.colorTextLinkDestructive')(props)};

      &:hover,
      &:focus,
      &:active {
        text-decoration: underline;
      }

      &:hover {
        color: ${themeGet('textColors.colorTextLinkDestructiveDark')(props)};
      }

      &:active {
        color: ${themeGet('textColors.colorTextLinkDestructiveDarker')(props)};
      }
    `,
  ]);
const variantDestructiveLinkLoading = (props: ButtonWrapperProps): SerializedStyles =>
  css([
    baseLoading(props),
    variantDestructiveLinkBase,
    css`
      color: ${themeGet('textColors.colorTextLinkDestructiveDarker')(props)};
    `,
  ]);
const variantDestructiveLinkDisabled = (props: ButtonWrapperProps): SerializedStyles =>
  css([
    baseDisabled(props),
    variantDestructiveLinkBase,
    css`
      color: ${themeGet('textColors.colorTextLinkDestructiveLight')(props)};
    `,
  ]);

// Link
const variantLinkBase = css`
  background: none;
`;
const variantLinkEnabled = (props: ButtonWrapperProps): SerializedStyles =>
  css([
    baseEnabled(props),
    variantLinkBase,
    css`
      color: ${themeGet('textColors.colorTextLink')(props)};

      &:hover,
      &:focus,
      &:active {
        text-decoration: underline;
      }

      &:hover {
        color: ${themeGet('textColors.colorTextLinkDark')(props)};
      }

      &:active {
        color: ${themeGet('textColors.colorTextLinkDarker')(props)};
      }
    `,
  ]);
const variantLinkLoading = (props: ButtonWrapperProps): SerializedStyles =>
  css([
    baseLoading(props),
    variantLinkBase,
    css`
      color: ${themeGet('textColors.colorTextLinkDarker')(props)};
    `,
  ]);
const variantLinkDisabled = (props: ButtonWrapperProps): SerializedStyles =>
  css([
    baseDisabled(props),
    variantLinkBase,
    css`
      color: ${themeGet('textColors.colorTextLinkLight')(props)};
    `,
  ]);

// Reset
const variantResetEnabled = baseEnabled;
const variantResetLoading = baseLoading;
const variantResetDisabled = baseDisabled;

/*
 * Style getters
 */
const buttonSizeStyles = (props: ButtonWrapperProps): SerializedStyles => {
  switch (props.size) {
    case 'reset':
      return sizeReset;
    case 'icon':
      return sizeIcon(props);
    case 'small':
      return sizeSmall(props);
    case 'default':
    default:
      return sizeDefault(props);
  }
};

const buttonStateVariantStyles = ({
  variant,
  buttonState,
}: ButtonWrapperProps): SerializedStyles | ((props: ButtonWrapperProps) => SerializedStyles) => {
  const isDisabled = buttonState === 'disabled';
  const isLoading = buttonState === 'loading';

  switch (variant) {
    case 'reset':
      if (isDisabled) return variantResetDisabled;
      if (isLoading) return variantResetLoading;
      return variantResetEnabled;
    case 'secondary':
      if (isDisabled) return variantSecondaryDisabled;
      if (isLoading) return variantSecondaryLoading;
      return variantSecondaryEnabled;
    case 'link':
      if (isDisabled) return variantLinkDisabled;
      if (isLoading) return variantLinkLoading;
      return variantLinkEnabled;
    case 'destructive':
      if (isDisabled) return variantDestructiveDisabled;
      if (isLoading) return variantDestructiveLoading;
      return variantDestructiveEnabled;
    case 'destructive_link':
      if (isDisabled) return variantDestructiveLinkDisabled;
      if (isLoading) return variantDestructiveLinkLoading;
      return variantDestructiveLinkEnabled;
    case 'primary':
    default:
      if (isDisabled) return variantPrimaryDisabled;
      if (isLoading) return variantPrimaryLoading;
      return variantPrimaryEnabled;
  }
};

const buttonFullWidthStyles = ({fullWidth}: ButtonWrapperProps): SerializedStyles => css`
  width: ${fullWidth ? '100%' : 'auto'};
`;

export const ButtonWrapper = styled.button<ButtonWrapperProps>`
  /* To position the loading spinner correctly.
   * Pulled out of styles.ts so it works for the reset styles too.
   */
  position: relative;
  ${buttonStyle}
  ${buttonSizeStyles}
  ${buttonStateVariantStyles}
  ${buttonFullWidthStyles}
`;

const childrenOpacityStyles = ({buttonState}: ButtonChildrenProps): SerializedStyles => css`
  opacity: ${buttonState === 'loading' ? '0' : '100%'};
`;

export const ButtonChildren = styled.span<ButtonChildrenProps>`
  display: grid;
  grid-auto-flow: column;
  /*
   * Neat way to make sure children are spaced apart correctly
   * https://caniuse.com/#feat=multicolumn
   */
  column-gap: ${themeGet('space.space20')};
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  text-decoration: inherit;
  ${childrenOpacityStyles}
`;

export const SpinnerWrapper = styled(Absolute)`
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 14px;
`;
