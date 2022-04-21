import * as React from 'react';
import {styled} from '@twilio-paste/styling-library';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxElementProps} from '@twilio-paste/box';
import type {LayoutProps, BorderRadiusProps} from '@twilio-paste/style-props';
import {SkeletonLoaderKeyframes} from './keyframes';

const SkeletonLoaderInner = styled.div({
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  background:
    'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4) 40%, rgba(255, 255, 255, 0.4) 60%, transparent)',
  animationTimingFunction: 'cubic-bezier(.06,.42,.57,.89)',
  animationName: SkeletonLoaderKeyframes,
  animationDuration: '4.5s',
  animationIterationCount: 'infinite',
});
export interface SkeletonLoaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Pick<BoxElementProps, 'element'>,
    Omit<LayoutProps, 'verticalAlign'>,
    BorderRadiusProps {}

const SkeletonLoader = React.forwardRef<HTMLDivElement, SkeletonLoaderProps>(
  (
    {
      borderBottomLeftRadius,
      borderBottomRightRadius,
      borderRadius = 'borderRadius20',
      borderTopLeftRadius,
      borderTopRightRadius,
      element = 'SKELETON_LOADER',
      display,
      height = 'sizeIcon20',
      maxHeight,
      maxWidth,
      minHeight,
      minWidth,
      size = null,
      width = null,
      ...props
    },
    ref
  ) => {
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        aria-busy="true"
        backgroundColor="colorBackgroundStrong"
        borderBottomLeftRadius={borderBottomLeftRadius}
        borderBottomRightRadius={borderBottomRightRadius}
        borderRadius={borderRadius}
        borderTopLeftRadius={borderTopLeftRadius}
        borderTopRightRadius={borderTopRightRadius}
        display={display}
        element={element}
        height={height}
        maxHeight={maxHeight}
        maxWidth={maxWidth}
        minHeight={minHeight}
        minWidth={minWidth}
        overflow="hidden"
        pointerEvents="none"
        position="relative"
        userSelect="none"
        size={size}
        width={width}
        ref={ref}
      >
        <SkeletonLoaderInner />
      </Box>
    );
  }
);

SkeletonLoader.displayName = 'SkeletonLoader';

export {SkeletonLoader};
