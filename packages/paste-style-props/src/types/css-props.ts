import { type ResponsiveValue } from "@twilio-paste/styling-library";
import type { Properties } from "csstype";

export type AnimationProperty = Properties["animation"];
export type AppearanceProperty = Properties["appearance"];
export type BoxSizingProperty = Properties["boxSizing"];
export type ClipProperty = Properties["clip"]; // 'clip' is deprecated
export type CursorProperty = Properties["cursor"];
export type FloatProperty = Properties["float"];
export type ObjectFitProperty = Properties["objectFit"];
export type ObjectPositionProperty = Properties["objectPosition"];
export type OpacityProperty = Properties["opacity"];
export type OutlineProperty = Properties["outline"];
export type PointerEventsProperty = Properties["pointerEvents"];
export type ResizeProperty = Properties["resize"];
export type TableLayoutProperty = Properties["tableLayout"];
export type TransformOriginProperty = Properties["transformOrigin"];
export type TransformProperty = Properties["transform"];
export type TransitionProperty = Properties["transition"];
export type TransitionDelayProperty = Properties["transitionDelay"];
export type UserSelectProperty = Properties["userSelect"];
export type VisibilityProperty = Properties["visibility"];
export type WillChangeProperty = Properties["willChange"];

export type Animation = ResponsiveValue<AnimationProperty>;
export type Appearance = ResponsiveValue<AppearanceProperty>;
export type BoxSizing = ResponsiveValue<BoxSizingProperty>;
export type Clip = ResponsiveValue<ClipProperty>;
export type Cursor = ResponsiveValue<CursorProperty>;
export type Float = ResponsiveValue<FloatProperty>;
export type ObjectFit = ResponsiveValue<ObjectFitProperty>;
export type ObjectPosition = ResponsiveValue<ObjectPositionProperty>;
export type Opacity = ResponsiveValue<OpacityProperty>;
export type Outline = ResponsiveValue<OutlineProperty>;
export type PointerEvents = ResponsiveValue<PointerEventsProperty>;
export type Resize = ResponsiveValue<ResizeProperty>;
export type TableLayout = ResponsiveValue<TableLayoutProperty>;
export type TransformOrigin = ResponsiveValue<TransformOriginProperty>;
export type Transform = ResponsiveValue<TransformProperty>;
export type Transition = ResponsiveValue<TransitionProperty>;
export type TransitionDelay = ResponsiveValue<TransitionDelayProperty>;
export type UserSelect = ResponsiveValue<UserSelectProperty>;
export type Visibility = ResponsiveValue<VisibilityProperty>;
export type WillChange = ResponsiveValue<WillChangeProperty>;

export type CSSProps = {
  /**
   * Responsive style prop for the CSS `animation` property
   *
   * @type {Animation}
   */
  animation?: Animation;
  /**
   * Responsive style prop for the CSS `appearance` property
   *
   * @type {Appearance}
   */
  appearance?: Appearance;
  /**
   * Responsive style prop for the CSS `box-sizing` property
   *
   * @type {BoxSizing}
   */
  boxSizing?: BoxSizing;
  /**
   * Responsive style prop for the CSS `clip` property
   *
   * @type {Clip}
   */
  clip?: Clip;
  /**
   * Style prop for the CSS `content` property
   *
   * @type {string}
   */
  content?: string;
  /**
   * Responsive style prop for the CSS `cursor` property
   *
   * @type {Cursor}
   */
  cursor?: Cursor;
  /**
   * Responsive style prop for the CSS `float` property
   *
   * @type {Float}
   */
  float?: Float;
  /**
   * Responsive style prop for the CSS `object-fit` property
   *
   * @type {ObjectFit}
   */
  objectFit?: ObjectFit;
  /**
   * Responsive style prop for the CSS `object-position` property
   *
   * @type {ObjectPosition}
   */
  objectPosition?: ObjectPosition;
  /**
   * Responsive style prop for the CSS `opacity` property
   *
   * @type {Opacity}
   */
  opacity?: Opacity;
  /**
   * Responsive style prop for the CSS `outline` property
   *
   * @type {Outline}
   */
  outline?: Outline;
  /**
   * Responsive style prop for the CSS `pointer-events` property
   *
   * @type {PointerEvents}
   */
  pointerEvents?: PointerEvents;
  /**
   * Responsive style prop for the CSS `resize` property
   *
   * @type {Resize}
   */
  resize?: Resize;
  /**
   * Responsive style prop for the CSS `table-layout` property
   *
   * @type {TableLayout}
   */
  tableLayout?: TableLayout;
  /**
   * Responsive style prop for the CSS `transform` property
   *
   * @type {Transform}
   */
  transform?: Transform;
  /**
   * Responsive style prop for the CSS `transform-origin` property
   *
   * @type {TransformOrigin}
   */
  transformOrigin?: TransformOrigin;
  /**
   * Responsive style prop for the CSS `transition` property
   *
   * @type {Transition}
   */
  transition?: Transition;
  /**
   * Responsive style prop for the CSS `transition-delay` property
   *
   * @type {TransitionDelay}
   */
  transitionDelay?: TransitionDelay;
  /**
   * Responsive style prop for the CSS `user-select` property
   *
   * @type {UserSelect}
   */
  userSelect?: UserSelect;
  /**
   * Responsive style prop for the CSS `visibility` property
   *
   * @type {Visibility}
   */
  visibility?: Visibility;
  /**
   * Responsive style prop for the CSS `will-change` property
   *
   * @type {WillChange}
   */
  willChange?: WillChange;
  /**
   * Style prop for the CSS `-webkit-text-fill-color` property
   *
   * @type {string}
   */
  "-webkit-text-fill-color"?: string;
  /**
   * Style prop for the CSS `-webkit-opacity` property
   *
   * @type {string}
   */
  "-webkit-opacity"?: string;
};
