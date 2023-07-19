import type {Properties} from 'csstype';
import {type ResponsiveValue} from '@twilio-paste/styling-library';

export type AnimationProperty = Properties['animation'];
export type AppearanceProperty = Properties['appearance'];
export type BoxSizingProperty = Properties['boxSizing'];
export type ClipProperty = Properties['clip']; // 'clip' is deprecated
export type CursorProperty = Properties['cursor'];
export type FloatProperty = Properties['float'];
export type ObjectFitProperty = Properties['objectFit'];
export type ObjectPositionProperty = Properties['objectPosition'];
export type OpacityProperty = ResponsiveValue<Properties['opacity']>;
export type OutlineProperty = Properties['outline'];
export type PointerEventsProperty = Properties['pointerEvents'];
export type ResizeProperty = Properties['resize'];
export type TableLayoutProperty = Properties['tableLayout'];
export type TransformOriginProperty = Properties['transformOrigin'];
export type TransformProperty = Properties['transform'];
export type TransitionProperty = Properties['transition'];
export type TransitionDelayProperty = Properties['transitionDelay'];
export type UserSelectProperty = Properties['userSelect'];
export type VisibilityProperty = Properties['visibility'];
export type WillChangeProperty = Properties['willChange'];
