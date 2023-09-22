import type { ResponsiveValue } from '@twilio-paste/styling-library';
// https://styled-system.com/api/#flexbox
import type { Globals, Properties } from 'csstype';

/**
 * The CSS align-items property sets the align-self value on all direct children as a group. The align-self
 * property sets the alignment of an item within its containing block.
 *
 * In Flexbox it controls the alignment of items on the Cross Axis, in Grid Layout it controls the alignment
 * of items on the Block Axis within their grid area.
 *
 * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items)
 */
export type AlignItemsOptions =
  | Globals
  | Properties['alignSelf']
  | Properties['position']
  | 'baseline'
  | 'normal'
  | 'stretch';
export type AlignItems = ResponsiveValue<AlignItemsOptions>;

/**
 * The CSS align-content property sets how the browser distributes space between and around content items
 * along the cross-axis of a flexbox container, and the main-axis of a grid container.
 *
 * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content)
 */
export type AlignContentOptions = Globals | Properties['alignSelf'] | Properties['position'] | 'baseline' | 'normal';
export type AlignContent = ResponsiveValue<AlignContentOptions>;

/**
 * The CSS justify-items property defines the default justify-self for all items of the box, giving them all
 * a default way of justifying each box along the appropriate axis.
 *
 * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-items)
 */
export type JustifyItemsOptions =
  | Globals
  | Properties['justifySelf']
  | 'baseline'
  | 'left'
  | 'legacy'
  | 'normal'
  | 'right'
  | 'stretch';
export type JustifyItems = ResponsiveValue<JustifyItemsOptions>;

/**
 * The CSS justify-content property defines how the browser distributes space between and around content items
 * along the main-axis of a flex container, and the inline axis of a grid container.
 *
 * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content)
 */
export type JustifyContentOptions =
  | Globals
  | Properties['justifyContent']
  | Properties['position']
  | 'left'
  | 'normal'
  | 'right';
export type JustifyContent = ResponsiveValue<JustifyContentOptions>;

/**
 * The flex-wrap CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines.
 * If wrapping is allowed, it sets the direction that lines are stacked.
 *
 * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap)
 */
export type FlexWrapOptions = Properties['flexWrap'];
export type FlexWrap = ResponsiveValue<FlexWrapOptions>;

/*
 * TODO: The FlexBasisValue currently really only exists for documentation
 *       purposes, because flex-basis also accepts `Nem` and `Npx` strings.
 *       Not sure there’s a way to still have the union values show up as
 *       auto-completion results.
 */
export type FlexBasisOptions = Properties['flexBasis'];
export type FlexBasis = ResponsiveValue<FlexBasisOptions>;

/**
 * The flex-direction CSS property specifies how flex items are placed in the flex container defining the main
 * axis and the direction (normal or reversed).
 *
 * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction)
 */
export type FlexDirectionOptions = Properties['flexDirection'];
export type FlexDirection = ResponsiveValue<FlexDirectionOptions>;

/**
 * The flex CSS property specifies how a flex item will grow or shrink so as to fit the space available in
 * its flex container. This is a shorthand property that sets flex-grow, flex-shrink, and flex-basis.
 *
 * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/flex)
 */
export type FlexOptions = Properties['flex'];
export type Flex = ResponsiveValue<FlexOptions>;

/**
 * The CSS justify-self property set the way a box is justified inside its alignment container along
 * the appropriate axis.
 *
 * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-self)
 */
export type JustifySelfOptions =
  | Globals
  | Properties['position']
  | 'auto'
  | 'baseline'
  | 'left'
  | 'normal'
  | 'right'
  | 'stretch'
  | string;
export type JustifySelf =
  | ResponsiveValue<Globals | Properties['position'] | 'auto' | 'baseline' | 'left' | 'normal' | 'right' | 'stretch'>
  | ResponsiveValue<string>;

/**
 * The align-self CSS property aligns flex items of the current flex line overriding the align-items value.
 *
 * If any of the item's cross-axis margin is set to auto, then align-self is ignored. In Grid layout align-self
 * aligns the item inside the grid area.
 *
 * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/align-self)
 */
export type AlignSelfOptions = Globals | Properties['position'] | 'auto' | 'baseline' | 'normal' | 'stretch' | string;
export type AlignSelf =
  | ResponsiveValue<Globals | Properties['position'] | 'auto' | 'baseline' | 'normal' | 'stretch'>
  | ResponsiveValue<string>;

/**
 * The order CSS property sets the order to lay out an item in a flex or grid container. Items in a container
 * are sorted by ascending order value and then by their source code order.
 *
 * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/order)
 */
export type OrderOptions = Globals | number;
export type Order = ResponsiveValue<OrderOptions>;

/**
 * The flex-grow CSS property sets the flex grow factor of a flex item main size. It specifies how much of the
 * remaining space in the flex container should be assigned to the item (the flex grow factor).
 *
 * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow)
 */
export type FlexGrowOptions = Globals | number;
export type FlexGrow = ResponsiveValue<FlexGrowOptions>;

/**
 * The flex-shrink CSS property sets the flex shrink factor of a flex item. If the size of all flex items is larger
 * than the flex container, items shrink to fit according to flex-shrink.
 *
 * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink)
 */
export type FlexShrinkOptions = Globals | number;
export type FlexShrink = ResponsiveValue<FlexShrinkOptions>;

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
