// https://styled-system.com/api/#flexbox
import * as CSS from 'csstype';
import {ResponsiveValue, TLengthStyledSystem} from 'styled-system';

/**
 * The CSS align-items property sets the align-self value on all direct children as a group. The align-self
 * property sets the alignment of an item within its containing block.
 *
 * In Flexbox it controls the alignment of items on the Cross Axis, in Grid Layout it controls the alignment
 * of items on the Block Axis within their grid area.
 *
 * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items)
 */
export type AlignItems = ResponsiveValue<CSS.Globals | CSS.SelfPosition | 'baseline' | 'normal' | 'stretch'>;

/**
 * The CSS align-content property sets how the browser distributes space between and around content items
 * along the cross-axis of a flexbox container, and the main-axis of a grid container.
 *
 * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content)
 */
export type AlignContent = ResponsiveValue<
  CSS.Globals | CSS.ContentDistribution | CSS.ContentPosition | 'baseline' | 'normal'
>;

/**
 * The CSS justify-items property defines the default justify-self for all items of the box, giving them all
 * a default way of justifying each box along the appropriate axis.
 *
 * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-items)
 */
export type JustifyItems = ResponsiveValue<
  CSS.Globals | CSS.SelfPosition | 'baseline' | 'left' | 'legacy' | 'normal' | 'right' | 'stretch'
>;

/**
 * The CSS justify-content property defines how the browser distributes space between and around content items
 * along the main-axis of a flex container, and the inline axis of a grid container.
 *
 * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content)
 */
export type JustifyContent = ResponsiveValue<
  CSS.Globals | CSS.ContentDistribution | CSS.ContentPosition | 'left' | 'normal' | 'right'
>;

/**
 * The flex-wrap CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines.
 * If wrapping is allowed, it sets the direction that lines are stacked.
 *
 * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap)
 */
export type FlexWrap = ResponsiveValue<CSS.FlexWrapProperty>;

// TODO: The FlexBasisValue currently really only exists for documentation
//       purposes, because flex-basis also accepts `Nem` and `Npx` strings.
//       Not sure there’s a way to still have the union values show up as
//       auto-completion results.
export type FlexBasis = ResponsiveValue<CSS.FlexBasisProperty<TLengthStyledSystem>>;

/**
 * The flex-direction CSS property specifies how flex items are placed in the flex container defining the main
 * axis and the direction (normal or reversed).
 *
 * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction)
 */
export type FlexDirection = ResponsiveValue<CSS.FlexDirectionProperty>;

/**
 * The flex CSS property specifies how a flex item will grow or shrink so as to fit the space available in
 * its flex container. This is a shorthand property that sets flex-grow, flex-shrink, and flex-basis.
 *
 * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/flex)
 */
export type Flex = ResponsiveValue<CSS.FlexProperty<TLengthStyledSystem>>;

/**
 * The CSS justify-self property set the way a box is justified inside its alignment container along
 * the appropriate axis.
 *
 * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-self)
 */
export type JustifySelf =
  | ResponsiveValue<CSS.Globals | CSS.SelfPosition | 'auto' | 'baseline' | 'left' | 'normal' | 'right' | 'stretch'>
  | ResponsiveValue<string>;

/**
 * The align-self CSS property aligns flex items of the current flex line overriding the align-items value.
 *
 * If any of the item's cross-axis margin is set to auto, then align-self is ignored. In Grid layout align-self
 * aligns the item inside the grid area.
 *
 * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/align-self)
 */
export type AlignSelf =
  | ResponsiveValue<CSS.Globals | CSS.SelfPosition | 'auto' | 'baseline' | 'normal' | 'stretch'>
  | ResponsiveValue<string>;

/**
 * The order CSS property sets the order to lay out an item in a flex or grid container. Items in a container
 * are sorted by ascending order value and then by their source code order.
 *
 * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/order)
 */
export type Order = ResponsiveValue<CSS.GlobalsNumber>;

/**
 * The flex-grow CSS property sets the flex grow factor of a flex item main size. It specifies how much of the
 * remaining space in the flex container should be assigned to the item (the flex grow factor).
 *
 * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow)
 */
export type FlexGrow = ResponsiveValue<CSS.GlobalsNumber>;

/**
 * The flex-shrink CSS property sets the flex shrink factor of a flex item. If the size of all flex items is larger
 * than the flex container, items shrink to fit according to flex-shrink.
 *
 * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink)
 */
export type FlexShrink = ResponsiveValue<CSS.GlobalsNumber>;

export interface FlexboxProps {
  alignItems?: AlignItems;
  alignContent?: AlignContent;
  justifyItems?: JustifyItems;
  justifyContent?: JustifyContent;
  flexWrap?: FlexWrap;
  flexDirection?: FlexDirection;
  flex?: Flex;
  flexGrow?: FlexGrow;
  flexShrink?: FlexShrink;
  flexBasis?: FlexBasis;
  justifySelf?: JustifySelf;
  alignSelf?: AlignSelf;
  order?: Order;
}
