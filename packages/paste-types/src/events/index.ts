/**
 * This file is copy pasted from the react.d.ts file
 *
 */

import {
  ReactEventHandler,
  CompositionEventHandler,
  ClipboardEventHandler,
  DragEventHandler,
  FocusEventHandler,
  FormEventHandler,
  KeyboardEventHandler,
  MouseEventHandler,
  TouchEventHandler,
  PointerEventHandler,
  UIEventHandler,
  WheelEventHandler,
  AnimationEventHandler,
  TransitionEventHandler,
} from 'react';

export interface ClipboardEvents {
  onCopy?: ClipboardEventHandler;
  onCopyCapture?: ClipboardEventHandler;
  onCut?: ClipboardEventHandler;
  onCutCapture?: ClipboardEventHandler;
  onPaste?: ClipboardEventHandler;
  onPasteCapture?: ClipboardEventHandler;
}

export interface CompositionEvents {
  onCompositionEnd?: CompositionEventHandler;
  onCompositionEndCapture?: CompositionEventHandler;
  onCompositionStart?: CompositionEventHandler;
  onCompositionStartCapture?: CompositionEventHandler;
  onCompositionUpdate?: CompositionEventHandler;
  onCompositionUpdateCapture?: CompositionEventHandler;
}

export interface FocusEvents {
  onFocus?: FocusEventHandler;
  onFocusCapture?: FocusEventHandler;
  onBlur?: FocusEventHandler;
  onBlurCapture?: FocusEventHandler;
}

export interface FormEvents {
  onChange?: FormEventHandler;
  onChangeCapture?: FormEventHandler;
  onBeforeInput?: FormEventHandler;
  onBeforeInputCapture?: FormEventHandler;
  onInput?: FormEventHandler;
  onInputCapture?: FormEventHandler;
  onReset?: FormEventHandler;
  onResetCapture?: FormEventHandler;
  onSubmit?: FormEventHandler;
  onSubmitCapture?: FormEventHandler;
  onInvalid?: FormEventHandler;
  onInvalidCapture?: FormEventHandler;
}

export interface ImageEvents {
  onLoad?: ReactEventHandler;
  onLoadCapture?: ReactEventHandler;
  onError?: ReactEventHandler; // also a Media Event
  onErrorCapture?: ReactEventHandler; // also a Media Event
}

export interface KeyboardEvents {
  onKeyDown?: KeyboardEventHandler;
  onKeyDownCapture?: KeyboardEventHandler;
  onKeyPress?: KeyboardEventHandler;
  onKeyPressCapture?: KeyboardEventHandler;
  onKeyUp?: KeyboardEventHandler;
  onKeyUpCapture?: KeyboardEventHandler;
}

export interface MediaEvents {
  onAbort?: ReactEventHandler;
  onAbortCapture?: ReactEventHandler;
  onCanPlay?: ReactEventHandler;
  onCanPlayCapture?: ReactEventHandler;
  onCanPlayThrough?: ReactEventHandler;
  onCanPlayThroughCapture?: ReactEventHandler;
  onDurationChange?: ReactEventHandler;
  onDurationChangeCapture?: ReactEventHandler;
  onEmptied?: ReactEventHandler;
  onEmptiedCapture?: ReactEventHandler;
  onEncrypted?: ReactEventHandler;
  onEncryptedCapture?: ReactEventHandler;
  onEnded?: ReactEventHandler;
  onEndedCapture?: ReactEventHandler;
  onLoadedData?: ReactEventHandler;
  onLoadedDataCapture?: ReactEventHandler;
  onLoadedMetadata?: ReactEventHandler;
  onLoadedMetadataCapture?: ReactEventHandler;
  onLoadStart?: ReactEventHandler;
  onLoadStartCapture?: ReactEventHandler;
  onPause?: ReactEventHandler;
  onPauseCapture?: ReactEventHandler;
  onPlay?: ReactEventHandler;
  onPlayCapture?: ReactEventHandler;
  onPlaying?: ReactEventHandler;
  onPlayingCapture?: ReactEventHandler;
  onProgress?: ReactEventHandler;
  onProgressCapture?: ReactEventHandler;
  onRateChange?: ReactEventHandler;
  onRateChangeCapture?: ReactEventHandler;
  onSeeked?: ReactEventHandler;
  onSeekedCapture?: ReactEventHandler;
  onSeeking?: ReactEventHandler;
  onSeekingCapture?: ReactEventHandler;
  onStalled?: ReactEventHandler;
  onStalledCapture?: ReactEventHandler;
  onSuspend?: ReactEventHandler;
  onSuspendCapture?: ReactEventHandler;
  onTimeUpdate?: ReactEventHandler;
  onTimeUpdateCapture?: ReactEventHandler;
  onVolumeChange?: ReactEventHandler;
  onVolumeChangeCapture?: ReactEventHandler;
  onWaiting?: ReactEventHandler;
  onWaitingCapture?: ReactEventHandler;
}

