import {css, system} from '@twilio-paste/styling-library';
import type {CSSObject, Config} from '@twilio-paste/styling-library';
import type {PasteCustomCSS} from '@twilio-paste/customization';
import {PseudoPropStyles} from './PseudoPropStyles';
import type {StyledBoxProps} from './types';
import {customStyleProps} from './CustomStyleProps';

const merge = require('deepmerge');

export const PasteStyleProps = system(customStyleProps as Config);

/**
 * Take _ prefixed style props and convert them to custom style props for CSS pseudo selectors
 *
 * @param {StyledBoxProps} props any prop that Box can take
 * @return {*}  {(((props?: Record<string, unknown> | undefined) => CSSObject) | Record<string, never>)}
 */
export const getPseudoStyles = (
  props: Partial<StyledBoxProps>
): ((props?: Record<string, unknown> | undefined) => CSSObject) | Record<string, never> => {
  const pseudoProps = Object.keys(props).filter((propName) => propName.startsWith('_')) as Array<
    keyof typeof PseudoPropStyles
  >;

  if (pseudoProps.length === 0) {
    return {};
  }

  const pseudoStyles: {[key: string]: any} = {};
  pseudoProps.forEach((pseudoProp) => {
    if (PseudoPropStyles[pseudoProp] != null) {
      pseudoStyles[PseudoPropStyles[pseudoProp]] = props[pseudoProp];
    }
  });

  return css(pseudoStyles);
};

/**
 * Used to return any custom styles provided for a Paste element, that is declared in the elements object on the customization provider context.
 * Return custom css containing the custom styles that match the current element name being rendered where there is an elements object key
 * that matches the value of the paste-element data attribute. Transform design tokens to their corresponding values as they appear on the theme
 *
 * @param {StyledBoxProps} props
 * @return {*}  {((() => CSSObject) | Record<string, never>)}
 */
export const getCustomElementStyles = (props: StyledBoxProps): (() => CSSObject) | Record<string, never> => {
  if (props != null && props.theme != null && props.theme.elements != null) {
    const themeElements = props.theme.elements;
    const targetElement = props['data-paste-element'];

    if (themeElements[targetElement] != null) {
      const elementOverrides = themeElements[targetElement];
      const computedStyles = css(elementOverrides)(props) as PasteCustomCSS;
      const {variants, ...elementStyles} = computedStyles;
      let variantStyles = {};

      if (props.variant != null && variants != null && variants[props.variant] != null) {
        variantStyles = variants[props.variant];
      }

      return () => merge(elementStyles, variantStyles);
    }
  }
  return {};
};
