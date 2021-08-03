import {css, system} from '@twilio-paste/styling-library';
import type {CSSObject} from '@twilio-paste/styling-library';
import {PseudoPropStyles} from './PseudoPropStyles';
import type {StyledBoxProps} from './types';

const merge = require('deepmerge');

export const PasteStyleProps = system({
  color: {
    property: 'color',
    scale: 'textColors',
  },
  backgroundColor: {
    property: 'backgroundColor',
    scale: 'backgroundColors',
  },
  borderColor: {
    property: 'borderColor',
    scale: 'borderColors',
  },
  borderBottomColor: {
    property: 'borderBottomColor',
    scale: 'borderColors',
  },
  borderLeftColor: {
    property: 'borderLeftColor',
    scale: 'borderColors',
  },
  borderRightColor: {
    property: 'borderRightColor',
    scale: 'borderColors',
  },
  borderTopColor: {
    property: 'borderTopColor',
    scale: 'borderColors',
  },
  content: true,
  cursor: true,
  appearance: true,
  transition: true,
  transform: true,
  animation: true,
  transformOrigin: true,
  visibility: true,
  userSelect: true,
  pointerEvents: true,
  boxSizing: true,
  resize: true,
  listStyleType: true,
  listStylePosition: true,
  listStyleImage: true,
  objectFit: true,
  objectPosition: true,
  outline: true,
  float: true,
  willChange: true,
  clip: true,
  backgroundAttachment: true,
  textAlign: true,
  textTransform: true,
  textDecoration: true,
  textOverflow: true,
  whiteSpace: true,
  wordBreak: true,
  wordWrap: true,
  overflowWrap: true,
  opacity: true,
  borderCollapse: true,
  borderSpacing: true,
  tableLayout: true,
  fontVariantNumeric: true,
  columnGap: {
    property: 'columnGap',
    scale: 'space',
  },
  rowGap: {
    property: 'rowGap',
    scale: 'space',
  },
});

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
      const computedStyles = css(elementOverrides)(props);
      const {variants, ...elementStyles} = computedStyles;
      let variantStyles = {};

      if (props.variant != null && variants != null) {
        // @ts-ignore typing of css function returns a cssObject which doesn't think variants exists
        variantStyles = variants[props.variant];
      }

      return () => merge(elementStyles, variantStyles);
    }
  }
  return {};
};