export interface MouseEvents {
  onAuxClick?: MouseEventHandler;
  onAuxClickCapture?: MouseEventHandler;
  onClick?: MouseEventHandler;
  onClickCapture?: MouseEventHandler;
  onContextMenu?: MouseEventHandler;
  onContextMenuCapture?: MouseEventHandler;
  onDoubleClick?: MouseEventHandler;
  onDoubleClickCapture?: MouseEventHandler;
  onDrag?: DragEventHandler;
  onDragCapture?: DragEventHandler;
  onDragEnd?: DragEventHandler;
  onDragEndCapture?: DragEventHandler;
  onDragEnter?: DragEventHandler;
  onDragEnterCapture?: DragEventHandler;
  onDragExit?: DragEventHandler;
  onDragExitCapture?: DragEventHandler;
  onDragLeave?: DragEventHandler;
  onDragLeaveCapture?: DragEventHandler;
  onDragOver?: DragEventHandler;
  onDragOverCapture?: DragEventHandler;
  onDragStart?: DragEventHandler;
  onDragStartCapture?: DragEventHandler;
  onDrop?: DragEventHandler;
  onDropCapture?: DragEventHandler;
  onMouseDown?: MouseEventHandler;
  onMouseDownCapture?: MouseEventHandler;
  onMouseEnter?: MouseEventHandler;
  onMouseLeave?: MouseEventHandler;
  onMouseMove?: MouseEventHandler;
  onMouseMoveCapture?: MouseEventHandler;
  onMouseOut?: MouseEventHandler;
  onMouseOutCapture?: MouseEventHandler;
  onMouseOver?: MouseEventHandler;
  onMouseOverCapture?: MouseEventHandler;
  onMouseUp?: MouseEventHandler;
  onMouseUpCapture?: MouseEventHandler;
}

export interface SelectionEvents {
  onSelect?: ReactEventHandler;
  onSelectCapture?: ReactEventHandler;
}

export interface TouchEvents {
  onTouchCancel?: TouchEventHandler;
  onTouchCancelCapture?: TouchEventHandler;
  onTouchEnd?: TouchEventHandler;
  onTouchEndCapture?: TouchEventHandler;
  onTouchMove?: TouchEventHandler;
  onTouchMoveCapture?: TouchEventHandler;
  onTouchStart?: TouchEventHandler;
  onTouchStartCapture?: TouchEventHandler;
}

export interface PointerEvents {
  onPointerDown?: PointerEventHandler;
  onPointerDownCapture?: PointerEventHandler;
  onPointerMove?: PointerEventHandler;
  onPointerMoveCapture?: PointerEventHandler;
  onPointerUp?: PointerEventHandler;
  onPointerUpCapture?: PointerEventHandler;
  onPointerCancel?: PointerEventHandler;
  onPointerCancelCapture?: PointerEventHandler;
  onPointerEnter?: PointerEventHandler;
  onPointerEnterCapture?: PointerEventHandler;
  onPointerLeave?: PointerEventHandler;
  onPointerLeaveCapture?: PointerEventHandler;
  onPointerOver?: PointerEventHandler;
  onPointerOverCapture?: PointerEventHandler;
  onPointerOut?: PointerEventHandler;
  onPointerOutCapture?: PointerEventHandler;
  onGotPointerCapture?: PointerEventHandler;
  onGotPointerCaptureCapture?: PointerEventHandler;
  onLostPointerCapture?: PointerEventHandler;
  onLostPointerCaptureCapture?: PointerEventHandler;
}

export interface UiEvents {
  onScroll?: UIEventHandler;
  onScrollCapture?: UIEventHandler;
}

export interface WheelEvents {
  onWheel?: WheelEventHandler;
  onWheelCapture?: WheelEventHandler;
}

export interface AnimationEvents {
  onAnimationStart?: AnimationEventHandler;
  onAnimationStartCapture?: AnimationEventHandler;
  onAnimationEnd?: AnimationEventHandler;
  onAnimationEndCapture?: AnimationEventHandler;
  onAnimationIteration?: AnimationEventHandler;
  onAnimationIterationCapture?: AnimationEventHandler;
}

export interface TransitionEvents {
  onTransitionEnd?: TransitionEventHandler;
  onTransitionEndCapture?: TransitionEventHandler;
}

export interface DOMEvents
  extends ClipboardEvents,
    CompositionEvents,
    FocusEvents,
    FormEvents,
    ImageEvents,
    KeyboardEvents,
    MediaEvents,
    MouseEvents,
    SelectionEvents,
    TouchEvents,
    PointerEvents,
    UiEvents,
    WheelEvents,
    AnimationEvents,
    TransitionEvents {}
